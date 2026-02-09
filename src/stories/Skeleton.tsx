import React from 'react';
import MuiSkeleton from '@mui/material/Skeleton';
import type { SkeletonProps as MuiSkeletonProps } from '@mui/material/Skeleton';

export interface StaNLinkSkeletonProps extends MuiSkeletonProps {}

export const Skeleton: React.FC<StaNLinkSkeletonProps> = (props) => {
  return <MuiSkeleton {...props} />;
};
