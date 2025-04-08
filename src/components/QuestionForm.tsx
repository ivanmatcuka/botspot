'use client';

import { Form, Input } from '@/components/Form';
import { useSnackbar } from '@/components/Snackbar';
import { submitFeedbackForm } from '@/services';
import { Box, Typography } from '@mui/material';
import { FC, useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from './NextButton/NextButton';

const FORM_ID = 15431;

export const QuestionForm: FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
    setValue,
    watch,
  } = useForm();
  const email = watch('your-email');
  const question = watch('your-question');

  const { showSnackbar } = useSnackbar();

  const onSubmit = useCallback(() => {
    setIsLoading(true);

    const newFormData = new FormData();

    newFormData.append('_wpcf7_unit_tag', `${FORM_ID}`);
    newFormData.append('your-email', email);
    newFormData.append('your-question', question);

    submitFeedbackForm(newFormData, FORM_ID)
      .then(() => showSnackbar('Thank you for your feedback!', 'success', 3000))
      .catch(() => showSnackbar('Something went wrong!', 'error', 3000))
      .finally(() => {
        setIsLoading(false);
        reset();
      });
  }, [showSnackbar, reset, email, question]);

  useEffect(() => setValue('your-question', question), [setValue, question]);

  return (
    <Form secondary>
      <Box p={{ md: 5, xs: 3 }} py={{ xs: 2 }}>
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
          justifyContent={{ md: 'left', xs: 'center' }}
          rowGap={2}
        >
          <Input
            rules={{
              required: 'Email is required',
              pattern: {
                message: 'Invalid email',
                value: /\S+@\S+\.\S+/,
              },
            }}
            color="white"
            error={errors['your-email']}
            key="email"
            label="Email"
            name="your-email"
            register={register}
            fullWidth
            required
          />
          <Input
            color="white"
            error={errors['your-question']}
            key="question"
            label="Question"
            name="your-question"
            register={register}
            rows={3}
            rules={{ required: 'Question is required' }}
            type="textarea"
            fullWidth
            required
          />
          <Button
            disabled={isLoading}
            onClick={handleSubmit(onSubmit)}
            variant="primary"
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Form>
  );
};
