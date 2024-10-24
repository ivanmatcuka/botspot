'use client';

import { Container, styled } from '@mui/material';

export const ThemedContainer = styled(Container)(({ theme }) => ({
  h2: {
    ...theme.typography.h3,
    marginBottom: theme.spacing(3),

    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(2),
    },
  },
  p: {
    ...theme.typography.body1,
    marginBottom: theme.spacing(6),

    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(3),
    },
  },
  hr: {
    marginBottom: theme.spacing(5),

    borderColor: theme.palette.info.main,
    borderWidth: 1,
  },
  ul: {
    listStyle: 'initial',
  },
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
  },
}));
