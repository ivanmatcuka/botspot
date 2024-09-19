import type { Meta, StoryObj } from '@storybook/react';
import { Banner } from './Banner';
import { Button } from '../Button/Button';

const meta = {
  title: 'Example/Banner',
  component: Banner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  args: {},
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicBanner: Story = {
  args: {
    headline: 'Botscan NEO',
    subline: 'Smart 3D fullbody scanner for high volume 3D model production',
    primaryCta: <Button variant="primary">Explore Neo</Button>,
    secondaryCta: <Button variant="secondary">Download Data Sheet</Button>,
    assetUrl: '/placeholder.png',
  },
};
