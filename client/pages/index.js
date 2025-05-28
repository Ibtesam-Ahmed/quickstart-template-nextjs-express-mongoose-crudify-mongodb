import { CONFIG } from 'src/config-global';
import { SignInView } from 'src/sections/auth';
import { Box, Container, Paper } from '@mui/material';

export default function Page() {
  return (
    <>
      <title>{`Sign in - ${CONFIG.appName}`}</title>

      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(to right, #e0eafc, #cfdef3)', // Optional soft background
        }}
      >
        <Container maxWidth="sm">
          <Paper
            elevation={6}
            sx={{
              p: 4,
              borderRadius: 3,
              backgroundColor: 'white',
            }}
          >
            <SignInView />
          </Paper>
        </Container>
      </Box>
    </>
  );
}
