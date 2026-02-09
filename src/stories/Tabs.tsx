import React from 'react';
import MuiTabs from '@mui/material/Tabs';
import MuiTab from '@mui/material/Tab';
import type { TabsProps as MuiTabsProps } from '@mui/material/Tabs';
import type { TabProps as MuiTabProps } from '@mui/material/Tab';

export interface StaNLinkTabsProps extends MuiTabsProps {}
export interface StaNLinkTabProps extends MuiTabProps {}

export const Tabs: React.FC<StaNLinkTabsProps> = (props) => {
  return <MuiTabs {...props} />;
};

export const Tab: React.FC<StaNLinkTabProps> = (props) => {
  return <MuiTab {...props} />;
};
