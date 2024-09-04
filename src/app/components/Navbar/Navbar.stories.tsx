import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './Navbar';
import { Button } from '../Button/Button';
import { Menu } from '../Menu/Menu';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Navbar',
  component: Navbar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  args: { children: '' },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DesktopNavbar: Story = {
  args: {
    cta: <Button variant="secondary">Call to Action</Button>,
    children: (
      <>
        <Menu label="Dropdown Menu">
          <Button variant="menuItem">Option 1</Button>
          <Button variant="menuItem">Option 2</Button>
        </Menu>
        <Button variant="menu">Menu Button</Button>
        <Button variant="menu">Second</Button>
      </>
    ),
  },
};

export const MobileNavbar: Story = {
  args: {
    cta: <Button variant="secondary">Call to Action</Button>,
    children: (
      <>
        <Menu label="Dropdown Menu">
          <Button variant="menuItem">Option 1</Button>
          <Button variant="menuItem">Option 2</Button>
        </Menu>
        <Button variant="menu">Menu Button</Button>
        <Button variant="menu">Second</Button>
      </>
    ),
  },
};
