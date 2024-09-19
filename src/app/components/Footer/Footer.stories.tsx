import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';
import { Button } from '../Button/Button';

const meta = {
  title: 'Example/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  args: {},
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicFooter: Story = {
  args: {},
};
