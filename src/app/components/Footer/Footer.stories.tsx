import { Footer } from './Footer';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'botspot/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
  args: {},
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicFooter: Story = {
  args: { products: [] },
};
