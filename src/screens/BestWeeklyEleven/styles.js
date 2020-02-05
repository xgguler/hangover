import theme from '@theme/variables/fanEngagement';

export default {
  background: {
    flex: 1,
    width: null,
    height: null,
  },
  slider: {
    marginTop: 35,
  },
  slide: {
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFF',
      paddingTop: 8,
      paddingBottom: 8,
      paddingLeft: 3,
      paddingRight: 3,
      height: '10%',
    },
    illustration: {
      height: 100,
      resizeMode: 'contain',
      alignSelf: 'center',
    },
    title: {
      fontSize: 11,
      padding: 10,
      paddingTop: 20,
      paddingBottom: 20,
      fontWeight: '600',
      textAlign: 'center',
    },
    subtitle: {
      fontFamily: 'Roboto_light',
      fontSize: 8,
      padding: 15,
      paddingTop: 0,
      textAlign: 'center',
    },
    btnWrapper: {
      alignSelf: 'center',
    },
    btnText: {
      color: theme.brandPrimary,
    },
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: theme.brandPrimary,
  },
  skipBtn: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    left: 0,
    borderRadius: 0,
  },
  answerButton: {
    margin: 5,
    borderRadius: 10,
  },
};
