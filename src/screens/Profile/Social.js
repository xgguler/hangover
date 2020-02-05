/*
create social buttons such as Twitter,Facebook etc.
 */

import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';

import styles from './styles';
import theme from '@theme/variables/fanEngagement';

const Social = () => {
  return (
    <View style={[styles.social.container]}>
      <TouchableOpacity>
        <Icon
          name="logo-twitter"
          style={[styles.social.icon, { color: theme.brandTwitter }]}
        />
      </TouchableOpacity>
      <View style={{ padding: 20 }} />
      <TouchableOpacity>
        <Icon
          name="logo-facebook"
          style={[styles.social.icon, { color: theme.brandFacebook }]}
        />
      </TouchableOpacity>
      <View style={{ padding: 20 }} />
      <TouchableOpacity>
        <Icon
          name="logo-instagram"
          style={[styles.social.icon, { color: theme.brandInstagram }]}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Social;
