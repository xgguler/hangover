import React, { Component } from 'react';
import {
    Container,
    Content,
    Header,
    Tab,
    Text,
    View,
    Fab, Row, Grid, Col, Thumbnail, Left, Body, Title, Icon, Right, Button
} from 'native-base';
import {ActivityIndicator, Alert, TouchableOpacity, FlatList, StyleSheet, Platform, ScrollView} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import styles from "./styles";

let matchCount = 0;
let rate = 1;

export default class MatchDetail extends Component {
    constructor(props){
        super(props);

        this.state = {
            isLoading: true,
            expandedMS: true,
            expanded23: true,
            expanded46: true,
            expanded7: true,
            expandedYC: true,
            expandedRC: true,
            expandedL5M: true,
            expandedTG: true,
            serverData: [],
            fetching_from_server: false,
            serverDataComment: [],
            fetching_from_server_comment: false
        };

        this.timer = -1;
        this.page = 0;
        this.pageComment = 0;
    }

    loadMoreDataComment = () => {
        if(this.pageComment < 14) {
            this.pageComment = this.pageComment + 1;
            this.setState({ fetching_from_server_comment: true }, () =>
            {
                    fetch('https://ah7ye2r9sq6vwnbu-fan-connectivity.cfapps.eu10.hana.ondemand.com/rest/matches/live-forum/Entity.xsjs?results=1&page=' + this.pageComment)
                        .then((response) => response.json())
                        .then((responseJson) =>
                        {
                            this.setState({ serverDataComment: [ ...this.state.serverDataComment, ...responseJson.results ], fetching_from_server_comment: false });
                        })
                        .catch((error) =>
                        {
                            console.error(error);
                        });
            });
        }
    };

    loadMoreData = () => {
        if(this.page < 11) {
            this.page = this.page + 1;
            this.setState({ fetching_from_server: true }, () =>
            {
                    fetch('https://ah7ye2r9sq6vwnbu-fan-connectivity.cfapps.eu10.hana.ondemand.com/rest/matches/live-match/Entity.xsjs?results=3&page=' + this.page)
                        .then((response) => response.json())
                        .then((responseJson) =>
                        {
                            this.setState({ serverData: [ ...this.state.serverData, ...responseJson.results ], fetching_from_server: false });
                        })
                        .catch((error) =>
                        {
                            console.error(error);
                        });
            });
        }
    };


