import React, { Component } from 'react';
import { ActivityIndicator, Dimensions, Platform, View } from 'react-native';
import Carousel from 'react-native-carousel-view';
import { VictoryPie } from 'victory-native';

import styles from './styles';

import theme from '@theme/variables/fanEngagement';
import { Container, Content, Text, Footer, Button } from 'native-base';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default class CoachAnalyticsResult extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    return fetch(
      'https://ah7ye2r9sq6vwnbu-fan-connectivity.cfapps.eu10.hana.ondemand.com/rest/player/analytic/read/Entity.xsjs'
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson,
          },
          function() {}
        );
        console.log(responseJson);
      })
      .catch(error => {
        console.error(error);
      });
  }

  coachPieChart = () => {
    let obj = this.state.dataSource.PopUpAnalytics.CoachHeader;
    let arr = [];
    let diff = 100 - obj.Percentage;
    let body = {
      x: obj.Percentage + '%',
      y: parseInt(obj.Percentage),
    };
    let body2 = {
      x: diff + '%',
      y: diff,
    };
    arr.push(body);
    arr.push(body2);

    return arr;
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <Container>
        <Content>
          <Carousel
            width={deviceWidth}
            height={deviceHeight}
            loop={false}
            indicatorAtBottom
            indicatorOffset={deviceHeight / 3}
            indicatorSize={Platform.OS === 'android' ? 15 : 10}
            indicatorColor={theme.brandPrimary}
            animate={false}>
            <View style={styles.slides}>
              <Text style={styles.chartTitle}>
                {this.state.dataSource.PopUpAnalytics.CoachHeader.QuestionText}
              </Text>
              <Text style={styles.chartSecondTitle}>
                {this.state.dataSource.PopUpAnalytics.CoachHeader.AnswerText}
              </Text>
              <VictoryPie
                data={this.coachPieChart()}
                colorScale={['tomato', 'orange', 'gold', 'cyan', 'navy']}
              />
            </View>
          </Carousel>
        </Content>
        <Footer>
          <Button
            large
            primary
            block
            style={styles.skipBtn}
            onPress={() => this.props.navigation.navigate('Drawer')}>
            <Text> Done </Text>
          </Button>
        </Footer>
      </Container>
    );
  }
}
