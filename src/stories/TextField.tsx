import React from 'react';
import MuiTextField from '@mui/material/TextField';
import type { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField';

export interface StaNLinkTextFieldProps extends Omit<MuiTextFieldProps, 'variant'> {
  variant?: 'outlined' | 'filled' | 'standard';
}

export const TextField: React.FC<StaNLinkTextFieldProps> = ({ 
  variant = 'outlined',
  ...props 
}) => {
  return <MuiTextField variant={variant} {...props} />;
};
