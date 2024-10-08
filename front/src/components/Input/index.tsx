import React, {ForwardedRef, forwardRef, useRef} from 'react';
import {
  Dimensions,
  StyleSheet,
  TextInput,
  View,
  TextInputProps,
  Text,
  Pressable,
} from 'react-native';

import {mergeRefs} from '@/utils';
import {colors} from '@/constants';

interface InputFieldProps extends TextInputProps {
  disabled?: boolean;
  error?: string;
  touched?: boolean;
}

const deviceHeight = Dimensions.get('screen').height;

const InputField = forwardRef(
  (
    {disabled = false, error, touched, ...props}: InputFieldProps,
    ref?: ForwardedRef<TextInput>,
  ) => {
    // input 자체가 아닌 박스를 눌러도 인풋 입력이 되도록
    const innerRef = useRef<TextInput | null>(null);

    const handlePressInput = () => {
      innerRef.current?.focus();
    };

    return (
      <Pressable onPress={handlePressInput}>
        <View
          style={[
            styles.container,
            disabled && styles.disabled,
            touched && Boolean(error) && styles.inputError,
          ]}>
          <TextInput
            ref={ref ? mergeRefs(innerRef, ref) : innerRef}
            editable={!disabled}
            placeholderTextColor={colors.GRAY_500}
            style={[styles.input, disabled && styles.disabled]}
            // 자동 대문자, 맞춤법 검사, 자동 추천 방지
            autoCapitalize="none"
            spellCheck={false}
            autoCorrect={false}
            {...props}
          />
          {touched && Boolean(error) && (
            <Text style={styles.error}>{error}</Text>
          )}
        </View>
      </Pressable>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.GRAY_200,
    paddingVertical: deviceHeight > 700 ? 10 : 8,
    paddingHorizontal: deviceHeight > 700 ? 15 : 10,
    borderRadius: 16,
  },
  input: {
    fontSize: 16,
    color: colors.BLACK,
    padding: 0,
  },
  disabled: {
    backgroundColor: colors.GRAY_200,
    color: colors.GRAY_700,
  },
  inputError: {
    borderWidth: 1,
    borderColor: colors.RED_300,
  },
  error: {
    color: colors.RED_500,
    fontSize: 12,
    paddingTop: 5,
  },
});

export default InputField;
