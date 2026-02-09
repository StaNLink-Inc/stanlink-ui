import React from 'react';
import MuiCard from '@mui/material/Card';
import type { CardProps as MuiCardProps } from '@mui/material/Card';

export interface StaNLinkCardProps extends MuiCardProps {}

export const Card: React.FC<StaNLinkCardProps> = (props) => {
  return <MuiCard {...props} />;
};
