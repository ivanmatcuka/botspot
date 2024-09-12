import type { Meta, StoryObj } from '@storybook/react';
import { CustomForm, Input, StyledPaper } from './Form';
import { FormProvider, useForm } from 'react-hook-form';
import { Grid2, Paper } from '@mui/material';
import { FC } from 'react';
import { Button } from '../Button/Button';

const meta = {
  title: 'Example/CustomForm',
  component: CustomForm,
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
} satisfies Meta<typeof CustomForm>;

export default meta;
type Story = StoryObj<typeof CustomForm>;

const FormWithHooks: FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  return (
    <StyledPaper elevation={1}>
      <form onSubmit={handleSubmit(() => {})}>
        <Grid2 display="flex" flexWrap="wrap" gap={3} container p={5}>
          <Input
            label="Name"
            name="name"
            key="name"
            rules={{ required: 'Name is required' }}
            required
            register={register}
            error={errors.name}
          />
          <Input
            label="Email"
            name="email"
            key="email"
            rules={{
              required: 'Email is required',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Invalid email',
              },
            }}
            required
            register={register}
            error={errors.email}
          />
          <Input
            label="Message"
            name="message"
            key="message"
            rules={{ required: 'Message is required' }}
            fullWidth
            required
            register={register}
            error={errors.message}
          />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Grid2>
      </form>
    </StyledPaper>
  );
};

export const BasicForm: Story = {
  render: () => <FormWithHooks />,
};
