import React from 'react';
import {View, Text, Image} from 'react-native';

import images from '../../../configs/images';
import styles from './styles';
import { strings } from '../../../I18n';

function BookerCard(props) {
  const {bookedPerson, time} = props;
  return (
    <View style={styles.container}>
      <Image source={images.person} style={styles.icon} />
      <Text style={styles.time}>{time}</Text>
      <Text>{strings('description.bookedBy', {bookedPerson})}</Text>
    </View>
  );
}

export default BookerCard;
