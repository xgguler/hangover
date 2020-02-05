import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Dimensions,
    View,
    Image,
    StatusBar,
    Alert,
    ActivityIndicator,
} from 'react-native';
import {
    Container,
    Content,
    Text,
    Button,
    Card,
    Footer,
    } from 'native-base';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import { connect } from 'react-redux';
import { entries } from './config';

import styles from './styles';

import { getSession } from '../SignIn/selectors';

import { actionTypes } from '@utils/actionTypes';
import { CALL_API } from '@store/fanEngagementMiddleware';

export const liveCouponAnswerLoadActions = actionTypes('LIVE_COUPON_ANSWER_LOAD');

const deviceWidth = Dimensions.get('window').width;

class LiveCoupon extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
        };

        //bind datas into functions at the class initialize.
        this.renderSlide = this.renderSlide.bind(this);
        this.postLiveCouponAnswer = this.postLiveCouponAnswer.bind(this);
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
    async postLiveCouponAnswer(questionId) {
        // post the request which contains the user,question and answer data to the endpoint.
        await fetch('https://ah7ye2r9sq6vwnbu-fan-connectivity.cfapps.eu10.hana.ondemand.com/rest/coupon/live-coupon/Entity.xsjs', {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'ID': questionId
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState(
                    {
                        isLoading: false,
                        dataSource: responseJson,
                    },
                    function() {}
                );
                console.log(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });

        return (
            <Container>
                {Alert.alert(
                    "LIVE BET",
                    'Click the button to see which answers was chosen.',
                    [
                        {
                            text: 'Show Results',
                            onPress: () => {
                                this.props.navigation.navigate('LiveCouponResults', {
                                    data: this.state.dataSource,
                                    sizeOfArray: this.props.navigation.getParam('question').Answers.length,
                                });
                            },
                        },
                        {
                            text: 'Cancel',
                            style: 'cancel',
                        },
                    ]
                )}
            </Container>
        );
    }

    renderSlide({ item, index }) {
        const { navigation } = this.props;
        const question = navigation.getParam('question');

        const questionID = question.ID;
        const questionText = question.Question;

        const sizeOfArray = question.Answers.length;

        let answerText1;
        let answerText2;
        let answerText3;
        let answerText4;

        switch (sizeOfArray) {
            case 2:
                answerText1 = question.Answers[0].Text;
                answerText2 = question.Answers[1].Text;
                break;
            case 4:
                answerText1 = question.Answers[0].Text;
                answerText2 = question.Answers[1].Text;
                answerText3 = question.Answers[2].Text;
                answerText4 = question.Answers[3].Text;
                break;
        }

        console.log(question);

        return (
            <Container>
                {sizeOfArray == 2 && <Content>
                    <Card style={styles.slide.container}>
                        <View>
                            <Image
                                source={item.illustration}
                                style={styles.slide.illustration}
                            />
                            <Text style={styles.slide.subtitle}>{questionText}</Text>
                        </View>
                    </Card>
                    <Button
                        full
                        light
                        onPress={() => this.postLiveCouponAnswer(questionID)}
                        style={styles.answerButton}>
                        <Text style={styles.slide.btnText}>{answerText1}</Text>
                    </Button>
                    <Button
                        full
                        light
                        onPress={() => this.postLiveCouponAnswer(questionID)}
                        style={styles.answerButton}>
                        <Text style={styles.slide.btnText}>{answerText2}</Text>
                    </Button>
                </Content>}
                {sizeOfArray ==4 && <Content>
                    <Card style={styles.slide.container}>
                        <View>
                            <Image
                                source={item.illustration}
                                style={styles.slide.illustration}
                            />
                            <Text style={styles.slide.subtitle}>{questionText}</Text>
                        </View>
                    </Card>
                    <Button
                        full
                        light
                        onPress={() => this.postLiveCouponAnswer(questionID)}
                        style={styles.answerButton}>
                        <Text style={styles.slide.btnText}>{answerText1}</Text>
                    </Button>
                    <Button
                        full
                        light
                        onPress={() => this.postLiveCouponAnswer(questionID)}
                        style={styles.answerButton}>
                        <Text style={styles.slide.btnText}>{answerText2}</Text>
                    </Button>
                    <Button
                        full
                        light
                        onPress={() => this.postLiveCouponAnswer(questionID)}
                        style={styles.answerButton}>
                        <Text style={styles.slide.btnText}>{answerText3}</Text>
                    </Button>
                    <Button
                        full
                        light
                        onPress={() => this.postLiveCouponAnswer(questionID)}
                        style={styles.answerButton}>
                        <Text style={styles.slide.btnText}>{answerText4}</Text>
                    </Button>
                </Content>}
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
                        <Text>Cancel</Text>
                    </Button>
                </Footer>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    session: getSession(state),
});

export default connect(mapStateToProps)(LiveCoupon);
