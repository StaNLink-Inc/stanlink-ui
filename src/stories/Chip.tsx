import React from 'react';
import MuiChip from '@mui/material/Chip';
import type { ChipProps as MuiChipProps } from '@mui/material/Chip';

export interface StaNLinkChipProps extends MuiChipProps {}

export const Chip: React.FC<StaNLinkChipProps> = (props) => {
  return <MuiChip {...props} />;
};
