/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import { StyleSheet, TouchableOpacity } from 'react-native';
import type { StyleProp, TextStyle, TouchableOpacityProps } from 'react-native';

import { Typography } from './Typography';

type Props = {
  textStyle?: StyleProp<TextStyle>;
} & TouchableOpacityProps;

export const OutlineButton: React.FC<Props> = (props) => {
  const { textStyle, disabled, style, children, ...buttonProps } = props;

  return (
    <TouchableOpacity
      accessible
      accessibilityRole="button"
      style={[styles.button, { opacity: disabled ? 0.4 : 1 }, style]}
      disabled={disabled}
      {...buttonProps}
    >
      <Typography
        style={[styles.text, { color: disabled ? 'gray' : 'black' }, textStyle]}
      >
        {children}
      </Typography>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    minWidth: 120,
    minHeight: 48,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 24,
  },
  text: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
});
