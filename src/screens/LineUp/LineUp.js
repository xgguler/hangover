import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert, Dimensions, StatusBar } from 'react-native';
import {
  Container,
  Content,
  Text,
  ListItem,
  CheckBox,
  Button,
  Footer,
  Body,
  Header,
  Tab,
  Spinner,
} from 'native-base';

import ScrollableTabView from 'react-native-scrollable-tab-view';

import { connect } from 'react-redux';

import styles from './styles';

import { getSession } from '../SignIn/selectors';

import { actionTypes } from '@utils/actionTypes';
import { CALL_API } from '@store/fanEngagementMiddleware';

export const lineUpLoadActions = actionTypes('LINEUP_LOAD');

const deviceWidth = Dimensions.get('window').width;

class LineUp extends Component {
  constructor(props) {
    super(props);

    //bind datas into functions at the class initialize.
    this.postLineUp = this.postLineUp.bind(this);

    this.state = {
      checkBox1: false,
      checkBox2: false,
      checkBox3: false,
      checkBox4: false,
      checkBox5: false,
      checkBox6: false,
      checkBox7: false,
      checkBox8: false,
      checkBox9: false,
      checkBox10: false,
      checkBox11: false,
      checkBox12: false,
      checkBox13: false,
      checkBox14: false,
      checkBox15: false,
      checkBox16: false,
      checkBox17: false,
      checkBox18: false,
      checkBox19: false,
      checkBox20: false,
      checkBox21: false,
      checkBox22: false,
      checkBox23: false,
      checkBox24: false,
      checkBox25: false,
      checkBox26: false,
      checkBox27: false,
      checkBox28: false,
      checkBox29: false,
      checkBox30: false,
      checkBox31: false,
      checkBox32: false,
      checkBox33: false,
      checkBox34: false,
      checkBox35: false,
      checkBox36: false,
      illustration1: require('@assets/images/besiktas.png'),
      illustration2: require('@assets/images/fenerbahce.png'),
    };

    this.selectedBjkItems = [];
    this.selectedFbItems = [];
  }

  static propTypes = {
    dispatch: PropTypes.func,
    navigation: PropTypes.any,
    session: PropTypes.object,
  };

  static defaultProps = {
    session: {},
  };

  state = {
    activeSlide: 0,
  };

  // posted lineup.
  postLineUp(bjkArray, fbArray) {
    let teamBody1 = [];
    let teamBody2 = [];
    let response;

    for (let i = 0; i < bjkArray.length; i++) {
      teamBody1.push({
        ID: bjkArray[i],
      });
    }

    for (let j = 0; j < fbArray.length; j++) {
      teamBody2.push({
        ID: fbArray[j],
      });
    }

    response = {
      Beşiktaş: teamBody1,
      Fenerbahçe: teamBody2,
    };

    console.log(response);

    // post the request which contains the user,question and answer data to the endpoint.
    this.props.dispatch({
      [CALL_API]: {
        type: lineUpLoadActions,
        entity: '/rest/player/update/Entity.xsjs',
        method: 'post',
        data: response,
      },
    });

    this.setState({
      showME: true,
    });

    return (
      <Container>
        {this.state.showME ? (
          <Spinner color="#000000" />
        ) : (
          Alert.alert(
            'LINEUP',
            'Analytic Results',
            [
              {
                text: 'Show Results',
                onPress: () => {
                  //navigation
                  this.props.navigation.navigate('LineUpAnalyticsResult');
                },
              },
              {
                text: 'Cancel',
                onPress: () => {
                  this.props.navigation.navigate('Drawer');
                },
                style: 'cancel',
              },
            ],
            { cancelable: false }
          )
        )}
      </Container>
    );
  }

