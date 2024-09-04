import type { Meta, StoryObj } from '@storybook/react';
import { Menu } from './Menu';
import { Button } from '../Button/Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Menu',
  component: Menu,
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
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
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
