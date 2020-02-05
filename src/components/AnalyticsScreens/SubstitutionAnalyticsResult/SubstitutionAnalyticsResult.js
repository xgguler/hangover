import React, { Component } from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  Platform,
  ScrollView,
  View,
} from 'react-native';
import Carousel from 'react-native-carousel-view';

import styles from './styles';

import theme from '@theme/variables/fanEngagement';
import { Container, Content, Text, Footer, Button } from 'native-base';
import { Col, Grid, Row } from 'react-native-easy-grid';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default class SubstitutionAnalyticsResult extends Component {
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
                      {
                        this.state.dataSource.Substitutions.SubstitutionBjk[1]
                          .OUT
                      }
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
                      {
                        this.state.dataSource.Substitutions.SubstitutionBjk[2]
                          .OUT
                      }
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
                      {
                        this.state.dataSource.Substitutions.SubstitutionFb[1]
                          .OUT
                      }
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
                      {
                        this.state.dataSource.Substitutions.SubstitutionFb[2]
                          .OUT
                      }
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
            </View>
          </Carousel>
        </Content>
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
