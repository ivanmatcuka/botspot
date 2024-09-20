'use client';

import { styled } from '@mui/material';

export const BannerImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',

  maxHeight: 800,

  [theme.breakpoints.up('xs')]: {
    maxHeight: 768,
  },

  [theme.breakpoints.up('md')]: {
    maxHeight: 1024,
  },
}));
