import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthHomeScreen from '../../screens/AuthHomeScreen';
import LoginScreen from '../../screens/LoginScreen';
import {authNaviagations} from '../../constants';

export type AuthStackParamList = {
  [authNaviagations.AUTH_HOME]: undefined;
  [authNaviagations.LOGIN]: undefined;
};

const Stack = createStackNavigator<AuthStackParamList>();

function AuthStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={authNaviagations.AUTH_HOME}
        component={AuthHomeScreen}
      />
      <Stack.Screen name={authNaviagations.LOGIN} component={LoginScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});

export default AuthStackNavigator;
