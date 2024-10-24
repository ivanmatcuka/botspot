'use client';

import { Input } from '@/app/components/Form/Form';
import { Button } from '@/app/components/Button/Button';
import { Menu } from '@/app/components/Menu/Menu';
import { getProducts } from '@/services/mainService';

import { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from '@mui/material';

export const DownloadForm: FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm();

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [topic, setTopic] = useState('botspot');
  const [topics, setTopics] = useState<string[]>([]);

  const generateMessage = (topic: string) => {
    return `Hello. I would like to receive some information about ${topic}. Thank you.`;
  };

  useEffect(() => {
    getProducts().then(({ data }) =>
      setTopics(data.map((product) => product.title.rendered)),
    );
  }, []);

  if (isSubmitted) return null;

  return (
    <form onSubmit={handleSubmit(() => setIsSubmitted(true))}>
      <Box p={0}>
        <Typography variant="h2" mb={2} className="text-center md:text-left">
          Thank you for your interest and curiosity in
        </Typography>

        <Box className="text-center md:text-left">
          <Menu label={topic} variant="topic">
            <FormGroup sx={{ px: 2, py: 1 }}>
              {topics.map((currTopic, index) => (
                <FormControlLabel
                  key={index}
                  control={<Checkbox checked={topic === currTopic} />}
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

        <Typography variant="body1" my={3} className="text-center md:text-left">
          Just fill out the form below and we will be in touch with you shortly.
        </Typography>

        <Box
          display="flex"
          flexWrap="wrap"
          gap={3}
          rowGap={2}
          justifyContent={{ xs: 'center', md: 'left' }}
        >
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
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Box>
      </Box>
    </form>
  );
};
