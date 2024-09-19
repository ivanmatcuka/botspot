'use client';

import {
  MenuItem as MuiMenuItem,
  MenuItemProps as MuiMenuItemProps,
  useTheme,
} from '@mui/material';
import { FC, PropsWithChildren } from 'react';
import { Button, ButtonProps } from '../Button/Button';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import {
  usePopupState,
  bindMenu,
  bindHover,
} from 'material-ui-popup-state/hooks';
import HoverMenu from 'material-ui-popup-state/HoverMenu';
export const MenuItem: FC<PropsWithChildren<MuiMenuItemProps>> = ({
  ...props
}) => <MuiMenuItem {...props} />;

type MenuProps = {
  label: string;
  variant?: ButtonProps['variant'];
  href?: string;
};
export const Menu: FC<PropsWithChildren<MenuProps>> = ({
  label,
  variant = 'menu',
  href,
  children,
}) => {
  const { shadows } = useTheme();
  const popupState = usePopupState({ variant: 'popper', popupId: 'demoMenu' });
  const open = popupState.isOpen;

  return (
    <>
      <Button
        id={`basic-button-${label}`}
        aria-controls={open ? `basic-menu-${label}` : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant={variant}
        endIcon={open ? <ExpandLess /> : <ExpandMore />}
        {...bindHover(popupState)}
        onClick={() => (href ? (window.location.href = href) : null)}
      >
        {label}
      </Button>
      <HoverMenu
        MenuListProps={{
          'aria-labelledby': `basic-button-${label}`,
        }}
        slotProps={{
          paper: {
            sx: { boxShadow: shadows[1] },
          },
        }}
        {...bindMenu(popupState)}
      >
        {children}
      </HoverMenu>
    </>
  );
};
