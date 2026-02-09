import React from 'react';
import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers/DatePicker';
import type { DatePickerProps as MuiDatePickerProps } from '@mui/x-date-pickers/DatePicker';

export interface DatePickerProps<TDate> extends MuiDatePickerProps<TDate> {}

export const DatePicker = <TDate,>(props: DatePickerProps<TDate>) => {
  return <MuiDatePicker {...props} />;
};
