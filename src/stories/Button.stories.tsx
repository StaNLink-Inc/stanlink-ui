import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { Add, Delete, Send } from '@mui/icons-material';

const meta: Meta<typeof Button> = {
  title: 'StaNLink/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['contained', 'outlined', 'text'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'warning', 'info', 'success'],
    },
    loading: {
      control: 'boolean',
    },
    success: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'contained',
    children: 'Primary Button',
    color: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'contained',
    children: 'Secondary Button',
    color: 'secondary',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: 'Outlined Button',
    color: 'primary',
  },
};

export const TextButton: Story = {
  args: {
    variant: 'text',
    children: 'Text Button',
    color: 'primary',
  },
};

export const Small: Story = {
  args: {
    variant: 'contained',
    size: 'small',
    children: 'Small Button',
    color: 'primary',
  },
};

export const Medium: Story = {
  args: {
    variant: 'contained',
    size: 'medium',
    children: 'Medium Button',
    color: 'primary',
  },
};

export const Large: Story = {
  args: {
    variant: 'contained',
    size: 'large',
    children: 'Large Button',
    color: 'primary',
  },
};

export const Loading: Story = {
  args: {
    children: 'Loading...',
    loading: true,
    variant: 'contained',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'contained',
    children: 'Disabled Button',
    disabled: true,
    color: 'primary',
  },
};

export const WithStartIcon: Story = {
  args: {
    children: 'Add Item',
    startIcon: <Add />,
    variant: 'contained',
  },
};

export const WithEndIcon: Story = {
  args: {
    children: 'Send Message',
    endIcon: <Send />,
    variant: 'contained',
  },
};

export const AllColors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Button variant="contained" color="primary">Primary</Button>
      <Button variant="contained" color="secondary">Secondary</Button>
      <Button variant="contained" color="error">Error</Button>
      <Button variant="contained" color="warning">Warning</Button>
      <Button variant="contained" color="info">Info</Button>
      <Button variant="contained" color="success">Success</Button>
    </div>
  ),
};

export const SuccessState: Story = {
  args: {
    children: 'Submit',
    success: true,
    variant: 'contained',
  },
};

export const LoadingToSuccess: Story = {
  render: () => {
    const [state, setState] = React.useState<'idle' | 'loading' | 'success'>('idle');

    const handleClick = () => {
      setState('loading');
      setTimeout(() => setState('success'), 2000);
      setTimeout(() => setState('idle'), 4000);
    };

    return (
      <Button
        variant="contained"
        loading={state === 'loading'}
        success={state === 'success'}
        onClick={handleClick}
        disabled={state !== 'idle'}
      >
        {state === 'idle' ? 'Submit Form' : 'Processing'}
      </Button>
    );
  },
};
