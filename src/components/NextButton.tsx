import { Button as BotspotButton } from '@botspot/ui';
import Link from 'next/link';
import { ComponentProps, FC } from 'react';

export const NextButton: FC<ComponentProps<typeof BotspotButton>> = ({
  component,
  ...rest
}) => <BotspotButton {...rest} component={rest.href ? Link : component} />;
