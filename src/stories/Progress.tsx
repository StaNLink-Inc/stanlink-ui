import React from 'react';
import MuiCircularProgress from '@mui/material/CircularProgress';
import MuiLinearProgress from '@mui/material/LinearProgress';
import type { CircularProgressProps } from '@mui/material/CircularProgress';
import type { LinearProgressProps } from '@mui/material/LinearProgress';

export interface StaNLinkCircularProgressProps extends CircularProgressProps {}
export interface StaNLinkLinearProgressProps extends LinearProgressProps {}

export const CircularProgress: React.FC<StaNLinkCircularProgressProps> = (props) => {
  return <MuiCircularProgress {...props} />;
};

export const LinearProgress: React.FC<StaNLinkLinearProgressProps> = (props) => {
  return <MuiLinearProgress {...props} />;
};
