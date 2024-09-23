import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {
  Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {AuthStackParamList} from '@/navigation/stack/AuthStackNavigator';
import {authNavigation} from '@/constants';

type AuthHomeScreenProps = StackScreenProps<
  AuthStackParamList,
  typeof authNavigation.AUTH_HOME
>;

function AuthHomeScreen({navigation}: AuthHomeScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require('@/assets/image/logo.png')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.socialLoginContainer}>
          <Image
            resizeMode="contain"
            style={styles.icon}
            source={require('@/assets/image/social.apple.png')}
          />
          <Image
            resizeMode="contain"
            style={styles.icon}
            source={require('@/assets/image/social.kakao.png')}
          />
          <Image
            resizeMode="contain"
            style={styles.icon}
            source={require('@/assets/image/social.google.png')}
          />
        </View>
        <Pressable onPress={() => navigation.navigate(authNavigation.LOGIN)}>
          <Text>이메일로 시작하기</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 30,
    marginVertical: 150,
  },
  imageContainer: {
    marginTop: '30%',
    flex: 1.5,
    width: Dimensions.get('screen').width / 2,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
  },
  socialLoginContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  icon: {
    width: 44,
    height: 44,
  },
});

export default AuthHomeScreen;
