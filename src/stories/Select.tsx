import React from 'react';
import MuiSelect from '@mui/material/Select';
import type { SelectProps as MuiSelectProps } from '@mui/material/Select';

export interface StaNLinkSelectProps extends MuiSelectProps {}

export const Select: React.FC<StaNLinkSelectProps> = (props) => {
  return <MuiSelect {...props} />;
};
