import React from 'react';
import MuiAvatar from '@mui/material/Avatar';
import type { AvatarProps as MuiAvatarProps } from '@mui/material/Avatar';

export interface StaNLinkAvatarProps extends MuiAvatarProps {}

export const Avatar: React.FC<StaNLinkAvatarProps> = (props) => {
  return <MuiAvatar {...props} />;
};
