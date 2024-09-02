import {
  ButtonProps as MUIButtonProps,
  Button as MUIButton,
  styled,
} from '@mui/material';
import { FC } from 'react';

const StyledButton = styled(MUIButton)(({ theme }) => ({
  padding: theme.spacing(1.5, 3),
  border: 'solid 2px',
}));

const PrimaryButton = ({ ...props }: MUIButtonProps) => (
  <StyledButton
    color="primary"
    variant="contained"
    disableRipple
    disableElevation
    {...props}
  />
);

const SecondaryButton = ({ ...props }: MUIButtonProps) => (
  <StyledButton
    color="primary"
    variant="outlined"
    disableRipple
    disableElevation
    {...props}
  />
);

type ButtonProps = {
  variant: 'primary' | 'secondary';
} & Pick<MUIButtonProps, 'onClick' | 'children'>;
export const Button: FC<ButtonProps> = ({ variant, ...props }) => {
  switch (variant) {
    case 'primary':
      return <PrimaryButton {...props} />;
    case 'secondary':
      return <SecondaryButton {...props} />;
    default:
      return <StyledButton {...props} />;
  }
};
