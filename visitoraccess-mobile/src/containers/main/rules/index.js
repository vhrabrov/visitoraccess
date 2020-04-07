import React, { useState, useEffect, useReducer } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Modal from 'react-native-modal';
import { isTablet, isLandscape } from 'react-native-device-info';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getRules } from '../../../actions/rules';
import { getSurvey, saveSurvey } from '../../../actions/survey';
import { bookPatient } from '../../../actions/patients';
import Rule from '../../../components/rule';
import Question from '../../../components/question';
import DefaultModalContent from '../../../components/modalContent';

import mobileStyles from './styles/mobileStyles';
import tabletStyles from './styles/tabletStyles';
import commonStyles from './styles/common';

import * as routes from '../../../constants/routes';
import { strings } from '../../../I18n';

function reducer(state, action) {
  const index = state.findIndex(item => item.id === action.item.id)
  if (index !== -1) {
    const newState = [...state]
    newState[index] = action.item
    return newState
  }
  return [...state, action.item];
}

function ifThereAreNegativeAnswers(answers, questions) {
  if (questions.length === 0 || answers.length === 0) return;

  // Suppose we're receiving positive answers from the API endpoint
  for (let i = 0; i < answers.length; i++) {
    const answer = answers[i];
    const question = questions.find(item => item.id === answer.id);

    if (result(answer.result) !== question.positiveAnswer) return true;
  }
  return false;
}

function result(resultBool) {
  return resultBool ? 1 : 0
}

function RulesScreen(props) {
  const isTabletDevice = isTablet();

  const style = {
    ...commonStyles,
    ...(isTabletDevice ? tabletStyles : mobileStyles)
  };
  let isLandscapeScreen = false;
  const modalStyle = {
    ...style.modalView,
    ...(isLandscapeScreen ? style.landModalView : style.portraitModalView)
  };

  const { navigation, survey, rules, route, getSurvey, getRules } = props;
  const patient = route.params.patient;
  const [declinedModalVisible, showDeclinedModal] = useState(false);
  const [successModalVisible, showSuccessModal] = useState(false);
  const [answeredQuestions, addAnsweredQuestion] = useReducer(reducer, []);
  const [canProceedAnswering, setCanProceed] = useState(true);

  useEffect(() => {
    getSurvey()
    getRules()
  }, [])

  useEffect(() => {

    if (survey.length === 0) return
    if (
      answeredQuestions.length === survey.length &&
      ifThereAreNegativeAnswers(answeredQuestions, survey)
    ) {
      showDeclinedModal(true);
    }

    if (
      answeredQuestions.length === survey.length &&
      !ifThereAreNegativeAnswers(answeredQuestions, survey)
    ) {
      showSuccessModal(true);
    }

    isLandscapeScreen = async function isLandscapeOrientation() {
      return isLandscape();
    };
  }, [answeredQuestions.length]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: strings('title.rules'),
      headerBackTitleVisible: false,
    });
  }, [navigation]);

  const handleCloseModal = React.useCallback((surveyPassedSuccessfully) => {
    if (surveyPassedSuccessfully) {
      props.bookPatient(patient.id);
      showSuccessModal(false);
      navigation.navigate(routes.HOME_SCREEN);
    } else {
      showDeclinedModal(false);
      navigation.navigate(routes.HOME_SCREEN);
    }
  });

  return (
    <View
      style={style.container}>
      <ScrollView contentContainerStyle={[isTabletDevice && isLandscapeScreen ? style.landScroll : style.scroll]}>
        <View style={style.rules}>
          {rules.map(item => (
            <Rule key={item.id} item={item} isTablet={isTabletDevice} />
          ))}
        </View>
        <View style={style.survey}>
          <Text style={style.rulesTitle}>{strings('description.survey')}</Text>
          {survey.map(item => (
            <Question
              disable={!canProceedAnswering}
              key={item.id}
              item={item}
              isTablet={isTabletDevice}
              onAnswer={answer =>
                addAnsweredQuestion({
                  item: {
                    id: item.id,
                    result: answer
                  }
                })
              }
            />
          ))}
        </View>
      </ScrollView>
      <Modal
        style={modalStyle}
        isVisible={successModalVisible}>
        <DefaultModalContent
          onPress={() => handleCloseModal(true)}
          success={true}
          name={patient.name}
        />
      </Modal>
      <Modal
        style={modalStyle}
        isVisible={declinedModalVisible}>
        <DefaultModalContent
          onPress={() => handleCloseModal(false)}
          success={false}
          name={patient.name}
        />
      </Modal>
    </View>
  );
}

const mapStateToProps = ({ rules: { rules }, survey: { survey } }) => ({
  rules,
  survey,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getRules,
      getSurvey,
      saveSurvey,
      bookPatient
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(RulesScreen);
