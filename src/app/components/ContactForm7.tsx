'use client';

import { parseFieldOptions } from '../utils';

import { Input } from '@/app/components/Form/Form';

import { FC } from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

type ContactForm7Props = {
  form: CF7Form;
  errors: FieldErrors<FieldValues>;
  register: UseFormRegister<FieldValues>;
};
export const ContactForm7: FC<ContactForm7Props> = ({
  form,
  errors,
  register,
}) => {
  return (
    form?.properties.form.fields &&
    Object.values(form?.properties.form.fields).map((field) => {
      const options = parseFieldOptions(field.options ?? []);
      const label = field.labels?.[0] ?? '';

      if (options.class === 'hidden') return null;

      return (
        <Input
          className={options.class === 'hidden' ? 'hidden' : ''}
          error={errors[field.name]}
          fullWidth={options.class === 'fullWidth'}
          key={field.name}
          label={label}
          name={field.name}
          register={register}
          required={field.type.endsWith('*')}
          rules={{ required: `${label} is required` }}
        />
      );
    })
  );
};
