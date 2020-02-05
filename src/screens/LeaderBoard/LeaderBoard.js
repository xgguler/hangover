import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, ImageBackground } from 'react-native';
import moment from 'moment';
import {
  Container,
  Content,
  Tabs,
  Tab,
  Text,
  Spinner,
  View,
  Footer,
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { connect } from 'react-redux';

import LeaderBoardList from './LeaderBoardList';
import AppHeader from '@components/AppHeader';

import * as actions from './behaviors';
import * as leaderBoardSelectors from './selectors';

import styles from './styles';
import theme from '@theme/variables/fanEngagement';

class LeaderBoard extends Component {
  static propTypes = {
    navigation: PropTypes.any,
    leaderBoardLoading: PropTypes.bool.isRequired,
    leaderBoardError: PropTypes.bool.isRequired,
    leaderBoardSuccess: PropTypes.bool.isRequired,
    leaderBoard: PropTypes.object,
  };

  static defaultProps = {
    leaderBoardLoading: false,
    leaderBoardError: false,
    leaderBoardSuccess: false,
    leaderBoard: {},
  };

  state = {
    headerTitle: 'Leaderboard',
    headerTitleSuffix: moment().format('dddd,'),
  };

  // execute the function after rendering the UI.
  componentDidMount() {
    this.initialize();
  }

  //execute the getLeaderBoard function to get leaderboard object of prop.
  initialize = () => {
    this.props.getLeaderBoard();
  };

  // formats the dates.
  switchPeriod(i) {
    let m = moment();
    let title = '';
    let period = '';
    switch (i) {
      case 0:
        title = m.format('dddd,');
        period = m.format('MMM DD');
        break;
      case 1:
        title =
          m.startOf('week').format('DD') +
          ' - ' +
          m.endOf('week').format('DD,');
        period = m.format('MMM, YYYY');
        break;
      case 2:
        title = m.format('MMMM, ');
        period = m.format('YYYY');
        break;
    }

    this.setState({ headerTitleSuffix: title });
  }

  render() {
    const {
      navigation,
      leaderBoard,
      leaderBoardLoading,
      leaderBoardSuccess,
    } = this.props;
    return (
      <Container>
        <ImageBackground
          source={require('@assets/images/header-bg.png')}
          style={styles.container}>
          <AppHeader
            navigation={navigation}
            title={this.state.headerTitle}
            titleSuffix={this.state.headerTitleSuffix}
          />
          <Content
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ flex: 1 }}
            style={styles.content}>
            {leaderBoardLoading && (
              // create loading view when leaderboard is loaded.
              <View style={styles.emptyContainer}>
                <Spinner color={theme.brandPrimary} />
              </View>
            )}
            {!leaderBoardLoading &&
              leaderBoard.length === 0 && (
                // display a message when error is taken.
                <View style={styles.emptyContainer}>
                  <Text style={styles.emptyMsg}>No data found</Text>
                </View>
              )}
            {leaderBoardSuccess && (
              // create the all of components when leaderboard is success.
              <Tabs
                tabContainerStyle={{
                  elevation: 0,
                }}
                locked
                onChangeTab={({ i, ref, from }) =>
                  this.switchPeriod(i, ref, from)
                }>
                <Tab heading="Today">
                  <LeaderBoardList leaderBoardList={leaderBoard.DAILY} />
                </Tab>
                <Tab heading="This Week">
                  <LeaderBoardList leaderBoardList={leaderBoard.WEEKLY} />
                </Tab>
                <Tab heading="This Month">
                  <LeaderBoardList leaderBoardList={leaderBoard.MONTHLY} />
                </Tab>
              </Tabs>
            )}
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
        </ImageBackground>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  leaderBoardLoading: leaderBoardSelectors.isLeaderBoardLoading(state),
  leaderBoardError: leaderBoardSelectors.isLeaderBoardError(state),
  leaderBoardSuccess: leaderBoardSelectors.isLeaderBoardSuccess(state),
  leaderBoard: leaderBoardSelectors.getLeaderBoard(state),
});

export default connect(
  mapStateToProps,
  actions
)(LeaderBoard);
