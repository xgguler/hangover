import React, { Component } from 'react';
import { Container, Header, Card, CardItem, Left, Input, Body, Right, Icon, Button, Thumbnail, Item } from 'native-base';
import { StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

import { FlatGrid } from 'react-native-super-grid';
import { ScrollView } from 'react-native-gesture-handler';

export default class Producers extends Component {
    render() {
        const items = [
            { name: 'Beyoğlu Manavı', url: 'https://cdn.gunes.com/Documents/Gunes/Images/2018/09/26/640x360_5e195397-52f9-4cef-9f68-e1e668ac71c7.jpg' },
            { name: 'Cihangir Manavı', url: 'https://cdn.gunes.com/Documents/Gunes/Images/2018/09/26/640x360_5e195397-52f9-4cef-9f68-e1e668ac71c7.jpg' },
            { name: 'Çukurcuma Manavı', url: 'https://cdn.gunes.com/Documents/Gunes/Images/2018/09/26/640x360_5e195397-52f9-4cef-9f68-e1e668ac71c7.jpg' },
            { name: 'Tarihi Firuzağa Manavı', url: 'https://cdn.gunes.com/Documents/Gunes/Images/2018/09/26/640x360_5e195397-52f9-4cef-9f68-e1e668ac71c7.jpg' },
        ];

        return (
            <Container>
                <Header searchBar rounded>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Bölgene göre filtrele" />
                        <Icon name="ios-people" />
                    </Item>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Puana göre filtrele" />
                        <Icon name="ios-star" />
                    </Item>
                </Header>
                        <Container>
                            <ScrollView>

                            <FlatGrid
                                itemDimension={130}
                                items={items}
                                style={styles.gridView}
                                // staticDimension={300}
                                // fixed
                                // spacing={20}
                                renderItem={({ item, index }) => (
                                    <TouchableOpacity>
                                        <Card>
                                            <CardItem>
                                                <Left>
                                                    <Thumbnail source={{ uri: item.url }} style={{height: 50}} />
                                                    <Body>
                                                        <Text style={{fontSize: 13}}>{item.name}</Text>
                                                        <Text style={styles.text}>Hız: 8.6</Text>
                                                        <Text style={styles.text}>Lezzet: 9.6</Text>
                                                        <Text style={styles.text}>Servis: 9.0</Text>
                                                        <Icon name="star" style={styles.icon}></Icon>
                                                    </Body>
                                                </Left>
                                            </CardItem>
                                            <CardItem cardBody>
                                                <Image source={{ uri: item.url }} style={{ height: 70, width: 40, flex: 1 }} />
                                            </CardItem>
                                            <CardItem>
                                                <Left>
                                                    <Button transparent>
                                                        <Icon active name="thumbs-up" />
                                                        <Text>12 Likes</Text>
                                                    </Button>
                                                </Left>
                                                <Body>
                                                    <Button transparent>
                                                        <Icon active name="chatbubbles" />
                                                        <Text>4 Comments</Text>
                                                    </Button>
                                                </Body>
                                                <Right>
                                                    <Text>11h ago</Text>
                                                </Right>
                                            </CardItem>
                                        </Card>
                                    </TouchableOpacity>
                                )}
                            />
                            </ScrollView>
                        </Container>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    gridView: {
        marginTop: 20,
        flex: 1,
    },
    itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 5,
        padding: 10,
        height: 150,
    },
    text: {
        fontSize: 10,
        color: '#ff6508',
        fontWeight: '600'
    },
    itemName: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
    },
    icon: {
        color: '#ffd55a',
        fontSize: 20
    }
});