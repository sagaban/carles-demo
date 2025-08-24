import { Button, Container, Stack, TextField, Typography } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object({
    name: yup.string().required('Nombre requerido'),
    nickname: yup.string(), // optional
    email: yup.string().email('Email inválido').required('Email requerido'),
    age: yup.number().positive().integer().required('Edad requerida'),
    password: yup
      .string()
      .required('Contraseña requerida')
      .min(8, 'La contraseña debe tener al menos 8 caracteres')
      .max(16, 'La contraseña debe tener menos de 16 caracteres'),
    confirmPassword: yup
      .string()
      .required('Confirmar contraseña requerida')
      .min(8, 'La contraseña debe tener al menos 8 caracteres')
      .max(16, 'La contraseña debe tener menos de 16 caracteres')
      .oneOf([yup.ref('password')], 'Las contraseñas no coinciden'),
  })
  .required();

export default function FormDemo() {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: yup.InferType<typeof schema>) => {
    console.log(data);
  };

  return (
    <Container>
      <Typography component="h1" variant="h4" sx={{ mb: 2 }}>
        Form Demo
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                label="Name"
                error={!!errors.name}
                helperText={errors.name?.message}
                required
              />
            )}
            name="name"
            control={control}
          />
          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                label="Nickname"
                error={!!errors.nickname}
                helperText={errors.nickname?.message}
              />
            )}
            name="nickname"
            control={control}
          />
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
                label="Age"
                error={!!errors.age}
                helperText={errors.age?.message}
                type="number"
                required
              />
            )}
            name="age"
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

          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                label="Confirm Password"
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword?.message}
                type="password"
                required
              />
            )}
            name="confirmPassword"
            control={control}
          />

          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Stack>
      </form>
    </Container>
  );
}
