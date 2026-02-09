import React from 'react';
import { Box, Typography } from '@mui/material';
import { keyframes } from '@mui/system';

export interface OrbitalLoaderProps {
  size?: number;
  text?: string;
  colors?: [string, string, string];
  speed?: number;
}

const rotate1 = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const rotate2 = keyframes`
  0% { transform: rotate(120deg); }
  100% { transform: rotate(480deg); }
`;

const rotate3 = keyframes`
  0% { transform: rotate(240deg); }
  100% { transform: rotate(600deg); }
`;

export const OrbitalLoader: React.FC<OrbitalLoaderProps> = ({
  size = 150,
  text = 'Loading...',
  colors = ['#ff00ea', '#00efff', '#00ff00'],
  speed = 2,
}) => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: size,
        height: size,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          border: '4px solid transparent',
          borderTop: `4px solid ${colors[0]}`,
          borderRadius: '50%',
          animation: `${rotate1} ${speed}s linear infinite`,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          border: '4px solid transparent',
          borderTop: `4px solid ${colors[1]}`,
          borderRadius: '50%',
          animation: `${rotate2} ${speed}s linear infinite`,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          border: '4px solid transparent',
          borderTop: `4px solid ${colors[2]}`,
          borderRadius: '50%',
          animation: `${rotate3} ${speed}s linear infinite`,
        }}
      />
      {text && (
        <Typography
          sx={{
            position: 'absolute',
            bottom: -60,
            color: 'text.primary',
            fontFamily: 'monospace',
            fontSize: '1.2rem',
            letterSpacing: 2,
            textTransform: 'uppercase',
          }}
        >
          {text}
        </Typography>
      )}
    </Box>
  );
};
