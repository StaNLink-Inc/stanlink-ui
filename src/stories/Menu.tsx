import React from 'react';
import MuiMenu from '@mui/material/Menu';
import MuiMenuItem from '@mui/material/MenuItem';
import type { MenuProps as MuiMenuProps } from '@mui/material/Menu';
import type { MenuItemProps as MuiMenuItemProps } from '@mui/material/MenuItem';

export interface StaNLinkMenuProps extends MuiMenuProps {}
export interface StaNLinkMenuItemProps extends MuiMenuItemProps {}

export const Menu: React.FC<StaNLinkMenuProps> = (props) => {
  return <MuiMenu {...props} />;
};

export const MenuItem: React.FC<StaNLinkMenuItemProps> = (props) => {
  return <MuiMenuItem {...props} />;
};
