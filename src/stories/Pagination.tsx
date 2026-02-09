import React from 'react';
import MuiPagination from '@mui/material/Pagination';
import type { PaginationProps as MuiPaginationProps } from '@mui/material/Pagination';

export interface PaginationProps extends MuiPaginationProps {}

export const Pagination: React.FC<PaginationProps> = (props) => {
  return <MuiPagination {...props} />;
};
