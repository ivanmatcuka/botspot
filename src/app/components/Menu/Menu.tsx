'use client';

import { Button, ButtonProps } from '@/app/components/Button/Button';

import { ExpandLess, ExpandMore } from '@mui/icons-material';
import {
  Menu as MuiMenu,
  MenuItem as MuiMenuItem,
  MenuItemProps as MuiMenuItemProps,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  bindHover,
  bindMenu,
  usePopupState,
} from 'material-ui-popup-state/hooks';
import HoverMenu from 'material-ui-popup-state/HoverMenu';
import { useRouter } from 'next/navigation';
import {
  FC,
  MouseEvent,
  PropsWithChildren,
  useCallback,
  useMemo,
  useState,
} from 'react';

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
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { push } = useRouter();

  const { shadows, breakpoints } = useTheme();
  const matches = useMediaQuery(breakpoints.down('xl'));

  const Component = matches ? MuiMenu : HoverMenu;
  const popupState = usePopupState({ variant: 'popper', popupId: 'demoMenu' });
  const open = matches ? Boolean(anchorEl) : popupState.isOpen;

  const handleClick = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
      href && push(href);
    },
    [href, push],
  );

  const handleClose = () => {
    setAnchorEl(null);
  };

  const componentProps = useMemo(
    () =>
      matches
        ? {
            open,
            anchorEl,
            onClose: handleClose,
          }
        : bindMenu(popupState),
    [matches, popupState, open, anchorEl],
  );

  return (
    <>
      <Button
        aria-controls={open ? `basic-menu-${label}` : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        endIcon={open ? <ExpandLess /> : <ExpandMore />}
        id={`basic-button-${label}`}
        variant={variant}
        onClick={handleClick}
        {...bindHover(popupState)}
      >
        {label}
      </Button>
      <Component
        MenuListProps={{
          'aria-labelledby': `basic-button-${label}`,
        }}
        slotProps={{
          paper: {
            sx: { boxShadow: shadows[1] },
            className: 'border-2 border-divider',
          },
        }}
        {...componentProps}
      >
        {children}
      </Component>
    </>
  );
};
