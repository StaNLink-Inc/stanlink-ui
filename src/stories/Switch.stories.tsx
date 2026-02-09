import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';

const meta: Meta<typeof Switch> = {
  title: 'StaNLink/Switch',
  component: Switch,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Basic: Story = {
  render: () => <Switch />,
};

export const WithLabel: Story = {
  render: () => <FormControlLabel control={<Switch />} label="Enable notifications" />,
};

export const Checked: Story = {
  render: () => <FormControlLabel control={<Switch defaultChecked />} label="Enabled by default" />,
};

export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <FormControlLabel control={<Switch disabled />} label="Disabled" />
      <FormControlLabel control={<Switch disabled checked />} label="Disabled & Checked" />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <FormControlLabel control={<Switch defaultChecked color="primary" />} label="Primary" />
      <FormControlLabel control={<Switch defaultChecked color="secondary" />} label="Secondary" />
      <FormControlLabel control={<Switch defaultChecked color="success" />} label="Success" />
      <FormControlLabel control={<Switch defaultChecked color="error" />} label="Error" />
      <FormControlLabel control={<Switch defaultChecked color="warning" />} label="Warning" />
      <FormControlLabel control={<Switch defaultChecked color="info" />} label="Info" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <FormControlLabel control={<Switch size="small" />} label="Small" />
      <FormControlLabel control={<Switch />} label="Medium" />
      <FormControlLabel control={<Switch size="small" defaultChecked />} label="Small Checked" />
      <FormControlLabel control={<Switch defaultChecked />} label="Medium Checked" />
    </div>
  ),
};

export const LabelPlacement: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <FormControlLabel control={<Switch />} label="End (default)" labelPlacement="end" />
      <FormControlLabel control={<Switch />} label="Start" labelPlacement="start" />
      <FormControlLabel control={<Switch />} label="Top" labelPlacement="top" />
      <FormControlLabel control={<Switch />} label="Bottom" labelPlacement="bottom" />
    </div>
  ),
};

export const TradingSettings: Story = {
  render: () => {
    const [settings, setSettings] = React.useState({
      liveTrading: false,
      autoTrade: false,
      riskManagement: true,
      stopLoss: true,
      takeProfit: true,
      trailingStop: false,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSettings({
        ...settings,
        [event.target.name]: event.target.checked,
      });
    };

    return (
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={settings.liveTrading}
              onChange={handleChange}
              name="liveTrading"
              color="error"
            />
          }
          label="Live Trading Mode"
        />
        <FormControlLabel
          control={
            <Switch
              checked={settings.autoTrade}
              onChange={handleChange}
              name="autoTrade"
              color="warning"
              disabled={!settings.liveTrading}
            />
          }
          label="Auto-execute trades"
        />
        <FormControlLabel
          control={
            <Switch
              checked={settings.riskManagement}
              onChange={handleChange}
              name="riskManagement"
              color="success"
            />
          }
          label="Risk management"
        />
        <FormControlLabel
          control={
            <Switch
              checked={settings.stopLoss}
              onChange={handleChange}
              name="stopLoss"
              color="primary"
              disabled={!settings.riskManagement}
            />
          }
          label="Stop loss"
        />
        <FormControlLabel
          control={
            <Switch
              checked={settings.takeProfit}
              onChange={handleChange}
              name="takeProfit"
              color="primary"
              disabled={!settings.riskManagement}
            />
          }
          label="Take profit"
        />
        <FormControlLabel
          control={
            <Switch
              checked={settings.trailingStop}
              onChange={handleChange}
              name="trailingStop"
              color="info"
              disabled={!settings.riskManagement}
            />
          }
          label="Trailing stop"
        />
      </FormGroup>
    );
  },
};

export const NotificationSettings: Story = {
  render: () => {
    const [notifications, setNotifications] = React.useState({
      email: true,
      push: true,
      sms: false,
      desktop: true,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setNotifications({
        ...notifications,
        [event.target.name]: event.target.checked,
      });
    };

    return (
      <div style={{ maxWidth: '400px' }}>
        <h3 style={{ marginBottom: '16px' }}>Notification Preferences</h3>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch checked={notifications.email} onChange={handleChange} name="email" />
            }
            label="Email notifications"
          />
          <FormControlLabel
            control={
              <Switch checked={notifications.push} onChange={handleChange} name="push" />
            }
            label="Push notifications"
          />
          <FormControlLabel
            control={
              <Switch checked={notifications.sms} onChange={handleChange} name="sms" />
            }
            label="SMS alerts (premium)"
          />
          <FormControlLabel
            control={
              <Switch checked={notifications.desktop} onChange={handleChange} name="desktop" />
            }
            label="Desktop notifications"
          />
        </FormGroup>
      </div>
    );
  },
};
