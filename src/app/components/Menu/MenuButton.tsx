'use client';

import { Button, ButtonProps } from '@/app/components/Button/Button';

import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { FC, MouseEvent } from 'react';

type MenuButtonProps = {
  label: string;
  variant: ButtonProps['variant'];
  open: boolean;
  className?: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
};
export const MenuButton: FC<MenuButtonProps> = ({
  label,
  variant,
  open,
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
  >
    {label}
  </Button>
);
