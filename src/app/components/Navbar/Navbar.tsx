'use client';

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
  Grid,
} from '@mui/material';
import { FC, ReactNode, useCallback, useMemo, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import { Button } from '../Button/Button';
import { Menu } from '../Menu/Menu';
import { ExpandMore } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const ResponsiveMenuIcon = styled(MuiIconButton)(({ theme }) => ({
  [theme.breakpoints.up('xl')]: {
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
  href?: string;
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
  const matches = useMediaQuery(breakpoints.up('xl'));
  const { push } = useRouter();

  const renderMenu = useCallback(
    (item: MenuItem) => {
      if (!item.children) {
        return (
          <Button
            key={item.label}
            variant="menuItem"
            disabled={item.disabled}
            onClick={item.onClick ?? (() => push(item.href ?? ''))}
          >
            {item.label}
          </Button>
        );
      }

      return (
        <Menu label={item.label} key={item.label} href={item.href}>
          {item.children.map((child) => renderMenu(child))}
        </Menu>
      );
    },
    [push],
  );

  const menu = useMemo(
    () => navItems.map((item) => renderMenu(item)),
    [navItems, renderMenu],
  );

  const renderDrawer = useCallback((item: MenuItem) => {
    if (!item.children) {
      return (
        <ListItem key={item.label}>
          <ListItemButton
            onClick={item.onClick ?? (() => push(item.href ?? ''))}
            disableRipple
          >
            {item.label}
          </ListItemButton>
        </ListItem>
      );
    }

    return (
      <Accordion key={item.label}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          onClick={item.onClick ?? (() => push(item.href ?? ''))}
        >
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
        <Grid container>
          <Grid item xs={12} md={10} mx="auto" display="flex">
            <Link href="/">
              <Image width={150} height={46} src="/logo.svg" alt="logo" />
            </Link>
            {matches ? (
              <>
                <Box display="flex" sx={{ flexGrow: 1 }}>
                  {menu}
                </Box>
                {cta}
              </>
            ) : (
              <Box
                display="flex"
                sx={{ flexGrow: 1 }}
                justifyContent="flex-end"
              >
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
          </Grid>
        </Grid>
      </Toolbar>
    </StyledMuiAppBar>
  );
};
