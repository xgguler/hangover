import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Grid, Col } from 'native-base';
import PropTypes from 'prop-types';

import styles from './styles';
import theme from '@theme/variables/fanEngagement';

// return a view that contain profile score elements which come from questionnaire,competiton and estimation.
const Overview = ({ navigation, profile }) => {
  return (
    <View style={[styles.overview.container]}>
      <Grid>
        <Col size={2}>
          <TouchableOpacity onPress={() => navigation.navigate('')}>
            <View>
              <View style={styles.overview.column}>
                <Text style={styles.overview.title}>
                  {profile.QUESTIONNAIRE_SCORE}
                </Text>
              </View>
              <View style={styles.overview.column}>
                <Text style={styles.overview.subtitle}>QUESTIONNAIRE</Text>
                <Text style={styles.overview.subtitle}>SCORE</Text>
                <View
                  style={[
                    styles.overview.marker,
                    { borderColor: theme.brandSuccess },
                  ]}
                />
              </View>
            </View>
          </TouchableOpacity>
        </Col>
        <Col size={2}>
          <TouchableOpacity onPress={() => navigation.navigate('')}>
            <View>
              <View style={styles.overview.column}>
                <Text style={styles.overview.title}>
                  {profile.COMPETITION_SCORE}
                </Text>
              </View>
              <View style={styles.overview.column}>
                <Text style={styles.overview.subtitle}>COMPETITION</Text>
                <Text style={styles.overview.subtitle}>SCORE</Text>
                <View
                  style={[
                    styles.overview.marker,
                    { borderColor: theme.brandWarning },
                  ]}
                />
              </View>
            </View>
          </TouchableOpacity>
        </Col>
        <Col size={2}>
          <TouchableOpacity onPress={() => navigation.navigate('')}>
            <View>
              <View style={styles.overview.column}>
                <Text style={styles.overview.title}>
                  {profile.ESTIMATION_SCORE}
                </Text>
              </View>
              <View style={styles.overview.column}>
                <Text style={styles.overview.subtitle}>ESTIMATION</Text>
                <Text style={styles.overview.subtitle}>SCORE</Text>
                <View
                  style={[
                    styles.overview.marker,
                    { borderColor: theme.brandThird },
                  ]}
                />
              </View>
            </View>
          </TouchableOpacity>
        </Col>
      </Grid>
    </View>
  );
};

Overview.propTypes = {
  navigation: PropTypes.any,
};

export default Overview;
