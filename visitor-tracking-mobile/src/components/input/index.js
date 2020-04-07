import React from 'react';
import {TextInput, View, Text} from 'react-native';

import styles from './styles';

function Input(props) {
  const {
    secure = false,
    label,
    text,
    placeholder,
    onChange,
    containerStyle,
    autoCapitalize,
    keyboardType,
  } = props;
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChange}
        value={text}
        secureTextEntry={secure}
        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType}
      />
    </View>
  );
}

export default Input;
