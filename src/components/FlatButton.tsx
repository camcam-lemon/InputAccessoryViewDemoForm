import React from 'react';

import { StyleSheet, TouchableOpacity, PlatformColor } from 'react-native';
import type { StyleProp, TextStyle, TouchableOpacityProps } from 'react-native';

import { Typography } from './Typography';

type Props = {
  textStyle?: StyleProp<TextStyle>;
} & TouchableOpacityProps;

export const FlatButton: React.FC<Props> = (props) => {
  const { textStyle, disabled, style, children, ...buttonProps } = props;

  return (
    <TouchableOpacity
      accessible
      accessibilityRole="button"
      style={[
        styles.button,
        disabled ? styles.buttonDisabled : styles.buttonEnabled,
        style,
      ]}
      disabled={disabled}
      {...buttonProps}
    >
      <Typography style={[styles.text, styles.textColor, textStyle]}>
        {children}
      </Typography>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  buttonEnabled: {
    opacity: 1,
  },
  buttonDisabled: {
    opacity: 0.4,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  textColor: {
    color: PlatformColor('systemBlue'),
  },
  textWhite: {
    color: 'white',
  },
});