    componentDidMount() {
        return fetch('https://ah7ye2r9sq6vwnbu-fan-connectivity.cfapps.eu10.hana.ondemand.com/rest/matches/detailed-stats/Entity.xsjs', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({
                "TEAM1": this.props.navigation.getParam('team1'),
                "TEAM2": this.props.navigation.getParam('team2'),
                "INDEX": this.props.navigation.getParam('index')
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                this.timer = setInterval(()=> this.loadMoreData(), 4000);
                this.timer = setInterval(()=> this.loadMoreDataComment(), 6500);
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
    }

    addRateToCoupon = (match, matchRate) => {
        this.setState({
            fabMatch: match,
            fabMatchRate: matchRate,
        });
    };

    renderFooter()
    {
        return (
            <View style = { liveStyles.footer }>
                {
                    ( this.state.fetching_from_server )
                        ?
                        <ActivityIndicator color = "white" style = {{ marginLeft: 8 }} />
                        :
                        null
                }
            </View>
        )
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            );
        }

        let team1 = this.props.navigation.getParam('team1');
        let date = this.props.navigation.getParam('date');
        let day = this.props.navigation.getParam('day');
        let time = this.props.navigation.getParam('time');
        let team2 = this.props.navigation.getParam('team2');
        return (
            <Container>
                <Header style={{backgroundColor: "#000000"}}>
                    <Left>
                        <Button transparent
                                onPress={() => this.props.navigation.navigate('Matches')}>
                            <Icon type="FontAwesome" name="angle-left" />
                        </Button>
                    </Left>
                    <Body>
                    <Title style={{color: "#ffffff"}}>Match Details</Title>
                    </Body>
                    <Right/>
                </Header>
                <View style={{height: 100, backgroundColor: '#92E5E2'}}>
                    <Grid>
                        <Row>
                            <Grid style={{ height: 100 }}>
                                <Col
                                    style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                    <Text
                                        style={{
                                            fontSize: 14,
                                            fontWeight: 'bold',
                                        }}>
                                        {team1}
                                    </Text>
                                </Col>
                                <Col
                                    style={{
                                        marginTop: 15,
                                        width: 75,
                                        alignItems: 'center',
                                    }}>
                                    <Text style={{ fontSize: 10 }}>{date}</Text>
                                    <Text style={{ fontSize: 10 }}>{day}</Text>
                                    <Text
                                        style={{
                                            fontSize: 10,
                                            fontWeight: 'bold',
                                            color: '#145e2f',
                                            marginTop: 5,
                                            marginBottom: 8,
                                        }}>
                                        {time}
                                    </Text>
                                    <Thumbnail
                                        style={{ marginBottom: 10, height: 20, width: 20 }}
                                        square
                                        source={require('../../../assets/images/cl.png')}
                                    />
                                </Col>
                                <Col
                                    style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                    <Text
                                        style={{
                                            fontSize: 14,
                                            fontWeight: 'bold',
                                        }}>
                                        {team2}
                                    </Text>
                                </Col>
                            </Grid>
                        </Row>
                    </Grid>
                </View>
                <Content
                    scrollEnabled={false}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flex: 1 }}>
                    <ScrollableTabView>
                        <Tab tabLabel="Rates">
                            <Content>
                                <ScrollView>
                                    <View style={{marginTop: 10, marginBottom: 40, marginLeft: 10, marginRight: 10}}>
                                        <TouchableOpacity style={{width: '100%'}} onPress={() => this.setState({ expandedMS : !this.state.expandedMS })}>
                                            <Text>Match Score <Icon type="FontAwesome" name="angle-down" /></Text>
                                        </TouchableOpacity>
                                        <View>
                                            {this.state.expandedMS !== false && <Grid>
                                                <Row>
                                                    <Grid style={{ height: 50 }}>
                                                        <Col style={{
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            backgroundColor: '#32B36A'
                                                        }}>
                                                            <Text onPress={() => Alert.alert(
                                                                'Maç Seçimi',
                                                                'Seçim kuponunuza eklendi.',
                                                                [
                                                                    {text: 'OK', onPress: () => {
                                                                            matchCount++;
                                                                            rate *= this.state.dataSource.HOME;
                                                                            rate = rate.toFixed(2);
                                                                            rate = Number(rate);
                                                                            this.addRateToCoupon(matchCount, rate)
                                                                        }
                                                                    },
                                                                ],
                                                                {cancelable: false},
                                                            )}>{this.state.dataSource.HOME}</Text>
                                                        </Col>
                                                        <Col style={{
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            backgroundColor: 'orange'
                                                        }}>
                                                            <Text onPress={() => Alert.alert(
                                                                'Maç Seçimi',
                                                                'Seçim kuponunuza eklendi.',
                                                                [
                                                                    {text: 'OK', onPress: () => {
                                                                            matchCount++;
                                                                            rate *= this.state.dataSource.DRAW;
                                                                            rate = rate.toFixed(2);
                                                                            rate = Number(rate);
                                                                            this.addRateToCoupon(matchCount, rate)
                                                                        }
                                                                    },
                                                                ],
                                                                {cancelable: false},
                                                            )}>{this.state.dataSource.DRAW}</Text>
                                                        </Col>
                                                        <Col style={{
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            backgroundColor: '#32B36A'
                                                        }}>
                                                            <Text onPress={() => Alert.alert(
                                                                'Maç Seçimi',
                                                                'Seçim kuponunuza eklendi.',
                                                                [
                                                                    {text: 'OK', onPress: () => {
                                                                            matchCount++;
                                                                            rate *= this.state.dataSource.AWAY;
                                                                            rate = rate.toFixed(2);
                                                                            rate = Number(rate);
                                                                            this.addRateToCoupon(matchCount, rate)
                                                                        }
                                                                    },
                                                                ],
                                                                {cancelable: false},
                                                            )}>{this.state.dataSource.AWAY}</Text>
                                                        </Col>
                                                    </Grid>
                                                </Row>
                                            </Grid>}
                                        </View>
                                    </View>

                                    <View style={{marginTop: 10, marginBottom: 40, marginLeft: 10, marginRight: 10}}>
                                        <TouchableOpacity style={{width: '100%'}} onPress={() => this.setState({ expanded23 : !this.state.expanded23 })}>
                                            <Text>Total Goal (2-3) <Icon type="FontAwesome" name="angle-down" /></Text>
                                        </TouchableOpacity>
                                        <View>
                                            {this.state.expanded23 !== false && <Grid>
                                                <Row>
                                                    <Grid style={{ height: 50 }}>
                                                        <Col style={{
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            backgroundColor: '#32B36A'
                                                        }}>
                                                            <Text onPress={() => Alert.alert(
                                                                'Maç Seçimi',
                                                                'Seçim kuponunuza eklendi.',
                                                                [
                                                                    {text: 'OK', onPress: () => {
                                                                            matchCount++;
                                                                            rate *= this.state.dataSource.TOTAL_GOAL_SCORE_23;
                                                                            rate = rate.toFixed(2);
                                                                            rate = Number(rate);
                                                                            this.addRateToCoupon(matchCount, rate)
                                                                        }
                                                                    },
                                                                ],
                                                                {cancelable: false},
                                                            )}>{this.state.dataSource.TOTAL_GOAL_SCORE_23}</Text>
                                                        </Col>
                                                        <Col style={{
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            backgroundColor: '#ffffff'
                                                        }}/>
                                                        <Col style={{
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            backgroundColor: '#ffffff'
                                                        }}/>
                                                    </Grid>
                                                </Row>
                                            </Grid>}
                                        </View>
                                    </View>

                                    <View style={{marginTop: 10, marginBottom: 40, marginLeft: 10, marginRight: 10}}>
                                        <TouchableOpacity style={{width: '100%'}} onPress={() => this.setState({ expanded46 : !this.state.expanded46 })}>
                                            <Text>Total Goal (4-6) <Icon type="FontAwesome" name="angle-down" /></Text>
                                        </TouchableOpacity>
                                        <View>
                                            {this.state.expanded46 !== false && <Grid>
                                                <Row>
                                                    <Grid style={{ height: 50 }}>
                                                        <Col style={{
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            backgroundColor: '#32B36A'
                                                        }}>
                                                            <Text onPress={() => Alert.alert(
                                                                'Maç Seçimi',
                                                                'Seçim kuponunuza eklendi.',
                                                                [
                                                                    {text: 'OK', onPress: () => {
                                                                            matchCount++;
                                                                            rate *= this.state.dataSource.TOTAL_GOAL_SCORE_46;
                                                                            rate = rate.toFixed(2);
                                                                            rate = Number(rate);
                                                                            this.addRateToCoupon(matchCount, rate)
                                                                        }
                                                                    },
                                                                ],
                                                                {cancelable: false},
                                                            )}>{this.state.dataSource.TOTAL_GOAL_SCORE_46}</Text>
                                                        </Col>
                                                        <Col style={{
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            backgroundColor: '#ffffff'
                                                        }}/>
                                                        <Col style={{
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            backgroundColor: '#ffffff'
                                                        }}/>
                                                    </Grid>
                                                </Row>
                                            </Grid>}
                                        </View>
                                    </View>

                                    <View style={{marginTop: 10, marginBottom: 40, marginLeft: 10, marginRight: 10}}>
                                        <TouchableOpacity style={{width: '100%'}} onPress={() => this.setState({ expanded7 : !this.state.expanded7 })}>
                                            <Text>Total Goal (7+) <Icon type="FontAwesome" name="angle-down" /></Text>
                                        </TouchableOpacity>
                                        <View>
                                            {this.state.expanded7 !== false && <Grid>
                                                <Row>
                                                    <Grid style={{ height: 50 }}>
                                                        <Col style={{
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            backgroundColor: '#32B36A'
                                                        }}>
                                                            <Text onPress={() => Alert.alert(
                                                                'Maç Seçimi',
                                                                'Seçim kuponunuza eklendi.',
                                                                [
                                                                    {text: 'OK', onPress: () => {
                                                                            matchCount++;
                                                                            rate *= this.state.dataSource.TOTAL_GOAL_SCORE_7;
                                                                            rate = rate.toFixed(2);
                                                                            rate = Number(rate);
                                                                            this.addRateToCoupon(matchCount, rate)
                                                                        }
                                                                    },
                                                                ],
                                                                {cancelable: false},
                                                            )}>{this.state.dataSource.TOTAL_GOAL_SCORE_7}</Text>
                                                        </Col>
                                                        <Col style={{
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            backgroundColor: '#ffffff'
                                                        }}/>
                                                        <Col style={{
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            backgroundColor: '#ffffff'
                                                        }}/>
                                                    </Grid>
                                                </Row>
                                            </Grid>}
                                        </View>
                                    </View>

                                    <View style={{marginTop: 10, marginBottom: 40, marginLeft: 10, marginRight: 10}}>
                                        <TouchableOpacity style={{width: '100%'}} onPress={() => this.setState({ expandedYC : !this.state.expandedYC })}>
                                            <Text>First Yellow Card <Icon type="FontAwesome" name="angle-down" /></Text>
                                        </TouchableOpacity>
                                        <View>
                                            {this.state.expandedYC !== false && <Grid>
                                                <Row>
                                                    <Grid style={{ height: 50 }}>
                                                        <Col style={{
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            backgroundColor: '#32B36A'
                                                        }}>
                                                            <Text onPress={() => Alert.alert(
                                                                'Maç Seçimi',
                                                                'Seçim kuponunuza eklendi.',
                                                                [
                                                                    {text: 'OK', onPress: () => {
                                                                            matchCount++;
                                                                            rate *= this.state.dataSource.FirstYellowCardRates.TEAM1;
                                                                            rate = rate.toFixed(2);
                                                                            rate = Number(rate);
                                                                            this.addRateToCoupon(matchCount, rate)
                                                                        }
                                                                    },
                                                                ],
                                                                {cancelable: false},
                                                            )}>{this.state.dataSource.FirstYellowCardRates.TEAM1}</Text>
                                                        </Col>
                                                        <Col style={{
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            backgroundColor: 'orange'
                                                        }}>
                                                            <Text onPress={() => Alert.alert(
                                                                'Maç Seçimi',
                                                                'Seçim kuponunuza eklendi.',
                                                                [
                                                                    {text: 'OK', onPress: () => {
                                                                            matchCount++;
                                                                            rate *= this.state.dataSource.FirstYellowCardRates.TEAM2;
                                                                            rate = rate.toFixed(2);
                                                                            rate = Number(rate);
                                                                            this.addRateToCoupon(matchCount, rate)
                                                                        }
                                                                    },
                                                                ],
                                                                {cancelable: false},
                                                            )}>{this.state.dataSource.FirstYellowCardRates.TEAM2}</Text>
                                                        </Col>
                                                        <Col style={{
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            backgroundColor: '#ffffff'
                                                        }}/>
                                                    </Grid>
                                                </Row>
                                            </Grid>}
                                        </View>
                                    </View>

                                    <View style={{marginTop: 10, marginBottom: 40, marginLeft: 10, marginRight: 10}}>
                                        <TouchableOpacity style={{width: '100%'}} onPress={() => this.setState({ expandedRC : !this.state.expandedRC })}>
                                            <Text>First Red Card <Icon type="FontAwesome" name="angle-down" /></Text>
                                        </TouchableOpacity>
                                        <View>
                                            {this.state.expandedRC !== false && <Grid>
                                                <Row>
                                                    <Grid style={{ height: 50 }}>
                                                        <Col style={{
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            backgroundColor: '#32B36A'
                                                        }}>
                                                            <Text onPress={() => Alert.alert(
                                                                'Maç Seçimi',
                                                                'Seçim kuponunuza eklendi.',
                                                                [
                                                                    {text: 'OK', onPress: () => {
                                                                            matchCount++;
                                                                            rate *= this.state.dataSource.FirstRedCardRates.TEAM1;
                                                                            rate = rate.toFixed(2);
                                                                            rate = Number(rate);
                                                                            this.addRateToCoupon(matchCount, rate)
                                                                        }
                                                                    },
                                                                ],
                                                                {cancelable: false},
                                                            )}>{this.state.dataSource.FirstRedCardRates.TEAM1}</Text>
                                                        </Col>
                                                        <Col style={{
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            backgroundColor: 'orange'
                                                        }}>
                                                            <Text onPress={() => Alert.alert(
                                                                'Maç Seçimi',
                                                                'Seçim kuponunuza eklendi.',
                                                                [
                                                                    {text: 'OK', onPress: () => {
                                                                            matchCount++;
                                                                            rate *= this.state.dataSource.FirstYellowCardRates.TEAM2;
                                                                            rate = rate.toFixed(2);
                                                                            rate = Number(rate);
                                                                            this.addRateToCoupon(matchCount, rate)
                                                                        }
                                                                    },
                                                                ],
                                                                {cancelable: false},
                                                            )}>{this.state.dataSource.FirstRedCardRates.TEAM2}</Text>
                                                        </Col>
                                                        <Col style={{
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            backgroundColor: '#ffffff'
                                                        }}/>
                                                    </Grid>
                                                </Row>
                                            </Grid>}
                                        </View>
                                    </View>

                                    <View style={{marginTop: 10, marginBottom: 40, marginLeft: 10, marginRight: 10}}>
                                        <TouchableOpacity style={{width: '100%'}} onPress={() => this.setState({ expandedTI : !this.state.expandedTI })}>
                                            <Text>First Throw In <Icon type="FontAwesome" name="angle-down" /></Text>
                                        </TouchableOpacity>
                                        <View>
                                            {this.state.expandedTI !== false && <Grid>
                                                <Row>
                                                    <Grid style={{ height: 50 }}>
                                                        <Col style={{
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            backgroundColor: '#32B36A'
                                                        }}>
                                                            <Text onPress={() => Alert.alert(
                                                                'Maç Seçimi',
                                                                'Seçim kuponunuza eklendi.',
                                                                [
                                                                    {text: 'OK', onPress: () => {
                                                                            matchCount++;
                                                                            rate *= this.state.dataSource.FirstThrowInRates.TEAM1;
                                                                            rate = rate.toFixed(2);
                                                                            rate = Number(rate);
                                                                            this.addRateToCoupon(matchCount, rate)
                                                                        }
                                                                    },
                                                                ],
                                                                {cancelable: false},
                                                            )}>{this.state.dataSource.FirstThrowInRates.TEAM1}</Text>
                                                        </Col>
                                                        <Col style={{
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            backgroundColor: 'orange'
                                                        }}>
                                                            <Text onPress={() => Alert.alert(
                                                                'Maç Seçimi',
                                                                'Seçim kuponunuza eklendi.',
                                                                [
                                                                    {text: 'OK', onPress: () => {
                                                                            matchCount++;
                                                                            rate *= this.state.dataSource.FirstThrowInRates.TEAM2;
                                                                            rate = rate.toFixed(2);
                                                                            rate = Number(rate);
                                                                            this.addRateToCoupon(matchCount, rate)
                                                                        }
                                                                    },
                                                                ],
                                                                {cancelable: false},
                                                            )}>{this.state.dataSource.FirstThrowInRates.TEAM2}</Text>
                                                        </Col>
                                                        <Col style={{
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            backgroundColor: '#ffffff'
                                                        }}/>
                                                    </Grid>
                                                </Row>
                                            </Grid>}
                                        </View>
                                    </View>

                                    <View style={{marginTop: 10, marginBottom: 40, marginLeft: 10, marginRight: 10}}>
                                        <TouchableOpacity style={{width: '100%'}} onPress={() => this.setState({ expandedFK : !this.state.expandedFK })}>
                                            <Text>First Free Kick <Icon type="FontAwesome" name="angle-down" /></Text>
                                        </TouchableOpacity>
                                        <View>
                                            {this.state.expandedFK !== false && <Grid>
                                                <Row>
                                                    <Grid style={{ height: 50 }}>
                                                        <Col style={{
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            backgroundColor: '#32B36A'
                                                        }}>
                                                            <Text onPress={() => Alert.alert(
                                                                'Maç Seçimi',
                                                                'Seçim kuponunuza eklendi.',
                                                                [
                                                                    {text: 'OK', onPress: () => {
                                                                            matchCount++;
                                                                            rate *= this.state.dataSource.FirstFreeKickRates.TEAM1;
                                                                            rate = rate.toFixed(2);
                                                                            rate = Number(rate);
                                                                            this.addRateToCoupon(matchCount, rate)
                                                                        }
                                                                    },
                                                                ],
                                                                {cancelable: false},
                                                            )}>{this.state.dataSource.FirstFreeKickRates.TEAM1}</Text>
                                                        </Col>
                                                        <Col style={{
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            backgroundColor: 'orange'
                                                        }}>
                                                            <Text onPress={() => Alert.alert(
                                                                'Maç Seçimi',
                                                                'Seçim kuponunuza eklendi.',
                                                                [
                                                                    {text: 'OK', onPress: () => {
                                                                            matchCount++;
                                                                            rate *= this.state.dataSource.FirstFreeKickRates.TEAM2;
                                                                            rate = rate.toFixed(2);
                                                                            rate = Number(rate);
                                                                            this.addRateToCoupon(matchCount, rate)
                                                                        }
                                                                    },
                                                                ],
                                                                {cancelable: false},
                                                            )}>{this.state.dataSource.FirstFreeKickRates.TEAM2}</Text>
                                                        </Col>
                                                        <Col style={{
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            backgroundColor: '#ffffff'
                                                        }}/>
                                                    </Grid>
                                                </Row>
                                            </Grid>}
                                        </View>
                                    </View>
                                </ScrollView>
                            </Content>
                        </Tab>
                        <Tab tabLabel="Stats">
                            <Content>
                                <ScrollView>
                                    <View style={{marginTop: 10, marginBottom: 40, marginLeft: 10, marginRight: 10}}>
                                        <TouchableOpacity style={{width: '100%', backgroundColor: '#FFFFFF'}} onPress={() => this.setState({ expandedL5M : !this.state.expandedL5M })}>
                                            <Text style={{fontWeight: 'bold', color: '#145e2f'}}>Last 5 Match Scores Between the Teams <Icon type="FontAwesome" name="angle-down" /></Text>
                                        </TouchableOpacity>
                                        <View>
                                            {this.state.expandedL5M !== false && <Grid>
                                                <Row>
                                                    <Grid style={{ height: 50 }}>
                                                        <Col style={{
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            backgroundColor: 'orange'
                                                        }}>
                                                            <Text>{team1} {'-'} {team2}</Text>
                                                        </Col>
                                                        <Col style={{
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            backgroundColor: 'orange'
                                                        }}>
                                                            <Text>Ball Possessions</Text>
                                                        </Col>

                                                        <Col style={{
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            backgroundColor: 'orange'
                                                        }}>
                                                            <Text>Yellow Cards</Text>
                                                        </Col>

                                                        <Col style={{
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            backgroundColor: 'orange'
                                                        }}>
                                                            <Text>Red Cards</Text>
                                                        </Col>

                                                        <Col style={{
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            backgroundColor: 'orange'
                                                        }}>
                                                            <Text>Completed Passes</Text>
                                                        </Col>
                                                    </Grid>
                                                </Row>
                                                <Row>
                                                    <Grid style={{ height: 50 }}>
                                                        <Col style={{
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            backgroundColor: '#CCFCE1'
                                                        }}>
                                                            <Text>{team1} {this.state.dataSource.LastFiveMatchScores[0].TEAM1} {'-'} {this.state.dataSource.LastFiveMatchScores[0].TEAM2} {team2}</Text>
                                                        </Col>
                                                        <Col style={{
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            backgroundColor: '#CCFCE1'
                                                        }}>
                                                            <Text>{this.state.dataSource.LastFiveMatchScores[0].BallPossessionTeam1} {'-'} {this.state.dataSource.LastFiveMatchScores[0].BallPossessionTeam2}</Text>
                                                        </Col>
                                                        <Col style={{
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            backgroundColor: '#CCFCE1'
                                                        }}>
                                                            <Text>{this.state.dataSource.LastFiveMatchScores[0].YellowCardTeam1} {'-'} {this.state.dataSource.LastFiveMatchScores[0].YellowCardTeam2}</Text>
                                                        </Col>
                                                        <Col style={{
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            backgroundColor: '#CCFCE1'
                                                        }}>
                                                            <Text>{this.state.dataSource.LastFiveMatchScores[0].RedCardTeam1} {'-'} {this.state.dataSource.LastFiveMatchScores[0].RedCardTeam2}</Text>
                                                        </Col>
                                                        <Col style={{
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            backgroundColor: '#CCFCE1'
                                                        }}>
                                                            <Text>{this.state.dataSource.LastFiveMatchScores[0].CompletedPassesTeam1} {'-'} {this.state.dataSource.LastFiveMatchScores[0].CompletedPassesTeam2}</Text>
                                                        </Col>
                                                    </Grid>
                                                </Row>
                                                <Row>
                                                    <Grid style={{ height: 50 }}>
                                                        <Col style={{
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            backgroundColor: '#CCFCE1'
                                                        }}>
                                                            <Text>{team1} {this.state.dataSource.LastFiveMatchScores[1].TEAM1} {'-'} {this.state.dataSource.LastFiveMatchScores[1].TEAM2} {team2}</Text>
                                                        </Col>
                                                        <Col style={{
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            backgroundColor: '#CCFCE1'
                                                        }}>
                                                            <Text>{this.state.dataSource.LastFiveMatchScores[1].BallPossessionTeam1} {'-'} {this.state.dataSource.LastFiveMatchScores[1].BallPossessionTeam2}</Text>
                                                        </Col>
                                                        <Col style={{
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            backgroundColor: '#CCFCE1'
                                                        }}>
                                                            <Text>{this.state.dataSource.LastFiveMatchScores[1].YellowCardTeam1} {'-'} {this.state.dataSource.LastFiveMatchScores[1].YellowCardTeam2}</Text>
                                                        </Col>
                                                        <Col style={{
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            backgroundColor: '#CCFCE1'
                                                        }}>
                                                            <Text>{this.state.dataSource.LastFiveMatchScores[1].RedCardTeam1} {'-'} {this.state.dataSource.LastFiveMatchScores[1].RedCardTeam2}</Text>
                                                        </Col>
                                                        <Col style={{
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            backgroundColor: '#CCFCE1'
                                                        }}>
                                                            <Text>{this.state.dataSource.LastFiveMatchScores[1].CompletedPassesTeam1} {'-'} {this.state.dataSource.LastFiveMatchScores[1].CompletedPassesTeam2}</Text>
                                                        </Col>
                                                    </Grid>
                                                </Row>
                                                <Row>
                                                    <Grid style={{ height: 50 }}>
                                                        <Col style={{
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            backgroundColor: '#CCFCE1'
                                                        }}>
                                                            <Text>{team1} {this.state.dataSource.LastFiveMatchScores[2].TEAM1} {'-'} {this.state.dataSource.LastFiveMatchScores[2].TEAM2} {team2}</Text>
                                                        </Col>
                                                        <Col style={{
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            backgroundColor: '#CCFCE1'
                                                        }}>
                                                            <Text>{this.state.dataSource.LastFiveMatchScores[2].BallPossessionTeam1} {'-'} {this.state.dataSource.LastFiveMatchScores[2].BallPossessionTeam2}</Text>
                                                        </Col>
                                                        <Col style={{
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            backgroundColor: '#CCFCE1'
                                                        }}>
                                                            <Text>{this.state.dataSource.LastFiveMatchScores[2].YellowCardTeam1} {'-'} {this.state.dataSource.LastFiveMatchScores[2].YellowCardTeam2}</Text>
                                                        </Col>
                                                        <Col style={{
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            backgroundColor: '#CCFCE1'
                                                        }}>
                                                            <Text>{this.state.dataSource.LastFiveMatchScores[2].RedCardTeam1} {'-'} {this.state.dataSource.LastFiveMatchScores[2].RedCardTeam2}</Text>
                                                        </Col>
                                                        <Col style={{
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            backgroundColor: '#CCFCE1'
                                                        }}>
                                                            <Text>{this.state.dataSource.LastFiveMatchScores[2].CompletedPassesTeam1} {'-'} {this.state.dataSource.LastFiveMatchScores[2].CompletedPassesTeam2}</Text>
                                                        </Col>
                                                    </Grid>
                                                </Row>
                                                <Row>
                                                    <Grid style={{ height: 50 }}>
                                                        <Col style={{
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            backgroundColor: '#CCFCE1'
                                                        }}>
                                                            <Text>{team1} {this.state.dataSource.LastFiveMatchScores[3].TEAM1} {'-'} {this.state.dataSource.LastFiveMatchScores[3].TEAM2} {team2}</Text>
                                                        </Col>
                                                        <Col style={{
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            backgroundColor: '#CCFCE1'
                                                        }}>
                                                            <Text>{this.state.dataSource.LastFiveMatchScores[3].BallPossessionTeam1} {'-'} {this.state.dataSource.LastFiveMatchScores[3].BallPossessionTeam2}</Text>
                                                        </Col>
                                                        <Col style={{
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            backgroundColor: '#CCFCE1'
                                                        }}>
                                                            <Text>{this.state.dataSource.LastFiveMatchScores[3].YellowCardTeam1} {'-'} {this.state.dataSource.LastFiveMatchScores[3].YellowCardTeam2}</Text>
                                                        </Col>
                                                        <Col style={{
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            backgroundColor: '#CCFCE1'
                                                        }}>
                                                            <Text>{this.state.dataSource.LastFiveMatchScores[3].RedCardTeam1} {'-'} {this.state.dataSource.LastFiveMatchScores[3].RedCardTeam2}</Text>
                                                        </Col>
                                                        <Col style={{
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            backgroundColor: '#CCFCE1'
                                                        }}>
                                                            <Text>{this.state.dataSource.LastFiveMatchScores[3].CompletedPassesTeam1} {'-'} {this.state.dataSource.LastFiveMatchScores[3].CompletedPassesTeam2}</Text>
                                                        </Col>
                                                    </Grid>
                                                </Row>
                                                <Row>
                                                    <Grid style={{ height: 50 }}>
                                                        <Col style={{
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            backgroundColor: '#CCFCE1'
                                                        }}>
                                                            <Text>{team1} {this.state.dataSource.LastFiveMatchScores[4].TEAM1} {'-'} {this.state.dataSource.LastFiveMatchScores[4].TEAM2} {team2}</Text>
                                                        </Col>
                                                        <Col style={{
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            backgroundColor: '#CCFCE1'
                                                        }}>
                                                            <Text>{this.state.dataSource.LastFiveMatchScores[4].BallPossessionTeam1} {'-'} {this.state.dataSource.LastFiveMatchScores[4].BallPossessionTeam2}</Text>
                                                        </Col>
                                                        <Col style={{
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            backgroundColor: '#CCFCE1'
                                                        }}>
                                                            <Text>{this.state.dataSource.LastFiveMatchScores[4].YellowCardTeam1} {'-'} {this.state.dataSource.LastFiveMatchScores[4].YellowCardTeam2}</Text>
                                                        </Col>
                                                        <Col style={{
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            backgroundColor: '#CCFCE1'
                                                        }}>
                                                            <Text>{this.state.dataSource.LastFiveMatchScores[4].RedCardTeam1} {'-'} {this.state.dataSource.LastFiveMatchScores[4].RedCardTeam2}</Text>
                                                        </Col>
                                                        <Col style={{
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            backgroundColor: '#CCFCE1'
                                                        }}>
                                                            <Text>{this.state.dataSource.LastFiveMatchScores[4].CompletedPassesTeam1} {'-'} {this.state.dataSource.LastFiveMatchScores[4].CompletedPassesTeam2}</Text>
                                                        </Col>
                                                    </Grid>
                                                </Row>
                                            </Grid>}
                                        </View>
                                    </View>
                                    <View style={{marginTop: 10, marginBottom: 40, marginLeft: 10, marginRight: 10}}>
                                        <TouchableOpacity style={{width: '100%', backgroundColor: '#FFFFFF'}} onPress={() => this.setState({ expandedTG : !this.state.expandedTG })}>
                                            <Text style={{fontWeight: 'bold', color: '#145e2f'}}>Total Goals Between the Teams <Icon type="FontAwesome" name="angle-down" /></Text>
                                        </TouchableOpacity>
                                        <View>
                                            {this.state.expandedTG !== false && <Grid>
                                                <Row>
                                                    <Grid style={{ height: 50 }}>
                                                        <Col style={{
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            backgroundColor: 'orange'
                                                        }}>
                                                            <Text>{team1}</Text>
                                                        </Col>
                                                        <Col style={{
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            backgroundColor: 'orange'
                                                        }}>
                                                            <Text>{team2}</Text>
                                                        </Col>
                                                        <Col style={{
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            backgroundColor: 'orange'
                                                        }}>
                                                            <Text>Total Goal</Text>
                                                        </Col>
                                                    </Grid>
                                                </Row>
                                                <Row>
                                                    <Grid style={{ height: 50 }}>
                                                        <Col style={{
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            backgroundColor: '#CCFCE1'
                                                        }}>
                                                            <Text>{this.state.dataSource.TOTAL_GOALS_BTW_2_TEAMS.TEAM1}</Text>
                                                        </Col>
                                                        <Col style={{
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            backgroundColor: '#CCFCE1'
                                                        }}>
                                                            <Text>{this.state.dataSource.TOTAL_GOALS_BTW_2_TEAMS.TEAM2}</Text>
                                                        </Col>
                                                        <Col style={{
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            backgroundColor: '#CCFCE1'
                                                        }}>
                                                            <Text>{this.state.dataSource.TOTAL_GOALS_BTW_2_TEAMS.TOTAL}</Text>
                                                        </Col>
                                                    </Grid>
                                                </Row>
                                            </Grid>}
                                        </View>
                                    </View>
                                </ScrollView>
                            </Content>
                        </Tab>
                        <Tab tabLabel="Live Match">
                            <View style = { liveStyles.container }>
                                {
                                    ( this.state.loading )
                                        ?
                                        ( <ActivityIndicator size = "large" /> )
                                        :
                                        (
                                            <FlatList
                                                style = {{ width: '100%' }}
                                                keyExtractor = {( item, index ) => index }
                                                data = { this.state.serverData }
                                                renderItem = {({ item, index }) =>
                                                    <View style = { liveStyles.item }>
                                                        <Text style = { liveStyles.text }>{ item.TEXT } </Text>
                                                    </View>
                                                }
                                                ItemSeparatorComponent = {() => <View style = { liveStyles.separator } /> }
                                                ListFooterComponent = { this.renderFooter.bind( this ) }
                                            />
                                        )
                                }
                            </View>
                        </Tab>
                        <Tab tabLabel="Forum">
                        <View style = { liveStyles.container }>
                                {
                                    ( this.state.loading )
                                        ?
                                        ( <ActivityIndicator size = "large" /> )
                                        :
                                        (
                                            <FlatList
                                                style = {{ width: '100%' }}
                                                keyExtractor = {( item, index ) => index }
                                                data = { this.state.serverDataComment }
                                                renderItem = {({ item, index }) =>
                                                    <View style = { liveStyles.item }>
                                                        <Text style = { liveStyles.text }>{ item.TEXT } </Text>
                                                    </View>
                                                }
                                                ItemSeparatorComponent = {() => <View style = { liveStyles.separator } /> }
                                                ListFooterComponent = { this.renderFooter.bind( this ) }
                                            />
                                        )
                                }
                            </View>
                        </Tab>
                    </ScrollableTabView>
                    <Fab
                        direction="up"
                        containerStyle={{}}
                        style={ styles.fab }
                        position="bottomRight"
                        onPress={() => this.props.navigation.navigate('Coupons')}>
                        <View>
                            <Text style={{color: 'white', fontSize : 11}}>Maç</Text>
                            <Text style={{color: 'white', fontSize : 17}}>{this.state.fabMatch}</Text>
                            <Text style={{color: 'white', fontSize : 11}}>Oran</Text>
                            <Text style={{color: 'white', fontSize : 17}}>{this.state.fabMatchRate}</Text>
                        </View>
                    </Fab>
                </Content>
            </Container>
        );
    }

}

const liveStyles = StyleSheet.create(
    {
        container:
            {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: ( Platform.OS === 'ios' )? 20 : 0
            },

        item:
            {
                padding: 10
            },

        separator:
            {
                height: 1,
                backgroundColor: 'rgba(0,0,0,0.4)'
            },

        text:
            {
                fontSize: 20,
                color: 'black'
            },

        footer:
            {
                padding: 10,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                borderTopWidth: 1.5,
                borderTopColor: 'black'
            },

        loadMoreBtn:
            {
                padding: 10,
                backgroundColor: 'rgba(0,0,0,0.5)',
                borderRadius: 4,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
            },

        btnText:
            {
                color: 'white',
                fontSize: 15,
                textAlign: 'center'
            }
    });