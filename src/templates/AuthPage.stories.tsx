import type { Meta, StoryObj } from '@storybook/react';
import { AuthPage } from './AuthPage';

const meta: Meta<typeof AuthPage> = {
  title: 'Templates/AuthPage',
  component: AuthPage,
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof AuthPage>;

export const SignIn: Story = {
  args: {
    view: 'signin',
    onLogin: (email, password, remember) => console.log('Login:', { email, password, remember }),
  },
};

export const SignUp: Story = {
  args: {
    view: 'signup',
    onSignUp: (name, email, password) => console.log('Sign Up:', { name, email, password }),
  },
};

export const ForgotPassword: Story = {
  args: {
    view: 'forgot',
    onForgotPassword: (email) => console.log('Forgot Password:', { email }),
  },
};

export const ResetPassword: Story = {
  args: {
    view: 'reset',
    onResetPassword: (password, confirmPassword) => console.log('Reset Password:', { password, confirmPassword }),
  },
};

export const Loading: Story = {
  args: {
    view: 'signin',
    loading: true,
    onLogin: (email, password, remember) => console.log('Login:', { email, password, remember }),
  },
};

export const WithError: Story = {
  args: {
    view: 'signin',
    error: 'Invalid email or password. Please try again.',
    onLogin: (email, password, remember) => console.log('Login:', { email, password, remember }),
  },
};
