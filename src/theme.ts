import { createTheme } from '@mui/material/styles';

// StaNLink Design System - Professional UI/UX Foundation
const stanlinkTheme = createTheme({
  palette: {
    primary: {
      main: '#D97757',
      light: '#E89B7E',
      dark: '#B85C3E',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#8B6F47',
      light: '#A68A5E',
      dark: '#6B5637',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#EA4335',
      light: '#EF6C61',
      dark: '#C5362D',
    },
    warning: {
      main: '#FBBC04',
      light: '#FCC934',
      dark: '#F9AB00',
    },
    info: {
      main: '#4285F4',
      light: '#669DF6',
      dark: '#3367D6',
    },
    success: {
      main: '#34A853',
      light: '#5BB974',
      dark: '#2D8E47',
    },
    grey: {
      50: '#F8F9FA',
      100: '#F1F3F4',
      200: '#E8EAED',
      300: '#DADCE0',
      400: '#BDC1C6',
      500: '#9AA0A6',
      600: '#80868B',
      700: '#5F6368',
      800: '#3C4043',
      900: '#202124',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#202124',
      secondary: '#5F6368',
      disabled: '#9AA0A6',
    },
  },
  typography: {
    fontFamily: '"Google Sans", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
      lineHeight: 1.2,
      letterSpacing: '-0.01562em',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
      lineHeight: 1.3,
      letterSpacing: '-0.00833em',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: 1.5,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.6,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
      letterSpacing: '0.00938em',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.43,
      letterSpacing: '0.01071em',
    },
    button: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 1.75,
      letterSpacing: '0.02857em',
      textTransform: 'none',
    },
    caption: {
      fontSize: '0.75rem',
      lineHeight: 1.66,
      letterSpacing: '0.03333em',
    },
    overline: {
      fontSize: '0.75rem',
      fontWeight: 500,
      lineHeight: 2.66,
      letterSpacing: '0.08333em',
      textTransform: 'uppercase',
    },
  },
  spacing: 8, // Base unit: 8px
  shape: {
    borderRadius: 8,
  },
  shadows: [
    'none',
    '0px 1px 2px 0px rgba(60,64,67,0.3), 0px 1px 3px 1px rgba(60,64,67,0.15)',
    '0px 1px 2px 0px rgba(60,64,67,0.3), 0px 2px 6px 2px rgba(60,64,67,0.15)',
    '0px 1px 3px 0px rgba(60,64,67,0.3), 0px 4px 8px 3px rgba(60,64,67,0.15)',
    '0px 2px 3px 0px rgba(60,64,67,0.3), 0px 6px 10px 4px rgba(60,64,67,0.15)',
    '0px 4px 4px 0px rgba(60,64,67,0.3), 0px 8px 12px 6px rgba(60,64,67,0.15)',
    '0px 6px 10px 0px rgba(60,64,67,0.3), 0px 1px 18px 0px rgba(60,64,67,0.15)',
    '0px 7px 8px -4px rgba(60,64,67,0.3), 0px 12px 17px 2px rgba(60,64,67,0.15)',
    '0px 8px 10px -5px rgba(60,64,67,0.3), 0px 16px 24px 2px rgba(60,64,67,0.15)',
    '0px 9px 11px -5px rgba(60,64,67,0.3), 0px 18px 28px 2px rgba(60,64,67,0.15)',
    '0px 10px 13px -6px rgba(60,64,67,0.3), 0px 20px 31px 3px rgba(60,64,67,0.15)',
    '0px 10px 13px -6px rgba(60,64,67,0.3), 0px 20px 31px 3px rgba(60,64,67,0.15)',
    '0px 10px 13px -6px rgba(60,64,67,0.3), 0px 20px 31px 3px rgba(60,64,67,0.15)',
    '0px 10px 13px -6px rgba(60,64,67,0.3), 0px 20px 31px 3px rgba(60,64,67,0.15)',
    '0px 10px 13px -6px rgba(60,64,67,0.3), 0px 20px 31px 3px rgba(60,64,67,0.15)',
    '0px 10px 13px -6px rgba(60,64,67,0.3), 0px 20px 31px 3px rgba(60,64,67,0.15)',
    '0px 10px 13px -6px rgba(60,64,67,0.3), 0px 20px 31px 3px rgba(60,64,67,0.15)',
    '0px 10px 13px -6px rgba(60,64,67,0.3), 0px 20px 31px 3px rgba(60,64,67,0.15)',
    '0px 10px 13px -6px rgba(60,64,67,0.3), 0px 20px 31px 3px rgba(60,64,67,0.15)',
    '0px 10px 13px -6px rgba(60,64,67,0.3), 0px 20px 31px 3px rgba(60,64,67,0.15)',
    '0px 10px 13px -6px rgba(60,64,67,0.3), 0px 20px 31px 3px rgba(60,64,67,0.15)',
    '0px 10px 13px -6px rgba(60,64,67,0.3), 0px 20px 31px 3px rgba(60,64,67,0.15)',
    '0px 10px 13px -6px rgba(60,64,67,0.3), 0px 20px 31px 3px rgba(60,64,67,0.15)',
    '0px 10px 13px -6px rgba(60,64,67,0.3), 0px 20px 31px 3px rgba(60,64,67,0.15)',
    '0px 10px 13px -6px rgba(60,64,67,0.3), 0px 20px 31px 3px rgba(60,64,67,0.15)',
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          fontWeight: 600,
          padding: '10px 24px',
          transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
          backdropFilter: 'blur(10px)',
          '&:hover': {
            transform: 'translateY(-2px) scale(1.02)',
          },
          '&:active': {
            transform: 'translateY(0) scale(0.98)',
          },
        },
        contained: {
          boxShadow: '0 2px 8px rgba(217, 119, 87, 0.25)',
          '&:hover': {
            boxShadow: '0 8px 20px rgba(217, 119, 87, 0.4)',
          },
        },
        outlined: {
          borderWidth: 2,
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          '&:hover': {
            borderWidth: 2,
            backgroundColor: 'rgba(217, 119, 87, 0.08)',
            backdropFilter: 'blur(12px)',
          },
        },
        sizeLarge: {
          padding: '12px 32px',
          fontSize: '0.9375rem',
        },
        sizeSmall: {
          padding: '6px 16px',
          fontSize: '0.8125rem',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0px 1px 2px 0px rgba(60,64,67,0.3), 0px 1px 3px 1px rgba(60,64,67,0.15)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0px 8px 16px 0px rgba(60,64,67,0.3), 0px 4px 12px 4px rgba(60,64,67,0.15)',
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        InputLabelProps: {
          shrink: undefined,
        },
      },
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: 12,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          cursor: 'pointer',
          transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
          '&:hover': {
            transform: 'perspective(500px) rotateY(15deg) rotateX(-5deg) scale(1.1)',
            boxShadow: '0 12px 24px rgba(217, 119, 87, 0.3), 0 0 0 4px rgba(217, 119, 87, 0.1)',
            filter: 'brightness(1.1)',
          },
          '&:active': {
            transform: 'perspective(500px) rotateY(0deg) rotateX(0deg) scale(1.05)',
          },
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          borderRadius: 12,
          marginTop: 8,
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0px 8px 24px rgba(60, 64, 67, 0.15), 0px 2px 8px rgba(60, 64, 67, 0.1)',
        },
        list: {
          padding: '8px',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          margin: '2px 0',
          padding: '10px 16px',
          transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
          position: 'relative',
          '&:hover': {
            backgroundColor: 'rgba(217, 119, 87, 0.08)',
            transform: 'translateX(4px) scale(1.02)',
            paddingLeft: '20px',
          },
          '&.Mui-selected': {
            backgroundColor: 'rgba(217, 119, 87, 0.12)',
            borderLeft: '3px solid #D97757',
            paddingLeft: '13px',
            '&:hover': {
              backgroundColor: 'rgba(217, 119, 87, 0.16)',
            },
          },
        },
      },
    },
    MuiSkeleton: {
      defaultProps: {
        animation: 'wave',
      },
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(0, 0, 0, 0.08)',
          '&::after': {
            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent)',
          },
        },
        wave: {
          '&::after': {
            animation: 'MuiSkeleton-keyframes-wave 1.6s linear 0.5s infinite',
          },
        },
      },
    },
  },
});

export default stanlinkTheme;
