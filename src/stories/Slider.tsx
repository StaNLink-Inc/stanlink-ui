import React from 'react';
import MuiSlider from '@mui/material/Slider';
import type { SliderProps as MuiSliderProps } from '@mui/material/Slider';

export interface SliderProps extends MuiSliderProps {}

export const Slider: React.FC<SliderProps> = (props) => {
  return <MuiSlider {...props} />;
};
