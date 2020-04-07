import React from 'react';
import { View, Text } from 'react-native';

import RadioGroup from '../radioGroup';

import styles from './styles';

const Question = ({ disable, item, onAnswer, isTablet }) => {
  const { title } = item;
  return (
    <View style={styles.container}>
      <Text style={isTablet ? styles.tabletTitle : styles.title}>{title}</Text>
      <View style={[styles.radioButtonsContainer, isTablet ? styles.tabletRadioGroup : null]}>
        <RadioGroup disable={disable} onAnswer={onAnswer} />
      </View>
    </View>
  );
};

export default Question;
