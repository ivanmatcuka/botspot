import {
  Box,
  IconButton as MuiIconButton,
  AppBar as MuiAppBar,
  Toolbar,
  styled,
  useTheme,
  useMediaQuery,
  Drawer,
} from '@mui/material';
import { FC, PropsWithChildren, ReactNode, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';

const ResponsiveMenuIcon = styled(MuiIconButton)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

const StyledMuiAppBar = styled(MuiAppBar)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.grey[200]}`,
}));

type NavbarProps = {
  cta: ReactNode;
};
export const Navbar: FC<PropsWithChildren<NavbarProps>> = ({
  cta,
  children,
}) => {
  const { breakpoints } = useTheme();
  const matches = useMediaQuery(breakpoints.up('sm'));
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledMuiAppBar position="static" color="transparent">
      <Toolbar>
        <Image width={150} height={46} src="/logo.svg" alt="logo" />
        {matches ? (
          <>
            <Box display="flex" sx={{ flexGrow: 1 }}>
              {children}
            </Box>
            {cta}
          </>
        ) : (
          <Box display="flex" sx={{ flexGrow: 1 }} justifyContent="flex-end">
            <ResponsiveMenuIcon
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => setIsOpen(!isOpen)}
            >
              <MenuIcon />
            </ResponsiveMenuIcon>
            <Drawer anchor="top" open={isOpen} onClose={() => setIsOpen(false)}>
              {children}
            </Drawer>
          </Box>
        )}
      </Toolbar>
    </StyledMuiAppBar>
  );
};
