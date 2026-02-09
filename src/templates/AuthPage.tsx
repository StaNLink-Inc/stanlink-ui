import React from 'react';
import { Box, TextField, Button, Typography, Checkbox, FormControlLabel, Link, Backdrop, Alert, Divider, IconButton } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';

export interface AuthPageProps {
  onLogin?: (email: string, password: string, remember: boolean) => void;
  onSignUp?: (name: string, email: string, password: string) => void;
  onForgotPassword?: (email: string) => void;
  onResetPassword?: (password: string, confirmPassword: string) => void;
  onSocialAuth?: (provider: 'google' | 'github', mode: 'login' | 'signup') => void;
  loading?: boolean;
  error?: string;
  view?: 'signin' | 'signup' | 'forgot' | 'reset';
}

export const AuthPage: React.FC<AuthPageProps> = ({
  onLogin,
  onSignUp,
  onForgotPassword,
  onResetPassword,
  onSocialAuth,
  loading = false,
  error,
  view = 'signin',
}) => {
  const [currentView, setCurrentView] = React.useState<'signin' | 'signup' | 'forgot' | 'reset'>(view);
  const [isTransitioning, setIsTransitioning] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [name, setName] = React.useState('');
  const [remember, setRemember] = React.useState(false);

  const handleViewChange = (newView: 'signin' | 'signup' | 'forgot' | 'reset') => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentView(newView);
      setTimeout(() => setIsTransitioning(false), 800);
    }, 0);
  };

  const isSignUp = currentView === 'signup';
  const isForgot = currentView === 'forgot';
  const isReset = currentView === 'reset';

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin?.(email, password, remember);
  };

  const handleSignUpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSignUp?.(name, email, password);
  };

  const handleForgotPasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onForgotPassword?.(email);
  };

  const handleResetPasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onResetPassword?.(password, confirmPassword);
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'grey.100', p: 2 }}>
      <Backdrop open={loading} sx={{ zIndex: 1000 }} />
      
      <Box sx={{ 
        position: 'relative', 
        width: '100%', 
        maxWidth: { xs: '100%', md: 1100 }, 
        height: { xs: '100vh', md: 600 }, 
        bgcolor: 'white', 
        borderRadius: { xs: 0, md: 4 }, 
        boxShadow: { xs: 'none', md: '0 20px 60px rgba(0,0,0,0.3)' }, 
        overflow: 'hidden' 
      }}>
        
        {/* Trapezoid Gradient Panel - Hidden on mobile */}
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: (theme) => `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            clipPath: isTransitioning
              ? 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
              : (isSignUp || isForgot)
                ? 'polygon(0% 0%, 40% 0%, 55% 100%, 0% 100%)'
                : 'polygon(60% 0%, 100% 0%, 100% 100%, 45% 100%)',
            transition: 'clip-path 0.8s cubic-bezier(0.65, 0, 0.35, 1)',
            flexDirection: 'column',
            alignItems: (isSignUp || isForgot) ? 'flex-start' : 'flex-end',
            justifyContent: 'center',
            color: 'white',
            p: 8,
            pl: (isSignUp || isForgot) ? 4 : 8,
            pr: (isSignUp || isForgot) ? 8 : 4,
            zIndex: 10,
          }}
        >
          <Box sx={{ 
            opacity: isTransitioning ? 0 : 1,
            transition: 'opacity 0.3s',
            textAlign: 'center',
            maxWidth: 400,
          }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              "Trade Smarter, Not Harder"
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.9, mt: 2 }}>
              Join thousands of traders using AI-powered strategies to maximize profits
            </Typography>
          </Box>
        </Box>

        {/* Sign In Form - Left Side */}
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: { xs: '100%', md: '50%' },
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            p: 6,
            opacity: currentView === 'signin' ? 1 : 0,
            transition: 'opacity 0.3s',
            pointerEvents: currentView === 'signin' ? 'auto' : 'none',
          }}
        >
          {loading && currentView === 'signin' && (
            <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, bgcolor: 'grey.200', overflow: 'hidden' }}>
              <Box sx={{ height: '100%', bgcolor: 'primary.main', animation: 'progress 1.5s ease-in-out infinite', '@keyframes progress': { '0%': { width: '0%', marginLeft: '0%' }, '50%': { width: '75%', marginLeft: '12.5%' }, '100%': { width: '0%', marginLeft: '100%' } } }} />
            </Box>
          )}
          <Typography variant="h3" fontWeight="bold" gutterBottom>Sign In</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>Welcome back! Please login to your account.</Typography>

          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          <Box component="form" onSubmit={handleLoginSubmit}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
              required
            />
            
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2, mb: 3 }}>
              <FormControlLabel
                control={<Checkbox checked={remember} onChange={(e) => setRemember(e.target.checked)} />}
                label="Remember me"
              />
              <Link href="#" onClick={(e) => { e.preventDefault(); handleViewChange('forgot'); }} variant="body2">Forgot password?</Link>
            </Box>

            <Button
              fullWidth
              variant="contained"
              type="submit"
              disabled={loading}
              sx={{ py: 1.5, mb: 2 }}
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </Button>

            <Divider sx={{ my: 2 }}>OR</Divider>

            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mb: 2 }}>
              <IconButton
                onClick={() => onSocialAuth?.('google', 'login')}
                disabled={loading}
                sx={{
                  border: 1,
                  borderColor: 'divider',
                  '&:hover': { borderColor: 'primary.main', bgcolor: 'primary.main', color: 'white' },
                }}
              >
                <GoogleIcon />
              </IconButton>
              <IconButton
                onClick={() => onSocialAuth?.('github', 'login')}
                disabled={loading}
                sx={{
                  border: 1,
                  borderColor: 'divider',
                  '&:hover': { borderColor: 'primary.main', bgcolor: 'primary.main', color: 'white' },
                }}
              >
                <GitHubIcon />
              </IconButton>
            </Box>

            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="body2" color="text.secondary">
                Don't have an account?{' '}
                <Link href="#" onClick={(e) => { e.preventDefault(); handleViewChange('signup'); }} fontWeight="bold">
                  Sign Up
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Sign Up Form - Right Side */}
        <Box
          sx={{
            position: 'absolute',
            right: 0,
            top: 0,
            width: { xs: '100%', md: '50%' },
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            p: 6,
            opacity: currentView === 'signup' ? 1 : 0,
            transition: 'opacity 0.3s',
            transitionDelay: currentView === 'signup' ? '0.3s' : '0s',
            pointerEvents: currentView === 'signup' ? 'auto' : 'none',
          }}
        >
          {loading && currentView === 'signup' && (
            <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, bgcolor: 'grey.200', overflow: 'hidden' }}>
              <Box sx={{ height: '100%', bgcolor: 'primary.main', animation: 'progress 1.5s ease-in-out infinite', '@keyframes progress': { '0%': { width: '0%', marginLeft: '0%' }, '50%': { width: '75%', marginLeft: '12.5%' }, '100%': { width: '0%', marginLeft: '100%' } } }} />
            </Box>
          )}
          <Typography variant="h3" fontWeight="bold" gutterBottom>Sign Up</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>Create your account to get started.</Typography>

          <Box component="form" onSubmit={handleSignUpSubmit}>
            <TextField
              fullWidth
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
              required
            />

            <Button
              fullWidth
              variant="contained"
              type="submit"
              disabled={loading}
              sx={{ py: 1.5, mt: 3, mb: 2 }}
            >
              {loading ? 'Creating account...' : 'Sign Up'}
            </Button>

            <Divider sx={{ my: 2 }}>OR</Divider>

            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mb: 2 }}>
              <IconButton
                onClick={() => onSocialAuth?.('google', 'signup')}
                disabled={loading}
                sx={{
                  border: 1,
                  borderColor: 'divider',
                  '&:hover': { borderColor: 'primary.main', bgcolor: 'primary.main', color: 'white' },
                }}
              >
                <GoogleIcon />
              </IconButton>
              <IconButton
                onClick={() => onSocialAuth?.('github', 'signup')}
                disabled={loading}
                sx={{
                  border: 1,
                  borderColor: 'divider',
                  '&:hover': { borderColor: 'primary.main', bgcolor: 'primary.main', color: 'white' },
                }}
              >
                <GitHubIcon />
              </IconButton>
            </Box>

            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="body2" color="text.secondary">
                Already have an account?{' '}
                <Link href="#" onClick={(e) => { e.preventDefault(); handleViewChange('signin'); }} fontWeight="bold">
                  Sign In
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Forgot Password Form - Right Side */}
        <Box
          sx={{
            position: 'absolute',
            right: 0,
            top: 0,
            width: { xs: '100%', md: '50%' },
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            p: 6,
            opacity: currentView === 'forgot' ? 1 : 0,
            transition: 'opacity 0.3s',
            transitionDelay: currentView === 'forgot' ? '0.3s' : '0s',
            pointerEvents: currentView === 'forgot' ? 'auto' : 'none',
          }}
        >
          {loading && currentView === 'forgot' && (
            <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, bgcolor: 'grey.200', overflow: 'hidden' }}>
              <Box sx={{ height: '100%', bgcolor: 'primary.main', animation: 'progress 1.5s ease-in-out infinite', '@keyframes progress': { '0%': { width: '0%', marginLeft: '0%' }, '50%': { width: '75%', marginLeft: '12.5%' }, '100%': { width: '0%', marginLeft: '100%' } } }} />
            </Box>
          )}
          <Typography variant="h3" fontWeight="bold" gutterBottom>Forgot Password</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>Enter your email and we'll send you a reset link.</Typography>

          <Box component="form" onSubmit={handleForgotPasswordSubmit}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
              required
            />

            <Button
              fullWidth
              variant="contained"
              type="submit"
              disabled={loading}
              sx={{ py: 1.5, mt: 3, mb: 2 }}
            >
              {loading ? 'Sending...' : 'Send Reset Link'}
            </Button>

            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="body2" color="text.secondary">
                Remember your password?{' '}
                <Link href="#" onClick={(e) => { e.preventDefault(); handleViewChange('signin'); }} fontWeight="bold">
                  Sign In
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Reset Password Form - Left Side */}
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: { xs: '100%', md: '50%' },
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            p: 6,
            opacity: currentView === 'reset' ? 1 : 0,
            transition: 'opacity 0.3s',
            pointerEvents: currentView === 'reset' ? 'auto' : 'none',
          }}
        >
          {loading && currentView === 'reset' && (
            <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, bgcolor: 'grey.200', overflow: 'hidden' }}>
              <Box sx={{ height: '100%', bgcolor: 'primary.main', animation: 'progress 1.5s ease-in-out infinite', '@keyframes progress': { '0%': { width: '0%', marginLeft: '0%' }, '50%': { width: '75%', marginLeft: '12.5%' }, '100%': { width: '0%', marginLeft: '100%' } } }} />
            </Box>
          )}
          <Typography variant="h3" fontWeight="bold" gutterBottom>Reset Password</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>Enter your new password below.</Typography>

          <Box component="form" onSubmit={handleResetPasswordSubmit}>
            <TextField
              fullWidth
              label="New Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              margin="normal"
              required
            />

            <Button
              fullWidth
              variant="contained"
              type="submit"
              disabled={loading}
              sx={{ py: 1.5, mt: 3, mb: 2 }}
            >
              {loading ? 'Resetting...' : 'Reset Password'}
            </Button>

            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="body2" color="text.secondary">
                Back to{' '}
                <Link href="#" onClick={(e) => { e.preventDefault(); handleViewChange('signin'); }} fontWeight="bold">
                  Sign In
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
