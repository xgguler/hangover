import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ImageBackground } from 'react-native';
import {
  Container,
  Tabs,
  Tab,
  Spinner,
  View,
  Text,
  Content,
} from 'native-base';
import { connect } from 'react-redux';
import moment from 'moment/moment';

import AnalyticsCarousel from './AnalyticsCarousel';
import AppHeader from '@components/AppHeader';
import * as actions from './behaviors';
import * as analyticsSelectors from './selectors';
import theme from '@theme/variables/fanEngagement';

import {
  getFormattedCurrentWeek,
  getFormattedCurrentMonth,
} from '@utils/formatters';

import styles from './styles';

class AnalyticsCharts extends Component {
  static propTypes = {
    navigation: PropTypes.any,
    analyticsLoading: PropTypes.bool.isRequired,
    analyticsError: PropTypes.bool.isRequired,
    analyticsSuccess: PropTypes.bool.isRequired,
    analytics: PropTypes.object,
  };

  static defaultProps = {
    analyticsLoading: false,
    analyticsError: false,
    analyticsSuccess: false,
    analytics: {},
  };

  state = {
    currentPeriod: getFormattedCurrentWeek(),
    showPieChart: false,
  };

  // execute the function after rendering the UI.
  componentDidMount() {
    this.initialize();
  }

  //execute the getAnalytics function to get analytics object of prop.
  initialize = () => {
    this.props.getAnalytics();
  };

  // formats the dates.
  switchPeriod(i) {
    let period = '';
    switch (i) {
      case 0:
        period = getFormattedCurrentWeek();
        break;
      case 1:
        period = getFormattedCurrentMonth();
        break;
      case 2:
        period = moment().format('YYYY');
        break;
    }

    this.setState({ currentPeriod: period });
  }

  render() {
    const {
      navigation,
      analytics,
      analyticsLoading,
      analyticsSuccess,
    } = this.props;
    return (
      <Container>
        <ImageBackground
          source={require('@assets/images/header-bg.png')}
          style={styles.container}>
          <AppHeader
            navigation={navigation}
            title="Analytics"
            titleSuffix={this.state.currentPeriod}
          />
          {analyticsLoading && (
            // create loading view when analytics is loaded.
            <View style={styles.emptyContainer}>
              <Spinner color={theme.brandPrimary} />
            </View>
          )}
          {!analyticsLoading &&
            !analyticsSuccess &&
            // display a message when error is taken.
            analytics.length === 0 && (
              <View style={styles.emptyContainer}>
                <Text style={styles.emptyMsg}>No analytics found</Text>
              </View>
            )}

          {analyticsSuccess && (
            // create the all of components when analytics is success.
            <Content>
              <View style={styles.emptyContainer}>
                <AnalyticsCarousel
                  analytics={analytics}
                  navigation={navigation}
                />
              </View>
            </Content>
          )}
        </ImageBackground>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  analyticsLoading: analyticsSelectors.isAnalyticsLoading(state),
  analyticsError: analyticsSelectors.isAnalyticsError(state),
  analyticsSuccess: analyticsSelectors.isAnalyticsSuccess(state),
  analytics: analyticsSelectors.getAnalytics(state),
});

export default connect(
  mapStateToProps,
  actions
)(AnalyticsCharts);
