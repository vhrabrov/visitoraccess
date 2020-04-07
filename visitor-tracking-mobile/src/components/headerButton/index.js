import React from 'react';
import {TouchableOpacity, Image} from 'react-native';

import styles from './styles';

function HeaderButton(props) {
  const {onPress, iconSource} = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image style={styles.icon} source={iconSource} />
    </TouchableOpacity>
  );
}

export default HeaderButton;
