import React from 'react';
import MuiButton from '@mui/material/Button';
import type { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import CheckIcon from '@mui/icons-material/Check';
import { Box } from '@mui/material';

export interface StaNLinkButtonProps extends Omit<MuiButtonProps, 'startIcon' | 'endIcon'> {
  loading?: boolean;
  success?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

export const Button: React.FC<StaNLinkButtonProps> = ({ 
  children, 
  loading = false,
  success = false,
  disabled,
  startIcon,
  endIcon,
  ...props 
}) => {
  const isDisabled = disabled || loading || success;
  const buttonColor = success ? 'success' : props.color;

  return (
    <MuiButton
      {...props}
      color={buttonColor}
      disabled={isDisabled}
      startIcon={loading || success ? undefined : startIcon}
      endIcon={loading || success ? undefined : endIcon}
      sx={{
        ...props.sx,
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        minWidth: loading ? '56px' : 'auto',
        ...(success && {
          backgroundColor: '#34A853 !important',
          '&:hover': {
            backgroundColor: '#2D8E47 !important',
          },
        }),
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: loading ? 0 : 1,
          transform: loading ? 'scale(0.8)' : 'scale(1)',
          transition: 'all 0.2s ease',
        }}
      >
        {success ? (
          <>
            <CheckIcon sx={{ mr: 1, '@keyframes pulse': { '0%': { transform: 'scale(0.8)', opacity: 0 }, '50%': { transform: 'scale(1.1)' }, '100%': { transform: 'scale(1)', opacity: 1 } }, animation: 'pulse 0.4s ease-out' }} />
            Success
          </>
        ) : (
          children
        )}
      </Box>
      {loading && (
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CircularProgress size={20} color="inherit" />
        </Box>
      )}
    </MuiButton>
  );
};
