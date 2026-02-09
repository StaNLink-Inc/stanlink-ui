import React from 'react';
import MuiSwitch from '@mui/material/Switch';
import type { SwitchProps as MuiSwitchProps } from '@mui/material/Switch';

export interface StaNLinkSwitchProps extends MuiSwitchProps {}

export const Switch: React.FC<StaNLinkSwitchProps> = (props) => {
  return <MuiSwitch {...props} />;
};
