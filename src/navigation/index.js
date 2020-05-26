import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'
import React from 'react';
// import all of screens
import Login from '../screens/login/Login';
import Main from '../screens/main-page/Main';

// create stack navigator to contain the initial screens and left menu.
const AppNavigator = createStackNavigator({
    Login: { screen: Login },
    Main: { screen: Main }
  },
  {
    index: 0,
    initialRouteName: 'Login',
    headerMode: 'none',
  });
  
  export default createAppContainer(AppNavigator);
