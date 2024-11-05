import { Form, Input } from './Form';

import { Button } from '../Button/Button';

import { Grid, Paper } from '@mui/material';
import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Example/CustomForm',
  component: Form,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  args: {},
  decorators: [
    (Story) => (
      <FormProvider {...useForm()}>
        <Story />
      </FormProvider>
    ),
  ],
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof Form>;

const FormWithHooks: FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  return (
    <Paper className="border-2 border-divider" elevation={1}>
      <form onSubmit={handleSubmit(() => ({}))}>
        <Grid display="flex" flexWrap="wrap" gap={3} p={5} container>
          <Input
            error={errors.name}
            key="name"
            label="Name"
            name="name"
            register={register}
            rules={{ required: 'Name is required' }}
            required
          />
          <Input
            error={errors.email}
            key="email"
            label="Email"
            name="email"
            register={register}
            rules={{
              required: 'Email is required',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Invalid email',
              },
            }}
            required
          />
          <Input
            error={errors.message}
            key="message"
            label="Message"
            name="message"
            register={register}
            rules={{ required: 'Message is required' }}
            fullWidth
            required
          />
          <Button type="submit" variant="primary">
            Submit
          </Button>
        </Grid>
      </form>
    </Paper>
  );
};

export const BasicForm: Story = {
  render: () => <FormWithHooks />,
};
