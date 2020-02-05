import React from 'react';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

// import all of screens
import SignIn from '@screens/SignIn/';
import Matches from '@screens/Matches/';
import Leaderboard from '@screens/LeaderBoard/';
import Profile from '@screens/Profile/';
import Question from '@screens/Question/';
import LineUp from '@screens/LineUp/';
import TwoOptionsQuestion from '@screens/TwoOptionsQuestion/';
import BestPlayer from '@screens/BestPlayer/';
import BestEleven from '@screens/BestEleven/';
import MatchStats from '@screens/MatchStats/';
import MatchDetail from '@screens/MatchDetail/';
import RewardQuestion from '@screens/RewardQuestion/';
import Settings from '@screens/Settings/';
import AnalyticsCharts from '@screens/AnalyticsCharts/';
import Substitution from '@screens/Substitution/';
import BestWeeklyEleven from '@screens/BestWeeklyEleven/';
import Offer from '@screens/Offer/';
import LiveCoupon from '@screens/LiveCoupon/';
import Coupons from '@screens/Coupons/';

import GoalAnalyticsResult from '@components/AnalyticsScreens/GoalAnalyticsResult/GoalAnalyticsResult';
import CoachAnalyticsResult from '@components/AnalyticsScreens/CoachAnalyticsResult/CoachAnalyticsResult';
import VarAnalyticsResult from '@components/AnalyticsScreens/VarAnalyticsResult/VarAnalyticsResult';
import BestWeeklyElevenAnalyticsResult from '@components/AnalyticsScreens/BestWeeklyElevenAnalyticsResult/BestWeeklyElevenAnalyticsResult';
import SubstitutionAnalyticsResult from '@components/AnalyticsScreens/SubstitutionAnalyticsResult/SubstitutionAnalyticsResult';
import BestElevenAnalyticsResult from '@components/AnalyticsScreens/BestElevenAnalyticsResult/BestElevenAnalyticsResult';
import BestPlayerAnalyticsResult from '@components/AnalyticsScreens/BestPlayerAnalyticsResult/BestPlayerAnalyticsResult';
import LineUpAnalyticsResult from '@components/AnalyticsScreens/LineUpAnalyticsResult/LineUpAnalyticsResult';
import LiveCouponResults from '@components/AnalyticsScreens/LiveCouponResults/LiveCouponResults';

// import side bar(left navigation menu)
import SideBar from '@components/SideBar/';

// create drawer navigator to route the screens
const Drawer = createDrawerNavigator(
  {
    Matches: { screen: Matches },
    Coupons: { screen: Coupons },
    Leaderboard: { screen: Leaderboard },
    Settings: { screen: Settings },
    Profile: { screen: Profile },
    SignIn: { screen: SignIn },
    AnalyticsCharts: { screen: AnalyticsCharts },
  },
  {
    initialRouteName: 'Matches',
    drawerBackgroundColor: 'rgba(255, 255, 255, 0.3)',
    contentComponent: props => <SideBar {...props} />,
  }
);

// create stack navigator to contain the initial screens and left menu.
const AppNavigation = createStackNavigator(
  {
    SignIn: { screen: SignIn },
    Matches: { screen: Matches },
    Question: { screen: Question },
    LineUp: { screen: LineUp },
    TwoOptionsQuestion: { screen: TwoOptionsQuestion },
    BestPlayer: { screen: BestPlayer },
    BestEleven: { screen: BestEleven },
    BestWeeklyEleven: { screen: BestWeeklyEleven },
    MatchStats: { screen: MatchStats },
    MatchDetail: { screen: MatchDetail },
    RewardQuestion: { screen: RewardQuestion },
    Drawer: { screen: Drawer },
    GoalAnalyticsResult: { screen: GoalAnalyticsResult },
    CoachAnalyticsResult: { screen: CoachAnalyticsResult },
    VarAnalyticsResult: { screen: VarAnalyticsResult },
    BestWeeklyElevenAnalyticsResult: {
      screen: BestWeeklyElevenAnalyticsResult,
    },
    SubstitutionAnalyticsResult: { screen: SubstitutionAnalyticsResult },
    BestElevenAnalyticsResult: { screen: BestElevenAnalyticsResult },
    BestPlayerAnalyticsResult: { screen: BestPlayerAnalyticsResult },
    LineUpAnalyticsResult: { screen: LineUpAnalyticsResult },
    LiveCouponResults: { screen: LiveCouponResults },
    Substitution: { screen: Substitution },
    Offer: { screen: Offer },
    LiveCoupon: { screen: LiveCoupon },
    Coupons: { screen: Coupons },
  },
  {
    index: 0,
    initialRouteName: 'SignIn',
    headerMode: 'none',
  }
);

export default AppNavigation;
