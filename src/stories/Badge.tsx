import React from 'react';
import MuiBadge from '@mui/material/Badge';
import type { BadgeProps as MuiBadgeProps } from '@mui/material/Badge';

export interface StaNLinkBadgeProps extends MuiBadgeProps {}

export const Badge: React.FC<StaNLinkBadgeProps> = (props) => {
  return <MuiBadge {...props} />;
};
