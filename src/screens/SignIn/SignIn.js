import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import {
  Alert,
  Image,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import { FAN_ENGAGEMENT_API_URL } from 'react-native-dotenv';

import {
  Container,
  Text,
  Button,
  View,
  Spinner,
  Content,
  Form,
  Footer,
} from 'native-base';

import { Dialog } from 'react-native-simple-dialogs';

import LoginInput from '@components/LoginInput';
import Notification from '@components/Notification';

import {
  required,
  alphaNumeric,
  minLength7,
  maxLength15,
} from '@utils/validation';

import { doLogin } from './behaviors';
import * as loginSelectors from './selectors';
import styles from './styles';

import SocketIOClient from 'socket.io-client';

const FORM_NAME = 'signin';

class SignIn extends Component {
  state = {};

  static propTypes = {
    loginStarted: PropTypes.bool,
    loginSuccess: PropTypes.bool,
    loginError: PropTypes.bool,
    session: PropTypes.object,
    doLogin: PropTypes.func.isRequired,
    navigation: PropTypes.shape({ dispatch: PropTypes.func.isRequired }),
    handleSubmit: PropTypes.func.isRequired,
  };

  static defaultProps = {
    loginStarted: false,
    loginSuccess: false,
    loginError: false,
    session: {},
  };

  handleSubmit = values => {
    this.props.doLogin(values.username, values.password, () => {
      console.log('Successfull login.');

      const that = this;

      // socket io client
      let socket = SocketIOClient.connect(
        FAN_ENGAGEMENT_API_URL,
        { path: '/socket' }
      );

      socket.on('QuestionRequest', function(data) {
        that.props.navigation.navigate('Question', {
          question: data,
        });
      });

      socket.on('LineUpRequest', function(data) {
        that.props.navigation.navigate('LineUp', {
          arr: data,
        });
      });

      socket.on('PopUpRequest', function(data) {
        that.props.navigation.navigate('TwoOptionsQuestion', {
          question: data,
        });
      });

      socket.on('BestPlayerRequest', function(data) {
        that.props.navigation.navigate('BestPlayer', {
          arr: data,
        });
      });

      socket.on('BestElevenRequest', function(data) {
        that.props.navigation.navigate('BestEleven', {
          arr: data,
        });
      });

      socket.on('MatchStatsRequest', function(data) {
        that.props.navigation.navigate('MatchStats', {
          arr: data,
        });
      });

      socket.on('GiftRequest', function(data) {
        that.props.navigation.navigate('RewardQuestion', {
          question: data,
        });
      });

      socket.on('SubstitutionRequest', function(data) {
        that.props.navigation.navigate('Substitution', {
          arr: data,
        });
      });

      socket.on('OfferRequest', function(data) {
        that.setState({ showDialog: true, text: data.Offer });
      });

      socket.on('BestElevenWeeklyRequest', function(data) {
        that.props.navigation.navigate('BestWeeklyEleven', {
          arr: data,
        });
      });

      socket.on('LiveCouponRequest', function(data) {
        that.props.navigation.navigate('LiveCoupon', {
          question: data,
        });
      });

      this.props.navigation.navigate('Drawer');
    });
  };

  render() {
    const { navigation, handleSubmit, loginStarted, loginError } = this.props;
    return (
      <Container>
        <Dialog
          title="OFFER"
          animationType="fade"
          contentStyle={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onTouchOutside={() => this.setState({ showDialog: false })}
          visible={this.state.showDialog}>
          <Image
            source={require('@assets/images/offer.png')}
            style={{
              width: 99,
              height: 87,
              backgroundColor: '#ffffff',
              marginTop: 10,
              resizeMode: 'contain',
            }}
          />
          <Text style={{ marginVertical: 30 }}>{this.state.text}</Text>
          <TouchableOpacity
            onPress={() => {
              this.setState({ showDialog: false });
              this.props.navigation.navigate('Offer');
            }}
            style={{ marginTop: 10 }}>
            <View
              style={{
                marginBottom: 30,
                width: 260,
                alignItems: 'center',
                backgroundColor: '#2196F3',
              }}>
              <Text
                style={{
                  padding: 20,
                  color: 'white',
                }}>
                SHOW DETAILS
              </Text>
            </View>
          </TouchableOpacity>
        </Dialog>
        <StatusBar
          barStyle="light-content"
          translucent={true}
          backgroundColor={'transparent'}
        />
        <ImageBackground
          source={require('@assets/images/background1.png')}
          style={styles.background}>
          <Content showsVerticalScrollIndicator={false}>
            <View style={{ flex: 1 }}>
              <View style={styles.header.wrapper}>
                {loginError && (
                  <Notification
                    message="Invalid username or password!"
                    buttonText="Retry"
                    duration={5000}
                    position="top"
                    type="danger"
                  />
                )}
              </View>
              <Form>
                <Field
                  name="username"
                  component={LoginInput}
                  type="username"
                  placeholder="Username"
                  icon="ios-person-outline"
                  validate={[required, alphaNumeric, maxLength15]}
                />
                <Field
                  name="password"
                  component={LoginInput}
                  type="password"
                  placeholder="Password"
                  icon="ios-lock-outline"
                  secureTextEntry={true}
                  validate={[required, alphaNumeric, minLength7, maxLength15]}
                />
                <Button
                  small
                  transparent
                  style={{ alignSelf: 'flex-end' }}
                  onPress={() => navigation.navigate('ResetPassword')}>
                  <Text style={styles.resetPwdBtn}>Forgot Password</Text>
                </Button>
              </Form>
            </View>
          </Content>
          <Footer style={styles.footer}>
            <View style={{ flex: 1 }}>
              <Button
                large
                primary
                block
                full
                onPress={handleSubmit(this.handleSubmit)}>
                {loginStarted ? <Spinner color="#fff" /> : <Text>Sign In</Text>}
              </Button>
              <Button
                transparent
                full
                onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.signup.linkText}>
                  Don’t have an account?
                </Text>
                <Text style={styles.signup.linkBtn}>Sign Up</Text>
              </Button>
            </View>
          </Footer>
        </ImageBackground>
      </Container>
    );
  }
}

export const SignInForm = reduxForm({
  form: FORM_NAME,
})(SignIn);

const mapStateToProps = state => ({
  loginStarted: loginSelectors.isLoginStarted(state),
  loginSuccess: loginSelectors.isLoginSuccess(state),
  loginError: loginSelectors.isLoginError(state),
  session: loginSelectors.getSession(state),
});

export default connect(
  mapStateToProps,
  { doLogin }
)(SignInForm);
