import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';

import { View } from 'native-base';

import MatchItem from '@components/MatchItem';
import categoryColors from '@theme/categoryColors';

import styles from './styles';

class MatchesList extends Component {
  static propTypes = {
    matchesList: PropTypes.array,
  };

  static defaultProps = {
    matchesList: [],
  };

  render() {
    // get the matchesList prop from the all of props.
    const { navigation, addRateToCoupon, matchesList } = this.props;

    // return a flat list that contains MatchItem component to display a match informations.
    return (
      <View
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: '#FFF' }}>
        <FlatList
          horizontal={false}
          showsVerticalScrollIndicator={false}
          data={matchesList}
          initialNumToRender={7}
          renderItem={({ item, index }) => (
            <View style={styles.item.container}>
              <MatchItem
                item={item}
                index={index}
                color={categoryColors[index % categoryColors.length]}
                navigation={navigation}
                addRateToCoupon={addRateToCoupon}
              />
            </View>
          )}
          keyExtractor={item => item.ID}
        />
      </View>
    );
  }
}

export default MatchesList;
