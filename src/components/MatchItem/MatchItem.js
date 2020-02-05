import React from 'react';
import PropTypes from 'prop-types';
import { View, Grid, Col, Row, Thumbnail } from 'native-base';
import { Text, Alert } from 'react-native';

import styles from './styles';

let matchCount = 0;
let rate = 1;

const MatchItem = ({ index, navigation, item, style, color }) => {
  const borderColor = color ? color : item.color;

  // return match card view that contain team logos and match informations.
  return (
    <View style={[styles.item.content, { borderColor: borderColor }, style]}>
      <Grid button onPress={() => navigation.navigate("MatchDetail", {
          team1: item.TEAM1,
          date: item.DATE,
          day: item.DAY,
          time: item.TIME,
          team2: item.TEAM2,
          borderColor: borderColor,
          style: style,
          index: index,
      })}>
        <Row>
          <Grid style={{ height: 100 }}>
            <Col
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Thumbnail
                style={{ marginBottom: 10, height: 45, width: 45 }}
                square
                source={{uri: item.file}}
              />
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 'bold',
                }}>
                {item.sponsor}
              </Text>
            </Col>
            <Col
            style={{
              marginTop: 15,
              width: 75,
              alignItems: 'center',
            }}>
            <Text style={{
                  fontSize: 10,
                  fontWeight: 'bold',
                  color: '#145e2f',
                  marginTop: 5,
                  marginBottom: 8,
                }}> {'Katılımcı sayısı: '} {item.total_participants} </Text>
            <Text style={{
                  fontSize: 10,
                  fontWeight: 'bold',
                  color: '#145e2f',
                  marginTop: 5,
                  marginBottom: 8,
                }}> {'Ödül: '} {item.prize} </Text>
            </Col>
            <Col
              style={{
                marginTop: 15,
                width: 75,
                alignItems: 'center',
              }}>
              <Text style={{
                  fontSize: 10,
                  fontWeight: 'bold',
                  color: '#145e2f',
                  marginTop: 5,
                  marginBottom: 8,
                }}>{item.date}</Text>
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: 'bold',
                  color: '#145e2f',
                  marginTop: 5,
                  marginBottom: 8,
                }}>
                {item.time}
              </Text>
            </Col>
          </Grid>
        </Row>
      </Grid>
    </View>
  );
};

MatchItem.propTypes = {
  item: PropTypes.object.isRequired,
  style: PropTypes.object,
  color: PropTypes.string,
};

export default MatchItem;
