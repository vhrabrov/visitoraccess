import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import * as routes from '../constants/routes';
import {connect} from 'react-redux';

import HomeScreen from '../containers/main/home';
import LoginScreen from '../containers/auth/login';
import AboutScreen from '../containers/main/about';
import RulesScreen from '../containers/main/rules';

const Stack = createStackNavigator();

const Navigation = props => {
  const {token} = props;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {token === null ? (
          <Stack.Screen
            name={routes.LOGIN_SCREEN}
            component={LoginScreen}
            options={{
              headerShown: false,
              animationTypeForReplace: 'pop',
            }}
          />
        ) : (
          <>
            <Stack.Screen name={routes.HOME_SCREEN} component={HomeScreen} />
            <Stack.Screen name={routes.ABOUT_SCREEN} component={AboutScreen} />
            <Stack.Screen name={routes.RULES_SCREEN} component={RulesScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const mapStateToProps = ({auth: {token, logoutSuccess}}) => ({
  token,
});

export default connect(mapStateToProps, null)(Navigation);
