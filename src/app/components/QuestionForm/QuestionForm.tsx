'use client';

import { Input } from '@/app/components/Form/Form';
import { Button } from '@/app/components/Button/Button';
import { sendEmail } from '@/app/actions';

import { FC, useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';

export const QuestionForm: FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(
    (message: string) => {
      setIsLoading(true);
      sendEmail(
        process.env.NEXT_PUBLIC_EMAIL_FROM ?? '',
        `Question`,
        message,
      ).finally(() => {
        setIsLoading(false);
        reset();
      });
    },
    [reset],
  );
  return (
    <Container maxWidth="xl">
      <Grid
        direction="column"
        mb={{ xs: 10, md: 15 }}
        md={10}
        mx="auto"
        pt={{ xs: 5, md: 10 }}
        xs={12}
        container
      >
        <Grid item>
          <Paper
            className="border-2 border-divider !bg-primary-main"
            elevation={1}
          >
            <form onSubmit={handleSubmit(() => onSubmit)}>
              <Box p={{ xs: 3, md: 5 }} py={{ xs: 2 }}>
                <Typography color="white" mb={2} variant="h2">
                  Do you have a question?
                </Typography>

                <Typography color="white" my={3} variant="body1">
                  Is there anything you ever wondererd regarding 3D Scanning?
                  Just let us know below!
                </Typography>

                <Box
                  color="white"
                  display="flex"
                  flexWrap="wrap"
                  gap={3}
                  justifyContent={{ xs: 'center', md: 'left' }}
                  rowGap={2}
                >
                  <Input
                    color="white"
                    error={errors.email}
                    key="email"
                    label="Email"
                    name="email"
                    register={register}
                    rules={{
                      required: 'Email is required',
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: 'Invalid email',
                      },
                    }}
                    fullWidth
                    required
                  />
                  <Input
                    color="white"
                    error={errors.question}
                    key="question"
                    label="Question"
                    name="question"
                    register={register}
                    rows={3}
                    rules={{ required: 'Question is required' }}
                    type="textarea"
                    fullWidth
                    required
                  />
                  <Button disabled={isLoading} type="submit" variant="primary">
                    Submit
                  </Button>
                </Box>
              </Box>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
