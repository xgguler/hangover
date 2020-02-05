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

export const bestWeeklyElevenLoadActions = actionTypes(
  'BEST_WEEKLY_ELEVEN_LOAD'
);

const deviceWidth = Dimensions.get('window').width;

class BestWeeklyEleven extends Component {
  constructor(props) {
    super(props);

    //bind datas into functions at the class initialize.
    this.postBestWeeklyEleven = this.postBestWeeklyEleven.bind(this);

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
      checkBox37: false,
      checkBox38: false,
      checkBox39: false,
      checkBox40: false,
      checkBox41: false,
      checkBox42: false,
      checkBox43: false,
      checkBox44: false,
      showME: false,
      illustration1: require('@assets/images/besiktas.png'),
      illustration2: require('@assets/images/fenerbahce.png'),
    };

    this.selectedBestWeeklyElevenItems = [];
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
  postBestWeeklyEleven(bestWeeklyElevenArray) {
    let teamBody1 = [];
    let response;

    for (let i = 0; i < bestWeeklyElevenArray.length; i++) {
      teamBody1.push({
        ID: bestWeeklyElevenArray[i],
      });
    }

    response = {
      BestWeeklyEleven: teamBody1,
    };

    console.log(response);

    // post the request which contains the user,question and answer data to the endpoint.
    /*
    this.props.dispatch({
      [CALL_API]: {
        type: bestWeeklyElevenLoadActions,
        entity: '/rest/player/best/eleven/weekly/create/Entity.xsjs',
        method: 'post',
        data: response,
      },
    });
     */

    this.setState({
      showME: true,
    });

    return (
      <Container>
        {this.state.showME ? (
          <Spinner color="#000000" />
        ) : (
          Alert.alert(
            'BEST WEEKLY ELEVEN',
            'Analytic Results',
            [
              {
                text: 'Show Results',
                onPress: () => {
                  //navigation
                  this.props.navigation.navigate(
                    'BestWeeklyElevenAnalyticsResult'
                  );
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

    let arrGkName = [];
    arr.EnİyiOyuncu.Kaleci.forEach(function(element) {
      arrGkName.push(element.NAME);
    });

    let arrGkTeam = [];
    arr.EnİyiOyuncu.Kaleci.forEach(function(element) {
      arrGkTeam.push(element.TEAM);
    });

    let arrRbName = [];
    arr.EnİyiOyuncu.SagBek.forEach(function(element) {
      arrRbName.push(element.NAME);
    });

    let arrRbTeam = [];
    arr.EnİyiOyuncu.SagBek.forEach(function(element) {
      arrRbTeam.push(element.TEAM);
    });

    let arrLbName = [];
    arr.EnİyiOyuncu.SolBek.forEach(function(element) {
      arrLbName.push(element.NAME);
    });

    let arrLbTeam = [];
    arr.EnİyiOyuncu.SolBek.forEach(function(element) {
      arrLbTeam.push(element.TEAM);
    });

    let arrRcbName = [];
    arr.EnİyiOyuncu.Defans.forEach(function(element) {
      arrRcbName.push(element.NAME);
    });

    let arrRcbTeam = [];
    arr.EnİyiOyuncu.Defans.forEach(function(element) {
      arrRcbTeam.push(element.TEAM);
    });

    let arrLcbName = [];
    arr.EnİyiOyuncu.Defans1.forEach(function(element) {
      arrLcbName.push(element.NAME);
    });

    let arrLcbTeam = [];
    arr.EnİyiOyuncu.Defans1.forEach(function(element) {
      arrLcbTeam.push(element.TEAM);
    });

    let arrCdmName = [];
    arr.EnİyiOyuncu.OrtaSaha.forEach(function(element) {
      arrCdmName.push(element.NAME);
    });

    let arrCdmTeam = [];
    arr.EnİyiOyuncu.OrtaSaha.forEach(function(element) {
      arrCdmTeam.push(element.TEAM);
    });

    let arrCmName = [];
    arr.EnİyiOyuncu.OrtaSaha1.forEach(function(element) {
      arrCmName.push(element.NAME);
    });

    let arrCmTeam = [];
    arr.EnİyiOyuncu.OrtaSaha1.forEach(function(element) {
      arrCmTeam.push(element.TEAM);
    });

    let arrCamName = [];
    arr.EnİyiOyuncu.OrtaSaha2.forEach(function(element) {
      arrCamName.push(element.NAME);
    });

    let arrCamTeam = [];
    arr.EnİyiOyuncu.OrtaSaha2.forEach(function(element) {
      arrCamTeam.push(element.TEAM);
    });

    let arrRwName = [];
    arr.EnİyiOyuncu.SagAcik.forEach(function(element) {
      arrRwName.push(element.NAME);
    });

    let arrRwTeam = [];
    arr.EnİyiOyuncu.SagAcik.forEach(function(element) {
      arrRwTeam.push(element.TEAM);
    });

    let arrLwName = [];
    arr.EnİyiOyuncu.SolAcik.forEach(function(element) {
      arrLwName.push(element.NAME);
    });

    let arrLwTeam = [];
    arr.EnİyiOyuncu.SolAcik.forEach(function(element) {
      arrLwTeam.push(element.TEAM);
    });

    let arrFwName = [];
    arr.EnİyiOyuncu.Forward.forEach(function(element) {
      arrFwName.push(element.NAME);
    });

    let arrFwTeam = [];
    arr.EnİyiOyuncu.Forward.forEach(function(element) {
      arrFwTeam.push(element.TEAM);
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
            <Tab tabLabel="Kaleci">
              <Content>
                <ListItem style={{ backgroundColor: '#a9a9a9' }}>
                  <Body>
                    <Text>Kaleci</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox1}
                    onPress={() => {
                      this.setState({
                        checkBox1: !this.state.checkBox1,
                      });
                      this.selectedBestWeeklyElevenItems.push(arrGkName[0]);
                    }}
                  />
                  <Body>
                    <Text>
                      {arrGkName[0]}({arrGkTeam[0]})
                    </Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox2}
                    onPress={() => {
                      this.setState({
                        checkBox2: !this.state.checkBox2,
                      });
                      this.selectedBestWeeklyElevenItems.push(arrGkName[1]);
                    }}
                  />
                  <Body>
                    <Text>
                      {arrGkName[1]}({arrGkTeam[1]})
                    </Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox3}
                    onPress={() => {
                      this.setState({
                        checkBox3: !this.state.checkBox3,
                      });
                      this.selectedBestWeeklyElevenItems.push(arrGkName[2]);
                    }}
                  />
                  <Body>
                    <Text>
                      {arrGkName[2]}({arrGkTeam[2]})
                    </Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox4}
                    onPress={() => {
                      this.setState({
                        checkBox4: !this.state.checkBox4,
                      });
                      this.selectedBestWeeklyElevenItems.push(arrGkName[3]);
                    }}
                  />
                  <Body>
                    <Text>
                      {arrGkName[3]}({arrGkTeam[3]})
                    </Text>
                  </Body>
                </ListItem>
              </Content>
            </Tab>
            <Tab tabLabel="Defans">
              <Content>
                <ListItem style={{ backgroundColor: '#a9a9a9' }}>
                  <Body>
                    <Text>Sağ Bek</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox5}
                    onPress={() => {
                      this.setState({
                        checkBox5: !this.state.checkBox5,
                      });
                      this.selectedBestWeeklyElevenItems.push(arrRbName[0]);
                    }}
                  />
                  <Body>
                    <Text>
                      {arrRbName[0]}({arrRbTeam[0]})
                    </Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox6}
                    onPress={() => {
                      this.setState({
                        checkBox6: !this.state.checkBox6,
                      });
                      this.selectedBestWeeklyElevenItems.push(arrRbName[1]);
                    }}
                  />
                  <Body>
                    <Text>
                      {arrRbName[1]}({arrRbTeam[1]})
                    </Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox7}
                    onPress={() => {
                      this.setState({
                        checkBox7: !this.state.checkBox7,
                      });
                      this.selectedBestWeeklyElevenItems.push(arrRbName[2]);
                    }}
                  />
                  <Body>
                    <Text>
                      {arrRbName[2]}({arrRbTeam[2]})
                    </Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox8}
                    onPress={() => {
                      this.setState({
                        checkBox8: !this.state.checkBox8,
                      });
                      this.selectedBestWeeklyElevenItems.push(arrRbName[3]);
                    }}
                  />
                  <Body>
                    <Text>
                      {arrRbName[3]}({arrRbTeam[3]})
                    </Text>
                  </Body>
                </ListItem>
                <ListItem style={{ backgroundColor: '#a9a9a9' }}>
                  <Body>
                    <Text>Sol Bek</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox9}
                    onPress={() => {
                      this.setState({
                        checkBox9: !this.state.checkBox9,
                      });
                      this.selectedBestWeeklyElevenItems.push(arrLbName[0]);
                    }}
                  />
                  <Body>
                    <Text>
                      {arrLbName[0]}({arrLbTeam[0]})
                    </Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox10}
                    onPress={() => {
                      this.setState({
                        checkBox10: !this.state.checkBox10,
                      });
                      this.selectedBestWeeklyElevenItems.push(arrLbName[1]);
                    }}
                  />
                  <Body>
                    <Text>
                      {arrLbName[1]}({arrLbTeam[1]})
                    </Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox11}
                    onPress={() => {
                      this.setState({
                        checkBox11: !this.state.checkBox11,
                      });
                      this.selectedBestWeeklyElevenItems.push(arrLbName[2]);
                    }}
                  />
                  <Body>
                    <Text>
                      {arrLbName[2]}({arrLbTeam[2]})
                    </Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox12}
                    onPress={() => {
                      this.setState({
                        checkBox12: !this.state.checkBox12,
                      });
                      this.selectedBestWeeklyElevenItems.push(arrLbName[3]);
                    }}
                  />
                  <Body>
                    <Text>
                      {arrLbName[3]}({arrLbTeam[3]})
                    </Text>
                  </Body>
                </ListItem>
                <ListItem style={{ backgroundColor: '#a9a9a9' }}>
                  <Body>
                    <Text>Merkez Defans(Sağ)</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox13}
                    onPress={() => {
                      this.setState({
                        checkBox13: !this.state.checkBox13,
                      });
                      this.selectedBestWeeklyElevenItems.push(arrRcbName[0]);
                    }}
                  />
                  <Body>
                    <Text>
                      {arrRcbName[0]}({arrRcbTeam[0]})
                    </Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox14}
                    onPress={() => {
                      this.setState({
                        checkBox14: !this.state.checkBox14,
                      });
                      this.selectedBestWeeklyElevenItems.push(arrRcbName[1]);
                    }}
                  />
                  <Body>
                    <Text>
                      {arrRcbName[1]}({arrRcbTeam[1]})
                    </Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox15}
                    onPress={() => {
                      this.setState({
                        checkBox15: !this.state.checkBox15,
                      });
                      this.selectedBestWeeklyElevenItems.push(arrRcbName[2]);
                    }}
                  />
                  <Body>
                    <Text>
                      {arrRcbName[2]}({arrRcbTeam[2]})
                    </Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox16}
                    onPress={() => {
                      this.setState({
                        checkBox16: !this.state.checkBox16,
                      });
                      this.selectedBestWeeklyElevenItems.push(arrRcbName[3]);
                    }}
                  />
                  <Body>
                    <Text>
                      {arrRcbName[3]}({arrRcbTeam[3]})
                    </Text>
                  </Body>
                </ListItem>
                <ListItem style={{ backgroundColor: '#a9a9a9' }}>
                  <Body>
                    <Text>Merkez Defans(Sol)</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox17}
                    onPress={() => {
                      this.setState({
                        checkBox17: !this.state.checkBox17,
                      });
                      this.selectedBestWeeklyElevenItems.push(arrLcbName[0]);
                    }}
                  />
                  <Body>
                    <Text>
                      {arrLcbName[0]}({arrLcbTeam[0]})
                    </Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox18}
                    onPress={() => {
                      this.setState({
                        checkBox18: !this.state.checkBox18,
                      });
                      this.selectedBestWeeklyElevenItems.push(arrLcbName[1]);
                    }}
                  />
                  <Body>
                    <Text>
                      {arrLcbName[1]}({arrLcbTeam[1]})
                    </Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox19}
                    onPress={() => {
                      this.setState({
                        checkBox19: !this.state.checkBox19,
                      });
                      this.selectedBestWeeklyElevenItems.push(arrLcbName[2]);
                    }}
                  />
                  <Body>
                    <Text>
                      {arrLcbName[2]}({arrLcbTeam[2]})
                    </Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox20}
                    onPress={() => {
                      this.setState({
                        checkBox20: !this.state.checkBox20,
                      });
                      this.selectedBestWeeklyElevenItems.push(arrLcbName[3]);
                    }}
                  />
                  <Body>
                    <Text>
                      {arrLcbName[3]}({arrLcbTeam[3]})
                    </Text>
                  </Body>
                </ListItem>
              </Content>
            </Tab>
            <Tab tabLabel="Orta Saha">
              <Content>
                <ListItem style={{ backgroundColor: '#a9a9a9' }}>
                  <Body>
                    <Text>Defansif Orta Saha</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox21}
                    onPress={() => {
                      this.setState({
                        checkBox21: !this.state.checkBox21,
                      });
                      this.selectedBestWeeklyElevenItems.push(arrCdmName[0]);
                    }}
                  />
                  <Body>
                    <Text>
                      {arrCdmName[0]}({arrCdmTeam[0]})
                    </Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox22}
                    onPress={() => {
                      this.setState({
                        checkBox22: !this.state.checkBox22,
                      });
                      this.selectedBestWeeklyElevenItems.push(arrCdmName[1]);
                    }}
                  />
                  <Body>
                    <Text>
                      {arrCdmName[1]}({arrCdmTeam[1]})
                    </Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox23}
                    onPress={() => {
                      this.setState({
                        checkBox23: !this.state.checkBox23,
                      });
                      this.selectedBestWeeklyElevenItems.push(arrCdmName[2]);
                    }}
                  />
                  <Body>
                    <Text>
                      {arrCdmName[2]}({arrCdmTeam[2]})
                    </Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox24}
                    onPress={() => {
                      this.setState({
                        checkBox24: !this.state.checkBox24,
                      });
                      this.selectedBestWeeklyElevenItems.push(arrCdmName[3]);
                    }}
                  />
                  <Body>
                    <Text>
                      {arrCdmName[3]}({arrCdmTeam[3]})
                    </Text>
                  </Body>
                </ListItem>
                <ListItem style={{ backgroundColor: '#a9a9a9' }}>
                  <Body>
                    <Text>Merkez Orta Saha</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox25}
                    onPress={() => {
                      this.setState({
                        checkBox25: !this.state.checkBox25,
                      });
                      this.selectedBestWeeklyElevenItems.push(arrCmName[0]);
                    }}
                  />
                  <Body>
                    <Text>
                      {arrCmName[0]}({arrCmTeam[0]})
                    </Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox26}
                    onPress={() => {
                      this.setState({
                        checkBox26: !this.state.checkBox26,
                      });
                      this.selectedBestWeeklyElevenItems.push(arrCmName[1]);
                    }}
                  />
                  <Body>
                    <Text>
                      {arrCmName[1]}({arrCmTeam[1]})
                    </Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox27}
                    onPress={() => {
                      this.setState({
                        checkBox27: !this.state.checkBox27,
                      });
                      this.selectedBestWeeklyElevenItems.push(arrCmName[2]);
                    }}
                  />
                  <Body>
                    <Text>
                      {arrCmName[2]}({arrCmTeam[2]})
                    </Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox28}
                    onPress={() => {
                      this.setState({
                        checkBox28: !this.state.checkBox28,
                      });
                      this.selectedBestWeeklyElevenItems.push(arrCmName[3]);
                    }}
                  />
                  <Body>
                    <Text>
                      {arrCmName[3]}({arrCmTeam[3]})
                    </Text>
                  </Body>
                </ListItem>
                <ListItem style={{ backgroundColor: '#a9a9a9' }}>
                  <Body>
                    <Text>Ofansif Orta Saha</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox29}
                    onPress={() => {
                      this.setState({
                        checkBox29: !this.state.checkBox29,
                      });
                      this.selectedBestWeeklyElevenItems.push(arrCamName[0]);
                    }}
                  />
                  <Body>
                    <Text>
                      {arrCamName[0]}({arrCamTeam[0]})
                    </Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox30}
                    onPress={() => {
                      this.setState({
                        checkBox30: !this.state.checkBox30,
                      });
                      this.selectedBestWeeklyElevenItems.push(arrCamName[1]);
                    }}
                  />
                  <Body>
                    <Text>
                      {arrCamName[1]}({arrCamTeam[1]})
                    </Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox31}
                    onPress={() => {
                      this.setState({
                        checkBox31: !this.state.checkBox31,
                      });
                      this.selectedBestWeeklyElevenItems.push(arrCamName[2]);
                    }}
                  />
                  <Body>
                    <Text>
                      {arrCamName[2]}({arrCamTeam[2]})
                    </Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox32}
                    onPress={() => {
                      this.setState({
                        checkBox32: !this.state.checkBox32,
                      });
                      this.selectedBestWeeklyElevenItems.push(arrCamName[3]);
                    }}
                  />
                  <Body>
                    <Text>
                      {arrCamName[3]}({arrCamTeam[3]})
                    </Text>
                  </Body>
                </ListItem>
              </Content>
            </Tab>
            <Tab tabLabel="Forvet">
              <Content>
                <ListItem style={{ backgroundColor: '#a9a9a9' }}>
                  <Body>
                    <Text>Sağ Açık</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox33}
                    onPress={() => {
                      this.setState({
                        checkBox33: !this.state.checkBox33,
                      });
                      this.selectedBestWeeklyElevenItems.push(arrRwName[0]);
                    }}
                  />
                  <Body>
                    <Text>
                      {arrRwName[0]}({arrRwTeam[0]})
                    </Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox34}
                    onPress={() => {
                      this.setState({
                        checkBox34: !this.state.checkBox34,
                      });
                      this.selectedBestWeeklyElevenItems.push(arrRwName[1]);
                    }}
                  />
                  <Body>
                    <Text>
                      {arrRwName[1]}({arrRwTeam[1]})
                    </Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox35}
                    onPress={() => {
                      this.setState({
                        checkBox35: !this.state.checkBox35,
                      });
                      this.selectedBestWeeklyElevenItems.push(arrRwName[2]);
                    }}
                  />
                  <Body>
                    <Text>
                      {arrRwName[2]}({arrRwTeam[2]})
                    </Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox36}
                    onPress={() => {
                      this.setState({
                        checkBox36: !this.state.checkBox36,
                      });
                      this.selectedBestWeeklyElevenItems.push(arrRwName[3]);
                    }}
                  />
                  <Body>
                    <Text>
                      {arrRwName[3]}({arrRwTeam[3]})
                    </Text>
                  </Body>
                </ListItem>
                <ListItem style={{ backgroundColor: '#a9a9a9' }}>
                  <Body>
                    <Text>Sol Açık</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox37}
                    onPress={() => {
                      this.setState({
                        checkBox37: !this.state.checkBox37,
                      });
                      this.selectedBestWeeklyElevenItems.push(arrLwName[0]);
                    }}
                  />
                  <Body>
                    <Text>
                      {arrLwName[0]}({arrLwTeam[0]})
                    </Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox38}
                    onPress={() => {
                      this.setState({
                        checkBox38: !this.state.checkBox38,
                      });
                      this.selectedBestWeeklyElevenItems.push(arrLwName[1]);
                    }}
                  />
                  <Body>
                    <Text>
                      {arrLwName[1]}({arrLwTeam[1]})
                    </Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox39}
                    onPress={() => {
                      this.setState({
                        checkBox39: !this.state.checkBox39,
                      });
                      this.selectedBestWeeklyElevenItems.push(arrLwName[2]);
                    }}
                  />
                  <Body>
                    <Text>
                      {arrLwName[2]}({arrLwTeam[2]})
                    </Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox40}
                    onPress={() => {
                      this.setState({
                        checkBox40: !this.state.checkBox40,
                      });
                      this.selectedBestWeeklyElevenItems.push(arrLwName[3]);
                    }}
                  />
                  <Body>
                    <Text>
                      {arrLwName[3]}({arrLwTeam[3]})
                    </Text>
                  </Body>
                </ListItem>
                <ListItem style={{ backgroundColor: '#a9a9a9' }}>
                  <Body>
                    <Text>Forvet</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox41}
                    onPress={() => {
                      this.setState({
                        checkBox41: !this.state.checkBox41,
                      });
                      this.selectedBestWeeklyElevenItems.push(arrFwName[0]);
                    }}
                  />
                  <Body>
                    <Text>
                      {arrFwName[0]}({arrFwTeam[0]})
                    </Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox42}
                    onPress={() => {
                      this.setState({
                        checkBox42: !this.state.checkBox42,
                      });
                      this.selectedBestWeeklyElevenItems.push(arrFwName[1]);
                    }}
                  />
                  <Body>
                    <Text>
                      {arrFwName[1]}({arrFwTeam[1]})
                    </Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox43}
                    onPress={() => {
                      this.setState({
                        checkBox43: !this.state.checkBox43,
                      });
                      this.selectedBestWeeklyElevenItems.push(arrFwName[2]);
                    }}
                  />
                  <Body>
                    <Text>
                      {arrFwName[2]}({arrFwTeam[2]})
                    </Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <CheckBox
                    checked={this.state.checkBox44}
                    onPress={() => {
                      this.setState({
                        checkBox44: !this.state.checkBox44,
                      });
                      this.selectedBestWeeklyElevenItems.push(arrFwName[3]);
                    }}
                  />
                  <Body>
                    <Text>
                      {arrFwName[3]}({arrFwTeam[3]})
                    </Text>
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
              this.postBestWeeklyEleven(this.selectedBestWeeklyElevenItems);
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

export default connect(mapStateToProps)(BestWeeklyEleven);
