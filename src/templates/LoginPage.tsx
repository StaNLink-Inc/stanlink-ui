import React from 'react';
import { Box, TextField, Button, Typography, Checkbox, FormControlLabel, Divider, Link, Paper } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';

export interface LoginPageProps {
  onLogin?: (email: string, password: string, remember: boolean) => void;
  onSocialLogin?: (provider: 'google' | 'github') => void;
  onForgotPassword?: () => void;
  onSignUp?: () => void;
  loading?: boolean;
  error?: string;
}

export const LoginPage: React.FC<LoginPageProps> = ({
  onLogin,
  onSocialLogin,
  onForgotPassword,
  onSignUp,
  loading = false,
  error,
}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [remember, setRemember] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin?.(email, password, remember);
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'grey.50', p: 2 }}>
      <Paper elevation={3} sx={{ maxWidth: 400, width: '100%', p: 4 }}>
        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <Box sx={{ width: 48, height: 48, bgcolor: 'primary.main', borderRadius: 1.5, mx: 'auto', mb: 2 }} />
          <Typography variant="h5" fontWeight="bold">Welcome back</Typography>
          <Typography variant="body2" color="text.secondary">Sign in to your account</Typography>
        </Box>

        {error && (
          <Box sx={{ p: 2, mb: 2, bgcolor: 'error.light', color: 'error.contrastText', borderRadius: 1 }}>
            <Typography variant="body2">{error}</Typography>
          </Box>
        )}

        <Box component="form" onSubmit={handleSubmit}>
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
          
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1, mb: 2 }}>
            <FormControlLabel
              control={<Checkbox checked={remember} onChange={(e) => setRemember(e.target.checked)} />}
              label="Remember me"
            />
            <Link href="#" onClick={(e) => { e.preventDefault(); onForgotPassword?.(); }} variant="body2">
              Forgot password?
            </Link>
          </Box>

          <Button
            fullWidth
            variant="contained"
            type="submit"
            disabled={loading}
            sx={{ mb: 2 }}
          >
            {loading ? 'Signing in...' : 'Sign in'}
          </Button>
        </Box>

        <Divider sx={{ my: 2 }}>OR</Divider>

        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <Button
            fullWidth
            variant="outlined"
            startIcon={<GoogleIcon />}
            onClick={() => onSocialLogin?.('google')}
            disabled={loading}
          >
            Google
          </Button>
          <Button
            fullWidth
            variant="outlined"
            startIcon={<GitHubIcon />}
            onClick={() => onSocialLogin?.('github')}
            disabled={loading}
          >
            GitHub
          </Button>
        </Box>

        <Typography variant="body2" textAlign="center" color="text.secondary">
          Don't have an account?{' '}
          <Link href="#" onClick={(e) => { e.preventDefault(); onSignUp?.(); }} fontWeight="bold">
            Sign up
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};
