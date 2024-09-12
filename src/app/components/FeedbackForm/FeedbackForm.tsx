'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Input, StyledPaper } from '../Form/Form';
import { Grid } from '@mui/material';
import { Button } from '../Button/Button';

export const FeedbackForm: FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  return (
    <Grid container xs={10} mx="auto" my={15}>
      <Grid item>
        <StyledPaper elevation={1}>
          <form onSubmit={handleSubmit(() => {})}>
            <Grid display="flex" flexWrap="wrap" gap={3} container p={5}>
              <Input
                label="Name"
                name="name"
                key="name"
                rules={{ required: 'Name is required' }}
                required
                register={register}
                error={errors.name}
              />
              <Input
                label="Email"
                name="email"
                key="email"
                rules={{
                  required: 'Email is required',
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: 'Invalid email',
                  },
                }}
                required
                register={register}
                error={errors.email}
              />
              <Input
                label="Message"
                name="message"
                key="message"
                rules={{ required: 'Message is required' }}
                fullWidth
                required
                register={register}
                error={errors.message}
              />
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Grid>
          </form>
        </StyledPaper>
      </Grid>
    </Grid>
  );
};
