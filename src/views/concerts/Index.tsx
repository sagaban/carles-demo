import { Container, Stack, Typography } from '@mui/material';
import { NavLink } from 'react-router';

export default function ConcertsHome() {
  return (
    <Container>
      <Typography variant="h3" component="h1">
        Concerts
      </Typography>
      <NavLink to="/concerts/trending">Trending</NavLink>

      <Typography variant="h3" component="h1" sx={{ mt: 2 }}>
        Cities
      </Typography>
      <Stack sx={{ gap: 1 }}>
        <NavLink to="/concerts/new-york">New York</NavLink>
        <NavLink to="/concerts/los-angeles">Los Angeles</NavLink>
        <NavLink to="/concerts/chicago">Chicago</NavLink>
        <NavLink to="/concerts/houston">Houston</NavLink>
        <NavLink to="/concerts/miami">Miami</NavLink>
      </Stack>
    </Container>
  );
}
