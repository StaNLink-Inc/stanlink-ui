import React from 'react';
import MuiDivider from '@mui/material/Divider';
import type { DividerProps as MuiDividerProps } from '@mui/material/Divider';

export interface DividerProps extends MuiDividerProps {}

export const Divider: React.FC<DividerProps> = (props) => {
  return <MuiDivider {...props} />;
};
