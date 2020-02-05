import React, { Component } from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Platform,
  ScrollView,
  View,
} from 'react-native';
import Carousel from 'react-native-carousel-view';

import styles from './styles';

import theme from '@theme/variables/fanEngagement';
import { Container, Content, Text, Footer, Button } from 'native-base';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default class BestElevenAnalyticsResult extends Component {
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
              <Text style={styles.chartTitle}>Best Eleven of The Match</Text>
              <ScrollView>
                <Text style={styles.chartLineUpTitle}>GoalKeeper</Text>
                <Text style={styles.chartSecondTitle}>
                  {this.state.dataSource.BestEleven.GoalKeeper.NAME}
                  (%
                  {
                    this.state.dataSource.BestEleven.GoalKeeper
                      .VALUE_AS_PERCENTAGE
                  }
                  )
                </Text>
                <Text style={styles.chartLineUpTitle}>Defence</Text>
                <Text style={styles.chartSecondTitle}>
                  {this.state.dataSource.BestEleven.Defence[0].NAME}
                  (%
                  {
                    this.state.dataSource.BestEleven.Defence[0]
                      .VALUE_AS_PERCENTAGE
                  }
                  )
                </Text>
                <Text style={styles.chartSecondTitle}>
                  {this.state.dataSource.BestEleven.Defence[1].NAME}
                  (%
                  {
                    this.state.dataSource.BestEleven.Defence[1]
                      .VALUE_AS_PERCENTAGE
                  }
                  )
                </Text>
                <Text style={styles.chartSecondTitle}>
                  {this.state.dataSource.BestEleven.Defence[2].NAME}
                  (%
                  {
                    this.state.dataSource.BestEleven.Defence[2]
                      .VALUE_AS_PERCENTAGE
                  }
                  )
                </Text>
                <Text style={styles.chartSecondTitle}>
                  {this.state.dataSource.BestEleven.Defence[3].NAME}
                  (%
                  {
                    this.state.dataSource.BestEleven.Defence[3]
                      .VALUE_AS_PERCENTAGE
                  }
                  )
                </Text>
                <Text style={styles.chartLineUpTitle}>Midfielders</Text>
                <Text style={styles.chartSecondTitle}>
                  {this.state.dataSource.BestEleven.Midfield[0].NAME}
                  (%
                  {
                    this.state.dataSource.BestEleven.Midfield[0]
                      .VALUE_AS_PERCENTAGE
                  }
                  )
                </Text>
                <Text style={styles.chartSecondTitle}>
                  {this.state.dataSource.BestEleven.Midfield[1].NAME}
                  (%
                  {
                    this.state.dataSource.BestEleven.Midfield[1]
                      .VALUE_AS_PERCENTAGE
                  }
                  )
                </Text>
                <Text style={styles.chartSecondTitle}>
                  {this.state.dataSource.BestEleven.Midfield[2].NAME}
                  (%
                  {
                    this.state.dataSource.BestEleven.Midfield[2]
                      .VALUE_AS_PERCENTAGE
                  }
                  )
                </Text>
                <Text style={styles.chartSecondTitle}>
                  {this.state.dataSource.BestEleven.Midfield[3].NAME}
                  (%
                  {
                    this.state.dataSource.BestEleven.Midfield[3]
                      .VALUE_AS_PERCENTAGE
                  }
                  )
                </Text>
                <Text style={styles.chartLineUpTitle}>Forward</Text>
                <Text style={styles.chartSecondTitle}>
                  {this.state.dataSource.BestEleven.Forward[0].NAME}
                  (%
                  {
                    this.state.dataSource.BestEleven.Forward[0]
                      .VALUE_AS_PERCENTAGE
                  }
                  )
                </Text>
                <Text style={styles.chartSecondTitle}>
                  {this.state.dataSource.BestEleven.Forward[1].NAME}
                  (%
                  {
                    this.state.dataSource.BestEleven.Forward[1]
                      .VALUE_AS_PERCENTAGE
                  }
                  )
                </Text>
              </ScrollView>
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