  render() {
    const { navigation } = this.props;
    const arr = navigation.getParam('arr', {});

    let arrBjkGkID = [];
    arr.Beşiktaş.GoalKeeper.forEach(function(element) {
      arrBjkGkID.push(element.ID);
    });

    let arrBjkGkName = [];
    arr.Beşiktaş.GoalKeeper.forEach(function(element) {
      arrBjkGkName.push(element.NAME);
    });

    let arrBjkDefID = [];
    arr.Beşiktaş.Defence.forEach(function(element) {
      arrBjkDefID.push(element.ID);
    });

    let arrBjkDefName = [];
    arr.Beşiktaş.Defence.forEach(function(element) {
      arrBjkDefName.push(element.NAME);
    });

    let arrBjkMidID = [];
    arr.Beşiktaş.Midfield.forEach(function(element) {
      arrBjkMidID.push(element.ID);
    });

    let arrBjkMidName = [];
    arr.Beşiktaş.Midfield.forEach(function(element) {
      arrBjkMidName.push(element.NAME);
    });

    let arrBjkFwID = [];
    arr.Beşiktaş.Forward.forEach(function(element) {
      arrBjkFwID.push(element.ID);
    });

    let arrBjkFwName = [];
    arr.Beşiktaş.Forward.forEach(function(element) {
      arrBjkFwName.push(element.NAME);
    });

    let arrFbGkID = [];
    arr.Fenerbahçe.GoalKeeper.forEach(function(element) {
      arrFbGkID.push(element.ID);
    });

    let arrFbGkName = [];
    arr.Fenerbahçe.GoalKeeper.forEach(function(element) {
      arrFbGkName.push(element.NAME);
    });

    let arrFbDefID = [];
    arr.Fenerbahçe.Defence.forEach(function(element) {
      arrFbDefID.push(element.ID);
    });

    let arrFbDefName = [];
    arr.Fenerbahçe.Defence.forEach(function(element) {
      arrFbDefName.push(element.NAME);
    });

    let arrFbMidID = [];
    arr.Fenerbahçe.Midfield.forEach(function(element) {
      arrFbMidID.push(element.ID);
    });

    let arrFbMidName = [];
    arr.Fenerbahçe.Midfield.forEach(function(element) {
      arrFbMidName.push(element.NAME);
    });

    let arrFbFwID = [];
    arr.Fenerbahçe.Forward.forEach(function(element) {
      arrFbFwID.push(element.ID);
    });

    let arrFbFwName = [];
    arr.Fenerbahçe.Forward.forEach(function(element) {
      arrFbFwName.push(element.NAME);
    });

    return (
      <Container>
        <StatusBar
          barStyle="dark-content"
          translucent={true}
          backgroundColor={'transparent'}
        />
        <Header hasTabs style={{ backgroundColor: '#5d2e8f' }} />
        <Content
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flex: 1 }}>
          <ScrollableTabView>
            <Tab tabLabel="Beşiktaş">
              <Content>
                <ListItem style={{ backgroundColor: '#a9a9a9' }}>
                  <Body>
                    <Text>GoalKeeper</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox1}
                    onPress={() => {
                      this.setState({
                        checkBox1: !this.state.checkBox1,
                      });
                      this.selectedBjkItems.push(arrBjkGkID[0]);
                    }}
                  />
                  <Body>
                    <Text>{arrBjkGkName[0]}</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox2}
                    onPress={() => {
                      this.setState({
                        checkBox2: !this.state.checkBox2,
                      });
                      this.selectedBjkItems.push(arrBjkGkID[1]);
                    }}
                  />
                  <Body>
                    <Text>{arrBjkGkName[1]}</Text>
                  </Body>
                </ListItem>
                <ListItem style={{ backgroundColor: '#a9a9a9' }}>
                  <Body>
                    <Text>Defence</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox4}
                    onPress={() => {
                      this.setState({
                        checkBox4: !this.state.checkBox4,
                      });
                      this.selectedBjkItems.push(arrBjkDefID[0]);
                    }}
                  />
                  <Body>
                    <Text>{arrBjkDefName[0]}</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox5}
                    onPress={() => {
                      this.setState({
                        checkBox5: !this.state.checkBox5,
                      });
                      this.selectedBjkItems.push(arrBjkDefID[1]);
                    }}
                  />
                  <Body>
                    <Text>{arrBjkDefName[1]}</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox6}
                    onPress={() => {
                      this.setState({
                        checkBox6: !this.state.checkBox6,
                      });
                      this.selectedBjkItems.push(arrBjkDefID[2]);
                    }}
                  />
                  <Body>
                    <Text>{arrBjkDefName[2]}</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox7}
                    onPress={() => {
                      this.setState({
                        checkBox7: !this.state.checkBox7,
                      });
                      this.selectedBjkItems.push(arrBjkDefID[3]);
                    }}
                  />
                  <Body>
                    <Text>{arrBjkDefName[3]}</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox8}
                    onPress={() => {
                      this.setState({
                        checkBox8: !this.state.checkBox8,
                      });
                      this.selectedBjkItems.push(arrBjkDefID[4]);
                    }}
                  />
                  <Body>
                    <Text>{arrBjkDefName[4]}</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox9}
                    onPress={() => {
                      this.setState({
                        checkBox9: !this.state.checkBox9,
                      });
                      this.selectedBjkItems.push(arrBjkDefID[5]);
                    }}
                  />
                  <Body>
                    <Text>{arrBjkDefName[5]}</Text>
                  </Body>
                </ListItem>
                <ListItem style={{ backgroundColor: '#a9a9a9' }}>
                  <Body>
                    <Text>Midfielders</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox11}
                    onPress={() => {
                      this.setState({
                        checkBox11: !this.state.checkBox11,
                      });
                      this.selectedBjkItems.push(arrBjkMidID[0]);
                    }}
                  />
                  <Body>
                    <Text>{arrBjkMidName[0]}</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox12}
                    onPress={() => {
                      this.setState({
                        checkBox12: !this.state.checkBox12,
                      });
                      this.selectedBjkItems.push(arrBjkMidID[1]);
                    }}
                  />
                  <Body>
                    <Text>{arrBjkMidName[1]}</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox13}
                    onPress={() => {
                      this.setState({
                        checkBox13: !this.state.checkBox13,
                      });
                      this.selectedBjkItems.push(arrBjkMidID[2]);
                    }}
                  />
                  <Body>
                    <Text>{arrBjkMidName[2]}</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox14}
                    onPress={() => {
                      this.setState({
                        checkBox14: !this.state.checkBox14,
                      });
                      this.selectedBjkItems.push(arrBjkMidID[3]);
                    }}
                  />
                  <Body>
                    <Text>{arrBjkMidName[3]}</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox15}
                    onPress={() => {
                      this.setState({
                        checkBox15: !this.state.checkBox15,
                      });
                      this.selectedBjkItems.push(arrBjkMidID[4]);
                    }}
                  />
                  <Body>
                    <Text>{arrBjkMidName[4]}</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox16}
                    onPress={() => {
                      this.setState({
                        checkBox16: !this.state.checkBox16,
                      });
                      this.selectedBjkItems.push(arrBjkMidID[5]);
                    }}
                  />
                  <Body>
                    <Text>{arrBjkMidName[5]}</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox17}
                    onPress={() => {
                      this.setState({
                        checkBox17: !this.state.checkBox17,
                      });
                      this.selectedBjkItems.push(arrBjkMidID[6]);
                    }}
                  />
                  <Body>
                    <Text>{arrBjkMidName[6]}</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox18}
                    onPress={() => {
                      this.setState({
                        checkBox18: !this.state.checkBox18,
                      });
                      this.selectedBjkItems.push(arrBjkMidID[7]);
                    }}
                  />
                  <Body>
                    <Text>{arrBjkMidName[7]}</Text>
                  </Body>
                </ListItem>
                <ListItem style={{ backgroundColor: '#a9a9a9' }}>
                  <Body>
                    <Text>Forward</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox20}
                    onPress={() => {
                      this.setState({
                        checkBox20: !this.state.checkBox20,
                      });
                      this.selectedBjkItems.push(arrBjkFwID[0]);
                    }}
                  />
                  <Body>
                    <Text>{arrBjkFwName[0]}</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox21}
                    onPress={() => {
                      this.setState({
                        checkBox21: !this.state.checkBox21,
                      });
                      this.selectedBjkItems.push(arrBjkFwID[1]);
                    }}
                  />
                  <Body>
                    <Text>{arrBjkFwName[1]}</Text>
                  </Body>
                </ListItem>
              </Content>
            </Tab>
            <Tab tabLabel="Fenerbahçe">
              <Content>
                <ListItem style={{ backgroundColor: '#a9a9a9' }}>
                  <Body>
                    <Text>GoalKeeper</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox23}
                    onPress={() => {
                      this.setState({
                        checkBox23: !this.state.checkBox23,
                      });
                      this.selectedFbItems.push(arrFbGkID[0]);
                    }}
                  />
                  <Body>
                    <Text>{arrFbGkName[0]}</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox24}
                    onPress={() => {
                      this.setState({
                        checkBox24: !this.state.checkBox24,
                      });
                      this.selectedFbItems.push(arrFbGkID[1]);
                    }}
                  />
                  <Body>
                    <Text>{arrFbGkName[1]}</Text>
                  </Body>
                </ListItem>
                <ListItem style={{ backgroundColor: '#a9a9a9' }}>
                  <Body>
                    <Text>Defence</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox26}
                    onPress={() => {
                      this.setState({
                        checkBox26: !this.state.checkBox26,
                      });
                      this.selectedFbItems.push(arrFbDefID[0]);
                    }}
                  />
                  <Body>
                    <Text>{arrFbDefName[0]}</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox27}
                    onPress={() => {
                      this.setState({
                        checkBox27: !this.state.checkBox27,
                      });
                      this.selectedFbItems.push(arrFbDefID[1]);
                    }}
                  />
                  <Body>
                    <Text>{arrFbDefName[1]}</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox28}
                    onPress={() => {
                      this.setState({
                        checkBox28: !this.state.checkBox28,
                      });
                      this.selectedFbItems.push(arrFbDefID[2]);
                    }}
                  />
                  <Body>
                    <Text>{arrFbDefName[2]}</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox29}
                    onPress={() => {
                      this.setState({
                        checkBox29: !this.state.checkBox29,
                      });
                      this.selectedFbItems.push(arrFbDefID[3]);
                    }}
                  />
                  <Body>
                    <Text>{arrFbDefName[3]}</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox30}
                    onPress={() => {
                      this.setState({
                        checkBox30: !this.state.checkBox30,
                      });
                      this.selectedFbItems.push(arrFbDefID[4]);
                    }}
                  />
                  <Body>
                    <Text>{arrFbDefName[4]}</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox31}
                    onPress={() => {
                      this.setState({
                        checkBox31: !this.state.checkBox31,
                      });
                      this.selectedFbItems.push(arrFbDefID[5]);
                    }}
                  />
                  <Body>
                    <Text>{arrFbDefName[5]}</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox32}
                    onPress={() => {
                      this.setState({
                        checkBox32: !this.state.checkBox32,
                      });
                      this.selectedFbItems.push(arrFbDefID[6]);
                    }}
                  />
                  <Body>
                    <Text>{arrFbDefName[6]}</Text>
                  </Body>
                </ListItem>
                <ListItem style={{ backgroundColor: '#a9a9a9' }}>
                  <Body>
                    <Text>Midfielders</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox33}
                    onPress={() => {
                      this.setState({
                        checkBox33: !this.state.checkBox33,
                      });
                      this.selectedFbItems.push(arrFbMidID[0]);
                    }}
                  />
                  <Body>
                    <Text>{arrFbMidName[0]}</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox34}
                    onPress={() => {
                      this.setState({
                        checkBox34: !this.state.checkBox34,
                      });
                      this.selectedFbItems.push(arrFbMidID[1]);
                    }}
                  />
                  <Body>
                    <Text>{arrFbMidName[1]}</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox35}
                    onPress={() => {
                      this.setState({
                        checkBox35: !this.state.checkBox35,
                      });
                      this.selectedFbItems.push(arrFbMidID[2]);
                    }}
                  />
                  <Body>
                    <Text>{arrFbMidName[2]}</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox36}
                    onPress={() => {
                      this.setState({
                        checkBox36: !this.state.checkBox36,
                      });
                      this.selectedFbItems.push(arrFbMidID[3]);
                    }}
                  />
                  <Body>
                    <Text>{arrFbMidName[3]}</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox37}
                    onPress={() => {
                      this.setState({
                        checkBox37: !this.state.checkBox37,
                      });
                      this.selectedFbItems.push(arrFbMidID[4]);
                    }}
                  />
                  <Body>
                    <Text>{arrFbMidName[4]}</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox38}
                    onPress={() => {
                      this.setState({
                        checkBox38: !this.state.checkBox38,
                      });
                      this.selectedFbItems.push(arrFbMidID[5]);
                    }}
                  />
                  <Body>
                    <Text>{arrFbMidName[5]}</Text>
                  </Body>
                </ListItem>
                <ListItem style={{ backgroundColor: '#a9a9a9' }}>
                  <Body>
                    <Text>Forward</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox40}
                    onPress={() => {
                      this.setState({
                        checkBox40: !this.state.checkBox40,
                      });
                      this.selectedFbItems.push(arrFbFwID[0]);
                    }}
                  />
                  <Body>
                    <Text>{arrFbFwName[0]}</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox41}
                    onPress={() => {
                      this.setState({
                        checkBox41: !this.state.checkBox41,
                      });
                      this.selectedFbItems.push(arrFbFwID[1]);
                    }}
                  />
                  <Body>
                    <Text>{arrFbFwName[1]}</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox42}
                    onPress={() => {
                      this.setState({
                        checkBox42: !this.state.checkBox42,
                      });
                      this.selectedFbItems.push(arrFbFwID[2]);
                    }}
                  />
                  <Body>
                    <Text>{arrFbFwName[2]}</Text>
                  </Body>
                </ListItem>
              </Content>
            </Tab>
          </ScrollableTabView>
        </Content>
        <Footer>
          <Button
            large
            primary
            block
            style={styles.skipBtn}
            onPress={() => {
              this.postLineUp(this.selectedBjkItems, this.selectedFbItems);
            }}>
            <Text>Done</Text>
          </Button>
        </Footer>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  session: getSession(state),
});

export default connect(mapStateToProps)(LineUp);
