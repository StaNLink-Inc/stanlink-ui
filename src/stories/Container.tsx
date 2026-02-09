import React from 'react';
import MuiContainer from '@mui/material/Container';
import type { ContainerProps as MuiContainerProps } from '@mui/material/Container';

export interface ContainerProps extends MuiContainerProps {}

export const Container: React.FC<ContainerProps> = (props) => {
  return <MuiContainer {...props} />;
};
