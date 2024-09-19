'use client';

import React, { FC, PropsWithChildren, ReactNode } from 'react';
import {
  Box,
  Grid,
  InputLabel,
  InputProps,
  Paper,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import { Button } from '../Button/Button';

import {
  useForm,
  UseControllerProps,
  SubmitHandler,
  UseFormRegister,
} from 'react-hook-form';
import { ErrorOutline } from '@mui/icons-material';

export const Input = (
  props: Pick<UseControllerProps<any>, 'name' | 'rules'> &
    Pick<InputProps, 'fullWidth' | 'required' | 'value'> & {
      register: UseFormRegister<any>;
      error: any;
      label?: string;
    },
) => (
  <Grid item flex={props.fullWidth ? '0 0 100%' : 'auto'} flexGrow={1}>
    {props.label && (
      <Box mb={0.5}>
        <InputLabel required={props.required}>
          <Typography variant="caption">{props.label}</Typography>
        </InputLabel>
      </Box>
    )}
    <TextField
      error={props.error}
      placeholder={props.label}
      {...props.register(props.name, props.rules)}
      fullWidth
      value={props.value}
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

export const StyledPaper = styled(Paper)(({ theme }) => ({
  border: `2px solid ${theme.palette.divider}`,
}));

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
    <StyledPaper elevation={1}>
      {slot}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid display="flex" flexWrap="wrap" gap={3} container p={5}>
          {children}
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Grid>
      </form>
    </StyledPaper>
  );
};
