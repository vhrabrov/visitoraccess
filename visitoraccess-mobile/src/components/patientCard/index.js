import React, {useState} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

import BookerCard from './bookerCard';

import styles from './styles';
import { strings } from '../../I18n';

function PatientCard(props) {
  const {onPress, available, containerStyle, name, floor, bookedPerson = null, modalAction, ...rest} = props;
  const availableToBeBooked = bookedPerson === null && available;
  return (
    <TouchableOpacity
      activeOpacity={availableToBeBooked ? 0.5 : !available ? 1 : 0.5}
      style={[styles.container, containerStyle]}
      onPress={availableToBeBooked? onPress : !available ? null : modalAction}>
      <View style={styles.cardContent}>
        <View style={styles.indicatorContainer}>
          <View
            style={[
              styles.indicator,
              {backgroundColor: availableToBeBooked ? 'green' : 'red'},
            ]}
          />
        </View>
        <Text style={styles.name}>{name}</Text>
        <Text>{strings('description.floor', {floor})}</Text>
      </View>
      <View style={styles.bookerCardContainer}>
        {bookedPerson !== null && <BookerCard bookedPerson={bookedPerson} {...rest} />}
      </View>
    </TouchableOpacity>
  );
}

export default PatientCard;
