import React from 'react';
import MuiDrawer from '@mui/material/Drawer';
import type { DrawerProps as MuiDrawerProps } from '@mui/material/Drawer';

export interface DrawerProps extends MuiDrawerProps {}

export const Drawer: React.FC<DrawerProps> = (props) => {
  return <MuiDrawer {...props} />;
};
