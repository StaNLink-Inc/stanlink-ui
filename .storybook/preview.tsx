import React from 'react';
import type { Preview } from '@storybook/react-vite'
import { ThemeProvider, CssBaseline } from '@mui/material';
import stanlinkTheme from '../src/theme';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      test: 'todo'
    }
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={stanlinkTheme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;