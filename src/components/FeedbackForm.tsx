'use client';

import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from '@mui/material';
import { FC, useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/Button';
import { Form, Input } from '@/components/Form';
import { Menu } from '@/components/Menu/Menu';
import { useSnackbar } from '@/components/Snackbar';
import { getProducts, submitFeedbackForm } from '@/services';

const TOPICS = ['3D Scan Service', 'Innovation Lab'] as const;
const FORM_ID = 15420;

type Topic = (typeof TOPICS)[number] | string;

type FeedbackFormProps = {
  frameless?: boolean;
  defaultTopic?: Topic;
};
export const FeedbackForm: FC<FeedbackFormProps> = ({
  frameless = false,
  defaultTopic = TOPICS[0],
}) => {
  const {
    handleSubmit,
    register,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const [topic, setTopic] = useState<Topic>(
    TOPICS.find((t) => t === defaultTopic) ?? TOPICS[0],
  );

  // Cloning is only done because of TypeScript issues
  const [topics, setTopics] = useState<Topic[]>([...TOPICS]);
  const [isLoading, setIsLoading] = useState(false);

  const name = watch('your-name');
  const email = watch('your-email');
  const message = watch('your-message');

  const { showSnackbar } = useSnackbar();

  const onSubmit = useCallback(() => {
    setIsLoading(true);
    const newFormData = new FormData();

    newFormData.append('_wpcf7_unit_tag', `${FORM_ID}`);
    newFormData.append('your-name', name);
    newFormData.append('your-email', email);
    newFormData.append('your-subject', topic);
    newFormData.append('your-message', message);

    submitFeedbackForm(newFormData, FORM_ID)
      .then(() => showSnackbar('Thank you for your feedback!', 'success', 3000))
      .catch(() => showSnackbar('Something went wrong!', 'error', 3000))
      .finally(() => {
        setIsLoading(false);
        reset();
      });
  }, [showSnackbar, reset, name, email, topic, message]);

  const changeTopic = useCallback(
    (topic: Topic) => () => {
      setTopic(topic);
    },
    [],
  );

  useEffect(() => {
    getProducts().then(({ data }) => {
      const newTopics = [
        ...data.map((product) => product.title.rendered),
        ...TOPICS,
      ];
      setTopics(newTopics);

      if (!defaultTopic) return;

      setTopic(
        newTopics.find((currTopic) => currTopic === defaultTopic) ?? TOPICS[0],
      );
    });
  }, [defaultTopic, setValue]);

  return (
    <Form frameless={frameless}>
      <Box
        id="feedback-form"
        p={frameless ? 0 : { xs: 3, md: 5 }}
        py={frameless ? 0 : { xs: 2 }}
      >
        <Typography className="text-center md:text-left" mb={2} variant="h2">
          Thank you for your interest in
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
            error={errors['your-name']}
            key="name"
            label="Name"
            name="your-name"
            register={register}
            rules={{ required: 'Name is required' }}
            required
          />
          <Input
            error={errors['your-email']}
            key="email"
            label="Email"
            name="your-email"
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
            error={errors['your-message']}
            key="message"
            label="Message"
            name="your-message"
            register={register}
            rows={3}
            rules={{ required: 'Message is required' }}
            type="textarea"
            fullWidth
            required
          />
          <Button
            disabled={isLoading}
            variant="primary"
            onClick={handleSubmit(onSubmit)}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Form>
  );
};
