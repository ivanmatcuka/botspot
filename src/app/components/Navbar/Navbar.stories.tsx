import { Navbar } from './Navbar';

import { Button } from '../Button/Button';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'botspot/Navigation',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicNavbar: Story = {
  args: {
    cta: <Button variant="secondary">Call to Action</Button>,
    navItems: [
      {
        label: 'Dropdown Menu',
        children: [
          { label: 'Option 1' },
          { label: 'Option 2', children: [{ label: 'Option 2.1' }] },
        ],
      },
      { label: 'Menu Button' },
      { label: 'Disabled', disabled: true },
    ],
  },
};
