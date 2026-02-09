import React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import type { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';

export interface AppBarProps extends MuiAppBarProps {}

export const AppBar: React.FC<AppBarProps> = (props) => {
  return <MuiAppBar {...props} />;
};
