import React from 'react';
import MuiStepper from '@mui/material/Stepper';
import MuiStep from '@mui/material/Step';
import MuiStepLabel from '@mui/material/StepLabel';
import type { StepperProps as MuiStepperProps } from '@mui/material/Stepper';
import type { StepProps as MuiStepProps } from '@mui/material/Step';
import type { StepLabelProps as MuiStepLabelProps } from '@mui/material/StepLabel';

export interface StepperProps extends MuiStepperProps {}
export interface StepProps extends MuiStepProps {}
export interface StepLabelProps extends MuiStepLabelProps {}

export const Stepper: React.FC<StepperProps> = (props) => <MuiStepper {...props} />;
export const Step: React.FC<StepProps> = (props) => <MuiStep {...props} />;
export const StepLabel: React.FC<StepLabelProps> = (props) => <MuiStepLabel {...props} />;
