import type { Meta, StoryObj } from '@storybook/react';
import { LoginPage } from './LoginPage';

const meta: Meta<typeof LoginPage> = {
  title: 'Templates/LoginPage',
  component: LoginPage,
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof LoginPage>;

export const Default: Story = {
  args: {
    onLogin: (email, password, remember) => console.log('Login:', { email, password, remember }),
    onSocialLogin: (provider) => console.log('Social login:', provider),
    onForgotPassword: () => console.log('Forgot password'),
    onSignUp: () => console.log('Sign up'),
  },
};

export const Loading: Story = {
  args: {
    ...Default.args,
    loading: true,
  },
};

export const WithError: Story = {
  args: {
    ...Default.args,
    error: 'Invalid email or password. Please try again.',
  },
};
