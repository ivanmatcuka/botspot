import { SecondaryBlock } from './SecondaryBlock';

import { Button } from '../Button/Button';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Example/SecondaryBlock',
  component: SecondaryBlock,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  args: {},
} satisfies Meta<typeof SecondaryBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicSecondaryBlock: Story = {
  args: {
    headline: 'botscan NEO',
    sublineElement:
      'Smart 3D fullbody scanner for high volume 3D model production',
    primaryCta: <Button variant="primary">Explore Neo</Button>,
    secondaryCta: <Button variant="secondary">Download Data Sheet</Button>,
  },
};
