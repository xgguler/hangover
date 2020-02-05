import { Dimensions } from 'react-native';
import theme from '@theme/variables/fanEngagement';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default {
  container: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: '#FFF',
  },
  emptyContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyMsg: {
    color: '#777',
    fontSize: 18,
    alignSelf: 'center',
  },
  chartTitle: {
    paddingTop: 10,
    fontSize: 18,
    textAlign: 'center',
  },
  chartSecondTitle: {
    paddingTop: 10,
    fontSize: 15,
    color: '#404040',
    textAlign: 'center',
  },

  substitutionTitles: {
    width: '25%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  chartLineUpTitle: {
    paddingTop: 10,
    fontSize: 15,
    color: '#5d2e8f',
    textAlign: 'center',
  },
  slides: {
    alignItems: 'center',
    padding: 20,
    height: deviceHeight,
    width: deviceWidth,
  },
  spinner: {
    paddingTop: deviceHeight / 2 - 10,
  },
};
