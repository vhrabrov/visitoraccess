import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Rule = ({ item, isTablet }) => {
  const { title, text } = item;
  return (
    <View
      style={{
        ...(isTablet ? styles.additionalMargin : null)
      }}>
      <Text style={styles.title}>{title}</Text>
      <Text>{text}</Text>
    </View>
  );
};

export default Rule;
