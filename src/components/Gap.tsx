import React from 'react';

import { View } from 'react-native';
import type { DimensionValue } from 'react-native';

type Props = {
  width?: DimensionValue;
  height?: DimensionValue;
};

export const Gap: React.FC<Props> = (props) => {
  const { width, height } = props;
  return <View style={{ marginLeft: width, marginTop: height }} />;
};
