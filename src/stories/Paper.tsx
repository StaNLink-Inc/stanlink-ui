import React from 'react';
import MuiPaper from '@mui/material/Paper';
import type { PaperProps as MuiPaperProps } from '@mui/material/Paper';

export interface PaperProps extends MuiPaperProps {}

export const Paper: React.FC<PaperProps> = (props) => {
  return <MuiPaper {...props} />;
};
