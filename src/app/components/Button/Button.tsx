import {
  ButtonProps as MUIButtonProps,
  Button as MUIButton,
} from '@mui/material';
import { FC } from 'react';

const PrimaryButton = ({ ...props }: MUIButtonProps) => (
  <MUIButton color="primary" variant="contained" {...props} />
);

const SecondaryButton = ({ ...props }: MUIButtonProps) => (
  <MUIButton color="primary" variant="outlined" {...props} />
);

const MenuButton = ({ ...props }: MUIButtonProps) => (
  <MUIButton color="info" variant="text" {...props} />
);

type ButtonProps = {
  variant: 'primary' | 'secondary' | 'menu';
} & Pick<MUIButtonProps, 'id' | 'onClick' | 'children' | 'endIcon'>;
export const Button: FC<ButtonProps> = ({ variant, ...props }) => {
  switch (variant) {
    case 'primary':
      return <PrimaryButton {...props} />;
    case 'secondary':
      return <SecondaryButton {...props} />;
    case 'menu':
      return <MenuButton {...props} />;
    default:
      return <MUIButton {...props} />;
  }
};
