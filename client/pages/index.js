import { useState } from 'react';
import { useRouter } from 'next/router';
import {
  TextField,
  Button,
  Typography,
  Container,
  Link,
  Alert,
  Card,
  CardContent,
  InputAdornment,
  Box,
  IconButton,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
        email,
        password,
      });
      localStorage.setItem('token', res.data.token);
      router.push('/dashboard');
    } catch (err) {
      setError(err.response?.data.message || 'Login failed');
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        px: 2,
      }}
    >
      <Container maxWidth="sm">
        <Card
          sx={{
            p: 4,
            borderRadius: 4,
            boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            transition: 'box-shadow 0.3s ease',
            '&:hover': {
              boxShadow: '0 12px 40px rgba(0,0,0,0.25)',
            },
          }}
        >
          <CardContent>
            
            <Typography
              variant="h4"
              align="center"
              fontWeight={600}
              gutterBottom
              sx={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Login
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center" mb={3}>
              Enter your credentials to access your account.
            </Typography>

            {error && (
              <Alert severity="error" sx={{ mb: 2, borderRadius: 2, fontWeight: 'medium' }}>
                {error}
              </Alert>
            )}

            <form onSubmit={handleSubmit}>
              <TextField
                label="Email"
                fullWidth
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                    '&.Mui-focused fieldset': {
                      borderColor: '#667eea',
                      boxShadow: '0 0 8px #667eea88',
                    },
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon color="action" />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                label="Password"
                type={showPassword ? 'text' : 'password'}
                fullWidth
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                    '&.Mui-focused fieldset': {
                      borderColor: '#667eea',
                      boxShadow: '0 0 8px #667eea88',
                    },
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon color="action" />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                        aria-label="toggle password visibility"
                        size="small"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  mt: 3,
                  py: 1.5,
                  fontWeight: 'bold',
                  borderRadius: 3,
                  background: 'linear-gradient(45deg, #667eea, #764ba2)',
                  color: '#fff',
                  textTransform: 'none',
                  fontSize: '1.1rem',
                  transition: 'background 0.3s ease',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #5563c1, #5a3d8e)',
                  },
                }}
              >
                Login
              </Button>
            </form>

            <Typography sx={{ mt: 3, fontWeight: 500, fontSize: '0.9rem' }} align="center" color="text.secondary">
              Don&apos;t have an account?{' '}
              <Link href="/register" underline="hover" sx={{ fontWeight: 600, color: '#667eea' }}>
                Register
              </Link>
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
