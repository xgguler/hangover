import React, { Component } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { DrawerActions } from 'react-navigation';
import PropTypes from 'prop-types';
import {
  Container,
  Content,
  Icon,
  Thumbnail,
  Button,
  Header,
  Left,
  Right,
} from 'native-base';
import { connect } from 'react-redux';

import MenuItem from './MenuItem';
import styles from './styles';
import { routes } from './config';

import { getAvatar } from '@screens/SignIn/selectors';

class SideBar extends Component {
  /*
 when a menu item is selected.It is changed as value of route.
  */
  state = {
    selected: '',
  };

  // set state as value of route and navigate to the screen which is defined at route param.
  onPressItem = route => {
    this.setState(() => ({
      selected: route,
    }));
    this.props.navigation.navigate(route);
  };

  renderMenuItem = ({ item }) => (
    <MenuItem
      id={item.route}
      onPressItem={this.onPressItem}
      selected={this.state.selected === item.route}
      title={item.title}
      icon={item.icon}
    />
  );

  render() {
    const navigation = this.props.navigation;
    return (
      <Container style={{ backgroundColor: 'transparent' }}>
        <Header transparent style={styles.header.container}>
          <Left style={{ flex: 1 }}>
            <Button
              transparent
              onPress={() =>
                navigation.dispatch(DrawerActions.toggleDrawer({}))
              }>
              <Icon
                type="SimpleLineIcons"
                name="arrow-left"
                style={styles.header.icon}
              />
            </Button>
          </Left>
          <Right>
            <TouchableOpacity
              style={{ alignSelf: 'flex-end' }}
              onPress={() => {
                navigation.navigate('Profile');
              }}>
              <Thumbnail
                source={{ uri: this.props.avatar }}
                style={styles.header.avatar}
              />
            </TouchableOpacity>
          </Right>
        </Header>
        <Content style={styles.content}>
          <FlatList
            initialNumToRender={8}
            data={routes}
            renderItem={this.renderMenuItem}
            keyExtractor={item => item.route}
          />
        </Content>
      </Container>
    );
  }
}

SideBar.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }),
  avatar: PropTypes.string,
};

SideBar.defaultProps = {
  avatar: '',
};

// the function provides to use a state of any reducer as prop.
const mapStateToProps = state => ({
  avatar: getAvatar(state),
});

export default connect(mapStateToProps)(SideBar);
