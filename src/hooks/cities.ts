import { useQuery } from '@tanstack/react-query';
// import { ApiService } from '../services/api';
import type { City, CityDetails } from '../types/cities';
import { cities, citiesDetails } from '../mocks/city';

export const useCities = () => {
  return useQuery({
    queryKey: ['cities'],
    queryFn: () => {
      // This would be the real call to the backend
      //ApiService.get('/cities').then((res) => res.data as Cities[]),

      // This is the mock call to the backend
      return new Promise<City[]>((resolve) => {
        setTimeout(() => {
          resolve(cities);
        }, 250);
      });
    },
  });
};

export const useCityDetails = (cityId: number | undefined) => {
  return useQuery({
    queryKey: ['cityDetails'],
    queryFn: () => {
      // This would be the real call to the backend
      //ApiService.get(`/cities/${cityId}`).then((res) => res.data as CityDetails),

      // This is the mock call to the backend
      return new Promise<CityDetails>((resolve, reject) => {
        setTimeout(() => {
          const cityDetails = cityId
            ? citiesDetails[cityId as keyof typeof citiesDetails]
            : undefined;
          if (cityDetails) {
            resolve(cityDetails);
          } else {
            reject(new Error('City not found'));
          }
        }, 250);
      });
    },
    enabled: !!cityId,
  });
};
