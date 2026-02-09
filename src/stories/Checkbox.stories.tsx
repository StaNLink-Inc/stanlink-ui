import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Favorite, FavoriteBorder } from '@mui/icons-material';

const meta: Meta<typeof Checkbox> = {
  title: 'StaNLink/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Basic: Story = {
  render: () => <Checkbox />,
};

export const WithLabel: Story = {
  render: () => <FormControlLabel control={<Checkbox />} label="Accept terms and conditions" />,
};

export const Checked: Story = {
  render: () => <FormControlLabel control={<Checkbox defaultChecked />} label="Checked by default" />,
};

export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <FormControlLabel control={<Checkbox disabled />} label="Disabled" />
      <FormControlLabel control={<Checkbox disabled checked />} label="Disabled & Checked" />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <FormControlLabel control={<Checkbox defaultChecked color="primary" />} label="Primary" />
      <FormControlLabel control={<Checkbox defaultChecked color="secondary" />} label="Secondary" />
      <FormControlLabel control={<Checkbox defaultChecked color="success" />} label="Success" />
      <FormControlLabel control={<Checkbox defaultChecked color="error" />} label="Error" />
      <FormControlLabel control={<Checkbox defaultChecked color="warning" />} label="Warning" />
      <FormControlLabel control={<Checkbox defaultChecked color="info" />} label="Info" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <FormControlLabel control={<Checkbox size="small" />} label="Small" />
      <FormControlLabel control={<Checkbox />} label="Medium" />
      <FormControlLabel control={<Checkbox size="small" defaultChecked />} label="Small Checked" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Medium Checked" />
    </div>
  ),
};

export const CustomIcon: Story = {
  render: () => (
    <FormControlLabel
      control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />}
      label="Favorite"
    />
  ),
};

export const Indeterminate: Story = {
  render: () => {
    const [checked, setChecked] = React.useState([true, false]);

    const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked([event.target.checked, event.target.checked]);
    };

    const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked([event.target.checked, checked[1]]);
    };

    const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked([checked[0], event.target.checked]);
    };

    return (
      <div>
        <FormControlLabel
          label="Parent"
          control={
            <Checkbox
              checked={checked[0] && checked[1]}
              indeterminate={checked[0] !== checked[1]}
              onChange={handleChange1}
            />
          }
        />
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '24px' }}>
          <FormControlLabel
            label="Child 1"
            control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
          />
          <FormControlLabel
            label="Child 2"
            control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
          />
        </div>
      </div>
    );
  },
};

export const CheckboxGroup: Story = {
  render: () => {
    const [state, setState] = React.useState({
      momentum: true,
      reversal: false,
      scalping: false,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setState({
        ...state,
        [event.target.name]: event.target.checked,
      });
    };

    return (
      <FormControl component="fieldset">
        <FormLabel component="legend">Strategy Types</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={state.momentum} onChange={handleChange} name="momentum" />}
            label="Momentum"
          />
          <FormControlLabel
            control={<Checkbox checked={state.reversal} onChange={handleChange} name="reversal" />}
            label="Reversal"
          />
          <FormControlLabel
            control={<Checkbox checked={state.scalping} onChange={handleChange} name="scalping" />}
            label="Scalping"
          />
        </FormGroup>
      </FormControl>
    );
  },
};

export const TradingPreferences: Story = {
  render: () => {
    const [preferences, setPreferences] = React.useState({
      emailSignals: true,
      pushNotifications: true,
      smsAlerts: false,
      weekendTrading: false,
      autoReinvest: true,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPreferences({
        ...preferences,
        [event.target.name]: event.target.checked,
      });
    };

    return (
      <FormControl component="fieldset">
        <FormLabel component="legend">Trading Preferences</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={preferences.emailSignals}
                onChange={handleChange}
                name="emailSignals"
                color="primary"
              />
            }
            label="Email trading signals"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={preferences.pushNotifications}
                onChange={handleChange}
                name="pushNotifications"
                color="primary"
              />
            }
            label="Push notifications"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={preferences.smsAlerts}
                onChange={handleChange}
                name="smsAlerts"
                color="primary"
              />
            }
            label="SMS alerts (premium)"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={preferences.weekendTrading}
                onChange={handleChange}
                name="weekendTrading"
                color="warning"
              />
            }
            label="Enable weekend trading"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={preferences.autoReinvest}
                onChange={handleChange}
                name="autoReinvest"
                color="success"
              />
            }
            label="Auto-reinvest profits"
          />
        </FormGroup>
      </FormControl>
    );
  },
};
