'use client';

import {
  ButtonProps as MuiButtonProps,
  Button as MuiButton,
  styled,
} from '@mui/material';
import { FC } from 'react';
import { MenuItem } from '../Menu/Menu';

const PrimaryButton = styled(({ ...props }: MuiButtonProps) => (
  <MuiButton color="primary" variant="contained" {...props} />
))(({ theme }) => ({
  '&:hover': {
    backgroundColor: theme.palette.common.white,
    borderColor: theme.palette.primary.main,

    color: theme.palette.primary.main,
  },
}));

const SecondaryButton = styled(({ ...props }: MuiButtonProps) => (
  <MuiButton color="primary" variant="outlined" {...props} />
))(({ theme }) => ({
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    borderColor: theme.palette.common.white,

    color: theme.palette.common.white,
  },
}));

const MenuButton = ({ ...props }: MuiButtonProps) => (
  <MuiButton color="info" variant="text" {...props} />
);

const MenuItemButton = styled(({ ...props }: MuiButtonProps) => (
  <MenuItem>
    <MuiButton color="info" variant="text" {...props} />
  </MenuItem>
))(({ theme }) => ({
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

type ButtonProps = {
  variant: 'primary' | 'secondary' | 'menu' | 'menuItem';
} & Pick<
  MuiButtonProps,
  'id' | 'onClick' | 'children' | 'endIcon' | 'disabled' | 'type'
>;
export const Button: FC<ButtonProps> = ({ variant, ...props }) => {
  switch (variant) {
    case 'primary':
      return <PrimaryButton {...props} />;
    case 'secondary':
      return <SecondaryButton {...props} />;
    case 'menu':
      return <MenuButton {...props} />;
    case 'menuItem':
      return <MenuItemButton {...props} />;
    default:
      return <MuiButton {...props} />;
  }
};
