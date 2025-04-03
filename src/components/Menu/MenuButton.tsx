'use client';

import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { FC, MouseEvent } from 'react';

import { Button, ButtonProps } from '@/components/Button';

type MenuButtonProps = {
  label: string;
  variant: ButtonProps['variant'];
  open: boolean;
  href?: string;
  className?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};
export const MenuButton: FC<MenuButtonProps> = ({
  label,
  variant,
  open,
  href,
  onClick,
  ...props
}) => (
  <Button
    aria-controls={open ? `basic-menu-${label}` : undefined}
    aria-expanded={open ? 'true' : undefined}
    aria-haspopup="true"
    endIcon={open ? <ExpandLess /> : <ExpandMore />}
    id={`basic-button-${label}`}
    variant={variant}
    onClick={onClick}
    {...props}
    href={href}
  >
    {label}
  </Button>
);
