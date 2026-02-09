import React from 'react';
import MuiMobileStepper from '@mui/material/MobileStepper';
import type { MobileStepperProps as MuiMobileStepperProps } from '@mui/material/MobileStepper';

export interface MobileStepperProps extends MuiMobileStepperProps {}

export const MobileStepper: React.FC<MobileStepperProps> = (props) => {
  return <MuiMobileStepper {...props} />;
};
