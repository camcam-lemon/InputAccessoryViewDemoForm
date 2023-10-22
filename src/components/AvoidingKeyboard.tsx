import React from 'react';

import { KeyboardAvoidingView, StyleSheet, Platform } from 'react-native';
import type { KeyboardAvoidingViewProps } from 'react-native';

type Props = {
  iOSBehavior?: KeyboardAvoidingViewProps['behavior'];
  androidBehavior?: KeyboardAvoidingViewProps['behavior'];
  children: React.ReactNode;
} & KeyboardAvoidingViewProps;

export const AvoidingKeyboard: React.FC<Props> = (props) => {
  const {
    iOSBehavior = 'padding',
    androidBehavior = 'height',
    behavior,
    children,
    ...otherProps
  } = props;

  return (
    <KeyboardAvoidingView
      behavior={
        behavior ??
        Platform.select({ ios: iOSBehavior, android: androidBehavior })
      }
      style={styles.container}
      {...otherProps}
    >
      {children}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
