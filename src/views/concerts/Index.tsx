import { Button, CircularProgress, Container, Stack, Typography } from '@mui/material';
import { NavLink } from 'react-router';
import { useCities } from '../../hooks/cities';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function ConcertsHome() {
  const { data: cities, isLoading, isError } = useCities();

  return (
    <Container>
      <Button
        variant="text"
        color="primary"
        component={NavLink}
        to="/"
        startIcon={<ArrowBackIcon />}
      >
        Back to home
      </Button>
      <Typography variant="h3" component="h1">
        Concerts
      </Typography>
      <NavLink to="/concerts/trending">Trending</NavLink>

      <Typography variant="h3" component="h1" sx={{ mt: 2 }}>
        Cities
      </Typography>
      {isLoading && <CircularProgress />}
      {isError && (
        <Typography sx={{ color: 'red', fontWeight: 'bold' }}>Error loading cities</Typography>
      )}
      {cities && (
        <Stack sx={{ gap: 1 }}>
          {cities.map((city) => (
            <NavLink key={city.id} to={`/concerts/${city.id}`}>
              {city.name}
            </NavLink>
          ))}
        </Stack>
      )}
    </Container>
  );
}
