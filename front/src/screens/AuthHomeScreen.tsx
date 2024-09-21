import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StackScreenProps} from '@react-navigation/stack';
import {AuthStackParamList} from '../navigation/stack/AuthStackNavigator';
import {authNaviagations} from '../constants';

type AuthHomeScreenProps = StackScreenProps<
  AuthStackParamList,
  typeof authNaviagations.AUTH_HOME
>;

export default function AuthHomeScreen({navigation}: AuthHomeScreenProps) {
  return (
    <SafeAreaView>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Auth Home Screen</Text>
        <Button
          title="Go to Login Screen"
          onPress={() => navigation.navigate(authNaviagations.LOGIN)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
