import React, { Component } from 'react';
import {
    Container,
    Content,
    Header,
    Tab,
    Text,
    View,
    Label,
    Left, Body, Title, Icon, Right, Button, ListItem, Thumbnail} from 'native-base';
import {ActivityIndicator, Alert, TouchableOpacity, ScrollView} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';


export default class Coupons extends Component {
    constructor(props){
        super(props);

        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        return fetch('https://ah7ye2r9sq6vwnbu-fan-connectivity.cfapps.eu10.hana.ondemand.com/rest/coupon/read/Entity.xsjs', {
            method: 'GET'
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
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            );
        }

        let myCouponDetails = this.state.dataSource.myCouponDetails;
        let myLiveMatchCoupon = this.state.dataSource.myLiveMatchCoupon;
        let otherUsersCoupon = this.state.dataSource.otherUsersCoupon;
        let couponOfExpert = this.state.dataSource.couponOfExpert;
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
                    <Title style={{color: "#ffffff"}}>Coupons</Title>
                    </Body>
                    <Right/>
                </Header>
                <Content
                    scrollEnabled={false}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flex: 1 }}>
                    <ScrollableTabView>
                        <Tab tabLabel="My Coupon">
                            <Content>
                                <ListItem itemDivider style={{backgroundColor:'green'}}>
                                    <Left>
                                        <Thumbnail
                                            style={{ marginBottom: 10, height: 45, width: 45 }}
                                            square
                                            source={{ uri: otherUsersCoupon.USER2.USER_INFO.LOGO }}
                                        />
                                        <Text style= {{color:'white',fontWeight: 'bold'}}>{' '}{otherUsersCoupon.USER2.USER_INFO.USERNAME}</Text>
                                    </Left>
                                </ListItem>
                                <ListItem icon>
                                    <View style={{flex: 1,flexDirection: 'column'}}>
                                        <View style={{marginTop:10,flex: 1,flexDirection: 'row'}}>
                                            <Button style={{fontsize:5, color: 'white',backgroundColor:'red', width:60, height: 30, marginLeft: 0 }}>
                                                <Text>{myCouponDetails.matchesOfCoupon[0].MATCHCODE}</Text>
                                            </Button>
                                            <Text style={{fontWeight: 'bold'}}>     {myCouponDetails.matchesOfCoupon[0].TEAM1} -  {myCouponDetails.matchesOfCoupon[0].TEAM2}</Text>
                                        </View>
                                        <View style={{flex: 1,flexDirection: 'row'}}>
                                            <Text style = {{fontsize:2, marginLeft: 80}}>MS {myCouponDetails.matchesOfCoupon[0].MS} - </Text>
                                            <Text style={{fontWeight: 'bold'}}> {myCouponDetails.matchesOfCoupon[0].RATE}</Text>
                                        </View>
                                    </View>
                                    <Right>
                                        <Button style={{backgroundColor: 'white'}} >
                                            <Icon style = {{color:'#a9a9a9'}} type="FontAwesome" name="trash" />
                                        </Button>
                                    </Right>
                                </ListItem>
                                <ListItem icon>
                                    <View style={{flex: 1,flexDirection: 'column'}}>
                                        <View style={{marginTop:10,flex: 1,flexDirection: 'row'}}>
                                            <Button style={{fontsize:5, color: 'white',backgroundColor:'red', width:60, height: 30, marginLeft: 0 }}>
                                                <Text>{myCouponDetails.matchesOfCoupon[1].MATCHCODE}</Text>
                                            </Button>
                                            <Text style={{fontWeight: 'bold'}}>     {myCouponDetails.matchesOfCoupon[1].TEAM1} -  {myCouponDetails.matchesOfCoupon[1].TEAM2}</Text>
                                        </View>
                                        <View style={{flex: 1,flexDirection: 'row'}}>
                                            <Text style = {{fontsize:2, marginLeft: 80}}>First Yellow Card {myCouponDetails.matchesOfCoupon[1].FIRST_YELLOW_CARD} - </Text>
                                            <Text style={{fontWeight: 'bold'}}> {myCouponDetails.matchesOfCoupon[1].RATE}</Text>
                                        </View>
                                    </View>
                                    <Right>
                                        <Button style={{backgroundColor: 'white'}} >
                                            <Icon style = {{color:'#a9a9a9'}} type="FontAwesome" name="trash" />
                                        </Button>
                                    </Right>
                                </ListItem>
                                <ListItem icon>
                                    <View style={{flex: 1,flexDirection: 'column'}}>
                                        <View style={{marginTop:10,flex: 1,flexDirection: 'row'}}>
                                            <Button style={{fontsize:5, color: 'white',backgroundColor:'red', width:60, height: 30, marginLeft: 0 }}>
                                                <Text>{myCouponDetails.matchesOfCoupon[2].MATCHCODE}</Text>
                                            </Button>
                                            <Text style={{fontWeight: 'bold'}}>     {myCouponDetails.matchesOfCoupon[2].TEAM1} -  {myCouponDetails.matchesOfCoupon[2].TEAM2}</Text>
                                        </View>
                                        <View style={{flex: 1,flexDirection: 'row'}}>
                                            <Text style = {{fontsize:2, marginLeft: 80}}>MS {myCouponDetails.matchesOfCoupon[2].MS} - </Text>
                                            <Text style={{fontWeight: 'bold'}}> {myCouponDetails.matchesOfCoupon[2].RATE}</Text>
                                        </View>
                                    </View>
                                    <Right>
                                        <Button style={{backgroundColor: 'white'}} >
                                            <Icon style = {{color:'#a9a9a9'}} type="FontAwesome" name="trash" />
                                        </Button>
                                    </Right>
                                </ListItem>
                                <ListItem icon>
                                    <View style={{flex: 1,flexDirection: 'column'}}>
                                        <View style={{marginTop:10,flex: 1,flexDirection: 'row'}}>
                                            <Button style={{fontsize:5, color: 'white',backgroundColor:'red', width:60, height: 30, marginLeft: 0 }}>
                                                <Text>{myCouponDetails.matchesOfCoupon[3].MATCHCODE}</Text>
                                            </Button>
                                            <Text style={{fontWeight: 'bold'}}>     {myCouponDetails.matchesOfCoupon[3].TEAM1} -  {myCouponDetails.matchesOfCoupon[3].TEAM2}</Text>
                                        </View>
                                        <View style={{flex: 1,flexDirection: 'row'}}>
                                            <Text style = {{fontsize:2, marginLeft: 80}}>MS {myCouponDetails.matchesOfCoupon[3].MS} - </Text>
                                            <Text style={{fontWeight: 'bold'}}> {myCouponDetails.matchesOfCoupon[3].RATE}</Text>
                                        </View>
                                    </View>
                                    <Right>
                                        <Button style={{backgroundColor: 'white'}} >
                                            <Icon style = {{color:'#a9a9a9'}} type="FontAwesome" name="trash" />
                                        </Button>
                                    </Right>
                                </ListItem>
                                <ListItem icon>
                                    <View style={{flex: 1,flexDirection: 'column'}}>
                                        <View style={{marginTop:10,flex: 1,flexDirection: 'row'}}>
                                            <Button style={{fontsize:5, color: 'white',backgroundColor:'red', width:60, height: 30, marginLeft: 0 }}>
                                                <Text>{myCouponDetails.matchesOfCoupon[4].MATCHCODE}</Text>
                                            </Button>
                                            <Text style={{fontWeight: 'bold'}}>     {myCouponDetails.matchesOfCoupon[4].TEAM1} -  {myCouponDetails.matchesOfCoupon[4].TEAM2}</Text>
                                        </View>
                                        <View style={{flex: 1,flexDirection: 'row'}}>
                                            <Text style = {{fontsize:2, marginLeft: 80}}>MS {myCouponDetails.matchesOfCoupon[4].MS} - </Text>
                                            <Text style={{fontWeight: 'bold'}}> {myCouponDetails.matchesOfCoupon[4].RATE}</Text>
                                        </View>
                                    </View>
                                    <Right>
                                        <Button style={{backgroundColor: 'white'}} >
                                            <Icon style = {{color:'#a9a9a9'}} type="FontAwesome" name="trash" />
                                        </Button>
                                    </Right>
                                </ListItem>
                                <ListItem icon>
                                    <View style={{flex: 1,flexDirection: 'column'}}>
                                        <View style={{marginTop:10,flex: 1,flexDirection: 'row'}}>
                                            <Button style={{fontsize:5, color: 'white',backgroundColor:'red', width:60, height: 30, marginLeft: 0 }}>
                                                <Text>{myCouponDetails.matchesOfCoupon[5].MATCHCODE}</Text>
                                            </Button>
                                            <Text style={{fontWeight: 'bold'}}>     {myCouponDetails.matchesOfCoupon[5].TEAM1} -  {myCouponDetails.matchesOfCoupon[5].TEAM2}</Text>
                                        </View>
                                        <View style={{flex: 1,flexDirection: 'row'}}>
                                            <Text style = {{fontsize:2, marginLeft: 80}}>MS {myCouponDetails.matchesOfCoupon[5].MS} - </Text>
                                            <Text style={{fontWeight: 'bold'}}> {myCouponDetails.matchesOfCoupon[5].RATE}</Text>
                                        </View>
                                    </View>
                                    <Right>
                                        <Button style={{backgroundColor: 'white'}} >
                                            <Icon style = {{color:'#a9a9a9'}} type="FontAwesome" name="trash" />
                                        </Button>
                                    </Right>
                                </ListItem>
                                <ListItem icon>
                                    <View style={{flex: 1,flexDirection: 'column'}}>
                                        <View style={{marginTop:10,flex: 1,flexDirection: 'row'}}>
                                            <Button style={{fontsize:5, color: 'white',backgroundColor:'red', width:60, height: 30, marginLeft: 0 }}>
                                                <Text>{myCouponDetails.matchesOfCoupon[6].MATCHCODE}</Text>
                                            </Button>
                                            <Text style={{fontWeight: 'bold'}}>     {myCouponDetails.matchesOfCoupon[6].TEAM1} -  {myCouponDetails.matchesOfCoupon[6].TEAM2}</Text>
                                        </View>
                                        <View style={{flex: 1,flexDirection: 'row'}}>
                                            <Text style = {{fontsize:2, marginLeft: 80}}>MS {myCouponDetails.matchesOfCoupon[6].MS} - </Text>
                                            <Text style={{fontWeight: 'bold'}}> {myCouponDetails.matchesOfCoupon[6].RATE}</Text>
                                        </View>
                                    </View>
                                    <Right>
                                        <Button style={{backgroundColor: 'white'}} >
                                            <Icon style = {{color:'#a9a9a9'}} type="FontAwesome" name="trash" />
                                        </Button>
                                    </Right>
                                </ListItem>
                                <View>
                                    <Label>
                                        {' '}
                                    </Label>
                                </View>
                                <View style={{flex: 1,flexDirection: 'column',backgroundColor:'#000000',height: 40}}>
                                    <View style={{marginTop:10,flex: 1,flexDirection: 'row'}}>
                                        <Text style={{fontWeight: 'bold', color: 'white'}}>{' Coupon Code: '} {myCouponDetails.COUPON_ID} {' Fungible: '} {myCouponDetails.FUNGIBLE} {' Total Income: '} {myCouponDetails.TOTAL_INCOME}
                                        </Text>
                                    </View>
                                </View>
                                <View>
                                    <Button style={{fontsize:5, color: 'white',backgroundColor:'green', width:140, height: 40, alignSelf:'center' }} onPress={() => Alert.alert('You are navigating to Nesine.com !! Please wait...')}>
                                        <Text>
                                            Click to bet!!!
                                        </Text>
                                    </Button>
                                </View>
                            </Content>
                        </Tab>
                        <Tab tabLabel="My Live Coupon">
                            <Content>
                                <ListItem itemDivider style={{backgroundColor:'green'}}>
                                    <Left>
                                        <Thumbnail
                                            style={{ marginBottom: 10, height: 45, width: 45 }}
                                            square
                                            source={{ uri: otherUsersCoupon.USER2.USER_INFO.LOGO }}
                                        />
                                        <Text style= {{color:'white',fontWeight: 'bold'}}>{' '}{otherUsersCoupon.USER2.USER_INFO.USERNAME}</Text>
                                    </Left>
                                </ListItem>
                                <ListItem icon>
                                    <View style={{flex: 1, flexDirection: 'column'}}>
                                        <View style={{marginTop: 10, flex: 1, flexDirection: 'row'}}>
                                            <Button style={{fontsize: 5, color: 'white', backgroundColor: 'red', width: 60, height: 30, marginLeft: 0}}>
                                                <Text>{myLiveMatchCoupon.matchesOfCoupon[0].MATCHCODE}</Text>
                                            </Button>
                                            <Text style={{fontWeight: 'bold'}}>     {myLiveMatchCoupon.matchesOfCoupon[0].TEAM1}   -  {myLiveMatchCoupon.matchesOfCoupon[0].TEAM2}</Text>
                                        </View>
                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                            <Text style = {{fontsize: 2, marginLeft: 76}}>MS: {myLiveMatchCoupon.matchesOfCoupon[0].MS} - </Text>
                                            <Text style={{fontWeight: 'bold'}}>{myLiveMatchCoupon.matchesOfCoupon[0].RATE}</Text>
                                        </View>
                                    </View>
                                    <Right>
                                        <Button style={{backgroundColor: 'white'}} >
                                            <Icon style = {{color: '#a9a9a9'}} type="FontAwesome" name="trash" />
                                        </Button>
                                    </Right>
                                </ListItem>
                                <ListItem icon>
                                    <View style={{flex: 1, flexDirection: 'column'}}>
                                        <View style={{marginTop: 10, flex: 1, flexDirection: 'row'}}>
                                            <Button style={{fontsize: 5, color: 'white', backgroundColor: 'red', width: 60, height: 30, marginLeft: 0}}>
                                                <Text>{myLiveMatchCoupon.matchesOfCoupon[1].MATCHCODE}</Text>
                                            </Button>
                                            <Text style={{fontWeight: 'bold'}}>     {myLiveMatchCoupon.matchesOfCoupon[1].TEAM1}   -  {myLiveMatchCoupon.matchesOfCoupon[1].TEAM2}</Text>
                                        </View>
                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                            <Text style = {{fontsize: 2, marginLeft: 76}}>MS: {myLiveMatchCoupon.matchesOfCoupon[1].MS} - </Text>
                                            <Text style={{fontWeight: 'bold'}}>{myLiveMatchCoupon.matchesOfCoupon[1].RATE}</Text>
                                        </View>
                                    </View>
                                    <Right>
                                        <Button style={{backgroundColor: 'white'}} >
                                            <Icon style = {{color: '#a9a9a9'}} type="FontAwesome" name="trash" />
                                        </Button>
                                    </Right>
                                </ListItem>
                                <ListItem icon>
                                    <View style={{flex: 1, flexDirection: 'column'}}>
                                        <View style={{marginTop: 10, flex: 1, flexDirection: 'row'}}>
                                            <Button style={{fontsize: 5, color: 'white', backgroundColor: 'red', width: 60, height: 30, marginLeft: 0}}>
                                                <Text>{myLiveMatchCoupon.matchesOfCoupon[2].MATCHCODE}</Text>
                                            </Button>
                                            <Text style={{fontWeight: 'bold'}}>     {myLiveMatchCoupon.matchesOfCoupon[2].TEAM1}   -  {myLiveMatchCoupon.matchesOfCoupon[2].TEAM2}</Text>
                                        </View>
                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                            <Text style = {{fontsize: 2, marginLeft: 76}}>MS: {myLiveMatchCoupon.matchesOfCoupon[2].MS} - </Text>
                                            <Text style={{fontWeight: 'bold'}}>{myLiveMatchCoupon.matchesOfCoupon[2].RATE}</Text>
                                        </View>
                                    </View>
                                    <Right>
                                        <Button style={{backgroundColor: 'white'}} >
                                            <Icon style = {{color: '#a9a9a9'}} type="FontAwesome" name="trash" />
                                        </Button>
                                    </Right>
                                </ListItem>
                                <View>
                                    <Label>
                                        {' '}
                                    </Label>
                                </View>
                                <View style={{flex: 1,flexDirection: 'column',backgroundColor:'#000000',height: 40}}>
                                    <View style={{marginTop:10,flex: 1,flexDirection: 'row'}}>
                                        <Text style={{fontWeight: 'bold', color: 'white'}}>{' Coupon Code: '} {myLiveMatchCoupon.COUPON_ID} {' Fungible: '} {myLiveMatchCoupon.FUNGIBLE} {' Total Income: '} {myLiveMatchCoupon.TOTAL_INCOME}
                                        </Text>
                                    </View>
                                </View>
                                <View>
                                    <Button style={{fontsize:5, color: 'white',backgroundColor:'green', width:140, height: 40, alignSelf:'center' }} onPress={() => Alert.alert('You are navigating to Nesine.com !! Please wait...')}>
                                        <Text>
                                            Click to bet!!!
                                        </Text>
                                    </Button>
                                </View>
                            </Content>
                        </Tab>
                        <Tab tabLabel="Other's Coupons">
                            <Content>
                                <ListItem itemDivider style={{backgroundColor:'green'}}>
                                    <Left>
                                        <Thumbnail
                                            style={{ marginBottom: 10, height: 45, width: 45 }}
                                            square
                                            source={{ uri: otherUsersCoupon.USER1.USER_INFO.LOGO }}
                                        />
                                        <Text style= {{color:'white',fontWeight: 'bold'}}>{' '}{otherUsersCoupon.USER1.USER_INFO.USERNAME}</Text>
                                    </Left>
                                </ListItem>
                                <ListItem icon>
                                    <View style={{flex: 1,flexDirection: 'column'}}>
                                        <View style={{marginTop:10,flex: 1,flexDirection: 'row'}}>
                                            <Button style={{fontsize:5, color: 'white',backgroundColor:'red', width:60, height: 30, marginLeft: 0 }}>
                                                <Text>{otherUsersCoupon.USER1.matchesOfCoupon[0].MATCHCODE}</Text>
                                            </Button>
                                            <Text style={{fontWeight: 'bold'}}>     {otherUsersCoupon.USER1.matchesOfCoupon[0].TEAM1} -  {otherUsersCoupon.USER1.matchesOfCoupon[0].TEAM2}</Text>
                                        </View>
                                        <View style={{flex: 1,flexDirection: 'row'}}>
                                            <Text style = {{fontsize:2, marginLeft: 80}}>MS {otherUsersCoupon.USER1.matchesOfCoupon[0].MS} - </Text>
                                            <Text style={{fontWeight: 'bold'}}> {otherUsersCoupon.USER1.matchesOfCoupon[0].RATE}</Text>
                                        </View>
                                    </View>
                                    <Right>
                                        <Button style={{backgroundColor: 'white'}} >
                                            <Icon style = {{color:'#a9a9a9'}} type="FontAwesome" name="trash" />
                                        </Button>
                                    </Right>
                                </ListItem>
                                <ListItem icon>
                                    <View style={{flex: 1,flexDirection: 'column'}}>
                                        <View style={{marginTop:10,flex: 1,flexDirection: 'row'}}>
                                            <Button style={{fontsize:5, color: 'white',backgroundColor:'red', width:60, height: 30, marginLeft: 0 }}>
                                                <Text>{otherUsersCoupon.USER1.matchesOfCoupon[1].MATCHCODE}</Text>
                                            </Button>
                                            <Text style={{fontWeight: 'bold'}}>     {otherUsersCoupon.USER1.matchesOfCoupon[1].TEAM1} -  {otherUsersCoupon.USER1.matchesOfCoupon[1].TEAM2}</Text>
                                        </View>
                                        <View style={{flex: 1,flexDirection: 'row'}}>
                                            <Text style = {{fontsize:2, marginLeft: 80}}>IY {otherUsersCoupon.USER1.matchesOfCoupon[1].IY} - </Text>
                                            <Text style={{fontWeight: 'bold'}}> {otherUsersCoupon.USER1.matchesOfCoupon[1].RATE}</Text>
                                        </View>
                                    </View>
                                    <Right>
                                        <Button style={{backgroundColor: 'white'}} >
                                            <Icon style = {{color:'#a9a9a9'}} type="FontAwesome" name="trash" />
                                        </Button>
                                    </Right>
                                </ListItem>
                                <ListItem icon>
                                    <View style={{flex: 1,flexDirection: 'column'}}>
                                        <View style={{marginTop:10,flex: 1,flexDirection: 'row'}}>
                                            <Button style={{fontsize:5, color: 'white',backgroundColor:'red', width:60, height: 30, marginLeft: 0 }}>
                                                <Text>{otherUsersCoupon.USER1.matchesOfCoupon[2].MATCHCODE}</Text>
                                            </Button>
                                            <Text style={{fontWeight: 'bold'}}>     {otherUsersCoupon.USER1.matchesOfCoupon[2].TEAM1} -  {otherUsersCoupon.USER1.matchesOfCoupon[2].TEAM2}</Text>
                                        </View>
                                        <View style={{flex: 1,flexDirection: 'row'}}>
                                            <Text style = {{fontsize:2, marginLeft: 80}}>MS {otherUsersCoupon.USER1.matchesOfCoupon[2].MS} - </Text>
                                            <Text style={{fontWeight: 'bold'}}> {otherUsersCoupon.USER1.matchesOfCoupon[2].RATE}</Text>
                                        </View>
                                    </View>
                                    <Right>
                                        <Button style={{backgroundColor: 'white'}} >
                                            <Icon style = {{color:'#a9a9a9'}} type="FontAwesome" name="trash" />
                                        </Button>
                                    </Right>
                                </ListItem>
                                <View>
                                    <Label>
                                        {' '}
                                    </Label>
                                </View>
                                <View style={{flex: 1,flexDirection: 'column',backgroundColor:'#000000',height: 40}}>
                                    <View style={{marginTop:10,flex: 1,flexDirection: 'row'}}>
                                        <Text style={{fontWeight: 'bold', color: 'white'}}>{' Coupon Code: '} {otherUsersCoupon.USER1.COUPON_ID} {' Fungible: '} {otherUsersCoupon.USER1.FUNGIBLE} {' Total Income: '} {otherUsersCoupon.USER1.TOTAL_INCOME}
                                        </Text>
                                    </View>
                                </View>
                                <View>
                                    <Button style={{fontsize:5, color: 'white',backgroundColor:'green', width:140, height: 40, alignSelf:'center' }} onPress={() => Alert.alert('You are navigating to Nesine.com !! Please wait...')}>
                                        <Text>
                                            Click to bet!!!
                                        </Text>
                                    </Button>
                                </View>
                                <View>
                                    <Label>
                                        {' '}
                                    </Label>
                                </View>
                                <ListItem itemDivider style={{backgroundColor:'green'}}>
                                    <Left>
                                        <Thumbnail
                                            style={{ marginBottom: 10, height: 45, width: 45 }}
                                            square
                                            source={{ uri: otherUsersCoupon.USER2.USER_INFO.LOGO }}
                                        />
                                        <Text style= {{color:'white',fontWeight: 'bold'}}>{' '}{otherUsersCoupon.USER2.USER_INFO.USERNAME}</Text>
                                    </Left>
                                </ListItem>
                                <ListItem icon>
                                    <View style={{flex: 1,flexDirection: 'column'}}>
                                        <View style={{marginTop:10,flex: 1,flexDirection: 'row'}}>
                                            <Button style={{fontsize:5, color: 'white',backgroundColor:'red', width:60, height: 30, marginLeft: 0 }}>
                                                <Text>{otherUsersCoupon.USER2.matchesOfCoupon[0].MATCHCODE}</Text>
                                            </Button>
                                            <Text style={{fontWeight: 'bold'}}>     {otherUsersCoupon.USER2.matchesOfCoupon[0].TEAM1} -  {otherUsersCoupon.USER2.matchesOfCoupon[0].TEAM2}</Text>
                                        </View>
                                        <View style={{flex: 1,flexDirection: 'row'}}>
                                            <Text style = {{fontsize:2, marginLeft: 80}}>MS {otherUsersCoupon.USER2.matchesOfCoupon[0].MS} - </Text>
                                            <Text style={{fontWeight: 'bold'}}> {otherUsersCoupon.USER2.matchesOfCoupon[0].RATE}</Text>
                                        </View>
                                    </View>
                                    <Right>
                                        <Button style={{backgroundColor: 'white'}} >
                                            <Icon style = {{color:'#a9a9a9'}} type="FontAwesome" name="trash" />
                                        </Button>
                                    </Right>
                                </ListItem>
                                <ListItem icon>
                                    <View style={{flex: 1,flexDirection: 'column'}}>
                                        <View style={{marginTop:10,flex: 1,flexDirection: 'row'}}>
                                            <Button style={{fontsize:5, color: 'white',backgroundColor:'red', width:60, height: 30, marginLeft: 0 }}>
                                                <Text>{otherUsersCoupon.USER2.matchesOfCoupon[1].MATCHCODE}</Text>
                                            </Button>
                                            <Text style={{fontWeight: 'bold'}}>     {otherUsersCoupon.USER2.matchesOfCoupon[1].TEAM1} -  {otherUsersCoupon.USER2.matchesOfCoupon[1].TEAM2}</Text>
                                        </View>
                                        <View style={{flex: 1,flexDirection: 'row'}}>
                                            <Text style = {{fontsize:2, marginLeft: 80}}>MS {otherUsersCoupon.USER2.matchesOfCoupon[1].MS} - </Text>
                                            <Text style={{fontWeight: 'bold'}}> {otherUsersCoupon.USER2.matchesOfCoupon[1].RATE}</Text>
                                        </View>
                                    </View>
                                    <Right>
                                        <Button style={{backgroundColor: 'white'}} >
                                            <Icon style = {{color:'#a9a9a9'}} type="FontAwesome" name="trash" />
                                        </Button>
                                    </Right>
                                </ListItem>
                                <ListItem icon>
                                    <View style={{flex: 1,flexDirection: 'column'}}>
                                        <View style={{marginTop:10,flex: 1,flexDirection: 'row'}}>
                                            <Button style={{fontsize:5, color: 'white',backgroundColor:'red', width:60, height: 30, marginLeft: 0 }}>
                                                <Text>{otherUsersCoupon.USER2.matchesOfCoupon[2].MATCHCODE}</Text>
                                            </Button>
                                            <Text style={{fontWeight: 'bold'}}>     {otherUsersCoupon.USER2.matchesOfCoupon[2].TEAM1} -  {otherUsersCoupon.USER2.matchesOfCoupon[2].TEAM2}</Text>
                                        </View>
                                        <View style={{flex: 1,flexDirection: 'row'}}>
                                            <Text style = {{fontsize:2, marginLeft: 80}}>First Yellow Card {otherUsersCoupon.USER2.matchesOfCoupon[2].FIRST_YELLOW_CARD} - </Text>
                                            <Text style={{fontWeight: 'bold'}}> {otherUsersCoupon.USER2.matchesOfCoupon[2].RATE}</Text>
                                        </View>
                                    </View>
                                    <Right>
                                        <Button style={{backgroundColor: 'white'}} >
                                            <Icon style = {{color:'#a9a9a9'}} type="FontAwesome" name="trash" />
                                        </Button>
                                    </Right>
                                </ListItem>
                                <ListItem icon>
                                    <View style={{flex: 1,flexDirection: 'column'}}>
                                        <View style={{marginTop:10,flex: 1,flexDirection: 'row'}}>
                                            <Button style={{fontsize:5, color: 'white',backgroundColor:'red', width:60, height: 30, marginLeft: 0 }}>
                                                <Text>{otherUsersCoupon.USER2.matchesOfCoupon[3].MATCHCODE}</Text>
                                            </Button>
                                            <Text style={{fontWeight: 'bold'}}>     {otherUsersCoupon.USER2.matchesOfCoupon[3].TEAM1} -  {otherUsersCoupon.USER2.matchesOfCoupon[3].TEAM2}</Text>
                                        </View>
                                        <View style={{flex: 1,flexDirection: 'row'}}>
                                            <Text style = {{fontsize:2, marginLeft: 80}}>First Yellow Card {otherUsersCoupon.USER2.matchesOfCoupon[3].FIRST_YELLOW_CARD} - </Text>
                                            <Text style={{fontWeight: 'bold'}}> {otherUsersCoupon.USER2.matchesOfCoupon[3].RATE}</Text>
                                        </View>
                                    </View>
                                    <Right>
                                        <Button style={{backgroundColor: 'white'}} >
                                            <Icon style = {{color:'#a9a9a9'}} type="FontAwesome" name="trash" />
                                        </Button>
                                    </Right>
                                </ListItem>
                                <ListItem icon>
                                    <View style={{flex: 1,flexDirection: 'column'}}>
                                        <View style={{marginTop:10,flex: 1,flexDirection: 'row'}}>
                                            <Button style={{fontsize:5, color: 'white',backgroundColor:'red', width:60, height: 30, marginLeft: 0 }}>
                                                <Text>{otherUsersCoupon.USER2.matchesOfCoupon[4].MATCHCODE}</Text>
                                            </Button>
                                            <Text style={{fontWeight: 'bold'}}>     {otherUsersCoupon.USER2.matchesOfCoupon[4].TEAM1} -  {otherUsersCoupon.USER2.matchesOfCoupon[4].TEAM2}</Text>
                                        </View>
                                        <View style={{flex: 1,flexDirection: 'row'}}>
                                            <Text style = {{fontsize:2, marginLeft: 80}}>IY {otherUsersCoupon.USER2.matchesOfCoupon[4].IY} - </Text>
                                            <Text style={{fontWeight: 'bold'}}> {otherUsersCoupon.USER2.matchesOfCoupon[4].RATE}</Text>
                                        </View>
                                    </View>
                                    <Right>
                                        <Button style={{backgroundColor: 'white'}} >
                                            <Icon style = {{color:'#a9a9a9'}} type="FontAwesome" name="trash" />
                                        </Button>
                                    </Right>
                                </ListItem>
                                <ListItem icon>
                                    <View style={{flex: 1,flexDirection: 'column'}}>
                                        <View style={{marginTop:10,flex: 1,flexDirection: 'row'}}>
                                            <Button style={{fontsize:5, color: 'white',backgroundColor:'red', width:60, height: 30, marginLeft: 0 }}>
                                                <Text>{otherUsersCoupon.USER2.matchesOfCoupon[5].MATCHCODE}</Text>
                                            </Button>
                                            <Text style={{fontWeight: 'bold'}}>     {otherUsersCoupon.USER2.matchesOfCoupon[5].TEAM1} -  {otherUsersCoupon.USER2.matchesOfCoupon[5].TEAM2}</Text>
                                        </View>
                                        <View style={{flex: 1,flexDirection: 'row'}}>
                                            <Text style = {{fontsize:2, marginLeft: 80}}>MS {otherUsersCoupon.USER2.matchesOfCoupon[5].MS} - </Text>
                                            <Text style={{fontWeight: 'bold'}}> {otherUsersCoupon.USER2.matchesOfCoupon[5].RATE}</Text>
                                        </View>
                                    </View>
                                    <Right>
                                        <Button style={{backgroundColor: 'white'}} >
                                            <Icon style = {{color:'#a9a9a9'}} type="FontAwesome" name="trash" />
                                        </Button>
                                    </Right>
                                </ListItem>
                                <View>
                                    <Label>
                                        {' '}
                                    </Label>
                                </View>
                                <View style={{flex: 1,flexDirection: 'column',backgroundColor:'#000000',height: 40}}>
                                    <View style={{marginTop:10,flex: 1,flexDirection: 'row'}}>
                                        <Text style={{fontWeight: 'bold', color: 'white'}}>{' Coupon Code: '} {otherUsersCoupon.USER2.COUPON_ID} {' Fungible: '} {otherUsersCoupon.USER2.FUNGIBLE} {' Total Income: '} {otherUsersCoupon.USER2.TOTAL_INCOME}
                                        </Text>
                                    </View>
                                </View>
                                <View>
                                    <Button style={{fontsize:5, color: 'white',backgroundColor:'green', width:140, height: 40, alignSelf:'center' }} onPress={() => Alert.alert('You are navigating to Nesine.com !! Please wait...')}>
                                        <Text>
                                            Click to bet!!!
                                        </Text>
                                    </Button>
                                </View>
                                <View>
                                    <Label>
                                        {' '}
                                    </Label>
                                </View>
                                <ListItem itemDivider style={{backgroundColor:'green'}}>
                                    <Left>
                                        <Thumbnail
                                            style={{ marginBottom: 10, height: 45, width: 45 }}
                                            square
                                            source={{ uri: otherUsersCoupon.USER3.USER_INFO.LOGO }}
                                        />
                                        <Text style= {{color:'white',fontWeight: 'bold'}}>{' '}{otherUsersCoupon.USER3.USER_INFO.USERNAME}</Text>
                                    </Left>
                                </ListItem>
                                <ListItem icon>
                                    <View style={{flex: 1,flexDirection: 'column'}}>
                                        <View style={{marginTop:10,flex: 1,flexDirection: 'row'}}>
                                            <Button style={{fontsize:5, color: 'white',backgroundColor:'red', width:60, height: 30, marginLeft: 0 }}>
                                                <Text>{otherUsersCoupon.USER3.matchesOfCoupon[0].MATCHCODE}</Text>
                                            </Button>
                                            <Text style={{fontWeight: 'bold'}}>     {otherUsersCoupon.USER3.matchesOfCoupon[0].TEAM1} -  {otherUsersCoupon.USER3.matchesOfCoupon[0].TEAM2}</Text>
                                        </View>
                                        <View style={{flex: 1,flexDirection: 'row'}}>
                                            <Text style = {{fontsize:2, marginLeft: 80}}>MS {otherUsersCoupon.USER3.matchesOfCoupon[0].MS} - </Text>
                                            <Text style={{fontWeight: 'bold'}}> {otherUsersCoupon.USER3.matchesOfCoupon[0].RATE}</Text>
                                        </View>
                                    </View>
                                    <Right>
                                        <Button style={{backgroundColor: 'white'}} >
                                            <Icon style = {{color:'#a9a9a9'}} type="FontAwesome" name="trash" />
                                        </Button>
                                    </Right>
                                </ListItem>
                                <ListItem icon>
                                    <View style={{flex: 1,flexDirection: 'column'}}>
                                        <View style={{marginTop:10,flex: 1,flexDirection: 'row'}}>
                                            <Button style={{fontsize:5, color: 'white',backgroundColor:'red', width:60, height: 30, marginLeft: 0 }}>
                                                <Text>{otherUsersCoupon.USER3.matchesOfCoupon[1].MATCHCODE}</Text>
                                            </Button>
                                            <Text style={{fontWeight: 'bold'}}>     {otherUsersCoupon.USER3.matchesOfCoupon[1].TEAM1} -  {otherUsersCoupon.USER3.matchesOfCoupon[1].TEAM2}</Text>
                                        </View>
                                        <View style={{flex: 1,flexDirection: 'row'}}>
                                            <Text style = {{fontsize:2, marginLeft: 80}}>MS {otherUsersCoupon.USER3.matchesOfCoupon[1].MS} - </Text>
                                            <Text style={{fontWeight: 'bold'}}> {otherUsersCoupon.USER3.matchesOfCoupon[1].RATE}</Text>
                                        </View>
                                    </View>
                                    <Right>
                                        <Button style={{backgroundColor: 'white'}} >
                                            <Icon style = {{color:'#a9a9a9'}} type="FontAwesome" name="trash" />
                                        </Button>
                                    </Right>
                                </ListItem>
                                <ListItem icon>
                                    <View style={{flex: 1,flexDirection: 'column'}}>
                                        <View style={{marginTop:10,flex: 1,flexDirection: 'row'}}>
                                            <Button style={{fontsize:5, color: 'white',backgroundColor:'red', width:60, height: 30, marginLeft: 0 }}>
                                                <Text>{otherUsersCoupon.USER3.matchesOfCoupon[2].MATCHCODE}</Text>
                                            </Button>
                                            <Text style={{fontWeight: 'bold'}}>     {otherUsersCoupon.USER3.matchesOfCoupon[2].TEAM1} -  {otherUsersCoupon.USER3.matchesOfCoupon[2].TEAM2}</Text>
                                        </View>
                                        <View style={{flex: 1,flexDirection: 'row'}}>
                                            <Text style = {{fontsize:2, marginLeft: 80}}>MS {otherUsersCoupon.USER3.matchesOfCoupon[2].MS} - </Text>
                                            <Text style={{fontWeight: 'bold'}}> {otherUsersCoupon.USER3.matchesOfCoupon[2].RATE}</Text>
                                        </View>
                                    </View>
                                    <Right>
                                        <Button style={{backgroundColor: 'white'}} >
                                            <Icon style = {{color:'#a9a9a9'}} type="FontAwesome" name="trash" />
                                        </Button>
                                    </Right>
                                </ListItem>
                                <ListItem icon>
                                    <View style={{flex: 1,flexDirection: 'column'}}>
                                        <View style={{marginTop:10,flex: 1,flexDirection: 'row'}}>
                                            <Button style={{fontsize:5, color: 'white',backgroundColor:'red', width:60, height: 30, marginLeft: 0 }}>
                                                <Text>{otherUsersCoupon.USER3.matchesOfCoupon[3].MATCHCODE}</Text>
                                            </Button>
                                            <Text style={{fontWeight: 'bold'}}>     {otherUsersCoupon.USER3.matchesOfCoupon[3].TEAM1} -  {otherUsersCoupon.USER3.matchesOfCoupon[3].TEAM2}</Text>
                                        </View>
                                        <View style={{flex: 1,flexDirection: 'row'}}>
                                            <Text style = {{fontsize:2, marginLeft: 80}}>MS {otherUsersCoupon.USER3.matchesOfCoupon[3].MS} - </Text>
                                            <Text style={{fontWeight: 'bold'}}> {otherUsersCoupon.USER3.matchesOfCoupon[3].RATE}</Text>
                                        </View>
                                    </View>
                                    <Right>
                                        <Button style={{backgroundColor: 'white'}} >
                                            <Icon style = {{color:'#a9a9a9'}} type="FontAwesome" name="trash" />
                                        </Button>
                                    </Right>
                                </ListItem>
                                <View>
                                    <Label>
                                        {' '}
                                    </Label>
                                </View>
                                <View style={{flex: 1,flexDirection: 'column',backgroundColor:'#000000',height: 40}}>
                                    <View style={{marginTop:10,flex: 1,flexDirection: 'row'}}>
                                        <Text style={{fontWeight: 'bold', color: 'white'}}>{' Coupon Code: '} {otherUsersCoupon.USER3.COUPON_ID} {' Fungible: '} {otherUsersCoupon.USER3.FUNGIBLE} {' Total Income: '} {otherUsersCoupon.USER3.TOTAL_INCOME}
                                        </Text>
                                    </View>
                                </View>
                                <View>
                                    <Button style={{fontsize:5, color: 'white',backgroundColor:'green', width:140, height: 40, alignSelf:'center' }} onPress={() => Alert.alert('You are navigating to Nesine.com !! Please wait...')}>
                                        <Text>
                                            Click to bet!!!
                                        </Text>
                                    </Button>
                                </View>
                            </Content>
                        </Tab>
                        <Tab tabLabel="Expert's Coupon">
                            <Content>
                                <ListItem itemDivider style={{backgroundColor:'green'}}>
                                    <Left>
                                        <Thumbnail
                                            style={{ marginBottom: 10, height: 45, width: 45 }}
                                            square
                                            source={{ uri: couponOfExpert.USER_INFO.LOGO }}
                                        />
                                        <Text style= {{color:'white',fontWeight: 'bold'}}>{' '}{couponOfExpert.USER_INFO.USERNAME}</Text>
                                    </Left>
                                </ListItem>
                                <ListItem icon>
                                    <View style={{flex: 1,flexDirection: 'column'}}>
                                        <View style={{marginTop:10,flex: 1,flexDirection: 'row'}}>
                                            <Button style={{fontsize:5, color: 'white',backgroundColor:'red', width:60, height: 30, marginLeft: 0 }}>
                                                <Text>{couponOfExpert.matchesOfCoupon[0].MATCHCODE}</Text>
                                            </Button>
                                            <Text style={{fontWeight: 'bold'}}>     {couponOfExpert.matchesOfCoupon[0].TEAM1} -  {couponOfExpert.matchesOfCoupon[0].TEAM2}</Text>
                                        </View>
                                        <View style={{flex: 1,flexDirection: 'row'}}>
                                            <Text style = {{fontsize:2, marginLeft: 80}}>MS {couponOfExpert.matchesOfCoupon[0].MS} - </Text>
                                            <Text style={{fontWeight: 'bold'}}> {couponOfExpert.matchesOfCoupon[0].RATE}</Text>
                                        </View>
                                    </View>
                                </ListItem>
                                <ListItem icon>
                                    <View style={{flex: 1,flexDirection: 'column'}}>
                                        <View style={{marginTop:10,flex: 1,flexDirection: 'row'}}>
                                            <Button style={{fontsize:5, color: 'white',backgroundColor:'red', width:60, height: 30, marginLeft: 0 }}>
                                                <Text>{couponOfExpert.matchesOfCoupon[1].MATCHCODE}</Text>
                                            </Button>
                                            <Text style={{fontWeight: 'bold'}}>     {couponOfExpert.matchesOfCoupon[1].TEAM1} -  {couponOfExpert.matchesOfCoupon[1].TEAM2}</Text>
                                        </View>
                                        <View style={{flex: 1,flexDirection: 'row'}}>
                                            <Text style = {{fontsize:2, marginLeft: 80}}>FH {couponOfExpert.matchesOfCoupon[1].IY} - </Text>
                                            <Text style={{fontWeight: 'bold'}}> {couponOfExpert.matchesOfCoupon[1].RATE}</Text>
                                        </View>
                                    </View>
                                </ListItem>
                                <ListItem icon>
                                    <View style={{flex: 1,flexDirection: 'column'}}>
                                        <View style={{marginTop:10,flex: 1,flexDirection: 'row'}}>
                                            <Button style={{fontsize:5, color: 'white',backgroundColor:'red', width:60, height: 30, marginLeft: 0 }}>
                                                <Text>{couponOfExpert.matchesOfCoupon[2].MATCHCODE}</Text>
                                            </Button>
                                            <Text style={{fontWeight: 'bold'}}>     {couponOfExpert.matchesOfCoupon[2].TEAM1} -  {couponOfExpert.matchesOfCoupon[2].TEAM2}</Text>
                                        </View>
                                        <View style={{flex: 1,flexDirection: 'row'}}>
                                            <Text style = {{fontsize:2, marginLeft: 80}}>FYC {couponOfExpert.matchesOfCoupon[2].FIRST_YELLOW_CARD} - </Text>
                                            <Text style={{fontWeight: 'bold'}}> {couponOfExpert.matchesOfCoupon[2].RATE}</Text>
                                        </View>
                                    </View>
                                </ListItem>
                                <ListItem icon>
                                    <View style={{flex: 1,flexDirection: 'column'}}>
                                        <View style={{marginTop:10,flex: 1,flexDirection: 'row'}}>
                                            <Button style={{fontsize:5, color: 'white',backgroundColor:'red', width:60, height: 30, marginLeft: 0 }}>
                                                <Text>{couponOfExpert.matchesOfCoupon[3].MATCHCODE}</Text>
                                            </Button>
                                            <Text style={{fontWeight: 'bold'}}>     {couponOfExpert.matchesOfCoupon[3].TEAM1} -  {couponOfExpert.matchesOfCoupon[3].TEAM2}</Text>
                                        </View>
                                        <View style={{flex: 1,flexDirection: 'row'}}>
                                            <Text style = {{fontsize:2, marginLeft: 80}}>MS {couponOfExpert.matchesOfCoupon[3].MS} - </Text>
                                            <Text style={{fontWeight: 'bold'}}> {couponOfExpert.matchesOfCoupon[3].RATE}</Text>
                                        </View>
                                    </View>
                                </ListItem>
                                <View>
                                    <Label>
                                        {' '}
                                    </Label>
                                </View>
                                <View style={{flex: 1,flexDirection: 'column',backgroundColor:'#000000',height: 40}}>
                                    <View style={{marginTop:10,flex: 1,flexDirection: 'row'}}>
                                        <Text style={{fontWeight: 'bold', color: 'white'}}>{' Coupon Code: '} {couponOfExpert.COUPON_ID} {' Fungible: '} {couponOfExpert.FUNGIBLE} {' Total Income: '} {couponOfExpert.TOTAL_INCOME}
                                        </Text>
                                    </View>
                                </View>
                                <View>
                                    <Button style={{fontsize:5, color: 'white',backgroundColor:'green', width:140, height: 40, alignSelf:'center' }} onPress={() => Alert.alert('You are navigating to Nesine.com !! Please wait...')}>
                                        <Text>
                                            Click to bet!!!
                                        </Text>
                                    </Button>
                                </View>
                            </Content>
                        </Tab>
                    </ScrollableTabView>
                </Content>
            </Container>
        );
    }
}