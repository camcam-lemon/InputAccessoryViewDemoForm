import React from 'react';

import { TouchableOpacity, StyleSheet } from 'react-native';
import type { TouchableOpacityProps } from 'react-native';

type Props = {
  children?: React.ReactNode;
} & TouchableOpacityProps;

export const IconButton: React.FC<Props> = (props) => {
  const { onPress, children, ...buttonProps } = props;

  return (
    <TouchableOpacity
      accessible
      accessibilityRole="button"
      style={styles.button}
      onPress={onPress}
      {...buttonProps}
    >
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    minWidth: 24,
    minHeight: 24,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
