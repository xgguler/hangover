import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from '../../screens/Matches/cardStyles';

class MatchCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { rowData } = this.props;
    return (
      <TouchableOpacity style={styles.rowViewContainer}>
        <View style={styles.rowContentContainer}>
          <View style={{ width: 100 }}>
            <View style={{ marginBottom: 5 }}>
              <Image
                source={{ uri: rowData.home_logo }}
                resizeMode={'contain'}
                style={{ width: 70, height: 70, alignSelf: 'center' }}
              />
            </View>
            <Text style={{ fontWeight: 'bold', alignSelf: 'center' }}>
              {rowData.home}
            </Text>
          </View>
          <View style={{ width: 100 }}>
            <Text>{rowData.date}</Text>
            <Text style={{ alignSelf: 'center' }}>{rowData.day}</Text>
            <Text
              style={{ alignSelf: 'center', fontWeight: 'bold', color: 'red' }}>
              {rowData.time}
            </Text>
            <View>
              <Image
                source={{ uri: rowData.match_type_logo }}
                resizeMode={'contain'}
                style={{ width: 50, height: 50, alignSelf: 'center' }}
              />
            </View>
          </View>
          <View style={{ width: 100 }}>
            <View style={{ marginBottom: 5 }}>
              <Image
                source={{ uri: rowData.away_logo }}
                resizeMode={'contain'}
                style={{ width: 70, height: 70, alignSelf: 'center' }}
              />
            </View>
            <Text style={{ fontWeight: 'bold', alignSelf: 'center' }}>
              {rowData.away}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default MatchCard;
