'use client';

import { ErrorOutline } from '@mui/icons-material';
import {
  Box,
  Container,
  Grid,
  InputLabel,
  InputProps,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { FC, PropsWithChildren } from 'react';
import {
  SubmitHandler,
  UseControllerProps,
  UseFormRegister,
} from 'react-hook-form';

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
