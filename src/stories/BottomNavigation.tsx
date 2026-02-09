import React from 'react';
import MuiBottomNavigation from '@mui/material/BottomNavigation';
import MuiBottomNavigationAction from '@mui/material/BottomNavigationAction';
import type { BottomNavigationProps as MuiBottomNavigationProps } from '@mui/material/BottomNavigation';
import type { BottomNavigationActionProps as MuiBottomNavigationActionProps } from '@mui/material/BottomNavigationAction';

export interface BottomNavigationProps extends MuiBottomNavigationProps {}
export interface BottomNavigationActionProps extends MuiBottomNavigationActionProps {}

export const BottomNavigation: React.FC<BottomNavigationProps> = (props) => <MuiBottomNavigation {...props} />;
export const BottomNavigationAction: React.FC<BottomNavigationActionProps> = (props) => <MuiBottomNavigationAction {...props} />;
