import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Icon, Grid, Col } from 'native-base';
import PropTypes from 'prop-types';

import styles from './styles';

const ProfileItem = ({ icon, name, info }) => {
  return (
    // return a view that contains profile icon and name of user.
    <View style={[styles.contact.container]}>
      <Grid>
        <Col size={1} style={{ alignItems: 'center' }}>
          <TouchableOpacity>
            <Icon name={icon} style={[styles.contact.icon]} />
          </TouchableOpacity>
        </Col>
        <Col size={4}>
          <View>
            <View style={styles.contact.valueColumn}>
              <Text style={styles.contact.valueText}>{info}</Text>
            </View>
            <View style={styles.contact.nameColumn}>
              {name.trim().length !== 0 && (
                <Text style={styles.contact.nameText}>{name}</Text>
              )}
            </View>
          </View>
        </Col>
      </Grid>
    </View>
  );
};

ProfileItem.propTypes = {
  icon: PropTypes.string,
  name: PropTypes.string,
  info: PropTypes.string,
};

ProfileItem.defaultProps = {
  name: null,
};

export default ProfileItem;
