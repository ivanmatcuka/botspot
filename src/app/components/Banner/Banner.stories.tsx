import { Banner } from './Banner';

import { Button } from '@/app/components/Button/Button';

import type { Meta, StoryObj } from '@storybook/react';

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
    headline: 'botscan NEO',
    subline: 'Smart 3D fullbody scanner for high volume 3D model production',
    primaryCta: <Button variant="primary">Explore Neo</Button>,
    secondaryCta: <Button variant="secondary">Download Data Sheet</Button>,
    mediaBlockOptions: {
      assetUrl: '/img/banners/about.png',
    },
  },
};
