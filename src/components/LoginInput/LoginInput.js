import React from 'react';
import { Input, Icon, Item, Text } from 'native-base';

import styles from './styles';

export default function LoginInput(field) {
  const errorText =
    field.meta.touched && field.meta.error ? field.meta.error : '';
  // return a view that contain a error view in case of wrong credentials.
  return (
    <Item style={styles.inputWrapper}>
      <Icon name={field.icon} style={styles.icon} />
      <Input
        {...field.input}
        style={styles.input}
        placeholder={field.placeholder}
        autoCapitalize="none"
        placeholderTextColor="rgba(255, 255, 255, 0.9)"
        secureTextEntry={field.secureTextEntry}
        underlineColorAndroid="transparent"
      />
      <Text style={styles.error}>{errorText}</Text>
    </Item>
  );
}
