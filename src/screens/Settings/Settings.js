import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ImageBackground } from 'react-native';
import {
  Container,
  Content,
  ListItem,
  Text,
  Icon,
  Left,
  Body,
  Right,
  Button,
  Thumbnail,
} from 'native-base';

import { connect } from 'react-redux';

import AppHeader from '@components/AppHeader';
import SwitchButton from '@components/SwitchButton';

import styles from './styles';

import { getSession } from '../SignIn/selectors';

class Settings extends Component {
  static propTypes = {
    session: PropTypes.object,
  };

  static defaultProps = {
    session: {},
  };

  state = {
    enableNotification: false,
  };

  render() {
    return (
      <Container>
        <ImageBackground
          source={require('@assets/images/header2-bg.png')}
          style={styles.background}>
          <AppHeader navigation={this.props.navigation} title="Settings" />
          <Content
            paddershowsVerticalScrollIndicator={false}
            style={styles.content}>
            <ListItem itemDivider>
              <Text>General Settings</Text>
            </ListItem>
            <ListItem noIndent icon>
              <Left>
                <Button style={styles.settingBtn}>
                  <Icon active name="ios-notifications-outline" />
                </Button>
              </Left>
              <Body>
                <Text>Notifications</Text>
              </Body>
              <Right>
                <SwitchButton
                  onValueChange={value =>
                    this.setState({ enableNotification: value })
                  }
                  value={this.state.enableNotification}
                />
              </Right>
            </ListItem>
            <ListItem noIndent icon>
              <Left>
                <Button style={styles.settingBtn}>
                  <Icon active name="ios-finger-print" />
                </Button>
              </Left>
              <Body>
                <Text>Fingerprint lock</Text>
              </Body>
              <Right>
                <Text>Enabled</Text>
                <Icon active name="ios-arrow-forward" />
              </Right>
            </ListItem>

            <ListItem itemDivider>
              <Text>Accounts</Text>
            </ListItem>
            <ListItem icon>
              <Left>
                <Thumbnail
                  source={{ uri: this.props.session.avatar }}
                  style={styles.avatar}
                />
              </Left>
              <Body>
                <Text>{this.props.session.fullname}</Text>
              </Body>
              <Right>
                <Icon active name="ios-arrow-forward" />
              </Right>
            </ListItem>
            <ListItem itemDivider>
              <Text>More</Text>
            </ListItem>
            <ListItem noIndent icon>
              <Left>
                <Button style={{ backgroundColor: '#c9c9c9' }}>
                  <Icon active name="ios-help" />
                </Button>
              </Left>
              <Body>
                <Text>FAQ</Text>
              </Body>
              <Right>
                <Icon active name="ios-arrow-forward" />
              </Right>
            </ListItem>
            <ListItem noIndent icon>
              <Left>
                <Button style={{ backgroundColor: '#c9c9c9' }}>
                  <Icon active name="ios-book-outline" />
                </Button>
              </Left>
              <Body>
                <Text>Legal Agreements</Text>
              </Body>
              <Right>
                <Icon active name="ios-arrow-forward" />
              </Right>
            </ListItem>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  session: getSession(state),
});

export default connect(mapStateToProps)(Settings);
