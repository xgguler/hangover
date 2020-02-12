import React from 'react';
import PropTypes from 'prop-types';
import {  Container, Header, Card, CardItem, Left, Content, Body, Right, Icon, Button, View, Grid, Col, Row, Thumbnail } from 'native-base';
import { Text, Image, Alert } from 'react-native';

import styles from './styles';

let matchCount = 0;
let rate = 1;

const MatchItem = ({ index, navigation, item, style, color }) => {
  const borderColor = color ? color : item.color;

  // return match card view that contain team logos and match informations.
  return (
          <Card>
            <CardItem cardBody button onPress={() => navigation.navigate("MenuAgriculture")}>
              <Image source={{uri: item.file}} style={{height: 140, width: null, flex: 1}}/>
            </CardItem>
          </Card> 
  );
};

MatchItem.propTypes = {
  item: PropTypes.object.isRequired,
  style: PropTypes.object,
  color: PropTypes.string,
};

export default MatchItem;
