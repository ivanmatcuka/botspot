'use client';

import { ErrorOutline } from '@mui/icons-material';
import {
  Box,
  Container,
  Grid,
  InputLabel,
  InputProps as MuiInputProps,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { FC, PropsWithChildren } from 'react';
import {
  FieldValues,
  UseControllerProps,
  UseFormRegister,
} from 'react-hook-form';

type InputProps = Pick<UseControllerProps, 'name' | 'rules'> &
  Pick<MuiInputProps, 'fullWidth' | 'required' | 'value' | 'type' | 'rows'> & {
    error?: FieldValues;
    label?: string;
    color?: 'primary' | 'white';
    register: UseFormRegister<FieldValues>;
  };
export const Input: FC<InputProps> = ({
  fullWidth,
  label,
  error,
  color,
  required,
  rows,
  type,
  value,
  name,
  rules,
  register,
}) => (
  <Grid
    className="!text-white"
    flex={fullWidth ? '0 0 100%' : 'auto'}
    flexGrow={1}
    item
  >
    {label && (
      <Box mb={0.5}>
        <InputLabel
          className={color === 'white' ? '!text-white' : ''}
          required={required}
        >
          <Typography variant="caption">{label}</Typography>
        </InputLabel>
      </Box>
    )}
    <TextField
      error={Boolean(error)}
      InputProps={{ className: 'bg-white' }}
      placeholder={label}
      rows={rows}
      type={type}
      value={value}
      fullWidth
      {...register(name, rules)}
    />
    {error && (
      <Box alignItems="center" display="flex" mt={0.5}>
        <ErrorOutline color="error" fontSize="small" />
        <Typography color="error" ml={0.5} variant="caption">
          {error.message}
        </Typography>
      </Box>
    )}
  </Grid>
);

type FormProps = {
  onSubmit: () => void;
  frameless?: boolean;
  secondary?: boolean;
};

export const Form: FC<PropsWithChildren<FormProps>> = ({
  children,
  onSubmit,
  frameless = false,
  secondary = false,
}) => {
  const form = <form onSubmit={onSubmit}>{children}</form>;

  if (frameless) return form;

  return (
    <Container maxWidth="xl">
      <Grid
        direction="column"
        mb={{ xs: 10, md: 15 }}
        md={10}
        mx="auto"
        pt={{ xs: 5, md: 10 }}
        xs={12}
        container
      >
        <Grid item>
          <Paper
            className={`${secondary && '!bg-primary-main'} border-2 border-divider`}
            elevation={1}
          >
            {form}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
