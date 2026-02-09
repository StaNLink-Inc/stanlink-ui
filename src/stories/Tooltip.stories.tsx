import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';
import { Button } from './Button';
import IconButton from '@mui/material/IconButton';
import { Delete, Info, Help } from '@mui/icons-material';

const meta: Meta<typeof Tooltip> = {
  title: 'StaNLink/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Basic: Story = {
  render: () => (
    <Tooltip title="This is a tooltip">
      <Button>Hover me</Button>
    </Tooltip>
  ),
};

export const Placements: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', padding: '50px' }}>
      <Tooltip title="Top" placement="top">
        <Button>Top</Button>
      </Tooltip>
      <Tooltip title="Right" placement="right">
        <Button>Right</Button>
      </Tooltip>
      <Tooltip title="Bottom" placement="bottom">
        <Button>Bottom</Button>
      </Tooltip>
      <Tooltip title="Left" placement="left">
        <Button>Left</Button>
      </Tooltip>
    </div>
  ),
};

export const WithArrow: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Tooltip title="With arrow" arrow>
        <Button>Hover me</Button>
      </Tooltip>
      <Tooltip title="Top arrow" arrow placement="top">
        <Button>Top</Button>
      </Tooltip>
      <Tooltip title="Right arrow" arrow placement="right">
        <Button>Right</Button>
      </Tooltip>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Tooltip title="Delete this item">
        <IconButton>
          <Delete />
        </IconButton>
      </Tooltip>
      <Tooltip title="More information">
        <IconButton>
          <Info />
        </IconButton>
      </Tooltip>
      <Tooltip title="Get help">
        <IconButton>
          <Help />
        </IconButton>
      </Tooltip>
    </div>
  ),
};

export const LongText: Story = {
  render: () => (
    <Tooltip title="This is a very long tooltip text that demonstrates how tooltips handle longer content. It will wrap to multiple lines if needed.">
      <Button>Long tooltip</Button>
    </Tooltip>
  ),
};

export const Interactive: Story = {
  render: () => (
    <Tooltip
      title={
        <div>
          <strong>Interactive Tooltip</strong>
          <p>You can interact with this tooltip content.</p>
        </div>
      }
      arrow
      interactive
    >
      <Button>Hover me</Button>
    </Tooltip>
  ),
};

export const TradingTooltips: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexDirection: 'column', maxWidth: '400px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span>Sharpe Ratio:</span>
        <strong>2.34</strong>
        <Tooltip title="Sharpe Ratio measures risk-adjusted returns. Higher is better. Above 2.0 is excellent." arrow>
          <IconButton size="small">
            <Info fontSize="small" />
          </IconButton>
        </Tooltip>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span>Max Drawdown:</span>
        <strong>-12.5%</strong>
        <Tooltip title="Maximum peak-to-trough decline. Lower is better. Keep below -20% for safety." arrow>
          <IconButton size="small">
            <Info fontSize="small" />
          </IconButton>
        </Tooltip>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span>Win Rate:</span>
        <strong>65%</strong>
        <Tooltip title="Percentage of profitable trades. Above 60% is considered good for most strategies." arrow>
          <IconButton size="small">
            <Info fontSize="small" />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  ),
};

export const ControlledTooltip: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);

    return (
      <Tooltip
        title="Controlled tooltip"
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      >
        <Button onClick={() => setOpen(!open)}>Click to toggle</Button>
      </Tooltip>
    );
  },
};

export const DisabledButton: Story = {
  render: () => (
    <Tooltip title="This button is disabled">
      <span>
        <Button disabled>Disabled Button</Button>
      </span>
    </Tooltip>
  ),
};
