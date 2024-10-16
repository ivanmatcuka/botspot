'use client';

import { Input } from '@/app/components/Form/Form';
import { Button } from '@/app/components/Button/Button';
import { Menu } from '@/app/components/Menu/Menu';

import { FC, useState } from 'react';
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

const TOPICS = [
  'botspot',
  'botscan NEO',
  '3D Object',
  '3D Studio',
  '3D Scan Service',
  'Try Before You Buy',
  'Other',
];

type FeedbackFormProps = {
  frameless?: boolean;
};
export const FeedbackForm: FC<FeedbackFormProps> = ({ frameless = false }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm();

  const [topic, setTopic] = useState('botspot');

  const generateMessage = (topic: (typeof TOPICS)[number]) => {
    return `Hello. I would like to receive some information about ${topic}. Thank you.`;
  };

  const form = (
    <form onSubmit={handleSubmit(() => {})}>
      <Box p={{ xs: 3, md: 5 }} py={{ xs: 2 }}>
        <Typography variant="h2" mb={2} className="text-center md:text-left">
          Thank you for your interest and curiosity in
        </Typography>

        <Box className="text-center md:text-left">
          <Menu label={topic} variant="topic">
            <FormGroup sx={{ px: 2, py: 1 }}>
              {TOPICS.map((currTopic, index) => (
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
          <Input
            label="Message"
            name="message"
            key="message"
            rules={{ required: 'Message is required' }}
            fullWidth
            required
            register={register}
            error={errors.message}
            type="textarea"
            rows={3}
          />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Box>
      </Box>
    </form>
  );

  if (frameless) return form;

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
          <Paper elevation={1} className="border-2 border-divider">
            {form}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
