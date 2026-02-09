import React from 'react';
import MuiGrid from '@mui/material/Grid';
import type { GridProps as MuiGridProps } from '@mui/material/Grid';

export interface GridProps extends MuiGridProps {}

export const Grid: React.FC<GridProps> = (props) => {
  return <MuiGrid {...props} />;
};
