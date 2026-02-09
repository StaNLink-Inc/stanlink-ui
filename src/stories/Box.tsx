import React from 'react';
import MuiBox from '@mui/material/Box';
import type { BoxProps as MuiBoxProps } from '@mui/material/Box';

export interface BoxProps extends MuiBoxProps {}

export const Box: React.FC<BoxProps> = (props) => {
  return <MuiBox {...props} />;
};
