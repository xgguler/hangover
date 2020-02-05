import React from 'react';
import PropTypes from 'prop-types';
import {
  Platform,
  Dimensions,
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  Image,
} from 'react-native';
import Carousel from 'react-native-carousel-view';
import { VictoryPie } from 'victory-native';
import PieChart from '@components/Charts/PieChart';
import GaugeChart from '@components/Charts/GaugeChart';

import styles from './styles';

import theme from '@theme/variables/fanEngagement';
import { Col, Grid, Row } from 'react-native-easy-grid';
import { Footer } from 'native-base';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export class AnalyticsCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };
  }

  static propTypes = {
    analytics: PropTypes.object,
    navigation: PropTypes.any,
  };

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

  /*
  fetch the analytics data from posted data and map into obj array.
  get the related datas and push into obj array.
  lastly return the array.
   */
  getAnalyticsDataForPieChart = formatLabel =>
    this.props.analytics.TEAM_DIVERSITY_DAILY.map(obj => {
      label = formatLabel
        ? obj.TEAM + '\n(' + obj.ACCURACY + '%)'
        : obj.TEAM + '(' + obj.ACCURACY + '%)';
      return {
        x: obj.TEAM,
        y: parseInt(obj.ACCURACY),
        label: label,
      };
    });

  /*
  fetch the analytics data from posted data and map into obj array.
  get the related datas and push into obj array.
  lastly return the array.
   */
  getAnalyticsDataForGaugeChart = formatLabel =>
    this.props.analytics.QUESTION_DIVERSITY_DAILY.map(obj => {
      label = formatLabel
        ? obj.ACCURACY + '\n(' + obj.TEXT + '%)'
        : obj.ACCURACY + '(' + obj.TEXT + '%)';
      return {
        x: parseInt(obj.ACCURACY),
        y: obj.TEXT,
        label: label,
      };
    });

  bestPlayerPieChart = () => {
    let obj = this.state.dataSource.BestPlayer;
    let arr = [];
    let diff = 100 - 56;
    let body = {
      x: 56 + '%',
      y: 56,
    };
    let body2 = {
      x: diff + '%',
      y: diff,
    };
    arr.push(body);
    arr.push(body2);

    return arr;
  };

  varPieChart = () => {
    let obj = this.state.dataSource.PopUpAnalytics.VarHeader;
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

  varDecisionPieChart = () => {
    let obj = this.state.dataSource.PopUpAnalytics.DecisionHeader;
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

  goalPieChart = () => {
    let obj = this.state.dataSource.PopUpAnalytics.GoalHeader;
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

  // return a view that contains pie and gauge chart in a carousel
  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    let gaugeData = this.getAnalyticsDataForGaugeChart(true);
    let gaugePercent = gaugeData[0].x;
    let gaugeText = gaugeData[0].y;

    return (
      <View>
        <Carousel
          width={deviceWidth}
          height={deviceHeight}
          loop={false}
          hideIndicators={true}
          indicatorAtBottom
          indicatorOffset={deviceHeight / 3}
          indicatorSize={Platform.OS === 'android' ? 15 : 10}
          indicatorColor={theme.brandPrimary}
          animate={false}>
          <View pointerEvents="none" style={styles.slides}>
            <Text style={styles.chartTitle}>Team Diversity</Text>
            <Text style={styles.chartSecondTitle}>Fan Scores</Text>
            <PieChart data={this.getAnalyticsDataForPieChart(true)} />
          </View>
          <View pointerEvents="none" style={styles.slides}>
            <Text style={styles.chartTitle}>Best Known Question</Text>
            <Text style={styles.chartSecondTitle}>{gaugeText}</Text>
            <GaugeChart percent={gaugePercent} />
          </View>
          <View style={styles.slides}>
            <Text style={styles.chartTitle}>
              Mostly Selected Players of Beşiktaş
            </Text>
            <ScrollView>
              <Text style={styles.chartLineUpTitle}>GoalKeeper</Text>
              <Text style={styles.chartSecondTitle}>
                {this.state.dataSource.MostlySelectedBjkPlayers.GoalKeeper.NAME}
                (%
                {
                  this.state.dataSource.MostlySelectedBjkPlayers.GoalKeeper
                    .VALUE_AS_PERCENTAGE
                }
                )
              </Text>
              <Text style={styles.chartLineUpTitle}>Defence</Text>
              <Text style={styles.chartSecondTitle}>
                {this.state.dataSource.MostlySelectedBjkPlayers.Defence[0].NAME}
                (%
                {
                  this.state.dataSource.MostlySelectedBjkPlayers.Defence[0]
                    .VALUE_AS_PERCENTAGE
                }
                )
              </Text>
              <Text style={styles.chartSecondTitle}>
                {this.state.dataSource.MostlySelectedBjkPlayers.Defence[1].NAME}
                (%
                {
                  this.state.dataSource.MostlySelectedBjkPlayers.Defence[1]
                    .VALUE_AS_PERCENTAGE
                }
                )
              </Text>
              <Text style={styles.chartSecondTitle}>
                {this.state.dataSource.MostlySelectedBjkPlayers.Defence[2].NAME}
                (%
                {
                  this.state.dataSource.MostlySelectedBjkPlayers.Defence[2]
                    .VALUE_AS_PERCENTAGE
                }
                )
              </Text>
              <Text style={styles.chartSecondTitle}>
                {this.state.dataSource.MostlySelectedBjkPlayers.Defence[3].NAME}
                (%
                {
                  this.state.dataSource.MostlySelectedBjkPlayers.Defence[3]
                    .VALUE_AS_PERCENTAGE
                }
                )
              </Text>
              <Text style={styles.chartLineUpTitle}>Midfielders</Text>
              <Text style={styles.chartSecondTitle}>
                {
                  this.state.dataSource.MostlySelectedBjkPlayers.Midfield[0]
                    .NAME
                }
                (%
                {
                  this.state.dataSource.MostlySelectedBjkPlayers.Midfield[0]
                    .VALUE_AS_PERCENTAGE
                }
                )
              </Text>
              <Text style={styles.chartSecondTitle}>
                {
                  this.state.dataSource.MostlySelectedBjkPlayers.Midfield[1]
                    .NAME
                }
                (%
                {
                  this.state.dataSource.MostlySelectedBjkPlayers.Midfield[1]
                    .VALUE_AS_PERCENTAGE
                }
                )
              </Text>
              <Text style={styles.chartSecondTitle}>
                {
                  this.state.dataSource.MostlySelectedBjkPlayers.Midfield[2]
                    .NAME
                }
                (%
                {
                  this.state.dataSource.MostlySelectedBjkPlayers.Midfield[2]
                    .VALUE_AS_PERCENTAGE
                }
                )
              </Text>
              <Text style={styles.chartSecondTitle}>
                {
                  this.state.dataSource.MostlySelectedBjkPlayers.Midfield[3]
                    .NAME
                }
                (%
                {
                  this.state.dataSource.MostlySelectedBjkPlayers.Midfield[3]
                    .VALUE_AS_PERCENTAGE
                }
                )
              </Text>
              <Text style={styles.chartLineUpTitle}>Forward</Text>
              <Text style={styles.chartSecondTitle}>
                {this.state.dataSource.MostlySelectedBjkPlayers.Forward[0].NAME}
                (%
                {
                  this.state.dataSource.MostlySelectedBjkPlayers.Forward[0]
                    .VALUE_AS_PERCENTAGE
                }
                )
              </Text>
              <Text style={styles.chartSecondTitle}>
                {this.state.dataSource.MostlySelectedBjkPlayers.Forward[1].NAME}
                (%
                {
                  this.state.dataSource.MostlySelectedBjkPlayers.Forward[1]
                    .VALUE_AS_PERCENTAGE
                }
                )
              </Text>
            </ScrollView>
          </View>
          <View style={styles.slides}>
            <Text style={styles.chartTitle}>
              Mostly Selected Players of Fenerbahçe
            </Text>
            <ScrollView>
              <Text style={styles.chartLineUpTitle}>GoalKeeper</Text>
              <Text style={styles.chartSecondTitle}>
                {this.state.dataSource.MostlySelectedFbPlayers.GoalKeeper.NAME}
                (%
                {
                  this.state.dataSource.MostlySelectedFbPlayers.GoalKeeper
                    .VALUE_AS_PERCENTAGE
                }
                )
              </Text>
              <Text style={styles.chartLineUpTitle}>Defence</Text>
              <Text style={styles.chartSecondTitle}>
                {this.state.dataSource.MostlySelectedFbPlayers.Defence[0].NAME}
                (%
                {
                  this.state.dataSource.MostlySelectedFbPlayers.Defence[0]
                    .VALUE_AS_PERCENTAGE
                }
                )
              </Text>
              <Text style={styles.chartSecondTitle}>
                {this.state.dataSource.MostlySelectedFbPlayers.Defence[1].NAME}
                (%
                {
                  this.state.dataSource.MostlySelectedFbPlayers.Defence[1]
                    .VALUE_AS_PERCENTAGE
                }
                )
              </Text>
              <Text style={styles.chartSecondTitle}>
                {this.state.dataSource.MostlySelectedFbPlayers.Defence[2].NAME}
                (%
                {
                  this.state.dataSource.MostlySelectedFbPlayers.Defence[2]
                    .VALUE_AS_PERCENTAGE
                }
                )
              </Text>
              <Text style={styles.chartSecondTitle}>
                {this.state.dataSource.MostlySelectedFbPlayers.Defence[3].NAME}
                (%
                {
                  this.state.dataSource.MostlySelectedFbPlayers.Defence[3]
                    .VALUE_AS_PERCENTAGE
                }
                )
              </Text>
              <Text style={styles.chartLineUpTitle}>Midfielders</Text>
              <Text style={styles.chartSecondTitle}>
                {this.state.dataSource.MostlySelectedFbPlayers.Midfield[0].NAME}
                (%
                {
                  this.state.dataSource.MostlySelectedFbPlayers.Midfield[0]
                    .VALUE_AS_PERCENTAGE
                }
                )
              </Text>
              <Text style={styles.chartSecondTitle}>
                {this.state.dataSource.MostlySelectedFbPlayers.Midfield[1].NAME}
                (%
                {
                  this.state.dataSource.MostlySelectedFbPlayers.Midfield[1]
                    .VALUE_AS_PERCENTAGE
                }
                )
              </Text>
              <Text style={styles.chartSecondTitle}>
                {this.state.dataSource.MostlySelectedFbPlayers.Midfield[2].NAME}
                (%
                {
                  this.state.dataSource.MostlySelectedFbPlayers.Midfield[2]
                    .VALUE_AS_PERCENTAGE
                }
                )
              </Text>
              <Text style={styles.chartSecondTitle}>
                {this.state.dataSource.MostlySelectedFbPlayers.Midfield[3].NAME}
                (%
                {
                  this.state.dataSource.MostlySelectedFbPlayers.Midfield[3]
                    .VALUE_AS_PERCENTAGE
                }
                )
              </Text>
              <Text style={styles.chartLineUpTitle}>Forward</Text>
              <Text style={styles.chartSecondTitle}>
                {this.state.dataSource.MostlySelectedFbPlayers.Forward[0].NAME}
                (%
                {
                  this.state.dataSource.MostlySelectedFbPlayers.Forward[0]
                    .VALUE_AS_PERCENTAGE
                }
                )
              </Text>
              <Text style={styles.chartSecondTitle}>
                {this.state.dataSource.MostlySelectedFbPlayers.Forward[1].NAME}
                (%
                {
                  this.state.dataSource.MostlySelectedFbPlayers.Forward[1]
                    .VALUE_AS_PERCENTAGE
                }
                )
              </Text>
            </ScrollView>
          </View>
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
          <View style={styles.slides}>
            <Text style={styles.chartTitle}>Best Eleven of The Week</Text>
            <ScrollView>
              <Text style={styles.chartLineUpTitle}>GoalKeeper</Text>
              <Text style={styles.chartSecondTitle}>
                {this.state.dataSource.BestElevenWeekly.EnİyiOyuncu.Kaleci.NAME}
                (%
                {
                  this.state.dataSource.BestElevenWeekly.EnİyiOyuncu.Kaleci
                    .VALUE_AS_PERCENTAGE
                }
                )
              </Text>
              <Text style={styles.chartLineUpTitle}>Right Back</Text>
              <Text style={styles.chartSecondTitle}>
                {this.state.dataSource.BestElevenWeekly.EnİyiOyuncu.SagBek.NAME}
                (%
                {
                  this.state.dataSource.BestElevenWeekly.EnİyiOyuncu.SagBek
                    .VALUE_AS_PERCENTAGE
                }
                )
              </Text>
              <Text style={styles.chartLineUpTitle}>Left Back</Text>
              <Text style={styles.chartSecondTitle}>
                {this.state.dataSource.BestElevenWeekly.EnİyiOyuncu.SolBek.NAME}
                (%
                {
                  this.state.dataSource.BestElevenWeekly.EnİyiOyuncu.SolBek
                    .VALUE_AS_PERCENTAGE
                }
                )
              </Text>
              <Text style={styles.chartLineUpTitle}>Centre Back(Right)</Text>
              <Text style={styles.chartSecondTitle}>
                {this.state.dataSource.BestElevenWeekly.EnİyiOyuncu.Defans.NAME}
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
              <Text style={styles.chartLineUpTitle}>Defensive Midfielder</Text>
              <Text style={styles.chartSecondTitle}>
                {
                  this.state.dataSource.BestElevenWeekly.EnİyiOyuncu.OrtaSaha
                    .NAME
                }
                (%
                {
                  this.state.dataSource.BestElevenWeekly.EnİyiOyuncu.OrtaSaha
                    .VALUE_AS_PERCENTAGE
                }
                )
              </Text>
              <Text style={styles.chartLineUpTitle}>Central Midfielder</Text>
              <Text style={styles.chartSecondTitle}>
                {
                  this.state.dataSource.BestElevenWeekly.EnİyiOyuncu.OrtaSaha1
                    .NAME
                }
                (%
                {
                  this.state.dataSource.BestElevenWeekly.EnİyiOyuncu.OrtaSaha1
                    .VALUE_AS_PERCENTAGE
                }
                )
              </Text>
              <Text style={styles.chartLineUpTitle}>Offensive Midfielder</Text>
              <Text style={styles.chartSecondTitle}>
                {
                  this.state.dataSource.BestElevenWeekly.EnİyiOyuncu.OrtaSaha2
                    .NAME
                }
                (%
                {
                  this.state.dataSource.BestElevenWeekly.EnİyiOyuncu.OrtaSaha2
                    .VALUE_AS_PERCENTAGE
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
          <View style={styles.slides}>
            <Text style={styles.chartTitle}>Best Player of The Match</Text>
            <Text style={styles.chartSecondTitle}>
              {this.state.dataSource.BestPlayer.NAME}
            </Text>
            <VictoryPie
              data={this.bestPlayerPieChart()}
              colorScale={['tomato', 'orange', 'gold', 'cyan', 'navy']}
            />
          </View>
          <View style={styles.slides}>
            <Text style={styles.chartTitle}>
              {this.state.dataSource.PopUpAnalytics.VarHeader.QuestionText}
            </Text>
            <Text style={styles.chartSecondTitle}>
              Selected Answer:{' '}
              {this.state.dataSource.PopUpAnalytics.VarHeader.AnswerText}
            </Text>
            <VictoryPie
              data={this.varPieChart()}
              colorScale={['tomato', 'orange', 'gold', 'cyan', 'navy']}
            />
          </View>
          <View style={styles.slides}>
            <Text style={styles.chartTitle}>Substitution Analytics</Text>
            <Text style={styles.chartSecondTitle}>Beşiktaş</Text>
            <View style={{ flexDirection: 'row' }}>
              <View
                style={[
                  styles.substitutionTitles,
                  { backgroundColor: 'yellow' },
                ]}>
                <Text>In</Text>
              </View>
              <View
                style={[
                  styles.substitutionTitles,
                  { backgroundColor: 'yellow' },
                ]}>
                <Text>Out</Text>
              </View>
              <View
                style={[
                  styles.substitutionTitles,
                  { backgroundColor: 'yellow' },
                ]}>
                <Text>Number of participant</Text>
              </View>
              <View
                style={[
                  styles.substitutionTitles,
                  { backgroundColor: 'yellow' },
                ]}>
                <Text>Percentage(%)</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.substitutionTitles}>
                <Text>
                  {this.state.dataSource.Substitutions.SubstitutionBjk[0].IN}
                </Text>
              </View>
              <View style={styles.substitutionTitles}>
                <Text>
                  {this.state.dataSource.Substitutions.SubstitutionBjk[0].OUT}
                </Text>
              </View>
              <View style={styles.substitutionTitles}>
                <Text>
                  {
                    this.state.dataSource.Substitutions.SubstitutionBjk[0]
                      .VALUE_AS_NUMBER
                  }
                </Text>
              </View>
              <View style={styles.substitutionTitles}>
                <Text>
                  {
                    this.state.dataSource.Substitutions.SubstitutionBjk[0]
                      .VALUE_AS_PERCENTAGE
                  }
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.substitutionTitles}>
                <Text>
                  {this.state.dataSource.Substitutions.SubstitutionBjk[1].IN}
                </Text>
              </View>
              <View style={styles.substitutionTitles}>
                <Text>
                  <Text>
                    {this.state.dataSource.Substitutions.SubstitutionBjk[1].OUT}
                  </Text>
                </Text>
              </View>
              <View style={styles.substitutionTitles}>
                <Text>
                  {
                    this.state.dataSource.Substitutions.SubstitutionBjk[1]
                      .VALUE_AS_NUMBER
                  }
                </Text>
              </View>
              <View style={styles.substitutionTitles}>
                <Text>
                  {
                    this.state.dataSource.Substitutions.SubstitutionBjk[1]
                      .VALUE_AS_PERCENTAGE
                  }
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.substitutionTitles}>
                <Text>
                  {this.state.dataSource.Substitutions.SubstitutionBjk[2].IN}
                </Text>
              </View>
              <View style={styles.substitutionTitles}>
                <Text>
                  <Text>
                    {this.state.dataSource.Substitutions.SubstitutionBjk[2].OUT}
                  </Text>
                </Text>
              </View>
              <View style={styles.substitutionTitles}>
                <Text>
                  {
                    this.state.dataSource.Substitutions.SubstitutionBjk[2]
                      .VALUE_AS_NUMBER
                  }
                </Text>
              </View>
              <View style={styles.substitutionTitles}>
                <Text>
                  {
                    this.state.dataSource.Substitutions.SubstitutionBjk[2]
                      .VALUE_AS_PERCENTAGE
                  }
                </Text>
              </View>
            </View>
            <Text style={styles.chartSecondTitle}>Fenerbahçe</Text>
            <View style={{ flexDirection: 'row' }}>
              <View
                style={[
                  styles.substitutionTitles,
                  { backgroundColor: 'yellow' },
                ]}>
                <Text>In</Text>
              </View>
              <View
                style={[
                  styles.substitutionTitles,
                  { backgroundColor: 'yellow' },
                ]}>
                <Text>Out</Text>
              </View>
              <View
                style={[
                  styles.substitutionTitles,
                  { backgroundColor: 'yellow' },
                ]}>
                <Text>Number of participant</Text>
              </View>
              <View
                style={[
                  styles.substitutionTitles,
                  { backgroundColor: 'yellow' },
                ]}>
                <Text>Percentage(%)</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.substitutionTitles}>
                <Text>
                  {this.state.dataSource.Substitutions.SubstitutionFb[0].IN}
                </Text>
              </View>
              <View style={styles.substitutionTitles}>
                <Text>
                  {this.state.dataSource.Substitutions.SubstitutionFb[0].OUT}
                </Text>
              </View>
              <View style={styles.substitutionTitles}>
                <Text>
                  {
                    this.state.dataSource.Substitutions.SubstitutionFb[0]
                      .VALUE_AS_NUMBER
                  }
                </Text>
              </View>
              <View style={styles.substitutionTitles}>
                <Text>
                  {
                    this.state.dataSource.Substitutions.SubstitutionFb[0]
                      .VALUE_AS_PERCENTAGE
                  }
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.substitutionTitles}>
                <Text>
                  {this.state.dataSource.Substitutions.SubstitutionFb[1].IN}
                </Text>
              </View>
              <View style={styles.substitutionTitles}>
                <Text>
                  <Text>
                    {this.state.dataSource.Substitutions.SubstitutionFb[1].OUT}
                  </Text>
                </Text>
              </View>
              <View style={styles.substitutionTitles}>
                <Text>
                  {
                    this.state.dataSource.Substitutions.SubstitutionFb[1]
                      .VALUE_AS_NUMBER
                  }
                </Text>
              </View>
              <View style={styles.substitutionTitles}>
                <Text>
                  {
                    this.state.dataSource.Substitutions.SubstitutionFb[1]
                      .VALUE_AS_PERCENTAGE
                  }
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.substitutionTitles}>
                <Text>
                  {this.state.dataSource.Substitutions.SubstitutionFb[2].IN}
                </Text>
              </View>
              <View style={styles.substitutionTitles}>
                <Text>
                  <Text>
                    {this.state.dataSource.Substitutions.SubstitutionFb[2].OUT}
                  </Text>
                </Text>
              </View>
              <View style={styles.substitutionTitles}>
                <Text>
                  {
                    this.state.dataSource.Substitutions.SubstitutionFb[2]
                      .VALUE_AS_NUMBER
                  }
                </Text>
              </View>
              <View style={styles.substitutionTitles}>
                <Text>
                  {
                    this.state.dataSource.Substitutions.SubstitutionFb[2]
                      .VALUE_AS_PERCENTAGE
                  }
                </Text>
              </View>
            </View>
            <Footer>
              <Grid>
                <Row>
                  <Col>
                    <Image
                      source={require('@assets/images/bilyonerLogo.png')}
                      style={{
                        width: 100,
                        height: 30,
                        resizeMode: 'contain',
                        alignSelf: 'center',
                      }}
                    />
                  </Col>
                  <Col>
                    <Image
                      source={require('@assets/images/bkingLogo.png')}
                      style={{
                        width: 100,
                        height: 30,
                        resizeMode: 'contain',
                        alignSelf: 'center',
                      }}
                    />
                  </Col>
                  <Col>
                    <Image
                      source={require('@assets/images/cocacolaLogo.png')}
                      style={{
                        width: 100,
                        height: 30,
                        resizeMode: 'contain',
                        alignSelf: 'center',
                      }}
                    />
                  </Col>
                  <Col>
                    <Image
                      source={require('@assets/images/turkcellLogo.png')}
                      style={{
                        width: 100,
                        height: 30,
                        resizeMode: 'contain',
                        alignSelf: 'center',
                      }}
                    />
                  </Col>
                </Row>
              </Grid>
            </Footer>
          </View>
          <View style={styles.slides}>
            <Text style={styles.chartTitle}>
              {this.state.dataSource.PopUpAnalytics.GoalHeader.QuestionText}
            </Text>
            <Text style={styles.chartSecondTitle}>
              {this.state.dataSource.PopUpAnalytics.GoalHeader.AnswerText}
            </Text>
            <VictoryPie
              data={this.goalPieChart()}
              colorScale={['tomato', 'orange', 'gold', 'cyan', 'navy']}
            />
          </View>
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
      </View>
    );
  }
}

export default AnalyticsCarousel;
