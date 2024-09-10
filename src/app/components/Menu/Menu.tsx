import {
  Menu as MuiMenu,
  MenuItem as MuiMenuItem,
  MenuItemProps as MuiMenuItemProps,
  styled,
  useTheme,
} from '@mui/material';
import { FC, PropsWithChildren, useState } from 'react';
import { Button } from '../Button/Button';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

export const MenuItem: FC<PropsWithChildren<MuiMenuItemProps>> = ({
  ...props
}) => <MuiMenuItem {...props} />;

type MenuProps = {
  label: string;
};
export const Menu: FC<PropsWithChildren<MenuProps>> = ({ label, children }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { shadows } = useTheme();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id={`basic-button-${label}`}
        aria-controls={open ? `basic-menu-${label}` : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        variant="menu"
        endIcon={open ? <ExpandLess /> : <ExpandMore />}
      >
        {label}
      </Button>
      <MuiMenu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': `basic-button-${label}`,
        }}
        slotProps={{
          paper: {
            sx: { boxShadow: shadows[1] },
          },
        }}
      >
        {children}
      </MuiMenu>
    </div>
  );
};
