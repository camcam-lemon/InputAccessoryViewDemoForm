import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

import { Logo } from './Logo';
import { FocusMoveInputAccessoryView } from './FocusMoveInputAccessoryView';
import { useFormValue, useFocusHandler } from './hooks';
import { AvoidingKeyboard, Typography, OutlineButton } from './components';

function App() {
  const inputAccessoryViewID = 'uniqueID';

  const [email, onChangeEmail] = useFormValue('');
  const [password, onChangePassword] = useFormValue('');

  const [isFocusedEmailField, emailFocusHandler] = useFocusHandler();
  const [isFocusedPasswordField, passwordFocusHandler] = useFocusHandler();

  const emailRef = React.useRef<TextInput>(null);
  const passwordRef = React.useRef<TextInput>(null);
  const onFocusMovePasswordField = React.useCallback(() => {
    if (passwordRef.current == null) return;
    passwordRef.current.focus();
  }, []);
  const onFocusMoveEmailField = React.useCallback(() => {
    if (emailRef.current == null) return;
    emailRef.current.focus();
  }, []);

  const disabledLoginButton = email === '' || password === '';

  return (
    <AvoidingKeyboard>
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.contentContainer}
          keyboardDismissMode="interactive"
        >
          <View style={styles.logoLayout}>
            <Logo />
          </View>
          <View style={styles.formLayout}>
            <View style={styles.textFieldLayout}>
              <View>
                <Typography>メールアドレス</Typography>
              </View>
              <View style={styles.inputLayout}>
                <TextInput
                  ref={emailRef}
                  style={styles.textField}
                  value={email}
                  keyboardType="email-address"
                  inputAccessoryViewID={inputAccessoryViewID}
                  onChangeText={onChangeEmail}
                  onFocus={emailFocusHandler.onFocus}
                  onBlur={emailFocusHandler.onBlur}
                />
              </View>
            </View>
            <View style={styles.textFieldLayout}>
              <Typography>パスワード</Typography>
              <View style={styles.inputLayout}>
                <TextInput
                  secureTextEntry
                  ref={passwordRef}
                  style={styles.textField}
                  value={password}
                  inputAccessoryViewID={inputAccessoryViewID}
                  onChangeText={onChangePassword}
                  onFocus={passwordFocusHandler.onFocus}
                  onBlur={passwordFocusHandler.onBlur}
                />
              </View>
            </View>
            <View>
              <OutlineButton disabled={disabledLoginButton}>
                ログイン
              </OutlineButton>
            </View>
          </View>
        </ScrollView>
        <FocusMoveInputAccessoryView
          inputId={inputAccessoryViewID}
          isFocusedEmailField={isFocusedEmailField}
          isFocusedPasswordField={isFocusedPasswordField}
          onFocusMoveEmailField={onFocusMoveEmailField}
          onFocusMovePasswordField={onFocusMovePasswordField}
        />
      </SafeAreaView>
    </AvoidingKeyboard>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff8e1',
  },
  contentContainer: {
    flex: 1,
    marginTop: 32,
    marginBottom: 40,
    marginHorizontal: 24,
  },
  logoLayout: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formLayout: {
    gap: 24,
  },
  textFieldLayout: {
    gap: 8,
  },
  inputLayout: {
    flexDirection: 'row',
  },
  textField: {
    flexGrow: 1,
    height: 40,
    fontSize: 16,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
});

export default App;
