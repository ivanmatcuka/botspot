'use client';

import { sendEmail } from '@/app/actions';
import { Button } from '@/app/components/Button/Button';
import { Form, Input } from '@/app/components/Form/Form';
import { Menu } from '@/app/components/Menu/Menu';
import { useSnackbar } from '@/app/components/Snackbar';
import { getProducts } from '@/app/service';

import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from '@mui/material';
import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';

const TOPICS = ['3D Scan Service', 'Other'];

type FeedbackFormProps = {
  frameless?: boolean;
};
export const FeedbackForm: FC<FeedbackFormProps> = ({ frameless = false }) => {
  const {
    handleSubmit,
    register,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const [topic, setTopic] = useState(TOPICS[0]);
  const [topics, setTopics] = useState<typeof TOPICS>(TOPICS);
  const [isLoading, setIsLoading] = useState(false);

  const name = watch('name');
  const email = watch('email');
  const message = watch('message');

  const { showSnackbar } = useSnackbar();

  const messageHtml = useMemo(() => {
    return `Name: ${name}<br/>
            Email: ${email}<br/>
            Message: ${message}<br/>`;
  }, [name, email, message]);

  const onSubmit = useCallback(() => {
    setIsLoading(true);
    sendEmail(
      process.env.NEXT_PUBLIC_EMAIL_FROM ?? '',
      `Feedback form: ${topic}`,
      messageHtml,
    )
      .then(() => showSnackbar('Thank you for your feedback!', 'success', 3000))
      .catch(() => showSnackbar('Something went wrong!', 'error', 3000))
      .finally(() => {
        setIsLoading(false);
        reset();
      });
  }, [topic, messageHtml, showSnackbar, reset]);

  const changeTopic = useCallback(
    (topic: string) => () => {
      setValue('message', generateMessage(topic));
      setTopic(topic);
    },
    [setValue],
  );

  const generateMessage = (topic: (typeof TOPICS)[number]) => {
    return `Hello. I would like to receive some information about ${topic}. Thank you.`;
  };

  useEffect(() => {
    getProducts().then(({ data }) =>
      setTopics([...data.map((product) => product.title.rendered, ...TOPICS)]),
    );
  }, []);

  return (
    <Form frameless={frameless} onSubmit={handleSubmit(onSubmit)}>
      <Box p={frameless ? 0 : { xs: 3, md: 5 }} py={frameless ? 0 : { xs: 2 }}>
        <Typography className="text-center md:text-left" mb={2} variant="h2">
          Thank you for your interest and curiosity in
        </Typography>

        <Box className="text-center md:text-left">
          <Menu label={topic} variant="topic">
            <FormGroup sx={{ px: 2, py: 1 }}>
              {topics.map((currTopic, index) => (
                <FormControlLabel
                  control={<Checkbox checked={topic === currTopic} />}
                  key={index}
                  label={currTopic}
                  onChange={changeTopic(currTopic)}
                />
              ))}
            </FormGroup>
          </Menu>
        </Box>

        <Typography className="text-center md:text-left" my={3} variant="body1">
          Just fill out the form below and we will be in touch with you shortly.
        </Typography>

        <Box
          display="flex"
          flexWrap="wrap"
          gap={3}
          justifyContent={{ xs: 'center', md: 'left' }}
          rowGap={2}
        >
          <Input
            error={errors.name}
            key="name"
            label="Name"
            name="name"
            register={register}
            rules={{ required: 'Name is required' }}
            required
          />
          <Input
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
            required
          />
          <Input
            error={errors.message}
            key="message"
            label="Message"
            name="message"
            register={register}
            rows={3}
            rules={{ required: 'Message is required' }}
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
