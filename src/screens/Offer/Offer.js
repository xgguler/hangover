import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions,
  View,
  Image,
  StatusBar,
  Alert,
  Platform,
  ScrollView,
} from 'react-native';
import {
  Container,
  Content,
  Text,
  Button,
  Card,
  Footer,
  Spinner,
} from 'native-base';
import Carousel from 'react-native-carousel-view';

import { connect } from 'react-redux';

import styles from './styles';

import theme from '@theme/variables/fanEngagement';

import { getSession } from '../SignIn/selectors';

import { actionTypes } from '@utils/actionTypes';
import { CALL_API } from '@store/fanEngagementMiddleware';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

class Offer extends Component {
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

  render() {
    return (
      <Container>
        <Carousel
          width={deviceWidth}
          height={deviceHeight - 50}
          loop={false}
          hideIndicators={true}
          indicatorAtBottom
          indicatorOffset={deviceHeight / 3}
          indicatorSize={Platform.OS === 'android' ? 15 : 10}
          indicatorColor={theme.brandPrimary}
          animate={false}>
          <View pointerEvents="none" style={styles.slides}>
            <Image
              source={require('@assets/images/bilyonerCampaign.jpg')}
              style={{
                width: deviceWidth,
                height: deviceHeight - 50,
                resizeMode: 'stretch',
              }}
            />
          </View>
          <View pointerEvents="none" style={styles.slides}>
            <Image
              source={require('@assets/images/bkingCampaign.jpg')}
              style={{
                width: deviceWidth,
                height: deviceHeight - 50,
                resizeMode: 'stretch',
              }}
            />
          </View>
          <View pointerEvents="none" style={styles.slides}>
            <Image
              source={require('@assets/images/cocaColaCampaign.jpg')}
              style={{
                width: deviceWidth,
                height: deviceHeight - 50,
                resizeMode: 'stretch',
              }}
            />
          </View>
          <View pointerEvents="none" style={styles.slides}>
            <Image
              source={require('@assets/images/turkcellCampaign.jpg')}
              style={{
                width: deviceWidth,
                height: deviceHeight - 50,
                resizeMode: 'stretch',
              }}
            />
          </View>
        </Carousel>
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

const mapStateToProps = state => ({
  session: getSession(state),
});

export default connect(mapStateToProps)(Offer);
