'use client';

import { Input } from '@/app/components/Form/Form';
import { Button } from '@/app/components/Button/Button';
import { Menu } from '@/app/components/Menu/Menu';
import { sendEmail } from '@/app/actions';

import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
} from '@mui/material';

type DownloadFormProps = {
  productNames: string[];
  onSubmit?: (topic: string, message: string) => void;
};
export const DownloadForm: FC<DownloadFormProps> = ({
  productNames,
  onSubmit,
}) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm();
  const [topic, setTopic] = useState(productNames[0]);

  const generateMessage = (topic: string) => {
    return `Hello. I would like to receive some information about ${topic}. Thank you.`;
  };

  return (
    <form
      onSubmit={handleSubmit(() => onSubmit?.(topic, generateMessage(topic)))}
    >
      <Box p={0}>
        <Typography variant="h2" mb={2} className="text-center md:text-left">
          You are about to download the datasheet of
        </Typography>

        <Box className="text-center md:text-left">
          <Menu label={topic} variant="topic">
            <FormGroup sx={{ px: 2, py: 1 }}>
              {productNames.map((currTopic, index) => (
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
          After filling out the details, we will take you to our exclusive
          download area.
        </Typography>

        <Grid
          container
          spacing={3}
          justifyContent={{ xs: 'center', md: 'left' }}
        >
          <Grid item xs={12} md={6}>
            <Input
              label="Name"
              name="name"
              key="name"
              rules={{ required: 'Name is required' }}
              required
              register={register}
              error={errors.name}
            />
          </Grid>
          <Grid item xs={12} md={6}>
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
          </Grid>
          <Grid item xs={12}>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};
