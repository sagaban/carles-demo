import {
  CardContent,
  CardMedia,
  Card,
  CircularProgress,
  Container,
  Typography,
  Button,
} from '@mui/material';
import { NavLink, useParams } from 'react-router';
import { useCityDetails } from '../../hooks/cities';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function City() {
  const { city } = useParams();
  const { data: cityDetails, isLoading, isError } = useCityDetails(Number(city));

  if (isLoading) return <CircularProgress />;
  if (isError)
    return (
      <Typography sx={{ color: 'red', fontWeight: 'bold' }}>Error loading city details</Typography>
    );

  return (
    <Container>
      <Button
        variant="text"
        color="primary"
        component={NavLink}
        to="/concerts"
        startIcon={<ArrowBackIcon />}
      >
        Back to cities
      </Button>
      {cityDetails && (
        <Card sx={{ maxWidth: 600, margin: '24px auto' }}>
          <CardMedia
            sx={{ height: 440 }}
            image={cityDetails.image}
            title={`${cityDetails.name} image`}
          />
          <CardContent sx={{ py: 2 }}>
            <Typography gutterBottom variant="h5" component="div">
              {cityDetails.name}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {cityDetails.description}
            </Typography>
          </CardContent>
        </Card>
      )}
    </Container>
  );
}
