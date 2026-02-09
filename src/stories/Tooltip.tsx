import React from 'react';
import MuiTooltip from '@mui/material/Tooltip';
import type { TooltipProps as MuiTooltipProps } from '@mui/material/Tooltip';

export interface StaNLinkTooltipProps extends MuiTooltipProps {}

export const Tooltip: React.FC<StaNLinkTooltipProps> = (props) => {
  return <MuiTooltip {...props} />;
};
