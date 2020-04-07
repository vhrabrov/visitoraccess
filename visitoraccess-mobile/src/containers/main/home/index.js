import React, {useState} from 'react';
import {View, FlatList, ScrollView, Alert, Image, RefreshControl, Text} from 'react-native';
import {connect} from 'react-redux';
import {isTablet} from 'react-native-device-info';

import {logout} from '../../../actions/auth';
import { getPatients, unbookPatient } from '../../../actions/patients';

import * as routes from '../../../constants/routes';
import images from '../../../configs/images';

import HeaderButton from '../../../components/headerButton';
import Input from '../../../components/input';
import PatientCard from '../../../components/patientCard';

import Modal from 'react-native-modal';
import Button from '../../../components/button';
import commonStyles from './styles/common';
import tabletStyles from './styles/tabletStyles';
import mobileStyles from './styles/mobileStyles';
import { strings } from '../../../I18n';

function HomeScreen(props) {
  const {logout, navigation, patients, bookingSuccess, unbookPatient} = props;
  const [patientName, setPatientName] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [floor, setFloor] = useState('');
  const [selectPatientId, setSelectPatientId] = useState(-1);
  const styles = {
    ...commonStyles,
    ...(isTablet() ? tabletStyles : mobileStyles)
  };

  React.useEffect(() => {
    let filters = {};
    filters.name = `${patientName}`;
    if (floor.length > 0 ) {
      filters.floor = floor
    }

    props.getPatients(filters);
    setModalVisible(false)
  }, [patientName, floor, bookingSuccess]);

  const showLogoutAlert = () =>
    Alert.alert(
      strings('alert.title'),
      strings('alert.message'),
      [
        {text: strings('buttons.cancel'), onPress: () => {}},
        {text: strings('buttons.confirm'), style: 'destructive', onPress: () => logout()},
      ],
      {cancelable: true},
    );

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: strings('title.searchPatient'),
      headerLeft: () => (
        <HeaderButton
          iconSource={images.about}
          onPress={() => navigation.navigate(routes.ABOUT_SCREEN)}
        />
      ),
      headerRight: () => (
        <HeaderButton iconSource={images.logout} onPress={showLogoutAlert} />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <ScrollView
          bounces={false}
          keyboardShouldPersistTaps={'handled'}
          contentContainerStyle={styles.patientInfoScroll}>
          <Input
            label={strings('placeholder.patientName')}
            placeholder={strings('placeholder.patientName')}
            text={patientName}
            onChange={input => setPatientName(input)}
            containerStyle={styles.patientName}
          />
          <Input
            label={strings('placeholder.floor')}
            placeholder={strings('placeholder.floor')}
            text={floor}
            onChange={input => setFloor(input)}
            keyboardType={'numeric'}
            containerStyle={styles.patientFloor}
          />
        </ScrollView>
      </View>
      <FlatList
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Image style={styles.emptyImage} source={images.noResult} />
            <Text style={styles.emptyText}>{strings('errors.noResult')}</Text>
          </View>
        )}
        refreshControl={<RefreshControl refreshing={props.patientsLoading} />}
        contentContainerStyle={styles.patientsListContent}
        style={styles.patientsList}
        data={patients}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
          return (
            <PatientCard
              containerStyle={styles.patientCard}
              {...item}
              onPress={() =>
                navigation.navigate(routes.RULES_SCREEN, {patient: item})
              }
              modalAction={() => {
                setSelectPatientId(item.id);
                setModalVisible(true)
              }}
            />
          )
        }}
      />
      <Modal
        isVisible={modalVisible}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>{strings('description.unbook')}</Text>
          <View style={styles.buttonContainer}>
            <Button
              text={strings('buttons.ok')}
              onPress={() => unbookPatient(selectPatientId) }
              containerStyle={styles.button}/>
            <Button
              text={strings('buttons.cancel')}
              onPress={() => setModalVisible(false)}
              containerStyle={styles.button}/>
          </View>
        </View>
      </Modal>
    </View>
  );
}
const mapStateToProps = state => ({
  patients: state.patients.patients,
  bookingSuccess: state.patients.bookingSuccess,
  patientsLoading: state.patients.loading,
});

const mapDispatchToProps = {
  logout,
  getPatients,
  unbookPatient
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
