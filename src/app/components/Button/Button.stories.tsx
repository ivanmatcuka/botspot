import { IconLink } from '../IconLink';

import { Button, ButtonProps } from '@/app/components/Button/Button';

import { Box, Grid, Typography } from '@mui/material';
import { fn } from '@storybook/test';
import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'botspot/Buttons',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'outline'],
    },
  },
  args: { onClick: fn(), disabled: false },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<any>;

export const Buttons: Story = {
  args: {},
  render: () => (
    <Grid spacing={4} container>
      <Grid xs={4} item>
        <Typography variant="h6">Variant</Typography>
      </Grid>
      <Grid xs={4} item>
        <Typography variant="h6">Normal</Typography>
      </Grid>
      <Grid xs={4} item>
        <Typography variant="h6">Disabled</Typography>
      </Grid>
      {['primary', 'secondary', 'outline'].map((variant) => (
        <React.Fragment key={variant}>
          <Grid xs={4} item>
            <Typography>{variant}</Typography>
          </Grid>
          <Grid xs={4} item>
            <Button variant={variant as ButtonProps['variant']}>Button</Button>
          </Grid>
          <Grid xs={4} item>
            <Button variant={variant as ButtonProps['variant']} disabled>
              Button
            </Button>
          </Grid>
        </React.Fragment>
      ))}
    </Grid>
  ),
};

export const Icons: Story = {
  args: {},
  render: () => (
    <Box bgcolor="grey.800" p={4}>
      <Grid spacing={4} container>
        <Grid xs={4} item>
          <IconLink alt="ig" href="https://instagram.com/botspot3d/" />
        </Grid>
        <Grid xs={4} item>
          <IconLink alt="x" href="https://x.com/botspot3d" />
        </Grid>
        <Grid xs={4} item>
          <IconLink
            alt="linkedin"
            href="https://linkedin.com/company/botspot-3d-scan/"
          />
        </Grid>
      </Grid>
    </Box>
  ),
};
