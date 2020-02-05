/*
specify how the application's state changes in response to actions sent to the store.

 */

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import signin from '../screens/SignIn/behaviors';
import profile from '../screens/Profile/behaviors';
import matches from '../screens/Matches/behaviors';
import leaderBoard from '../screens/LeaderBoard/behaviors';
import analytics from '../screens/AnalyticsCharts/behaviors';

export default combineReducers({
  form: formReducer,
  signin,
  profile,
  matches,
  leaderBoard,
  analytics,
});
