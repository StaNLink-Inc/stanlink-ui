import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from './TextField';
import { Email, Lock, Search, Person } from '@mui/icons-material';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const meta: Meta<typeof TextField> = {
  title: 'StaNLink/TextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['outlined', 'filled', 'standard'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'warning', 'info', 'success'],
    },
    disabled: {
      control: 'boolean',
    },
    error: {
      control: 'boolean',
    },
    required: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Username',
    helperText: 'Choose a unique username',
    placeholder: 'johndoe',
  },
};

export const Error: Story = {
  args: {
    label: 'Email',
    error: true,
    helperText: 'Invalid email address',
    value: 'invalid@',
  },
};

export const Required: Story = {
  args: {
    label: 'Password',
    required: true,
    type: 'password',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Field',
    disabled: true,
    value: 'Cannot edit this',
  },
};

export const WithStartIcon: Story = {
  args: {
    label: 'Email',
    InputProps: {
      startAdornment: (
        <InputAdornment position="start">
          <Email />
        </InputAdornment>
      ),
    },
  },
};

export const WithEndIcon: Story = {
  args: {
    label: 'Search',
    InputProps: {
      endAdornment: (
        <InputAdornment position="end">
          <Search />
        </InputAdornment>
      ),
    },
  },
};

export const PasswordField: Story = {
  render: () => {
    return (
      <TextField
        label="Password"
        type="password"
      />
    );
  },
};

export const Multiline: Story = {
  args: {
    label: 'Description',
    multiline: true,
    rows: 4,
    placeholder: 'Enter a detailed description...',
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Full Width Field',
    fullWidth: true,
    placeholder: 'This field spans the full width',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '400px' }}>
      <TextField variant="outlined" label="Outlined" placeholder="Default variant" />
      <TextField variant="filled" label="Filled" placeholder="Filled variant" />
      <TextField variant="standard" label="Standard" placeholder="Standard variant" />
    </div>
  ),
};

export const FormExample: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '400px' }}>
      <TextField
        label="Full Name"
        required
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Person />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label="Email"
        type="email"
        required
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Email />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label="Password"
        type="password"
        required
        helperText="Must be at least 8 characters"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Lock />
            </InputAdornment>
          ),
        }}
      />
    </div>
  ),
};
