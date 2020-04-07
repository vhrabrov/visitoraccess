import React from 'react';
import {View, Text, Image, Linking, TouchableOpacity} from 'react-native';

import styles from './styles';
import { strings } from '../../I18n';

function Link(props) {
  const {value, imageSource, containerStyle} = props;
  return (
    <TouchableOpacity
      onPress={() => {
        if (!value) return;
        const url = `https://${value}`;
        if (Linking.canOpenURL(url)) {
          Linking.openURL(url).catch(err => alert(err));
        } else {
          alert(strings('errors.cantOpenLink'));
        }
      }}
      style={[styles.container, containerStyle]}>
      <Image source={imageSource} style={styles.icon} />
      <Text style={styles.link}>{value}</Text>
    </TouchableOpacity>
  );
}

export default Link;
