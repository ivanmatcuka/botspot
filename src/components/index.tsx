'use client';

import { Box, Paper } from '@mui/material';
import { FC, PropsWithChildren, useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Field, getForm } from '../../utils/getForm';
import { Button } from '../Button';
import { Input } from '../Input';
import { useSnackbar } from '../Snackbar';

export type DynamicFormProps = PropsWithChildren<{
  formId?: number;
  frameless?: boolean;
  secondary?: boolean;
  submitForm: (formData: FormData, formId: number) => Promise<void>;
}>;
export const DynamicForm: FC<DynamicFormProps> = ({
  children,
  formId,
  frameless = false,
  secondary = false,
  submitForm,
}) => {
  const [fields, setFields] = useState<Field[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { showSnackbar } = useSnackbar();
  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
    watch,
  } = useForm();

  useEffect(() => {
    if (!formId) return;

    getForm(formId).then((form) => setFields(form?.fields ?? []));
  }, [formId]);

  const onSubmit = useCallback(() => {
    if (!formId) return;

    setIsLoading(true);
    const newFormData = new FormData();

    newFormData.append('_wpcf7_unit_tag', `${formId}`);
    fields?.forEach((field) => {
      newFormData.append(field.name, watch(field.name));
    });

    submitForm(newFormData, formId)
      .then(() => showSnackbar('Thank you for your feedback!', 'success', 3000))
      .catch(() => showSnackbar('Something went wrong!', 'error', 3000))
      .finally(() => {
        setIsLoading(false);
        reset();
      });
  }, [showSnackbar, reset, watch, fields, formId]);

  if (!fields) return null;

  const renderField = (field: Field) => {
    const { basetype, labels, name, type } = field;
    const isRequired = type.includes('*');
    const label = labels[0] || name;

    return (
      <Input
        color={secondary ? 'white' : 'primary'}
        error={errors[name]}
        fullWidth={basetype === 'textarea'}
        key={name}
        label={label}
        name={name}
        register={register}
        required={isRequired}
        rows={basetype === 'textarea' ? 3 : undefined}
        rules={isRequired ? { required: `${label} is required` } : undefined}
        type={basetype === 'textarea' ? 'textarea' : 'text'}
      />
    );
  };

  const content = (
    <Box width="100%">{fields.map((field) => renderField(field))}</Box>
  );

  if (frameless) return content;

  return (
    <Paper
      className={`${secondary && '!bg-primary-main'} border-2 border-divider`}
      elevation={1}
    >
      <Box
        display="flex"
        flexWrap="wrap"
        gap={3}
        justifyContent={{ md: 'left', xs: 'center' }}
        p={frameless ? 0 : { md: 5, xs: 3 }}
        py={frameless ? 0 : { xs: 2 }}
      >
        <Box width="100%">{children}</Box>
        {content}
        <Button
          disabled={isLoading}
          onClick={handleSubmit(onSubmit)}
          type="submit"
          variant="primary"
        >
          Submit
        </Button>
      </Box>
    </Paper>
  );
};
