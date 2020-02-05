import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dimensions, View, Image, StatusBar, Alert } from 'react-native';
import {
  Container,
  Content,
  Text,
  Button,
  Card,
  Footer,
  Spinner,
} from 'native-base';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import { connect } from 'react-redux';
import { entries } from './config';

import styles from './styles';

import { getSession } from '../SignIn/selectors';

import { actionTypes } from '@utils/actionTypes';
import { CALL_API } from '@store/fanEngagementMiddleware';

export const twoOptionsQuestionLoadActions = actionTypes(
  'TWO_OPTIONS_QUESTION_LOAD'
);

const deviceWidth = Dimensions.get('window').width;

class TwoOptionsQuestion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showME: false,
    };

    //bind datas into functions at the class initialize.
    this.renderSlide = this.renderSlide.bind(this);
    this.postTwoOptionsQuestion = this.postTwoOptionsQuestion.bind(this);
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

  // posted question and its answers to related user.
  postTwoOptionsQuestion(questionId, answerId) {
    const { navigation } = this.props;
    const question = navigation.getParam('question', {});

    const questionCategory = question.QUESTION.CATEGORY_ID;

    let requestBody = {
      UserQuestionAnswer: [
        {
          UserId: this.props.session.userId,
          QuestionId: questionId,
          AnswerId: answerId,
        },
      ],
    };

    // post the request which contains the user,question and answer data to the endpoint.
    this.props.dispatch({
      [CALL_API]: {
        type: twoOptionsQuestionLoadActions,
        entity: '/rest/user-answer/create/Entity.xsjs',
        method: 'post',
        data: requestBody,
      },
    });

    this.setState({
      showME: true,
    });

    return (
      <Container>
        {this.state.showME ? (
          <Spinner color="#000000" />
        ) : (
          Alert.alert(
            questionCategory,
            'Analytic Results',
            [
              {
                text: 'Show Results',
                onPress: () => {
                  //navigation
                  this.props.navigation.navigate('VarAnalyticsResult');
                },
              },
              {
                text: 'Cancel',
                onPress: () => {
                  this.props.navigation.navigate('Drawer');
                },
                style: 'cancel',
              },
            ],
            { cancelable: false }
          )
        )}
      </Container>
    );
  }

  renderSlide({ item, index }) {
    const { navigation } = this.props;
    const question = navigation.getParam('question', {});

    const questionID = question.QUESTION.ID;
    const questionText = question.QUESTION.TEXT;
    const questionCategory = question.QUESTION.CATEGORY_ID;

    const answerID1 = question.QUESTION.ANSWERS[0].ID;
    const answerID2 = question.QUESTION.ANSWERS[1].ID;

    const answerText1 = question.QUESTION.ANSWERS[0].TEXT;
    const answerText2 = question.QUESTION.ANSWERS[1].TEXT;

    console.log(question);

    return (
      <Container>
        <Content>
          <Card style={styles.slide.container}>
            <View>
              <Image
                source={item.illustration}
                style={styles.slide.illustration}
              />
              <Text style={styles.slide.title}>{questionCategory}</Text>
              <Text style={styles.slide.subtitle}>{questionText}</Text>
            </View>
          </Card>
          <Button
            full
            light
            onPress={() => this.postTwoOptionsQuestion(questionID, answerID1)}
            style={styles.answerButton}>
            <Text style={styles.slide.btnText}>{answerText1}</Text>
          </Button>
          <Button
            full
            light
            onPress={() => this.postTwoOptionsQuestion(questionID, answerID2)}
            style={styles.answerButton}>
            <Text style={styles.slide.btnText}>{answerText2}</Text>
          </Button>
        </Content>
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

export default connect(mapStateToProps)(TwoOptionsQuestion);
