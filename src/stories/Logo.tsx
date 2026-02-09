import React from 'react';
import { Box } from '@mui/material';

export interface LogoProps {
  width?: number | string;
  height?: number | string;
  href?: string;
}

export const Logo: React.FC<LogoProps> = ({ width = 80, height = 'auto', href = '/' }) => {
  const logoImage = (
    <Box
      component="img"
      src="/assets/stanlink-logo.png"
      alt="StaNLink Logo"
      sx={{
        width,
        height,
        display: 'block',
        cursor: href ? 'pointer' : 'default',
        objectFit: 'contain',
      }}
    />
  );

  if (href) {
    return (
      <Box component="a" href={href} sx={{ display: 'inline-block', lineHeight: 0 }}>
        {logoImage}
      </Box>
    );
  }

  return logoImage;
};
