import React from 'react';

import { StyleSheet, Text } from 'react-native';
import type { TextProps } from 'react-native';

type Props = {
  children: React.ReactNode;
} & TextProps;

export const Typography: React.FC<Props> = (props) => {
  const { children, style, ...textProps } = props;

  return (
    <Text style={[styles.typography, style]} {...textProps}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  typography: {
    fontFamily: 'Hiragino Sans',
    fontSize: 16,
    fontWeight: '300',
  },
});
