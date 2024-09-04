import {
  Box,
  IconButton as MuiIconButton,
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
  styled,
} from '@mui/material';
import { FC, PropsWithChildren, ReactNode } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

const ResponsiveMenuIcon = styled(MuiIconButton)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

type NavbarProps = {
  cta: ReactNode;
};
export const Navbar: FC<PropsWithChildren<NavbarProps>> = ({
  cta,
  children,
}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MuiAppBar position="static" color="transparent">
        <Toolbar>
          <Box display="flex" sx={{ flexGrow: 1 }}>
            {children}
          </Box>
          {cta}
          <ResponsiveMenuIcon
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </ResponsiveMenuIcon>
        </Toolbar>
      </MuiAppBar>
    </Box>
  );
};
