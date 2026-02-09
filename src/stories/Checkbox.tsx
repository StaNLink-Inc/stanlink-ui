import React from 'react';
import MuiCheckbox from '@mui/material/Checkbox';
import type { CheckboxProps as MuiCheckboxProps } from '@mui/material/Checkbox';

export interface StaNLinkCheckboxProps extends MuiCheckboxProps {}

export const Checkbox: React.FC<StaNLinkCheckboxProps> = (props) => {
  return <MuiCheckbox {...props} />;
};
