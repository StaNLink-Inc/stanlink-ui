import React from 'react';
import MuiBackdrop from '@mui/material/Backdrop';
import type { BackdropProps as MuiBackdropProps } from '@mui/material/Backdrop';

export interface BackdropProps extends MuiBackdropProps {}

export const Backdrop: React.FC<BackdropProps> = (props) => {
  return <MuiBackdrop {...props} />;
};
