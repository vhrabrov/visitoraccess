import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

function Button(props) {
  const {fetching = false, text, onPress, containerStyle} = props;
  return (
    <TouchableOpacity
      onPress={fetching ? null : onPress}
      style={[styles.container, containerStyle]}>
      {fetching ? (
        <ActivityIndicator color={'white'} />
      ) : (
        <Text style={styles.text}>{text}</Text>
      )}
    </TouchableOpacity>
  );
}

export default Button;
