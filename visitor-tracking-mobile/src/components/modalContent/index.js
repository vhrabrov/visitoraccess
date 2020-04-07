import React from 'react';
import {Button, Text, View, Image} from 'react-native';
import images from '../../configs/images';
import styles from './styles';
import { strings } from '../../I18n';

const DefaultModalContent = props => (
  <View style={styles.content}>
    <Text style={styles.contentTitle}>
      {props.success ? strings('description.success') : strings('description.declined')}
    </Text>
    <Text style={styles.contentText}>{strings('description.visit', {isCan: props.success ? 'can' : "can't", name:props.name})}</Text>
    <Image
      style={styles.contentImage}
      source={props.success ? images.success : images.declined}
    />
    <Button onPress={props.onPress} title={strings('buttons.ok')} />
  </View>
);

export default DefaultModalContent;
