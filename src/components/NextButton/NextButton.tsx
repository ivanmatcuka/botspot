import { Button as BotspotButton, ButtonProps } from '@botspot/ui';
import Link from 'next/link';
import { FC } from 'react';

export const Button: FC<ButtonProps> = ({ component, ...rest }) => (
  <BotspotButton {...rest} component={rest.href ? Link : component} />
);
