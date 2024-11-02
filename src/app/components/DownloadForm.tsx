'use client';

import { Button } from '@/app/components/Button/Button';
import { Input } from '@/app/components/Form/Form';
import { Menu } from '@/app/components/Menu/Menu';

import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
} from '@mui/material';
import { FC, useCallback, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';

type DownloadFormProps = {
  productNames: string[];
  onSubmit?: (topic: string, message: string) => void;
};
export const DownloadForm: FC<DownloadFormProps> = ({
  productNames,
  onSubmit,
}) => {
  const [topic, setTopic] = useState(productNames[0]);

  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    watch,
  } = useForm();
  const name = watch('name');
  const email = watch('email');

  const messageHtml = useMemo(() => {
    return `${generateMessage(topic)}<br/>
            Name: ${name}<br/>
            Email: ${email}<br/>`;
  }, [topic, name, email]);

  const changeTopic = useCallback(
    (topic: string) => () => {
      setValue('message', generateMessage(topic));
      setTopic(topic);
    },
    [setValue],
  );

  const generateMessage = (topic: string) => `Datasheet for ${topic}.`;

  return (
    <form onSubmit={handleSubmit(() => onSubmit?.(topic, messageHtml))}>
      <Box p={0}>
        <Typography className="text-center md:text-left" mb={2} variant="h2">
          You are about to download the datasheet of
        </Typography>

        <Box>
          <Menu label={topic} variant="topic">
            <FormGroup sx={{ px: 2, py: 1 }}>
              {productNames.map((currTopic, index) => (
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
          After filling out the details, we will take you to our exclusive
          download area.
        </Typography>

        <Grid
          justifyContent={{ xs: 'center', md: 'left' }}
          spacing={3}
          container
        >
          <Grid md={6} textAlign="left" xs={12} item>
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
          <Grid md={6} textAlign="left" xs={12} item>
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
