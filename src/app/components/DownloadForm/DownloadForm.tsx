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
        <Typography className="text-center md:text-left" mb={2} variant="h2">
          You are about to download the datasheet of
        </Typography>

        <Box className="text-center md:text-left">
          <Menu label={topic} variant="topic">
            <FormGroup sx={{ px: 2, py: 1 }}>
              {productNames.map((currTopic, index) => (
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

        <Typography className="text-center md:text-left" my={3} variant="body1">
          After filling out the details, we will take you to our exclusive
          download area.
        </Typography>

        <Grid
          justifyContent={{ xs: 'center', md: 'left' }}
          spacing={3}
          container
        >
          <Grid md={6} xs={12} item>
            <Input
              error={errors.name}
              key="name"
              label="Name"
              name="name"
              register={register}
              rules={{ required: 'Name is required' }}
              required
            />
          </Grid>
          <Grid md={6} xs={12} item>
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
          </Grid>
          <Grid xs={12} item>
            <Button type="submit" variant="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};
