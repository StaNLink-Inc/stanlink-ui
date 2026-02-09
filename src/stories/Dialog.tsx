import React from 'react';
import MuiDialog from '@mui/material/Dialog';
import type { DialogProps as MuiDialogProps } from '@mui/material/Dialog';

export interface StaNLinkDialogProps extends MuiDialogProps {}

export const Dialog: React.FC<StaNLinkDialogProps> = (props) => {
  return <MuiDialog {...props} />;
};
