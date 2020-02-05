import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ImageBackground, ScrollView } from 'react-native';
import {
  Container,
  Thumbnail,
  View,
  Text,
  Content,
  Spinner,
} from 'native-base';
import { connect } from 'react-redux';

import AppHeader from '@components/AppHeader';
import ProfileItem from './ProfileItem';
import Overview from './Overview';
import Social from './Social';

import styles from './styles';
import theme from '@theme/variables/fanEngagement';

import * as actions from './behaviors';
import * as profileSelectors from './selectors';

class Profile extends Component {
  static propTypes = {
    navigation: PropTypes.any,
    profileLoading: PropTypes.bool.isRequired,
    profileError: PropTypes.bool.isRequired,
    profileSuccess: PropTypes.bool.isRequired,
    profile: PropTypes.object,
  };

  static defaultProps = {
    profileLoading: false,
    profileError: false,
    profileSuccess: false,
    profile: {},
  };

  // execute the function after rendering the UI.
  componentDidMount() {
    this.initialize();
  }

  //execute the getProfile function to get profile object of prop.
  initialize = () => {
    this.props.getProfile();
  };

  render() {
    // fetch the specific props from all of props.
    const {
      navigation,
      profile,
      profileLoading,
      profileError,
      profileSuccess,
    } = this.props;
    return (
      <Container>
        <ImageBackground
          source={require('@assets/images/header-bg-big.png')}
          style={styles.container}>
          <AppHeader
            displayAvatar={false}
            displayLogo={false}
            navigation={navigation}
          />

          {profileLoading && (
            // create loading view when profile is loaded.
            <View style={styles.emptyContainer}>
              <Spinner color={theme.brandPrimary} />
            </View>
          )}
          {profileError && (
            // display a message when error is taken.
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyMsg}>No profile data found</Text>
            </View>
          )}
          {profileSuccess && (
            // create the all of components when profile is success.
            <Content
              showsVerticalScrollIndicator={false}
              scrollEnabled={false}
              contentContainerStyle={{ flex: 1 }}>
              <View style={styles.profile.container}>
                <Thumbnail
                  source={{
                    uri: profile.AVATAR,
                  }}
                  style={styles.profile.avatar}
                />
                <Text style={styles.profile.title}>{profile.NAME}</Text>
                <Text style={styles.profile.subTitle}>@{profile.USERNAME}</Text>
              </View>

              <View style={styles.separator} />

              <View style={styles.container}>
                <Overview navigation={navigation} profile={profile} />
                <ScrollView style={styles.content}>
                  <View style={styles.separator} />
                  <ProfileItem
                    icon="ios-ribbon"
                    name={'Score'}
                    info={profile.TOTAL_SCORE}
                  />
                  <View style={styles.separator} />
                  <ProfileItem
                    icon="ios-shirt"
                    name={'Fan'}
                    info={profile.TEAM}
                  />
                  <View style={styles.separator} />
                  <ProfileItem
                    icon="ios-navigate"
                    name={profile.COUNTRY}
                    info={profile.LOCATION}
                  />
                  <View style={styles.separator} />
                  <Social />
                </ScrollView>
              </View>
            </Content>
          )}
        </ImageBackground>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  profileLoading: profileSelectors.isProfileLoading(state),
  profileError: profileSelectors.isProfileError(state),
  profileSuccess: profileSelectors.isProfileSuccess(state),
  profile: profileSelectors.getProfile(state),
});

export default connect(
  mapStateToProps,
  actions
)(Profile);
