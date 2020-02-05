import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dimensions, View, Image, StatusBar, ScrollView } from 'react-native';
import {
  Container,
  Content,
  Text,
  Button,
  Card,
  Footer,
  ListItem,
  Body,
} from 'native-base';

import ScrollableTabView, {
  ScrollableTabBar,
} from 'react-native-scrollable-tab-view';

import Carousel, { Pagination } from 'react-native-snap-carousel';

import { connect } from 'react-redux';
import { entries } from './config';

import styles from './styles';

import { getSession } from '../SignIn/selectors';

import { actionTypes } from '@utils/actionTypes';
import { CALL_API } from '@store/fanEngagementMiddleware';

const deviceWidth = Dimensions.get('window').width;

class MatchStats extends Component {
  constructor(props) {
    super(props);

    //bind datas into functions at the class initialize.
    this.renderSlide = this.renderSlide.bind(this);
  }

  static propTypes = {
    dispatch: PropTypes.func,
    navigation: PropTypes.any,
    session: PropTypes.object,
  };

  static defaultProps = {
    session: {},
  };

  state = {
    activeSlide: 0,
  };

  renderSlide({ item, index }) {
    const { navigation } = this.props;
    const arr = navigation.getParam('arr', {});

    const bjkPossession = arr.Beşiktaş.Possession;
    const bjkShots = arr.Beşiktaş.Shots;
    const bjkOnTarget = arr.Beşiktaş.OnTarget;
    const bjkCorner = arr.Beşiktaş.Corner;
    const bjkYellowCard = arr.Beşiktaş.YellowCard;
    const bjkRedCard = arr.Beşiktaş.RedCard;
    const bjkPenalties = arr.Beşiktaş.Penalties;
    const bjkScore = arr.Beşiktaş.Score;

    const fbPossession = arr.Fenerbahçe.Possession;
    const fbShots = arr.Fenerbahçe.Shots;
    const fbOnTarget = arr.Fenerbahçe.OnTarget;
    const fbCorner = arr.Fenerbahçe.Corner;
    const fbYellowCard = arr.Fenerbahçe.YellowCard;
    const fbRedCard = arr.Fenerbahçe.RedCard;
    const fbPenalties = arr.Fenerbahçe.Penalties;
    const fbScore = arr.Fenerbahçe.Score;

    console.log(arr);

    return (
      <Container>
        <ScrollableTabView>
          <ScrollView tabLabel="Beşiktaş">
            <Content>
              <ListItem style={{ backgroundColor: '#a9a9a9' }}>
                <Body>
                  <Text>Statistics of the First Half</Text>
                </Body>
              </ListItem>
              <ListItem>
                <Body>
                  <Text>Possession: </Text>
                  <Text>{bjkPossession}</Text>
                </Body>
              </ListItem>
              <ListItem>
                <Body>
                  <Text>Shots: </Text>
                  <Text>{bjkShots}</Text>
                </Body>
              </ListItem>
              <ListItem>
                <Body>
                  <Text>Shots on Target: </Text>
                  <Text>{bjkOnTarget}</Text>
                </Body>
              </ListItem>
              <ListItem>
                <Body>
                  <Text>Corners: </Text>
                  <Text>{bjkCorner}</Text>
                </Body>
              </ListItem>
              <ListItem>
                <Body>
                  <Text>Yellow Cards: </Text>
                  <Text>{bjkYellowCard}</Text>
                </Body>
              </ListItem>
              <ListItem>
                <Body>
                  <Text>Red Cards: </Text>
                  <Text>{bjkRedCard}</Text>
                </Body>
              </ListItem>
              <ListItem>
                <Body>
                  <Text>Penalties: </Text>
                  <Text>{bjkPenalties}</Text>
                </Body>
              </ListItem>
              <ListItem>
                <Body>
                  <Text>Score: </Text>
                  <Text>{bjkScore}</Text>
                </Body>
              </ListItem>
            </Content>
          </ScrollView>
          <ScrollView tabLabel="Fenerbahçe">
            <Content>
              <ListItem style={{ backgroundColor: '#a9a9a9' }}>
                <Body>
                  <Text>Statistics of the First Half</Text>
                </Body>
              </ListItem>
              <ListItem>
                <Body>
                  <Text>Possession: </Text>
                  <Text>{fbPossession}</Text>
                </Body>
              </ListItem>
              <ListItem>
                <Body>
                  <Text>Shots: </Text>
                  <Text>{fbShots}</Text>
                </Body>
              </ListItem>
              <ListItem>
                <Body>
                  <Text>Shots on Target: </Text>
                  <Text>{fbOnTarget}</Text>
                </Body>
              </ListItem>
              <ListItem>
                <Body>
                  <Text>Corners: </Text>
                  <Text>{fbCorner}</Text>
                </Body>
              </ListItem>
              <ListItem>
                <Body>
                  <Text>Yellow Cards: </Text>
                  <Text>{fbYellowCard}</Text>
                </Body>
              </ListItem>
              <ListItem>
                <Body>
                  <Text>Red Cards: </Text>
                  <Text>{fbRedCard}</Text>
                </Body>
              </ListItem>
              <ListItem>
                <Body>
                  <Text>Penalties: </Text>
                  <Text>{fbPenalties}</Text>
                </Body>
              </ListItem>
              <ListItem>
                <Body>
                  <Text>Score: </Text>
                  <Text>{fbScore}</Text>
                </Body>
              </ListItem>
            </Content>
          </ScrollView>
        </ScrollableTabView>
      </Container>
    );
  }

  // create the page dots at the bottom of question card.
  renderPagination() {
    const { activeSlide } = this.state;
    return (
      <Pagination
        dotsLength={entries.length}
        activeDotIndex={activeSlide}
        dotStyle={styles.paginationDot}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  }

  render() {
    return (
      <Container>
        <StatusBar
          barStyle="dark-content"
          translucent={true}
          backgroundColor={'transparent'}
        />
        <Content>
          <Carousel
            ref={c => (this.carousel = c)}
            data={entries}
            renderItem={this.renderSlide}
            onSnapToItem={index => this.setState({ activeSlide: index })}
            sliderWidth={deviceWidth}
            itemWidth={deviceWidth - 50}
            hasParallaxImages={true}
            containerCustomStyle={styles.slider}
          />
          {this.renderPagination()}
        </Content>
        <Footer>
          <Button
            large
            primary
            block
            style={styles.skipBtn}
            onPress={() => this.props.navigation.navigate('Drawer')}>
            <Text> Done </Text>
          </Button>
        </Footer>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  session: getSession(state),
});

export default connect(mapStateToProps)(MatchStats);
