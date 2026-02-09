import React from 'react';
import MuiRadio from '@mui/material/Radio';
import type { RadioProps as MuiRadioProps } from '@mui/material/Radio';

export interface RadioProps extends MuiRadioProps {}

export const Radio: React.FC<RadioProps> = (props) => {
  return <MuiRadio {...props} />;
};
