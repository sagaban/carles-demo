import { Container, Typography } from '@mui/material';
import { useParams } from 'react-router';

export default function City() {
  const { city } = useParams();
  return (
    <Container>
      <Typography sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{city}</Typography>
    </Container>
  );
}
