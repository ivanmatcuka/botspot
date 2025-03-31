'use client';

import { MenuButton } from './MenuButton';

import { ButtonProps } from '@/components/Button/Button';

import { useTheme } from '@mui/material';
import {
  bindHover,
  bindMenu,
  usePopupState,
} from 'material-ui-popup-state/hooks';
import HoverMenu from 'material-ui-popup-state/HoverMenu';
import { FC, PropsWithChildren } from 'react';

type CustomHoverMenuProps = {
  label: string;
  popupState: ReturnType<typeof usePopupState>;
  variant: ButtonProps['variant'];
  onClick: () => void;
  className?: string;
};
export const CustomHoverMenu: FC<PropsWithChildren<CustomHoverMenuProps>> = ({
  label,
  popupState,
  variant,
  onClick,
  children,
  className,
}) => {
  const { shadows } = useTheme();
  const open = popupState.isOpen;

  return (
    <>
      <MenuButton
        className={className}
        label={label}
        open={open}
        variant={variant}
        onClick={onClick}
        {...bindHover(popupState)}
      />
      <HoverMenu
        MenuListProps={{
          'aria-labelledby': `basic-button-${label}`,
        }}
        slotProps={{
          paper: {
            sx: { boxShadow: shadows[1] },
            className: 'border-2 border-divider',
          },
        }}
        {...bindMenu(popupState)}
      >
        {children}
      </HoverMenu>
    </>
  );
};
