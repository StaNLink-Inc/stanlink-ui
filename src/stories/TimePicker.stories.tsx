import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TimePicker } from './TimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';

const meta: Meta<typeof TimePicker> = {
  title: 'Input/TimePicker',
  component: TimePicker,
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
type Story = StoryObj<typeof TimePicker>;

export const Basic: Story = {
  render: () => {
    const [value, setValue] = React.useState<Dayjs | null>(dayjs());
    return <TimePicker label="Select Time" value={value} onChange={(newValue) => setValue(newValue)} />;
  },
};

export const TradingHours: Story = {
  render: () => {
    const [value, setValue] = React.useState<Dayjs | null>(dayjs().hour(9).minute(30));
    return <TimePicker label="Market Open Time" value={value} onChange={(newValue) => setValue(newValue)} />;
  },
};

export const Required: Story = {
  render: () => {
    const [value, setValue] = React.useState<Dayjs | null>(null);
    return <TimePicker label="Execution Time" value={value} onChange={(newValue) => setValue(newValue)} slotProps={{ textField: { required: true } }} />;
  },
};
