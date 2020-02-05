import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';

import { View, Button, Icon, SwipeRow } from 'native-base';

import LeaderBoardItem from '@components/LeaderBoardItem';
import categoryColors from '@theme/categoryColors';

import styles from './styles';

class LeaderBoardList extends Component {
  static propTypes = {
    leaderBoardList: PropTypes.array,
  };

  static defaultProps = {
    leaderBoardList: [],
  };

  render() {
    // get the leaderBoardList prop from the all of props.
    const { leaderBoardList } = this.props;

    // return a flat list that contains LeaderBoardItem component to display a leaderboard informations.
    return (
      <View
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: '#FFF' }}>
        <FlatList
          horizontal={false}
          showsVerticalScrollIndicator={false}
          data={leaderBoardList}
          initialNumToRender={7}
          renderItem={({ item, index }) => (
            <View style={styles.item.container}>
              <LeaderBoardItem
                item={item}
                color={categoryColors[index % categoryColors.length]}
              />
            </View>
          )}
          keyExtractor={item => item.ID}
        />
      </View>
    );
  }
}

export default LeaderBoardList;
