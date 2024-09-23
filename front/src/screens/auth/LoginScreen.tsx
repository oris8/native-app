import React, {useRef} from 'react';
import {SafeAreaView, StyleSheet, TextInput, View} from 'react-native';

import InputField from '@/components/Input';
import PrimaryButton, {ToggleButton} from '@/components/Button';
import useForm from '@/hooks/useForm';
import useAuth from '@/hooks/queries/useAuth';
import {validateLogin} from '@/utils';
import {authNavigation} from '@/constants';
import {AuthStackParamList} from '@/navigation/stack/AuthStackNavigator';
import {StackScreenProps} from '@react-navigation/stack';

type AuthScreenProps = StackScreenProps<
  AuthStackParamList,
  typeof authNavigation.SIGNUP | typeof authNavigation.LOGIN
>;

function LoginScreen({navigation, route}: AuthScreenProps) {
  const {loginMutation} = useAuth();
  const passwordRef = useRef<TextInput | null>(null);
  const login = useForm({
    initialValue: {email: '', password: ''},
    validate: validateLogin,
  });

  const handleSubmit = () => {
    console.log('login.values', login.values);
    loginMutation.mutate(login.values);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <ToggleButton
          items={[
            {
              children: '회원가입',
              onPress: () => navigation.navigate(authNavigation.SIGNUP),
              active: route.name === authNavigation.SIGNUP,
            },
            {
              children: '로그인',
              onPress: () => navigation.navigate(authNavigation.LOGIN),
              active: route.name === authNavigation.LOGIN,
            },
          ]}
        />

        <InputField
          autoFocus
          placeholder="이메일"
          error={login.errors.email}
          touched={login.touched.email}
          inputMode="email"
          // 엔터 키를 어떻게 표시할지 (동작 기본값은 키보드 닫힘)
          returnKeyType="next"
          // 키보드 닫힘 방지
          blurOnSubmit={false}
          // (다음 input으로 이동은 ref 이용)
          onSubmitEditing={() => passwordRef.current?.focus()}
          {...login.getTextInputProps('email')}
        />
        <InputField
          ref={passwordRef}
          placeholder="비밀번호"
          error={login.errors.password}
          touched={login.touched.password}
          secureTextEntry
          returnKeyType="join"
          onSubmitEditing={handleSubmit}
          {...login.getTextInputProps('password')}
        />
      </View>
      <PrimaryButton
        label="로그인"
        variant="filled"
        size="large"
        onPress={handleSubmit}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  inputContainer: {
    gap: 20,
    marginBottom: 30,
  },
});

export default LoginScreen;
