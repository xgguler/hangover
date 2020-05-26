import React, { Component } from 'react';
import { Tab, Tabs, Container, Content, Header, Fab, Title, Icon } from 'native-base';
import { StyleSheet, ImageBackground } from 'react-native';

import Producers from '../producer-list/Producers';

export default class Main extends Component {
  render() {
    const items = [];

    return (
      <Container>
        <Content>
          <Header
            noShadow
            style={{
              backgroundColor: "#C10F0F",
              height: 40
            }}
          >
              <Title
                style={{
                  color: "white",
                  fontSize: 15,
                  marginTop: -10
                }}
              >
                Foody
            </Title>
          </Header>
          <ImageBackground
            source={require('../../../assets/background2.png')}
            style={styles.container}>
          </ImageBackground>
          <Tabs
            tabContainerStyle={{
              elevation: 0,
            }}
            onChangeTab={({ i, ref, from }) =>
              this.switchPeriod(i, ref, from)
            }>
            <Tab heading="Meyve ve Sebze">
              <Producers />
            </Tab>
            <Tab heading="Et ve Süt Ürünleri">
            </Tab>
            <Tab heading="Yemek Siparişi">
            </Tab>
            <Tab heading="Fırından">
            </Tab>
            <Tab heading="Tatlı">
            </Tab>
          </Tabs>
        </Content>
        <Fab
            active={true}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#FF0000' }}
            position="bottomRight"
            >  
            <Icon name="ios-basket" />
        </Fab> 
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: 200,
  },
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
  itemName: {
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});