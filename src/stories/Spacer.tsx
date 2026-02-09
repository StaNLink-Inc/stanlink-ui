import React from 'react';
import { Box } from '@mui/material';
import type { BoxProps } from '@mui/material';

export interface SpacerProps extends Omit<BoxProps, 'component'> {
  size?: number;
  direction?: 'horizontal' | 'vertical';
}

export const Spacer: React.FC<SpacerProps> = ({ size = 1, direction = 'vertical', ...props }) => {
  return (
    <Box
      {...props}
      sx={{
        ...(direction === 'vertical' ? { height: (theme) => theme.spacing(size) } : { width: (theme) => theme.spacing(size) }),
        ...props.sx,
      }}
    />
  );
};
