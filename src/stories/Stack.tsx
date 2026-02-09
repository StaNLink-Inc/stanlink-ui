import React from 'react';
import MuiStack from '@mui/material/Stack';
import type { StackProps as MuiStackProps } from '@mui/material/Stack';

export interface StackProps extends MuiStackProps {}

export const Stack: React.FC<StackProps> = (props) => {
  return <MuiStack {...props} />;
};
