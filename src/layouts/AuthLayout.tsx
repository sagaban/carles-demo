import { Container, Typography } from '@mui/material';
import { Outlet } from 'react-router';

export default function AuthLayout() {
  return (
    <Container sx={{ height: '100vh' }}>
      <Typography variant="h3" component="h1">
        Auth Layout
      </Typography>

      <Outlet />
    </Container>
  );
}
