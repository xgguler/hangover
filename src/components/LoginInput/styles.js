import theme from '@theme/variables/fanEngagement';

export default {
  inputWrapper: {
    paddingLeft: 15,
    paddingRight: 5,
    marginLeft: 0,
    borderBottomWidth: 0.8,
    borderColor: 'rgba(255, 255, 255, 0.5)',
  },
  input: {
    fontFamily: 'Roboto_light',
    fontSize: 18,
    height: 65,
    paddingLeft: 15,
    color: '#fff',
  },
  icon: {
    marginLeft: 10,
    color: '#fff',
    fontSize: 30,
  },
  error: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    color: theme.brandDanger,
    fontSize: 15,
    paddingRight: 5,
    textAlign: 'right',
  },
};
