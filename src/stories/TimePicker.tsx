import React from 'react';
import { TimePicker as MuiTimePicker } from '@mui/x-date-pickers/TimePicker';
import type { TimePickerProps as MuiTimePickerProps } from '@mui/x-date-pickers/TimePicker';

export interface TimePickerProps<TDate> extends MuiTimePickerProps<TDate> {}

export const TimePicker = <TDate,>(props: TimePickerProps<TDate>) => {
  return <MuiTimePicker {...props} />;
};
