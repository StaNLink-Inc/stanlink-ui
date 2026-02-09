import React from 'react';
import { Box } from '@mui/material';
import { OrbitalLoader } from '../stories/OrbitalLoader';

export interface LoadingPageProps {
  size?: number;
  text?: string;
  colors?: [string, string, string];
  speed?: number;
  fullScreen?: boolean;
}

export const LoadingPage: React.FC<LoadingPageProps> = ({
  fullScreen = true,
  size,
  text,
  colors,
  speed,
}) => {
  return (
    <Box
      sx={{
        minHeight: fullScreen ? '100vh' : '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
      }}
    >
      <OrbitalLoader size={size} text={text} colors={colors} speed={speed} />
    </Box>
  );
};
