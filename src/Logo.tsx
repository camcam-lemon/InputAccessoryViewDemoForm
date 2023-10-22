import React from 'react';
import { Image, StyleSheet } from 'react-native';

export const Logo: React.FC = () => {
  return (
    <Image
      style={styles.logo}
      height={180}
      width={180}
      alt="app logo"
      source={require('react-native/Libraries/NewAppScreen/components/logo.png')}
    />
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 180,
    width: 180,
  },
});
