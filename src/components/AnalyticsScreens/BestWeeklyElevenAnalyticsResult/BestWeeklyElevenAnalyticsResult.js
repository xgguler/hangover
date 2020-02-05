import React, { Component } from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Platform,
  ScrollView,
} from 'react-native';
import Carousel from 'react-native-carousel-view';

import styles from './styles';

import theme from '@theme/variables/fanEngagement';
import { Container, Content, Text, Footer, Button, View } from 'native-base';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default class BestWeeklyElevenAnalyticsResult extends Component {
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
          <View style={styles.emptyContainer}>
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
                <Text style={styles.chartTitle}>Best Eleven of The Week</Text>
                <ScrollView>
                  <Text style={styles.chartLineUpTitle}>GoalKeeper</Text>
                  <Text style={styles.chartSecondTitle}>
                    {
                      this.state.dataSource.BestElevenWeekly.EnİyiOyuncu.Kaleci
                        .NAME
                    }
                    (%
                    {
                      this.state.dataSource.BestElevenWeekly.EnİyiOyuncu.Kaleci
                        .VALUE_AS_PERCENTAGE
                    }
                    )
                  </Text>
                  <Text style={styles.chartLineUpTitle}>Right Back</Text>
                  <Text style={styles.chartSecondTitle}>
                    {
                      this.state.dataSource.BestElevenWeekly.EnİyiOyuncu.SagBek
                        .NAME
                    }
                    (%
                    {
                      this.state.dataSource.BestElevenWeekly.EnİyiOyuncu.SagBek
                        .VALUE_AS_PERCENTAGE
                    }
                    )
                  </Text>
                  <Text style={styles.chartLineUpTitle}>Left Back</Text>
                  <Text style={styles.chartSecondTitle}>
                    {
                      this.state.dataSource.BestElevenWeekly.EnİyiOyuncu.SolBek
                        .NAME
                    }
                    (%
                    {
                      this.state.dataSource.BestElevenWeekly.EnİyiOyuncu.SolBek
                        .VALUE_AS_PERCENTAGE
                    }
                    )
                  </Text>
                  <Text style={styles.chartLineUpTitle}>
                    Centre Back(Right)
                  </Text>
                  <Text style={styles.chartSecondTitle}>
                    {
                      this.state.dataSource.BestElevenWeekly.EnİyiOyuncu.Defans
                        .NAME
                    }
                    (%
                    {
                      this.state.dataSource.BestElevenWeekly.EnİyiOyuncu.Defans
                        .VALUE_AS_PERCENTAGE
                    }
                    )
                  </Text>
                  <Text style={styles.chartLineUpTitle}>Centre Back(Left)</Text>
                  <Text style={styles.chartSecondTitle}>
                    {
                      this.state.dataSource.BestElevenWeekly.EnİyiOyuncu.Defans1
                        .NAME
                    }
                    (%
                    {
                      this.state.dataSource.BestElevenWeekly.EnİyiOyuncu.Defans1
                        .VALUE_AS_PERCENTAGE
                    }
                    )
                  </Text>
                  <Text style={styles.chartLineUpTitle}>
                    Defensive Midfielder
                  </Text>
                  <Text style={styles.chartSecondTitle}>
                    {
                      this.state.dataSource.BestElevenWeekly.EnİyiOyuncu
                        .OrtaSaha.NAME
                    }
                    (%
                    {
                      this.state.dataSource.BestElevenWeekly.EnİyiOyuncu
                        .OrtaSaha.VALUE_AS_PERCENTAGE
                    }
                    )
                  </Text>
                  <Text style={styles.chartLineUpTitle}>
                    Central Midfielder
                  </Text>
                  <Text style={styles.chartSecondTitle}>
                    {
                      this.state.dataSource.BestElevenWeekly.EnİyiOyuncu
                        .OrtaSaha1.NAME
                    }
                    (%
                    {
                      this.state.dataSource.BestElevenWeekly.EnİyiOyuncu
                        .OrtaSaha1.VALUE_AS_PERCENTAGE
                    }
                    )
                  </Text>
                  <Text style={styles.chartLineUpTitle}>
                    Offensive Midfielder
                  </Text>
                  <Text style={styles.chartSecondTitle}>
                    {
                      this.state.dataSource.BestElevenWeekly.EnİyiOyuncu
                        .OrtaSaha2.NAME
                    }
                    (%
                    {
                      this.state.dataSource.BestElevenWeekly.EnİyiOyuncu
                        .OrtaSaha2.VALUE_AS_PERCENTAGE
                    }
                    )
                  </Text>
                  <Text style={styles.chartLineUpTitle}>Right Winger</Text>
                  <Text style={styles.chartSecondTitle}>
                    {
                      this.state.dataSource.BestElevenWeekly.EnİyiOyuncu.SagAcik
                        .NAME
                    }
                    (%
                    {
                      this.state.dataSource.BestElevenWeekly.EnİyiOyuncu.SagAcik
                        .VALUE_AS_PERCENTAGE
                    }
                    )
                  </Text>
                  <Text style={styles.chartLineUpTitle}>Left Winger</Text>
                  <Text style={styles.chartSecondTitle}>
                    {
                      this.state.dataSource.BestElevenWeekly.EnİyiOyuncu.SolAcik
                        .NAME
                    }
                    (%
                    {
                      this.state.dataSource.BestElevenWeekly.EnİyiOyuncu.SolAcik
                        .VALUE_AS_PERCENTAGE
                    }
                    )
                  </Text>
                  <Text style={styles.chartLineUpTitle}>Forward</Text>
                  <Text style={styles.chartSecondTitle}>
                    {
                      this.state.dataSource.BestElevenWeekly.EnİyiOyuncu.Forward
                        .NAME
                    }
                    (%
                    {
                      this.state.dataSource.BestElevenWeekly.EnİyiOyuncu.Forward
                        .VALUE_AS_PERCENTAGE
                    }
                    )
                  </Text>
                </ScrollView>
              </View>
            </Carousel>
          </View>
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
