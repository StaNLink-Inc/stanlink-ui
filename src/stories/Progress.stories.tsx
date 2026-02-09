import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CircularProgress, LinearProgress } from './Progress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const meta: Meta<typeof CircularProgress> = {
  title: 'StaNLink/Progress',
  component: CircularProgress,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CircularProgress>;

export const CircularIndeterminate: Story = {
  render: () => <CircularProgress />,
};

export const CircularColors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <CircularProgress color="primary" />
      <CircularProgress color="secondary" />
      <CircularProgress color="success" />
      <CircularProgress color="error" />
      <CircularProgress color="warning" />
      <CircularProgress color="info" />
    </div>
  ),
};

export const CircularSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <CircularProgress size={20} />
      <CircularProgress size={30} />
      <CircularProgress size={40} />
      <CircularProgress size={60} />
    </div>
  ),
};

export const CircularDeterminate: Story = {
  render: () => {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
      }, 800);

      return () => {
        clearInterval(timer);
      };
    }, []);

    return <CircularProgress variant="determinate" value={progress} />;
  },
};

export const CircularWithLabel: Story = {
  render: () => {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
      }, 800);

      return () => {
        clearInterval(timer);
      };
    }, []);

    return (
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress variant="determinate" value={progress} size={80} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="caption" component="div" color="text.secondary">
            {`${Math.round(progress)}%`}
          </Typography>
        </Box>
      </Box>
    );
  },
};

export const LinearIndeterminate: Story = {
  render: () => (
    <div style={{ width: '100%' }}>
      <LinearProgress />
    </div>
  ),
};

export const LinearColors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
      <LinearProgress color="primary" />
      <LinearProgress color="secondary" />
      <LinearProgress color="success" />
      <LinearProgress color="error" />
      <LinearProgress color="warning" />
      <LinearProgress color="info" />
    </div>
  ),
};

export const LinearDeterminate: Story = {
  render: () => {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
      }, 800);

      return () => {
        clearInterval(timer);
      };
    }, []);

    return (
      <div style={{ width: '100%' }}>
        <LinearProgress variant="determinate" value={progress} />
      </div>
    );
  },
};

export const LinearWithLabel: Story = {
  render: () => {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
      }, 800);

      return () => {
        clearInterval(timer);
      };
    }, []);

    return (
      <Box sx={{ width: '100%' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ width: '100%', mr: 1 }}>
            <LinearProgress variant="determinate" value={progress} />
          </Box>
          <Box sx={{ minWidth: 35 }}>
            <Typography variant="body2" color="text.secondary">{`${Math.round(
              progress
            )}%`}</Typography>
          </Box>
        </Box>
      </Box>
    );
  },
};

export const TradingProgress: Story = {
  render: () => {
    const [progress, setProgress] = React.useState(65);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '400px' }}>
        <div>
          <Typography variant="body2" gutterBottom>
            Training Progress
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1 }}>
              <LinearProgress variant="determinate" value={progress} color="primary" />
            </Box>
            <Box sx={{ minWidth: 35 }}>
              <Typography variant="body2" color="text.secondary">
                {`${Math.round(progress)}%`}
              </Typography>
            </Box>
          </Box>
        </div>

        <div>
          <Typography variant="body2" gutterBottom>
            Backtesting
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1 }}>
              <LinearProgress variant="determinate" value={85} color="success" />
            </Box>
            <Box sx={{ minWidth: 35 }}>
              <Typography variant="body2" color="text.secondary">
                85%
              </Typography>
            </Box>
          </Box>
        </div>

        <div>
          <Typography variant="body2" gutterBottom>
            Optimization
          </Typography>
          <LinearProgress color="secondary" />
        </div>
      </div>
    );
  },
};
