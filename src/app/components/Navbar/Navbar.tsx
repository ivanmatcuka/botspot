import {
  Box,
  IconButton as MuiIconButton,
  AppBar as MuiAppBar,
  Toolbar,
  styled,
  useTheme,
  useMediaQuery,
  Drawer,
  ListItem,
  List,
  Accordion,
  AccordionSummary,
  ListItemButton,
} from '@mui/material';
import { FC, ReactNode, useCallback, useMemo, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import { Button } from '../Button/Button';
import { Menu } from '../Menu/Menu';
import { ExpandMore } from '@mui/icons-material';

const ResponsiveMenuIcon = styled(MuiIconButton)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

const StyledMuiAppBar = styled(MuiAppBar)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.grey[200]}`,
  zIndex: theme.zIndex.drawer + 1,
}));

type MenuItem = {
  label: string;
  onClick?: () => void;
  children?: MenuItem[];
  disabled?: boolean;
};

type NavbarProps = {
  cta: ReactNode;
  navItems: MenuItem[];
};
export const Navbar: FC<NavbarProps> = ({ cta, navItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { breakpoints } = useTheme();
  const matches = useMediaQuery(breakpoints.up('sm'));

  const renderMenu = useCallback((item: MenuItem) => {
    if (!item.children) {
      return (
        <Button key={item.label} variant="menu" disabled={item.disabled}>
          {item.label}
        </Button>
      );
    }

    return (
      <Menu label={item.label} key={item.label}>
        {item.children.map((child) => renderMenu(child))}
      </Menu>
    );
  }, []);

  const menu = useMemo(
    () => navItems.map((item) => renderMenu(item)),
    [navItems, renderMenu],
  );

  const renderDrawer = useCallback((item: MenuItem) => {
    if (!item.children) {
      return (
        <ListItem key={item.label}>
          <ListItemButton disableRipple>{item.label}</ListItemButton>
        </ListItem>
      );
    }

    return (
      <Accordion key={item.label}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          {item.label}
        </AccordionSummary>
        {item.children.map((child) => renderDrawer(child))}
      </Accordion>
    );
  }, []);

  const drawer = useMemo(
    () => navItems.map((item) => renderDrawer(item)),
    [navItems, renderDrawer],
  );

  return (
    <StyledMuiAppBar position="relative" color="transparent" elevation={24}>
      <Toolbar>
        <Image width={150} height={46} src="/logo.svg" alt="logo" />
        {matches ? (
          <>
            <Box display="flex" sx={{ flexGrow: 1 }}>
              {menu}
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
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </ResponsiveMenuIcon>
            <Drawer
              anchor="top"
              open={isOpen}
              onClose={() => setIsOpen(false)}
              PaperProps={{ sx: { top: 57 } }}
              slotProps={{ backdrop: { sx: { top: 57 } } }}
            >
              <List>{drawer}</List>
            </Drawer>
          </Box>
        )}
      </Toolbar>
    </StyledMuiAppBar>
  );
};
