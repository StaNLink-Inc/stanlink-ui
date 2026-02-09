import React from 'react';
import MuiSnackbar from '@mui/material/Snackbar';
import type { SnackbarProps as MuiSnackbarProps } from '@mui/material/Snackbar';

export interface SnackbarProps extends MuiSnackbarProps {}

export const Snackbar: React.FC<SnackbarProps> = (props) => {
  return <MuiSnackbar {...props} />;
};
