import type { Meta, StoryObj } from '@storybook/react';
import { ErrorPage } from './ErrorPage';

const meta: Meta<typeof ErrorPage> = {
  title: 'Templates/ErrorPage',
  component: ErrorPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ErrorPage>;

export const NotFound: Story = {
  args: {
    errorCode: '404',
  },
};

export const ServerError: Story = {
  args: {
    errorCode: '500',
  },
};

export const Forbidden: Story = {
  args: {
    errorCode: '403',
  },
};

export const ServiceUnavailable: Story = {
  args: {
    errorCode: '503',
  },
};

export const CustomMessage: Story = {
  args: {
    errorCode: '404',
    title: 'Strategy Not Found',
    message: 'The trading strategy you are looking for does not exist or has been removed.',
  },
};

export const OnlyHomeButton: Story = {
  args: {
    errorCode: '500',
    showBackButton: false,
  },
};

export const NoButtons: Story = {
  args: {
    errorCode: '503',
    showHomeButton: false,
    showBackButton: false,
  },
};
