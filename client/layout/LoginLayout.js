import { Box, Container, Card } from '@mui/material';
const bgImage = '/images/bg-sign-in-basic.jpeg';

export default function LoginLayout({ children }) {
  return (
    <Box
  sx={{
    minHeight: '100vh',
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}
>
      <Container maxWidth="sm">
        <Card sx={{ p: 4, borderRadius: 2, boxShadow: 3 }}>
          {children}
        </Card>
      </Container>
    </Box>
  );
}
