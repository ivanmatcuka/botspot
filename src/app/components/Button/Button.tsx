import {
  ButtonProps as MUIButtonProps,
  Button as MUIButton,
} from '@mui/material';
import { FC } from 'react';
import { MenuItem } from '../Menu/Menu';

const PrimaryButton = ({ ...props }: MUIButtonProps) => (
  <MUIButton color="primary" variant="contained" {...props} />
);

const SecondaryButton = ({ ...props }: MUIButtonProps) => (
  <MUIButton color="primary" variant="outlined" {...props} />
);

const MenuButton = ({ ...props }: MUIButtonProps) => (
  <MUIButton color="info" variant="text" {...props} />
);

const MenuItemButton = ({ ...props }: MUIButtonProps) => (
  <MenuItem>
    <MUIButton color="info" variant="text" size="small" {...props} />
  </MenuItem>
);

type ButtonProps = {
  variant: 'primary' | 'secondary' | 'menu' | 'menuItem';
} & Pick<MUIButtonProps, 'id' | 'onClick' | 'children' | 'endIcon'>;
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
      return <MUIButton {...props} />;
  }
};
