import React from 'react';
import MuiBreadcrumbs from '@mui/material/Breadcrumbs';
import type { BreadcrumbsProps as MuiBreadcrumbsProps } from '@mui/material/Breadcrumbs';

export interface BreadcrumbsProps extends MuiBreadcrumbsProps {}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = (props) => {
  return <MuiBreadcrumbs {...props} />;
};
