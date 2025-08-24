import { yupResolver } from '@hookform/resolvers/yup';
import { Controller } from 'react-hook-form';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import useSession from 'hooks/useSession';
import { useNavigate } from 'react-router';

const schema = yup
  .object({
    email: yup.string().email('Email inválido').required('Email requerido'),
    password: yup.string().required('Contraseña requerida'),
  })
  .required();

export default function Login() {
  const { signIn } = useSession();
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit = async (data: yup.InferType<typeof schema>) => {
    await signIn(data);
    await navigate('/');
  };
  return (
    <Box>
      <Typography variant="h4" component="h2">
        Login
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                label="Email"
                error={!!errors.email}
                helperText={errors.email?.message}
                required
              />
            )}
            name="email"
            control={control}
          />

          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                label="Password"
                error={!!errors.password}
                helperText={errors.password?.message}
                type="password"
                required
              />
            )}
            name="password"
            control={control}
          />

          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
        </Stack>
      </form>
    </Box>
  );
}
