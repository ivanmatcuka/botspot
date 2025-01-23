'use client';

import { ContactForm7 } from './ContactForm7';

import { Button } from '@/app/components/Button/Button';
import { Menu } from '@/app/components/Menu/Menu';

import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from '@mui/material';
import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';

type DownloadFormProps = {
  productNames: string[];
  form: CF7Form | null;
  isLoading: boolean;
  defaultProductName?: string;
  onSubmit?: (formData: FormData) => void;
};
export const DownloadForm: FC<DownloadFormProps> = ({
  productNames,
  form,
  isLoading,
  defaultProductName,
  onSubmit,
}) => {
  const [topic, setTopic] = useState(defaultProductName || productNames[0]);

  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    watch,
  } = useForm();
  const name = watch('your-name');
  const email = watch('your-email');

  const generateMessage = (topic: string) => `Datasheet for ${topic}.`;

  const formData = useMemo(() => {
    if (!form?.id) return new FormData();

    const formData = new FormData();
    formData.append('_wpcf7_unit_tag', `wpcf7-f${form.id}-o1`);
    formData.append('your-name', name);
    formData.append('your-email', email);
    formData.append('your-subject', topic);
    formData.append('your-message', generateMessage(topic));

    return formData;
  }, [topic, name, form, email]);

  const changeTopic = useCallback(
    (topic: string) => () => {
      setValue('your-message', generateMessage(topic));
      setTopic(topic);
    },
    [setValue],
  );

  useEffect(() => {
    setValue('your-message', generateMessage(topic));
  }, [setValue, topic]);

  return (
    <form onSubmit={handleSubmit(() => onSubmit?.(formData))}>
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

        <Box
          display="flex"
          flexWrap="wrap"
          gap={3}
          justifyContent={{ xs: 'center', md: 'left' }}
          rowGap={2}
        >
          {form && (
            <ContactForm7 errors={errors} form={form} register={register} />
          )}
          <Button disabled={isLoading} type="submit" variant="primary">
            Submit
          </Button>
        </Box>
      </Box>
    </form>
  );
};
