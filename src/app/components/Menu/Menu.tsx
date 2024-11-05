'use client';

import { CustomHoverMenu } from './HoverMenu';
import { MobileMenu } from './MobileMenu';

import { ButtonProps } from '@/app/components/Button/Button';

import {
  MenuItem as MuiMenuItem,
  MenuItemProps as MuiMenuItemProps,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { usePopupState } from 'material-ui-popup-state/hooks';
import { useRouter } from 'next/navigation';
import { FC, PropsWithChildren, useCallback } from 'react';

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
  const { push } = useRouter();

  const { breakpoints } = useTheme();
  const matches = useMediaQuery(breakpoints.down('xl'));

  const popupState = usePopupState({ variant: 'popper', popupId: 'demoMenu' });

  const handleClick = useCallback(() => {
    href && push(href);
  }, [href, push]);

  return (
    <>
      {matches ? (
        <MobileMenu label={label} variant={variant} onClick={handleClick}>
          {children}
        </MobileMenu>
      ) : (
        <CustomHoverMenu
          label={label}
          popupState={popupState}
          variant={variant}
          onClick={handleClick}
        >
          {children}
        </CustomHoverMenu>
      )}
    </>
  );
};
