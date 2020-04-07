import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

import styles from './styles';
import { strings } from '../../I18n';

const RadioItem = props => {
  const {onPress, isActive, isPositive} = props;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.radioCircle} onPress={onPress}>
        {isActive && <View style={styles.selectedRb} />}
      </View>
      <Text style={styles.radioText}>{isPositive ? strings('description.yes') : strings('description.no')}</Text>
    </TouchableOpacity>
  );
};

const RadioGroup = props => {
  const {onAnswer, disable} = props;
  const [state, setState] = useState(null);

  useEffect(() => {
    state !== null && onAnswer(state);
  }, [state]);

  return (
    <View style={styles.rowContainer}>
      <RadioItem
        isActive={state === true}
        isPositive
        onPress={disable ? null : () => setState(true)}
      />
      <RadioItem
        isActive={state === false}
        onPress={disable ? null : () => setState(false)}
      />
    </View>
  );
};

export default RadioGroup;
