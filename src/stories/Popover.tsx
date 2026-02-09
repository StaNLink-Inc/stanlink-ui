import React from 'react';
import MuiPopover from '@mui/material/Popover';
import type { PopoverProps as MuiPopoverProps } from '@mui/material/Popover';

export interface PopoverProps extends MuiPopoverProps {}

export const Popover: React.FC<PopoverProps> = (props) => {
  return <MuiPopover {...props} />;
};
