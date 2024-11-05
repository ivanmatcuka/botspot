import { Menu } from './Menu';

import { Button } from '../Button/Button';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'botspot/Menu',
  component: Menu,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
  args: { children: '' },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicMenu: Story = {
  args: {
    label: 'Menu',
    children: [
      <Button key="1" variant="menuItem">
        Option 1
      </Button>,
      <Button key="2" variant="menuItem">
        Option 2
      </Button>,
      <Button key="3" variant="menuItem">
        Option 3
      </Button>,
      <Button key="4" variant="menuItem">
        Option 4
      </Button>,
    ],
  },
};
