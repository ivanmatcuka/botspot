'use client';

import { sendEmail } from '@/app/actions';
import { Button } from '@/app/components/Button/Button';
import { Form, Input } from '@/app/components/Form/Form';
import { useSnackbar } from '@/app/components/Snackbar';

import { Box, Typography } from '@mui/material';
import { FC, useCallback, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';

export const QuestionForm: FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();
  const email = watch('email');
  const question = watch('question');

  const { showSnackbar } = useSnackbar();

  const messageHtml = useMemo(() => {
    return `Email: ${email}<br/>
            Message: ${question}<br/>`;
  }, [email, question]);

  const onSubmit = useCallback(() => {
    setIsLoading(true);
    sendEmail(process.env.NEXT_PUBLIC_EMAIL_FROM ?? '', `Question`, messageHtml)
      .then(() => showSnackbar('Thank you for your feedback!', 'success', 3000))
      .catch(() => showSnackbar('Something went wrong!', 'error', 3000))
      .finally(() => {
        setIsLoading(false);
        reset();
      });
  }, [messageHtml, showSnackbar, reset]);

  return (
    <Form secondary onSubmit={handleSubmit(onSubmit)}>
      <Box p={{ xs: 3, md: 5 }} py={{ xs: 2 }}>
        <Typography color="white" mb={2} variant="h2">
          Do you have a question?
        </Typography>

        <Typography color="white" my={3} variant="body1">
          Curious about how 3D scanning works? Ask us below!
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
    </Form>
  );
};
