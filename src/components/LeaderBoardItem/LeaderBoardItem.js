import React from 'react';
import PropTypes from 'prop-types';
import { View, Grid, Col, Row, Text, Thumbnail } from 'native-base';

import styles from './styles';

const LeaderBoardItem = ({ item, style, color }) => {
  const borderColor = color ? color : item.color;

  // return a view that contains a row which contain profile photo, username and score.
  return (
    <View style={[styles.item.content, { borderColor: borderColor }, style]}>
      <Grid>
        <Col size={7} style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Thumbnail small source={{ uri: item.AVATAR }} />
          <View>
            <Text style={styles.item.title}>{item.USERNAME}</Text>
          </View>
        </Col>
        <Col
          size={3}
          style={{ justifyContent: 'center', alignItems: 'flex-end' }}>
          <Text style={styles.item.incomeAmount}>{item.TOTAL_SCORE}</Text>
        </Col>
      </Grid>
    </View>
  );
};

LeaderBoardItem.propTypes = {
  item: PropTypes.object.isRequired,
  style: PropTypes.object,
  color: PropTypes.string,
};

export default LeaderBoardItem;
