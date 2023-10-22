import React from 'react';

import {
  InputAccessoryView,
  View,
  Keyboard,
  StyleSheet,
  PlatformColor,
  Platform,
} from 'react-native';
import { IconButton, FlatButton } from './components';
import { ExpandMoreIcon, ExpandLessIcon } from './icons';

type Props = {
  inputId: string;
  isFocusedEmailField: boolean;
  isFocusedPasswordField: boolean;
  onFocusMovePasswordField: () => void;
  onFocusMoveEmailField: () => void;
};

export const FocusMoveInputAccessoryView: React.FC<Props> = (props) => {
  const {
    inputId,
    isFocusedEmailField,
    isFocusedPasswordField,
    onFocusMoveEmailField,
    onFocusMovePasswordField,
  } = props;

  if (Platform.OS === 'android') return null;

  return (
    <InputAccessoryView nativeID={inputId}>
      <View style={styles.container}>
        <View style={styles.focusMoveIconLayout}>
          <View>
            <IconButton
              accessibilityLabel="入力をパスワードに移動する"
              disabled={isFocusedPasswordField}
              onPress={onFocusMovePasswordField}
            >
              <ExpandMoreIcon
                fill={PlatformColor(
                  isFocusedEmailField ? 'systemBlue' : 'systemGray'
                )}
              />
            </IconButton>
          </View>
          <View>
            <IconButton
              accessibilityLabel="入力をメールアドレスに移動する"
              disabled={isFocusedEmailField}
              onPress={onFocusMoveEmailField}
            >
              <ExpandLessIcon
                fill={PlatformColor(
                  isFocusedPasswordField ? 'systemBlue' : 'systemGray'
                )}
              />
            </IconButton>
          </View>
        </View>
        <View>
          <FlatButton onPress={Keyboard.dismiss}>閉じる</FlatButton>
        </View>
      </View>
    </InputAccessoryView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#eceff1',
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  focusMoveIconLayout: {
    flexDirection: 'row',
    gap: 8,
  },
});
