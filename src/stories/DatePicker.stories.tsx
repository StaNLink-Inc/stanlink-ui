import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from './DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Stack } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';

const meta: Meta<typeof DatePicker> = {
  title: 'Input/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Story />
      </LocalizationProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Basic: Story = {
  render: () => {
    const [value, setValue] = React.useState<Dayjs | null>(dayjs());
    return <DatePicker label="Select Date" value={value} onChange={(newValue) => setValue(newValue)} />;
  },
};

export const TradingDateRange: Story = {
  render: () => {
    const [startDate, setStartDate] = React.useState<Dayjs | null>(dayjs().subtract(7, 'day'));
    const [endDate, setEndDate] = React.useState<Dayjs | null>(dayjs());
    return (
      <Stack spacing={2}>
        <DatePicker label="Start Date" value={startDate} onChange={(newValue) => setStartDate(newValue)} />
        <DatePicker label="End Date" value={endDate} onChange={(newValue) => setEndDate(newValue)} />
      </Stack>
    );
  },
};

export const Required: Story = {
  render: () => {
    const [value, setValue] = React.useState<Dayjs | null>(null);
    return <DatePicker label="Deployment Date" value={value} onChange={(newValue) => setValue(newValue)} slotProps={{ textField: { required: true } }} />;
  },
};
