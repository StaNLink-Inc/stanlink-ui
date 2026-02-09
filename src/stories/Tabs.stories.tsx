import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, Tab } from './Tabs';
import Box from '@mui/material/Box';
import { TrendingUp, Assessment, Settings, Person } from '@mui/icons-material';

const meta: Meta<typeof Tabs> = {
  title: 'StaNLink/Tabs',
  component: Tabs,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div hidden={value !== index} {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export const Basic: Story = {
  render: () => {
    const [value, setValue] = React.useState(0);

    return (
      <Box sx={{ width: '100%' }}>
        <Tabs value={value} onChange={(e, newValue) => setValue(newValue)}>
          <Tab label="Overview" />
          <Tab label="Performance" />
          <Tab label="Settings" />
        </Tabs>
        <TabPanel value={value} index={0}>
          Overview content
        </TabPanel>
        <TabPanel value={value} index={1}>
          Performance content
        </TabPanel>
        <TabPanel value={value} index={2}>
          Settings content
        </TabPanel>
      </Box>
    );
  },
};

export const WithIcons: Story = {
  render: () => {
    const [value, setValue] = React.useState(0);

    return (
      <Box sx={{ width: '100%' }}>
        <Tabs value={value} onChange={(e, newValue) => setValue(newValue)}>
          <Tab icon={<TrendingUp />} label="Strategies" />
          <Tab icon={<Assessment />} label="Analytics" />
          <Tab icon={<Settings />} label="Settings" />
          <Tab icon={<Person />} label="Profile" />
        </Tabs>
      </Box>
    );
  },
};

export const IconsOnly: Story = {
  render: () => {
    const [value, setValue] = React.useState(0);

    return (
      <Box sx={{ width: '100%' }}>
        <Tabs value={value} onChange={(e, newValue) => setValue(newValue)}>
          <Tab icon={<TrendingUp />} />
          <Tab icon={<Assessment />} />
          <Tab icon={<Settings />} />
          <Tab icon={<Person />} />
        </Tabs>
      </Box>
    );
  },
};

export const Centered: Story = {
  render: () => {
    const [value, setValue] = React.useState(0);

    return (
      <Box sx={{ width: '100%' }}>
        <Tabs value={value} onChange={(e, newValue) => setValue(newValue)} centered>
          <Tab label="Strategies" />
          <Tab label="Marketplace" />
          <Tab label="Community" />
        </Tabs>
      </Box>
    );
  },
};

export const Scrollable: Story = {
  render: () => {
    const [value, setValue] = React.useState(0);

    return (
      <Box sx={{ width: '100%' }}>
        <Tabs
          value={value}
          onChange={(e, newValue) => setValue(newValue)}
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="All Strategies" />
          <Tab label="Momentum" />
          <Tab label="Reversal" />
          <Tab label="Scalping" />
          <Tab label="Swing Trading" />
          <Tab label="AI-Driven" />
          <Tab label="High Frequency" />
          <Tab label="Long Term" />
        </Tabs>
      </Box>
    );
  },
};

export const Colors: Story = {
  render: () => {
    const [value, setValue] = React.useState(0);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>n        <Box sx={{ width: '100%' }}>
          <Tabs value={value} onChange={(e, newValue) => setValue(newValue)} textColor="primary" indicatorColor="primary">
            <Tab label="Primary" />
            <Tab label="Color" />
            <Tab label="Tabs" />
          </Tabs>
        </Box>
        <Box sx={{ width: '100%' }}>
          <Tabs value={value} onChange={(e, newValue) => setValue(newValue)} textColor="secondary" indicatorColor="secondary">
            <Tab label="Secondary" />
            <Tab label="Color" />
            <Tab label="Tabs" />
          </Tabs>
        </Box>
      </div>
    );
  },
};

export const TradingDashboard: Story = {
  render: () => {
    const [value, setValue] = React.useState(0);

    return (
      <Box sx={{ width: '100%' }}>
        <Tabs value={value} onChange={(e, newValue) => setValue(newValue)}>
          <Tab label="Active Strategies" />
          <Tab label="Performance" />
          <Tab label="Signals" />
          <Tab label="Backtest Results" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <h3>Active Strategies</h3>
          <p>Your currently running trading strategies...</p>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <h3>Performance Metrics</h3>
          <p>Accuracy: 87.5% | Sharpe: 2.34 | Win Rate: 65%</p>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <h3>Recent Signals</h3>
          <p>EURUSD BUY @ 1.0850 - Confidence: 85%</p>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <h3>Backtest Results</h3>
          <p>Historical performance analysis...</p>
        </TabPanel>
      </Box>
    );
  },
};

export const FullWidth: Story = {
  render: () => {
    const [value, setValue] = React.useState(0);

    return (
      <Box sx={{ width: '100%' }}>
        <Tabs value={value} onChange={(e, newValue) => setValue(newValue)} variant="fullWidth">
          <Tab label="Overview" />
          <Tab label="Details" />
          <Tab label="Settings" />
        </Tabs>
      </Box>
    );
  },
};
