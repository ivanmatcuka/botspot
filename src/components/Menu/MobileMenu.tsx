'use client';

import { MenuButton } from './MenuButton';

import { Menu as MuiMenu, useTheme } from '@mui/material';
import { FC, PropsWithChildren, useState } from 'react';

import { ButtonProps } from '@/components/Button';

type MobileMenuProps = {
  label: string;
  variant: ButtonProps['variant'];
};
export const MobileMenu: FC<PropsWithChildren<MobileMenuProps>> = ({
  label,
  variant,
  children,
}) => {
  const { shadows } = useTheme();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <MenuButton
        label={label}
        open={open}
        variant={variant}
        onClick={(event) => setAnchorEl(event.currentTarget)}
      />
      <MuiMenu
        anchorEl={anchorEl}
        MenuListProps={{
          'aria-labelledby': `basic-button-${label}`,
        }}
        open={open}
        slotProps={{
          paper: {
            sx: { boxShadow: shadows[1] },
            className: 'border-2 border-divider',
          },
        }}
        onClose={handleClose}
      >
        {children}
      </MuiMenu>
    </>
  );
};
