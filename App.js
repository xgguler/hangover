/*
App.js is the class which is defined navigation component,app theme,
view components and redux store.
 */

import React from 'react';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import { Provider } from 'react-redux';
import { Root, StyleProvider } from 'native-base';
import fanEngagementTheme from './src/theme/variables/fanEngagement';
import getTheme from './src/theme/components';
import AppNavigation from './src/navigation';

import configureStore from './src/store/configureStore';
const store = configureStore();

export default class App extends React.Component {
  state = {
    fontLoaded: false, // are fonts loaded?
    isReady: false, // it becomes true when all of components are loaded.
  };

  // executes the function when UI elements are rendered.
  async componentDidMount() {
    this.loadFonts();
  }

  async loadFonts() {
    await Font.loadAsync({
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Roboto_light: require('./assets/fonts/Roboto-Light.ttf'),
      Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf'),
      Feather: require('@expo/vector-icons/fonts/Feather.ttf'),
      'simple-line-icons': require('@expo/vector-icons/fonts/SimpleLineIcons.ttf'),
    });
    this.setState({ fontLoaded: true });
  }

  // caches resources from local assets and maps into array to return.
  async cacheResourcesAsync() {
    const images = [
      require('./assets/images/splash.png'),
      require('./assets/images/background1.png'),
      require('./assets/images/background2.png'),
      require('./assets/images/header-bg.png'),
      require('./assets/images/header-bg-big.png'),
      require('./assets/images/header2-bg.png'),
      require('./assets/images/walkthrough1.png'),
    ];

    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    });
    return Promise.all(cacheImages);
  }

  render() {
    if (!this.state.isReady || !this.state.fontLoaded) {
      return (
        <AppLoading
          startAsync={this.cacheResourcesAsync}
          onFinish={() => this.setState({ isReady: true })}
        />
      );
    }

    return (
      <StyleProvider style={getTheme(fanEngagementTheme)}>
        <Provider store={store}>
          <Root>
            <AppNavigation />
          </Root>
        </Provider>
      </StyleProvider>
    );
  }
}
