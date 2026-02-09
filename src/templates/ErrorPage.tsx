import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { Home, ArrowBack } from '@mui/icons-material';

export interface ErrorPageProps {
  errorCode: '404' | '500' | '403' | '503';
  title?: string;
  message?: string;
  showHomeButton?: boolean;
  showBackButton?: boolean;
  onHomeClick?: () => void;
  onBackClick?: () => void;
}

const defaultContent = {
  '404': {
    title: 'Page Not Found',
    message: 'The page you are looking for does not exist or has been moved.',
  },
  '500': {
    title: 'Internal Server Error',
    message: 'Something went wrong on our end. Please try again later.',
  },
  '403': {
    title: 'Access Denied',
    message: 'You do not have permission to access this resource.',
  },
  '503': {
    title: 'Service Unavailable',
    message: 'The service is temporarily unavailable. Please try again later.',
  },
};

export const ErrorPage: React.FC<ErrorPageProps> = ({
  errorCode,
  title,
  message,
  showHomeButton = true,
  showBackButton = true,
  onHomeClick,
  onBackClick,
}) => {
  const content = defaultContent[errorCode];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="sm">
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '6rem', sm: '8rem', md: '10rem' },
              fontWeight: 900,
              color: 'primary.main',
              lineHeight: 1,
              mb: 2,
            }}
          >
            {errorCode}
          </Typography>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
            {title || content.title}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            {message || content.message}
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            {showBackButton && (
              <Button
                variant="outlined"
                startIcon={<ArrowBack />}
                onClick={onBackClick || (() => window.history.back())}
              >
                Go Back
              </Button>
            )}
            {showHomeButton && (
              <Button
                variant="contained"
                startIcon={<Home />}
                onClick={onHomeClick || (() => (window.location.href = '/'))}
              >
                Home
              </Button>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
