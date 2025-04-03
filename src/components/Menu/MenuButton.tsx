'use client';

import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { FC } from 'react';

import { Button, ButtonProps } from '@/components/Button';

type MenuButtonProps = {
  label: string;
  variant: ButtonProps['variant'];
  open: boolean;
  className?: string;
  href?: string;
};
export const MenuButton: FC<MenuButtonProps> = ({
  label,
  variant,
  open,
  href,
  ...props
}) => (
  <Button
    aria-controls={open ? `basic-menu-${label}` : undefined}
    aria-expanded={open ? 'true' : undefined}
    aria-haspopup="true"
    endIcon={open ? <ExpandLess /> : <ExpandMore />}
    href={href}
    id={`basic-button-${label}`}
    variant={variant}
    {...props}
  >
    {label}
  </Button>
);
