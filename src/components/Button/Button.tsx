'use client';

import { MenuItem } from '@/components/Menu/Menu';

import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
  styled,
} from '@mui/material';
import { FC } from 'react';

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
  backgroundColor: theme.palette.common.white,

  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,

    color: theme.palette.common.white,
  },
}));

const OutlineButton = styled(SecondaryButton)(({ theme }) => ({
  borderColor: theme.palette.common.black,

  color: theme.palette.common.black,

  '&:hover': {
    backgroundColor: theme.palette.common.black,
    borderColor: theme.palette.common.black,

    color: theme.palette.common.white,
  },
}));

const MenuButton = styled(({ ...props }: MuiButtonProps) => (
  <MuiButton color="info" variant="text" {...props} />
))(({ theme }) => ({
  '&.active': {
    backgroundColor: theme.palette.grey[100],
    color: theme.palette.primary.main,
  },
}));

const TopicButton = styled(({ ...props }: MuiButtonProps) => (
  <MuiButton color="primary" variant="text" {...props} />
))(({ theme }) => ({
  padding: 0,
  ...theme.typography.h2,
}));

const MenuItemButton = styled(({ ...props }: MuiButtonProps) => (
  <MenuItem className={props.className}>
    <MuiButton color="info" variant="text" {...props} />
  </MenuItem>
))(({ theme }) => ({
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

export type ButtonProps = {
  variant: 'primary' | 'secondary' | 'outline' | 'menu' | 'menuItem' | 'topic';
  target?: string;
} & Pick<
  MuiButtonProps,
  | 'id'
  | 'onClick'
  | 'children'
  | 'endIcon'
  | 'disabled'
  | 'type'
  | 'component'
  | 'onMouseOver'
  | 'className'
  | 'href'
  | 'startIcon'
>;
export const Button: FC<ButtonProps> = ({ variant, ...props }) => {
  switch (variant) {
    case 'primary':
      return <PrimaryButton {...props} />;
    case 'secondary':
      return <SecondaryButton {...props} />;
    case 'outline':
      return <OutlineButton {...props} />;
    case 'menu':
      return <MenuButton {...props} />;
    case 'menuItem':
      return <MenuItemButton {...props} />;
    case 'topic':
      return <TopicButton {...props} />;
    default:
      return <MuiButton {...props} />;
  }
};
