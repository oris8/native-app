import React, {useRef} from 'react';
import {SafeAreaView, StyleSheet, TextInput, View} from 'react-native';

import InputField from '@/components/Input';
import PrimaryButton, {ToggleButton} from '@/components/Button';
import useForm from '@/hooks/useForm';
import useAuth from '@/hooks/queries/useAuth';
import {validateSignup} from '@/utils';
import {authNavigation} from '@/constants';
import {AuthStackParamList} from '@/navigation/stack/AuthStackNavigator';
import {StackScreenProps} from '@react-navigation/stack';

type AuthScreenProps = StackScreenProps<
  AuthStackParamList,
  typeof authNavigation.SIGNUP | typeof authNavigation.LOGIN
>;

function SignupScreen({navigation, route}: AuthScreenProps) {
  const {signupMutation, loginMutation} = useAuth();
  const passwordRef = useRef<TextInput | null>(null);
  const passwordConfirmRef = useRef<TextInput | null>(null);
  const signup = useForm({
    initialValue: {email: '', password: '', passwordConfirm: ''},
    validate: validateSignup,
  });

  const handleSubmit = () => {
    const {email, password} = signup.values;
    signupMutation.mutate(
      {email, password},
      {
        onSuccess: () => loginMutation.mutate({email, password}),
      },
    );
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
          error={signup.errors.email}
          touched={signup.touched.email}
          inputMode="email"
          returnKeyType="next"
          blurOnSubmit={false}
          onSubmitEditing={() => passwordRef.current?.focus()}
          {...signup.getTextInputProps('email')}
        />
        <InputField
          ref={passwordRef}
          placeholder="비밀번호"
          textContentType="oneTimeCode"
          error={signup.errors.password}
          touched={signup.touched.password}
          secureTextEntry
          returnKeyType="next"
          blurOnSubmit={false}
          onSubmitEditing={() => passwordConfirmRef.current?.focus()}
          {...signup.getTextInputProps('password')}
        />
        <InputField
          ref={passwordConfirmRef}
          placeholder="비밀번호 확인"
          error={signup.errors.passwordConfirm}
          touched={signup.touched.passwordConfirm}
          secureTextEntry
          returnKeyType="join"
          onSubmitEditing={handleSubmit}
          {...signup.getTextInputProps('passwordConfirm')}
        />
      </View>
      <PrimaryButton label="회원가입" onPress={handleSubmit} />
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

export default SignupScreen;
