'use client';

import { Input } from '@/app/components/Form/Form';
import { Button } from '@/app/components/Button/Button';
import { Menu } from '@/app/components/Menu/Menu';
import { getProducts } from '@/services/mainService';
import { sendEmail } from '@/app/actions';

import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Box,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  Grid,
  Paper,
  Typography,
} from '@mui/material';

const TOPICS = ['botspot', '3D Scan Service', 'Try Before You Buy', 'Other'];

type FeedbackFormProps = {
  frameless?: boolean;
};
export const FeedbackForm: FC<FeedbackFormProps> = ({ frameless = false }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    reset,
  } = useForm();

  const [topic, setTopic] = useState('botspot');
  const [topics, setTopics] = useState<typeof TOPICS>(TOPICS);
  const [isLoading, setIsLoading] = useState(false);

  const generateMessage = (topic: (typeof TOPICS)[number]) => {
    return `Hello. I would like to receive some information about ${topic}. Thank you.`;
  };

  const onSubmit = useCallback(
    (topic: string, message: string) => {
      setIsLoading(true);
      sendEmail(
        process.env.NEXT_PUBLIC_EMAIL_FROM ?? '',
        `Feedback form submission for ${topic}`,
        message,
      ).finally(() => {
        setIsLoading(false);
        reset();
      });
    },
    [reset],
  );

  useEffect(() => {
    getProducts().then(({ data }) =>
      setTopics([...TOPICS, ...data.map((product) => product.title.rendered)]),
    );
  }, []);

  const form = useMemo(
    () => (
      <form
        onSubmit={handleSubmit(() => onSubmit(topic, generateMessage(topic)))}
      >
        <Box
          p={frameless ? 0 : { xs: 3, md: 5 }}
          py={frameless ? 0 : { xs: 2 }}
        >
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
                    onChange={() => {
                      setValue('message', generateMessage(currTopic));
                      setTopic(currTopic);
                    }}
                  />
                ))}
              </FormGroup>
            </Menu>
          </Box>

          <Typography
            className="text-center md:text-left"
            my={3}
            variant="body1"
          >
            Just fill out the form below and we will be in touch with you
            shortly.
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
      </form>
    ),
    [
      frameless,
      errors,
      register,
      setValue,
      handleSubmit,
      topic,
      isLoading,
      topics,
      onSubmit,
    ],
  );

  if (frameless) return form;

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
          <Paper className="border-2 border-divider" elevation={1}>
            {form}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
