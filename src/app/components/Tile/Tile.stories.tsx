import type { Meta, StoryObj } from '@storybook/react';
import { Tile } from './Tile';
import { Button } from '../Button/Button';
import { Typography } from '@mui/material';

const meta = {
  title: 'Example/Tile',
  component: Tile,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  args: {},
} satisfies Meta<typeof Tile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicTile: Story = {
  args: {
    headline: 'Send Us Objects',
    children: (
      <Typography variant="body1">
        Send us your items, we&apos;ll scan them and send you the
        marketing-ready 3D models.
      </Typography>
    ),
  },
};
