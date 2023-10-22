import React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export const ExpandLessIcon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <Path d="M0 0h24v24H0z" fill="none" />
      <Path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
    </Svg>
  );
};
