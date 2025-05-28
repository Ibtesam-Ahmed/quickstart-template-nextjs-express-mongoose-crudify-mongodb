import { CONFIG } from 'src/config-global';

import { UserView } from 'src/sections/user/view';

import { Box, Container, Paper } from '@mui/material';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <title>{`Users - ${CONFIG.appName}`}</title>

      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(to right, #e0eafc, #cfdef3)',
        }}
      >
        <Container maxWidth="md"> {/* Changed from sm to md */}
          <Paper
            elevation={6}
            sx={{
              p: 4,
              borderRadius: 3,
              backgroundColor: 'white',
            }}
          >
            <UserView />
          </Paper>
        </Container>
      </Box>
    </>
  );
}
