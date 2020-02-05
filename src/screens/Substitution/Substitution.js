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

export const substitutionLoadActions = actionTypes('SUBSTITUTION_LOAD');

const deviceWidth = Dimensions.get('window').width;

class Substitution extends Component {
  constructor(props) {
    super(props);

    //bind datas into functions at the class initialize.
    this.postInOutQuestionAnswer = this.postInOutQuestionAnswer.bind(this);

    this.state = {
      showME: false,
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
    };

    this.outBjkPlayers = [];
    this.inBjkPlayers = [];

    this.outFbPlayers = [];
    this.inFbPlayers = [];
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

  postInOutQuestionAnswer(outBjkArray, inBjkArray, outFbArray, inFbArray) {
    let outBjkTeamBody = [];
    let inBjkTeamBody = [];
    let outFbTeamBody = [];
    let inFbTeamBody = [];
    let substitutions;

    for (let i = 0; i < outBjkArray.length; i++) {
      outBjkTeamBody.push(outBjkArray[i]);
    }

    for (let i = 0; i < inBjkArray.length; i++) {
      inBjkTeamBody.push(inBjkArray[i]);
    }

    for (let j = 0; j < outFbArray.length; j++) {
      outFbTeamBody.push(outFbArray[j]);
    }

    for (let i = 0; i < inFbArray.length; i++) {
      inFbTeamBody.push(inFbArray[i]);
    }

    substitutions = {
      Beşiktaş: [
        {
          OUT: outBjkTeamBody[0],
          IN: inBjkTeamBody[0],
        },
        {
          OUT: outBjkTeamBody[1],
          IN: inBjkTeamBody[1],
        },
        {
          OUT: outBjkTeamBody[2],
          IN: inBjkTeamBody[2],
        },
      ],
      Fenerbahçe: [
        {
          OUT: outFbTeamBody[0],
          IN: inFbTeamBody[0],
        },
        {
          OUT: outFbTeamBody[1],
          IN: inFbTeamBody[1],
        },
        {
          OUT: outFbTeamBody[2],
          IN: inFbTeamBody[2],
        },
      ],
    };

    console.log(substitutions);

    // post the request which contains the user,question and answer data to the endpoint.
    this.props.dispatch({
      [CALL_API]: {
        type: substitutionLoadActions,
        entity: '/rest/player/substitution/create/Entity.xsjs',
        method: 'post',
        data: substitutions,
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
            'SUBSTITUTION',
            'Analytic Results',
            [
              {
                text: 'Show Results',
                onPress: () => {
                  //navigation
                  this.props.navigation.navigate('SubstitutionAnalyticsResult');
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
    arr.Beşiktaş.As.GoalKeeper.forEach(function(element) {
      arrBjkGkID.push(element.ID);
    });

    let arrBjkGkName = [];
    arr.Beşiktaş.As.GoalKeeper.forEach(function(element) {
      arrBjkGkName.push(element.NAME);
    });

    let arrBjkSubsGkID = [];
    arr.Beşiktaş.Yedek.GoalKeeper.forEach(function(element) {
      arrBjkSubsGkID.push(element.ID);
    });

    let arrBjkSubsGkName = [];
    arr.Beşiktaş.Yedek.GoalKeeper.forEach(function(element) {
      arrBjkSubsGkName.push(element.NAME);
    });

    let arrBjkDefID = [];
    arr.Beşiktaş.As.Defence.forEach(function(element) {
      arrBjkDefID.push(element.ID);
    });

    let arrBjkDefName = [];
    arr.Beşiktaş.As.Defence.forEach(function(element) {
      arrBjkDefName.push(element.NAME);
    });

    let arrBjkSubsDefID = [];
    arr.Beşiktaş.Yedek.Defence.forEach(function(element) {
      arrBjkSubsDefID.push(element.ID);
    });

    let arrBjkSubsDefName = [];
    arr.Beşiktaş.Yedek.Defence.forEach(function(element) {
      arrBjkSubsDefName.push(element.NAME);
    });

    let arrBjkMidID = [];
    arr.Beşiktaş.As.MidField.forEach(function(element) {
      arrBjkMidID.push(element.ID);
    });

    let arrBjkMidName = [];
    arr.Beşiktaş.As.MidField.forEach(function(element) {
      arrBjkMidName.push(element.NAME);
    });

    let arrBjkSubsMidID = [];
    arr.Beşiktaş.Yedek.MidField.forEach(function(element) {
      arrBjkSubsMidID.push(element.ID);
    });

    let arrBjkSubsMidName = [];
    arr.Beşiktaş.Yedek.MidField.forEach(function(element) {
      arrBjkSubsMidName.push(element.NAME);
    });

    let arrBjkFwID = [];
    arr.Beşiktaş.As.Forward.forEach(function(element) {
      arrBjkFwID.push(element.ID);
    });

    let arrBjkFwName = [];
    arr.Beşiktaş.As.Forward.forEach(function(element) {
      arrBjkFwName.push(element.NAME);
    });

    let arrBjkSubsFwID = [];
    arr.Beşiktaş.Yedek.Forward.forEach(function(element) {
      arrBjkSubsFwID.push(element.ID);
    });

    let arrBjkSubsFwName = [];
    arr.Beşiktaş.Yedek.Forward.forEach(function(element) {
      arrBjkSubsFwName.push(element.NAME);
    });

    let arrFbGkID = [];
    arr.Fenerbahçe.As.GoalKeeper.forEach(function(element) {
      arrFbGkID.push(element.ID);
    });

    let arrFbGkName = [];
    arr.Fenerbahçe.As.GoalKeeper.forEach(function(element) {
      arrFbGkName.push(element.NAME);
    });

    let arrFbSubsGkID = [];
    arr.Fenerbahçe.Yedek.GoalKeeper.forEach(function(element) {
      arrFbSubsGkID.push(element.ID);
    });

    let arrFbSubsGkName = [];
    arr.Fenerbahçe.Yedek.GoalKeeper.forEach(function(element) {
      arrFbSubsGkName.push(element.NAME);
    });

    let arrFbDefID = [];
    arr.Fenerbahçe.As.Defence.forEach(function(element) {
      arrFbDefID.push(element.ID);
    });

    let arrFbDefName = [];
    arr.Fenerbahçe.As.Defence.forEach(function(element) {
      arrFbDefName.push(element.NAME);
    });

    let arrFbSubsDefID = [];
    arr.Fenerbahçe.Yedek.Defence.forEach(function(element) {
      arrFbSubsDefID.push(element.ID);
    });

    let arrFbSubsDefName = [];
    arr.Fenerbahçe.Yedek.Defence.forEach(function(element) {
      arrFbSubsDefName.push(element.NAME);
    });

    let arrFbMidID = [];
    arr.Fenerbahçe.As.MidField.forEach(function(element) {
      arrFbMidID.push(element.ID);
    });

    let arrFbMidName = [];
    arr.Fenerbahçe.As.MidField.forEach(function(element) {
      arrFbMidName.push(element.NAME);
    });

    let arrFbSubsMidID = [];
    arr.Fenerbahçe.Yedek.MidField.forEach(function(element) {
      arrFbSubsMidID.push(element.ID);
    });

    let arrFbSubsMidName = [];
    arr.Fenerbahçe.Yedek.MidField.forEach(function(element) {
      arrFbSubsMidName.push(element.NAME);
    });

    let arrFbFwID = [];
    arr.Fenerbahçe.As.Forward.forEach(function(element) {
      arrFbFwID.push(element.ID);
    });

    let arrFbFwName = [];
    arr.Fenerbahçe.As.Forward.forEach(function(element) {
      arrFbFwName.push(element.NAME);
    });

    let arrFbSubsFwID = [];
    arr.Fenerbahçe.Yedek.Forward.forEach(function(element) {
      arrFbSubsFwID.push(element.ID);
    });

    let arrFbSubsFwName = [];
    arr.Fenerbahçe.Yedek.Forward.forEach(function(element) {
      arrFbSubsFwName.push(element.NAME);
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
                      this.outBjkPlayers.push(arrBjkGkID[0]);
                    }}
                  />
                  <Body>
                    <Text>{arrBjkGkName[0]}</Text>
                  </Body>
                </ListItem>
                <ListItem style={{ backgroundColor: '#a9a9a9' }}>
                  <Body>
                    <Text>Defences</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox2}
                    onPress={() => {
                      this.setState({
                        checkBox2: !this.state.checkBox2,
                      });
                      this.outBjkPlayers.push(arrBjkDefID[0]);
                    }}
                  />
                  <Body>
                    <Text>{arrBjkDefName[0]}</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox3}
                    onPress={() => {
                      this.setState({
                        checkBox3: !this.state.checkBox3,
                      });
                      this.outBjkPlayers.push(arrBjkDefID[1]);
                    }}
                  />
                  <Body>
                    <Text>{arrBjkDefName[1]}</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox4}
                    onPress={() => {
                      this.setState({
                        checkBox4: !this.state.checkBox4,
                      });
                      this.outBjkPlayers.push(arrBjkDefID[2]);
                    }}
                  />
                  <Body>
                    <Text>{arrBjkDefName[2]}</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox5}
                    onPress={() => {
                      this.setState({
                        checkBox5: !this.state.checkBox5,
                      });
                      this.outBjkPlayers.push(arrBjkDefID[3]);
                    }}
                  />
                  <Body>
                    <Text>{arrBjkDefName[3]}</Text>
                  </Body>
                </ListItem>
                <ListItem style={{ backgroundColor: '#a9a9a9' }}>
                  <Body>
                    <Text>Midfielders</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox6}
                    onPress={() => {
                      this.setState({
                        checkBox6: !this.state.checkBox6,
                      });
                      this.outBjkPlayers.push(arrBjkMidID[0]);
                    }}
                  />
                  <Body>
                    <Text>{arrBjkMidName[0]}</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox7}
                    onPress={() => {
                      this.setState({
                        checkBox7: !this.state.checkBox7,
                      });
                      this.outBjkPlayers.push(arrBjkMidID[1]);
                    }}
                  />
                  <Body>
                    <Text>{arrBjkMidName[1]}</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox8}
                    onPress={() => {
                      this.setState({
                        checkBox8: !this.state.checkBox8,
                      });
                      this.outBjkPlayers.push(arrBjkMidID[2]);
                    }}
                  />
                  <Body>
                    <Text>{arrBjkMidName[2]}</Text>
                  </Body>
                </ListItem>
                <ListItem style={{ backgroundColor: '#a9a9a9' }}>
                  <Body>
                    <Text>Forwards</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox9}
                    onPress={() => {
                      this.setState({
                        checkBox9: !this.state.checkBox9,
                      });
                      this.outBjkPlayers.push(arrBjkFwID[0]);
                    }}
                  />
                  <Body>
                    <Text>{arrBjkFwName[0]}</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox10}
                    onPress={() => {
                      this.setState({
                        checkBox10: !this.state.checkBox10,
                      });
                      this.outBjkPlayers.push(arrBjkFwID[1]);
                    }}
                  />
                  <Body>
                    <Text>{arrBjkFwName[1]}</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox11}
                    onPress={() => {
                      this.setState({
                        checkBox11: !this.state.checkBox11,
                      });
                      this.outBjkPlayers.push(arrBjkFwID[2]);
                    }}
                  />
                  <Body>
                    <Text>{arrBjkFwName[2]}</Text>
                  </Body>
                </ListItem>
                <ListItem style={{ backgroundColor: '#a9a9a9' }}>
                  <Body>
                    <Text>Substitutes</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox12}
                    onPress={() => {
                      this.setState({
                        checkBox12: !this.state.checkBox12,
                      });
                      this.inBjkPlayers.push(arrBjkSubsGkID[0]);
                    }}
                  />
                  <Body>
                    <Text>{arrBjkSubsGkName[0]}</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox13}
                    onPress={() => {
                      this.setState({
                        checkBox13: !this.state.checkBox13,
                      });
                      this.inBjkPlayers.push(arrBjkSubsDefID[0]);
                    }}
                  />
                  <Body>
                    <Text>{arrBjkSubsDefName[0]}</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox14}
                    onPress={() => {
                      this.setState({
                        checkBox14: !this.state.checkBox14,
                      });
                      this.inBjkPlayers.push(arrBjkSubsDefID[1]);
                    }}
                  />
                  <Body>
                    <Text>{arrBjkSubsDefName[1]}</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox15}
                    onPress={() => {
                      this.setState({
                        checkBox15: !this.state.checkBox15,
                      });
                      this.inBjkPlayers.push(arrBjkSubsDefID[2]);
                    }}
                  />
                  <Body>
                    <Text>{arrBjkSubsDefName[2]}</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox16}
                    onPress={() => {
                      this.setState({
                        checkBox16: !this.state.checkBox16,
                      });
                      this.inBjkPlayers.push(arrBjkSubsMidID[0]);
                    }}
                  />
                  <Body>
                    <Text>{arrBjkSubsMidName[0]}</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox17}
                    onPress={() => {
                      this.setState({
                        checkBox17: !this.state.checkBox17,
                      });
                      this.inBjkPlayers.push(arrBjkSubsMidID[1]);
                    }}
                  />
                  <Body>
                    <Text>{arrBjkSubsMidName[1]}</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox18}
                    onPress={() => {
                      this.setState({
                        checkBox18: !this.state.checkBox18,
                      });
                      this.inBjkPlayers.push(arrBjkSubsFwID[0]);
                    }}
                  />
                  <Body>
                    <Text>{arrBjkSubsFwName[0]}</Text>
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
                    checked={this.state.checkBox19}
                    onPress={() => {
                      this.setState({
                        checkBox19: !this.state.checkBox23,
                      });
                      this.outFbPlayers.push(arrFbGkID[0]);
                    }}
                  />
                  <Body>
                    <Text>{arrFbGkName[0]}</Text>
                  </Body>
                </ListItem>
                <ListItem style={{ backgroundColor: '#a9a9a9' }}>
                  <Body>
                    <Text>Defences</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox20}
                    onPress={() => {
                      this.setState({
                        checkBox20: !this.state.checkBox20,
                      });
                      this.outFbPlayers.push(arrFbDefID[0]);
                    }}
                  />
                  <Body>
                    <Text>{arrFbDefName[0]}</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox21}
                    onPress={() => {
                      this.setState({
                        checkBox21: !this.state.checkBox21,
                      });
                      this.outFbPlayers.push(arrFbDefID[1]);
                    }}
                  />
                  <Body>
                    <Text>{arrFbDefName[1]}</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox22}
                    onPress={() => {
                      this.setState({
                        checkBox22: !this.state.checkBox22,
                      });
                      this.outFbPlayers.push(arrFbDefID[2]);
                    }}
                  />
                  <Body>
                    <Text>{arrFbDefName[2]}</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox23}
                    onPress={() => {
                      this.setState({
                        checkBox23: !this.state.checkBox23,
                      });
                      this.outFbPlayers.push(arrFbDefID[3]);
                    }}
                  />
                  <Body>
                    <Text>{arrFbDefName[3]}</Text>
                  </Body>
                </ListItem>
                <ListItem style={{ backgroundColor: '#a9a9a9' }}>
                  <Body>
                    <Text>Midfielders</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox24}
                    onPress={() => {
                      this.setState({
                        checkBox24: !this.state.checkBox24,
                      });
                      this.outFbPlayers.push(arrFbMidID[0]);
                    }}
                  />
                  <Body>
                    <Text>{arrFbMidName[0]}</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox25}
                    onPress={() => {
                      this.setState({
                        checkBox25: !this.state.checkBox25,
                      });
                      this.outFbPlayers.push(arrFbMidID[1]);
                    }}
                  />
                  <Body>
                    <Text>{arrFbMidName[1]}</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox26}
                    onPress={() => {
                      this.setState({
                        checkBox26: !this.state.checkBox26,
                      });
                      this.outFbPlayers.push(arrFbMidID[2]);
                    }}
                  />
                  <Body>
                    <Text>{arrFbMidName[2]}</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox27}
                    onPress={() => {
                      this.setState({
                        checkBox27: !this.state.checkBox27,
                      });
                      this.outFbPlayers.push(arrFbMidID[3]);
                    }}
                  />
                  <Body>
                    <Text>{arrFbMidName[3]}</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox28}
                    onPress={() => {
                      this.setState({
                        checkBox28: !this.state.checkBox28,
                      });
                      this.outFbPlayers.push(arrFbMidID[4]);
                    }}
                  />
                  <Body>
                    <Text>{arrFbMidName[4]}</Text>
                  </Body>
                </ListItem>
                <ListItem style={{ backgroundColor: '#a9a9a9' }}>
                  <Body>
                    <Text>Forwards</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox29}
                    onPress={() => {
                      this.setState({
                        checkBox29: !this.state.checkBox29,
                      });
                      this.outFbPlayers.push(arrFbFwID[0]);
                    }}
                  />
                  <Body>
                    <Text>{arrFbFwName[0]}</Text>
                  </Body>
                </ListItem>
                <ListItem style={{ backgroundColor: '#a9a9a9' }}>
                  <Body>
                    <Text>Substitutes</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox30}
                    onPress={() => {
                      this.setState({
                        checkBox30: !this.state.checkBox30,
                      });
                      this.inFbPlayers.push(arrFbSubsGkID[0]);
                    }}
                  />
                  <Body>
                    <Text>{arrFbSubsGkName[0]}</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox31}
                    onPress={() => {
                      this.setState({
                        checkBox31: !this.state.checkBox31,
                      });
                      this.inFbPlayers.push(arrFbSubsDefID[0]);
                    }}
                  />
                  <Body>
                    <Text>{arrFbSubsDefName[0]}</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox32}
                    onPress={() => {
                      this.setState({
                        checkBox32: !this.state.checkBox32,
                      });
                      this.inFbPlayers.push(arrFbSubsDefID[1]);
                    }}
                  />
                  <Body>
                    <Text>{arrFbSubsDefName[1]}</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox33}
                    onPress={() => {
                      this.setState({
                        checkBox33: !this.state.checkBox33,
                      });
                      this.inFbPlayers.push(arrFbSubsDefID[2]);
                    }}
                  />
                  <Body>
                    <Text>{arrFbSubsDefName[2]}</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox34}
                    onPress={() => {
                      this.setState({
                        checkBox34: !this.state.checkBox34,
                      });
                      this.inFbPlayers.push(arrFbSubsMidID[0]);
                    }}
                  />
                  <Body>
                    <Text>{arrFbSubsMidName[0]}</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox35}
                    onPress={() => {
                      this.setState({
                        checkBox35: !this.state.checkBox35,
                      });
                      this.inFbPlayers.push(arrFbSubsMidID[1]);
                    }}
                  />
                  <Body>
                    <Text>{arrFbSubsMidName[1]}</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox36}
                    onPress={() => {
                      this.setState({
                        checkBox36: !this.state.checkBox36,
                      });
                      this.inFbPlayers.push(arrFbSubsFwID[0]);
                    }}
                  />
                  <Body>
                    <Text>{arrFbSubsFwName[0]}</Text>
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
              this.postInOutQuestionAnswer(
                this.outBjkPlayers,
                this.inBjkPlayers,
                this.outFbPlayers,
                this.inFbPlayers
              );
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

export default connect(mapStateToProps)(Substitution);
