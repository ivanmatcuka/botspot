'use client';

import { Input } from '@/app/components/Form/Form';
import { Button } from '@/app/components/Button/Button';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';

export const QuestionForm: FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  return (
    <Container maxWidth="xl">
      <Grid
        container
        pt={{ xs: 5, md: 10 }}
        mb={{ xs: 10, md: 15 }}
        mx="auto"
        xs={12}
        md={10}
        direction="column"
      >
        <Grid item>
          <Paper
            elevation={1}
            className="border-2 border-divider !bg-primary-main"
          >
            <form onSubmit={handleSubmit(() => {})}>
              <Box p={{ xs: 3, md: 5 }} py={{ xs: 2 }}>
                <Typography variant="h2" mb={2} color="white">
                  Do you have a question?
                </Typography>

                <Typography variant="body1" my={3} color="white">
                  Is there anything you ever wondererd regarding 3D Scanning?
                  Just let us know below!
                </Typography>

                <Box
                  display="flex"
                  flexWrap="wrap"
                  gap={3}
                  rowGap={2}
                  color="white"
                >
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
                    fullWidth
                    color="white"
                  />
                  <Input
                    label="Question"
                    name="question"
                    key="question"
                    rules={{ required: 'Question is required' }}
                    required
                    register={register}
                    error={errors.question}
                    fullWidth
                    color="white"
                  />
                  <Button variant="primary" type="submit">
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
