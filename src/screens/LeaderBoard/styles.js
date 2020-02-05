import theme from '@theme/variables/fanEngagement';

export default {
  container: {
    flex: 1,
    width: null,
    height: null,
  },
  content: {
    backgroundColor: theme.brandPrimary,
  },
  emptyContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  emptyMsg: {
    color: '#777',
    fontSize: 18,
    alignSelf: 'center',
  },
  item: {
    container: {
      flex: 1,
      elevation: 0,
      paddingTop: 0,
      paddingBottom: 0,
      paddingRight: 0,
      paddingLeft: 0,
      borderRightWidth: 0,
      borderTopWidth: 0,
      borderBottomWidth: 0.3,
      borderBottomColor: '#ddd',
      borderLeftWidth: 0,
    },
  },
};
