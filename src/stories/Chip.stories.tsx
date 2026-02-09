import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from './Chip';
import Avatar from '@mui/material/Avatar';
import { Done, Close, TrendingUp, TrendingDown } from '@mui/icons-material';

const meta: Meta<typeof Chip> = {
  title: 'StaNLink/Chip',
  component: Chip,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'outlined'],
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'error', 'info', 'success', 'warning'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: {
    label: 'Chip',
  },
};

export const Clickable: Story = {
  args: {
    label: 'Clickable',
    onClick: () => alert('Chip clicked!'),
  },
};

export const Deletable: Story = {
  args: {
    label: 'Deletable',
    onDelete: () => alert('Delete clicked!'),
  },
};

export const WithAvatar: Story = {
  args: {
    avatar: <Avatar>M</Avatar>,
    label: 'With Avatar',
  },
};

export const WithIcon: Story = {
  args: {
    icon: <Done />,
    label: 'With Icon',
  },
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Chip label="Default" />
      <Chip label="Primary" color="primary" />
      <Chip label="Secondary" color="secondary" />
      <Chip label="Success" color="success" />
      <Chip label="Error" color="error" />
      <Chip label="Warning" color="warning" />
      <Chip label="Info" color="info" />
    </div>
  ),
};

export const Outlined: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Chip label="Default" variant="outlined" />
      <Chip label="Primary" color="primary" variant="outlined" />
      <Chip label="Secondary" color="secondary" variant="outlined" />
      <Chip label="Success" color="success" variant="outlined" />
      <Chip label="Error" color="error" variant="outlined" />
      <Chip label="Warning" color="warning" variant="outlined" />
      <Chip label="Info" color="info" variant="outlined" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <Chip label="Small" size="small" />
      <Chip label="Medium" size="medium" />
    </div>
  ),
};

export const TradingTags: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Chip label="Momentum" color="primary" />
      <Chip label="Scalping" color="secondary" />
      <Chip label="Swing Trading" color="info" />
      <Chip label="AI-Driven" color="success" />
      <Chip label="High Risk" color="error" />
      <Chip label="Beta" color="warning" variant="outlined" />
    </div>
  ),
};

export const SkillStatus: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Chip label="Active" color="success" icon={<Done />} />
      <Chip label="Draft" color="default" variant="outlined" />
      <Chip label="Archived" color="default" />
      <Chip label="Live" color="success" size="small" />
      <Chip label="Testing" color="warning" size="small" />
    </div>
  ),
};

export const PerformanceChips: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Chip label="87.5% Accuracy" color="success" icon={<TrendingUp />} />
      <Chip label="Sharpe 2.34" color="info" />
      <Chip label="1.2K Subscribers" color="primary" />
      <Chip label="Verified" color="success" variant="outlined" icon={<Done />} />
      <Chip label="Top Performer" color="warning" />
    </div>
  ),
};

export const FilterChips: Story = {
  render: () => {
    const [selected, setSelected] = React.useState<string[]>(['momentum']);

    const handleClick = (tag: string) => {
      setSelected((prev) =>
        prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
      );
    };

    return (
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <Chip
          label="Momentum"
          color={selected.includes('momentum') ? 'primary' : 'default'}
          onClick={() => handleClick('momentum')}
        />
        <Chip
          label="Reversal"
          color={selected.includes('reversal') ? 'primary' : 'default'}
          onClick={() => handleClick('reversal')}
        />
        <Chip
          label="Scalping"
          color={selected.includes('scalping') ? 'primary' : 'default'}
          onClick={() => handleClick('scalping')}
        />
        <Chip
          label="AI-Driven"
          color={selected.includes('ai') ? 'primary' : 'default'}
          onClick={() => handleClick('ai')}
        />
      </div>
    );
  },
};

export const DeletableList: Story = {
  render: () => {
    const [chips, setChips] = React.useState(['EURUSD', 'GBPUSD', 'USDJPY', 'AUDUSD']);

    const handleDelete = (chipToDelete: string) => {
      setChips((chips) => chips.filter((chip) => chip !== chipToDelete));
    };

    return (
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {chips.map((chip) => (
          <Chip
            key={chip}
            label={chip}
            onDelete={() => handleDelete(chip)}
            color="primary"
            variant="outlined"
          />
        ))}
      </div>
    );
  },
};
