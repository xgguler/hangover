import React, { Component } from 'react';
import {
    Container,
    Content,
    Text,
    View,
    Grid,
    Row,
    Col,
    Button,
    Left,
    Icon,
    Body,
    Title,
    Right, Header
} from 'native-base';

import { Alert, TouchableOpacity } from 'react-native';


export default class LiveCouponResult extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        const { navigation } = this.props;
        const data = navigation.getParam('data');
        const sizeOfArray = navigation.getParam('sizeOfArray');
        return (
            <Container>
                <Header style={{backgroundColor: "#000000"}}>
                    <Left>
                        <Button transparent
                                onPress={() => this.props.navigation.navigate('Drawer')}>
                            <Icon type="FontAwesome" name="angle-left" />
                        </Button>
                    </Left>
                    <Body>
                    <Title style={{color: "#ffffff"}}>Match Details</Title>
                    </Body>
                    <Right/>
                </Header>
                {sizeOfArray == 2 && <Content>
                    <View style={{marginTop: 10, marginBottom: 40, marginLeft: 10, marginRight: 10}}>
                        <Grid>
                            <Row>
                                <Grid style={{ height: 50 }}>
                                    <Col style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: 'orange'
                                    }}>
                                        <Text>ANSWERS</Text>
                                    </Col>
                                    <Col style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: 'orange'
                                    }}>
                                        <Text>PARTICIPANTS</Text>
                                    </Col>
                                    <Col style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: 'orange'
                                    }}>
                                        <Text>RATIO</Text>
                                    </Col>
                                    <Col style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: 'orange'
                                    }}>
                                        <Text>RATE</Text>
                                    </Col>
                                </Grid>
                            </Row>
                            <Row>
                                <Grid style={{ height: 50 }}>
                                    <Col style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: '#A9A9A9'
                                    }}>
                                        <Text>{data.Answers[0].Text}</Text>
                                    </Col>
                                    <Col style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: '#A9A9A9'
                                    }}>
                                        <Text>{data.Answers[0].Participants}</Text>
                                    </Col>
                                    <Col style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: '#A9A9A9'
                                    }}>
                                        <Text>{data.Answers[0].Ratio}</Text>
                                    </Col>
                                    <Col style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: '#32B36A'
                                    }}>
                                        <TouchableOpacity onPress={() => Alert.alert(
                                            "LIVE BET",
                                            'Are you sure to add the option?',
                                            [
                                                {
                                                    text: 'Yes',
                                                    onPress: () => {
                                                        this.props.navigation.navigate('Drawer');
                                                    },
                                                },
                                                {
                                                    text: 'Cancel',
                                                    style: 'cancel',
                                                },
                                            ]
                                        )}>
                                            <Text>{data.Answers[0].Rate}</Text>
                                        </TouchableOpacity>
                                    </Col>
                                </Grid>
                            </Row>
                            <Row>
                                <Grid style={{ height: 50 }}>
                                    <Col style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: '#A9A9A9'
                                    }}>
                                        <Text>{data.Answers[1].Text}</Text>
                                    </Col>
                                    <Col style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: '#A9A9A9'
                                    }}>
                                        <Text>{data.Answers[1].Participants}</Text>
                                    </Col>
                                    <Col style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: '#A9A9A9'
                                    }}>
                                        <Text>{data.Answers[1].Ratio}</Text>
                                    </Col>
                                    <Col style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: '#32B36A'
                                    }}>
                                        <TouchableOpacity onPress={() => Alert.alert(
                                            "LIVE BET",
                                            'Are you sure to add the option?',
                                            [
                                                {
                                                    text: 'Yes',
                                                    onPress: () => {
                                                        this.props.navigation.navigate('Drawer');
                                                    },
                                                },
                                                {
                                                    text: 'Cancel',
                                                    style: 'cancel',
                                                },
                                            ]
                                        )}>
                                            <Text>{data.Answers[1].Rate}</Text>
                                        </TouchableOpacity>
                                    </Col>
                                </Grid>
                            </Row>
                        </Grid>
                    </View>
                </Content>}
                {sizeOfArray == 4 && <Content>
                    <View style={{marginTop: 10, marginBottom: 40, marginLeft: 10, marginRight: 10}}>
                        <Grid>
                            <Row>
                                <Grid style={{ height: 50 }}>
                                    <Col style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: 'orange'
                                    }}>
                                        <Text>ANSWERS</Text>
                                    </Col>
                                    <Col style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: 'orange'
                                    }}>
                                        <Text>PARTICIPANTS</Text>
                                    </Col>
                                    <Col style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: 'orange'
                                    }}>
                                        <Text>RATIO</Text>
                                    </Col>
                                    <Col style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: 'orange'
                                    }}>
                                        <Text>RATE</Text>
                                    </Col>
                                </Grid>
                            </Row>
                            <Row>
                                <Grid style={{ height: 50 }}>
                                    <Col style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: '#A9A9A9'
                                    }}>
                                        <Text>{data.Answers[0].Text}</Text>
                                    </Col>
                                    <Col style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: '#A9A9A9'
                                    }}>
                                        <Text>{data.Answers[0].Participants}</Text>
                                    </Col>
                                    <Col style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: '#A9A9A9'
                                    }}>
                                        <Text>{data.Answers[0].Ratio}</Text>
                                    </Col>
                                    <Col style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: '#32B36A'
                                    }}>
                                        <TouchableOpacity onPress={() => Alert.alert(
                                            "LIVE BET",
                                            'Are you sure to add the option?',
                                            [
                                                {
                                                    text: 'Yes',
                                                    onPress: () => {
                                                        this.props.navigation.navigate('Drawer');
                                                    },
                                                },
                                                {
                                                    text: 'Cancel',
                                                    style: 'cancel',
                                                },
                                            ]
                                        )}>
                                            <Text>{data.Answers[0].Rate}</Text>
                                        </TouchableOpacity>
                                    </Col>
                                </Grid>
                            </Row>
                            <Row>
                                <Grid style={{ height: 50 }}>
                                    <Col style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: '#A9A9A9'
                                    }}>
                                        <Text>{data.Answers[1].Text}</Text>
                                    </Col>
                                    <Col style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: '#A9A9A9'
                                    }}>
                                        <Text>{data.Answers[1].Participants}</Text>
                                    </Col>
                                    <Col style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: '#A9A9A9'
                                    }}>
                                        <Text>{data.Answers[1].Ratio}</Text>
                                    </Col>
                                    <Col style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: '#32B36A'
                                    }}>
                                        <TouchableOpacity onPress={() => Alert.alert(
                                            "LIVE BET",
                                            'Are you sure to add the option?',
                                            [
                                                {
                                                    text: 'Yes',
                                                    onPress: () => {
                                                        this.props.navigation.navigate('Drawer');
                                                    },
                                                },
                                                {
                                                    text: 'Cancel',
                                                    style: 'cancel',
                                                },
                                            ]
                                        )}>
                                            <Text>{data.Answers[1].Rate}</Text>
                                        </TouchableOpacity>
                                    </Col>
                                </Grid>
                            </Row>
                            <Row>
                                <Grid style={{ height: 50 }}>
                                    <Col style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: '#A9A9A9'
                                    }}>
                                        <Text>{data.Answers[2].Text}</Text>
                                    </Col>
                                    <Col style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: '#A9A9A9'
                                    }}>
                                        <Text>{data.Answers[2].Participants}</Text>
                                    </Col>
                                    <Col style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: '#A9A9A9'
                                    }}>
                                        <Text>{data.Answers[2].Ratio}</Text>
                                    </Col>
                                    <Col style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: '#32B36A'
                                    }}>
                                        <TouchableOpacity onPress={() => Alert.alert(
                                            "LIVE BET",
                                            'Are you sure to add the option?',
                                            [
                                                {
                                                    text: 'Yes',
                                                    onPress: () => {
                                                        this.props.navigation.navigate('Drawer');
                                                    },
                                                },
                                                {
                                                    text: 'Cancel',
                                                    style: 'cancel',
                                                },
                                            ]
                                        )}>
                                            <Text>{data.Answers[2].Rate}</Text>
                                        </TouchableOpacity>
                                    </Col>
                                </Grid>
                            </Row>
                            <Row>
                                <Grid style={{ height: 50 }}>
                                    <Col style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: '#A9A9A9'
                                    }}>
                                        <Text>{data.Answers[3].Text}</Text>
                                    </Col>
                                    <Col style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: '#A9A9A9'
                                    }}>
                                        <Text>{data.Answers[3].Participants}</Text>
                                    </Col>
                                    <Col style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: '#A9A9A9'
                                    }}>
                                        <Text>{data.Answers[3].Ratio}</Text>
                                    </Col>
                                    <Col style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: '#32B36A'
                                    }}>
                                        <TouchableOpacity onPress={() => Alert.alert(
                                            "LIVE BET",
                                            'Are you sure to add the option?',
                                            [
                                                {
                                                    text: 'Yes',
                                                    onPress: () => {
                                                        this.props.navigation.navigate('Drawer');
                                                    },
                                                },
                                                {
                                                    text: 'Cancel',
                                                    style: 'cancel',
                                                },
                                            ]
                                        )}>
                                            <Text>{data.Answers[3].Rate}</Text>
                                        </TouchableOpacity>
                                    </Col>
                                </Grid>
                            </Row>
                        </Grid>
                    </View>
                </Content>}
            </Container>
        );
    }
}
