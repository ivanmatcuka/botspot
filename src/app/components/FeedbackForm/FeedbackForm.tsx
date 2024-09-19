'use client';

import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input, StyledPaper } from '../Form/Form';
import {
  Box,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
} from '@mui/material';
import { Button } from '../Button/Button';
import { Menu } from '../Menu/Menu';

const TOPICS = [
  'Botspot',
  'Botscan NEO',
  '3D Object',
  '3D Studio',
  '3D Scan Service',
  'Try Before You Buy',
  'Other',
];

export const FeedbackForm: FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm();

  const [topic, setTopic] = useState('Botspot');

  const generateMessage = (topic: (typeof TOPICS)[number]) => {
    return `Hello. I would like to receive some information about ${topic}. Thank you.`;
  };

  return (
    <Box
      maxWidth="xl"
      pt={{ xs: 5, md: 10 }}
      mb={{ xs: 10, md: 15 }}
      px={{ xs: 2, xl: 0 }}
      mx="auto"
    >
      <StyledPaper elevation={1}>
        <form onSubmit={handleSubmit(() => {})}>
          <Grid container direction="column" p={5}>
            <Grid mb={3}>
              <Typography variant="h2" mb={2}>
                Thank you for your interest and curiosity in
              </Typography>
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
            </Grid>
            <Grid item mb={3}>
              <Typography variant="body1">
                Just fill out the form below and we will be in touch with you
                shortly.
              </Typography>
            </Grid>
            <Grid item display="flex" flexWrap="wrap" gap={3} rowGap={2}>
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
          </Grid>
        </form>
      </StyledPaper>
    </Box>
  );
};
