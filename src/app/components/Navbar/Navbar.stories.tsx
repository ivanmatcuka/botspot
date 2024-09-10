import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './Navbar';
import { Button } from '../Button/Button';
import { Menu } from '../Menu/Menu';

const meta = {
  title: 'Example/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  args: { children: '' },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicNavbar: Story = {
  args: {
    cta: <Button variant="secondary">Call to Action</Button>,
    children: (
      <>
        <Menu label="Dropdown Menu">
          <Button variant="menuItem">Option 1</Button>
          <Button variant="menuItem">Option 2</Button>
        </Menu>
        <Button variant="menu">Menu Button</Button>
        <Button variant="menu" disabled>
          Disabled
        </Button>
      </>
    ),
  },
};
