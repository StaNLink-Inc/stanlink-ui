import React from 'react';
import MuiIconButton from '@mui/material/IconButton';
import type { IconButtonProps as MuiIconButtonProps } from '@mui/material/IconButton';

export interface IconButtonProps extends MuiIconButtonProps {}

export const IconButton: React.FC<IconButtonProps> = (props) => {
  return <MuiIconButton {...props} />;
};
