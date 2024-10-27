'use client';

import { Button } from '../Button/Button';

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
    Pick<InputProps, 'fullWidth' | 'required' | 'value' | 'type' | 'rows'> & {
      register: UseFormRegister<any>;
      error: any;
      label?: string;
      color?: 'primary' | 'white';
    },
) => (
  <Grid
    className="!text-white"
    flex={props.fullWidth ? '0 0 100%' : 'auto'}
    flexGrow={1}
    item
  >
    {props.label && (
      <Box mb={0.5}>
        <InputLabel
          className={props.color === 'white' ? '!text-white' : ''}
          required={props.required}
        >
          <Typography variant="caption">{props.label}</Typography>
        </InputLabel>
      </Box>
    )}
    <TextField
      error={props.error}
      InputProps={{ className: 'bg-white' }}
      placeholder={props.label}
      rows={props.rows}
      type={props.type}
      value={props.value}
      fullWidth
      {...props.register(props.name, props.rules)}
    />
    {props.error && (
      <Box alignItems="center" display="flex" mt={0.5}>
        <ErrorOutline color="error" fontSize="small" />
        <Typography color="error" ml={0.5} variant="caption">
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
    <Paper className="border-2 border-divider" elevation={1}>
      {slot}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid display="flex" flexWrap="wrap" gap={3} p={5} container>
          {children}
          <Button type="submit" variant="primary">
            Submit
          </Button>
        </Grid>
      </form>
    </Paper>
  );
};
