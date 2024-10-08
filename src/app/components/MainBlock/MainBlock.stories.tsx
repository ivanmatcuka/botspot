import { MainBlock } from './MainBlock';

import { Button } from '../Button/Button';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Example/MainBlock',
  component: MainBlock,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  args: {},
} satisfies Meta<typeof MainBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicMainBlock: Story = {
  args: {
    headline:
      'Professional 3D Scanners for rapid, highly precise and absolutely colorfast 3D data.',
    subline: 'What we do',
    cta: <Button variant="primary">See All Products</Button>,
    mediaBlockOptions: {
      assetUrl: '/placeholder.png',
    },
  },
};
