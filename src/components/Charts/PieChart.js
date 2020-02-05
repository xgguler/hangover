import React, { PureComponent } from 'react';
import { VictoryPie } from 'victory-native';
import { View } from 'native-base';
import { Dimensions } from 'react-native';
const deviceWidth = Dimensions.get('window').width;

import categoryColors from '@theme/categoryColors';

const theme = {
  pie: {
    colorScale: categoryColors,
  },
};

class PieChart extends PureComponent {
  render() {
    return (
      this.props.data.length > 0 && ( //control whether data is not null then create view
        <View>
          <VictoryPie
            width={deviceWidth - 50}
            padding={{ top: -40, left: 70, right: 70 }}
            innerRadius={70}
            labelRadius={100}
            theme={theme}
            data={this.props.data}
            events={[]}
            style={{
              labels: { fontSize: '10' },
            }}
          />
        </View>
      )
    );
  }
}

export default PieChart;
