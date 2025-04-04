'use client';

import { CustomHoverMenu } from './HoverMenu';
import { MobileMenu } from './MobileMenu';

import {
  MenuItem as MuiMenuItem,
  MenuItemProps as MuiMenuItemProps,
  styled,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { usePopupState } from 'material-ui-popup-state/hooks';
import { FC, PropsWithChildren } from 'react';

import { ButtonProps } from '@/components/Button';

export const MenuItem: FC<PropsWithChildren<MuiMenuItemProps>> = styled(
  MuiMenuItem,
)(({ theme }) => ({
  '&.active': {
    backgroundColor: theme.palette.grey[100],

    a: {
      color: theme.palette.primary.main,
    },
  },
}));

type MenuProps = {
  label: string;
  variant?: ButtonProps['variant'];
  href?: string;
  className?: string;
};
export const Menu: FC<PropsWithChildren<MenuProps>> = ({
  label,
  variant = 'menu',
  href,
  children,
  className,
}) => {
  const { breakpoints } = useTheme();
  const matches = useMediaQuery(breakpoints.down('xl'));

  const popupState = usePopupState({ variant: 'popper', popupId: 'demoMenu' });

  return (
    <>
      {matches ? (
        <MobileMenu label={label} variant={variant}>
          {children}
        </MobileMenu>
      ) : (
        <CustomHoverMenu
          className={className}
          href={href}
          label={label}
          popupState={popupState}
          variant={variant}
        >
          {children}
        </CustomHoverMenu>
      )}
    </>
  );
};
