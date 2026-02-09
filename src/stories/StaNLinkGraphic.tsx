import React from 'react';
import { Box } from '@mui/material';

export interface StaNLinkGraphicProps {
  text?: string;
  opacity?: number;
  color?: string;
}

export const StaNLinkGraphic: React.FC<StaNLinkGraphicProps> = ({
  text = 'StaNLink',
  opacity = 0.05,
  color = 'white',
}) => {
  return (
    <Box
      sx={{
        width: '100%',
        opacity: opacity,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        component="span"
        sx={{
          fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
          fontSize: '20vw',
          fontWeight: 900,
          fontStretch: 'ultra-expanded',
          color: color,
          letterSpacing: '-0.15em',
          lineHeight: 1,
          whiteSpace: 'nowrap',
          WebkitFontSmoothing: 'antialiased',
        }}
      >
        {text}
      </Box>
    </Box>
  );
};
