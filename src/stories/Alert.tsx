import React from 'react';
import MuiAlert from '@mui/material/Alert';
import type { AlertProps as MuiAlertProps } from '@mui/material/Alert';

export interface StaNLinkAlertProps extends MuiAlertProps {}

export const Alert: React.FC<StaNLinkAlertProps> = (props) => {
  return <MuiAlert {...props} />;
};
