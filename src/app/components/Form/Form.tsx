'use client';

import { Button } from '../Button/Button';

import { colors } from '@/app/theme';

import React, { FC, PropsWithChildren, ReactNode } from 'react';
import {
  Box,
  Grid,
  InputLabel,
  InputProps,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import {
  useForm,
  UseControllerProps,
  SubmitHandler,
  UseFormRegister,
} from 'react-hook-form';
import { ErrorOutline } from '@mui/icons-material';

export const Input = (
  props: Pick<UseControllerProps<any>, 'name' | 'rules'> &
    Pick<InputProps, 'fullWidth' | 'required' | 'value' | 'type'> & {
      register: UseFormRegister<any>;
      error: any;
      label?: string;
      color?: 'primary' | 'white';
    },
) => (
  <Grid
    item
    flex={props.fullWidth ? '0 0 100%' : 'auto'}
    flexGrow={1}
    className="!text-white"
  >
    {props.label && (
      <Box mb={0.5}>
        <InputLabel
          required={props.required}
          className={props.color === 'white' ? '!text-white' : ''}
        >
          <Typography variant="caption">{props.label}</Typography>
        </InputLabel>
      </Box>
    )}
    <TextField
      error={props.error}
      placeholder={props.label}
      fullWidth
      value={props.value}
      InputProps={{ className: 'bg-white' }}
      type={props.type}
      {...props.register(props.name, props.rules)}
    />
    {props.error && (
      <Box display="flex" alignItems="center" mt={0.5}>
        <ErrorOutline color="error" fontSize="small" />
        <Typography color="error" variant="caption" ml={0.5}>
          {props.error.message}
        </Typography>
      </Box>
    )}
  </Grid>
);

type FormProps = {
  onSubmit: SubmitHandler<any>;
  slot?: ReactNode;
};
export const Form: FC<PropsWithChildren<FormProps>> = ({
  children,
  slot,
  onSubmit,
}) => {
  const { handleSubmit } = useForm();

  return (
    <Paper elevation={1} className="border-2 border-divider">
      {slot}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid display="flex" flexWrap="wrap" gap={3} container p={5}>
          {children}
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Grid>
      </form>
    </Paper>
  );
};
