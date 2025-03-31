'use client';

import { NavbarDrawer } from './NavbarDrawer';
import { NavbarMenu } from './NavbarMenu';

import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Box,
  Container,
  Drawer,
  Grid,
  List,
  AppBar as MuiAppBar,
  IconButton as MuiIconButton,
  Toolbar,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC, ReactNode, useState } from 'react';

type MenuItem = {
  label: string;
  href?: string;
  children?: MenuItem[];
  disabled?: boolean;
  onClick?: () => void;
};

type NavbarProps = {
  cta: ReactNode;
  navItems: MenuItem[];
};
export const Navbar: FC<NavbarProps> = ({ cta, navItems }) => {
  const currentPath = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const { breakpoints } = useTheme();
  const matches = useMediaQuery(breakpoints.up('xl'));

  return (
    <MuiAppBar
      className="border-b border-gray-200 z-[1201]"
      color="transparent"
      elevation={24}
      position="sticky"
      sx={{ backgroundColor: 'white' }}
    >
      <Toolbar disableGutters>
        <Container maxWidth="xl">
          <Grid mx="auto" xs={12} container>
            <Grid
              alignItems="center"
              display="flex"
              flex={1}
              justifyContent="flex-start"
              item
            >
              {/* <Link className="hidden xl:block" href="/"> */}
              <Link href="/">
                <Image alt="logo" height={46} src="/logo.svg" width={150} />
              </Link>
              {/* <div className="block xl:hidden">{cta}</div> */}
              {matches ? (
                <>
                  <Box display="flex" flex={1}>
                    {navItems.map((item) => (
                      <NavbarMenu
                        currentPath={currentPath}
                        item={item}
                        key={item.label}
                      />
                    ))}
                  </Box>
                  {cta}
                </>
              ) : (
                <Box display="flex" flex={1} justifyContent="flex-end">
                  <MuiIconButton
                    aria-label="menu"
                    className="block xl:none"
                    color="inherit"
                    edge="start"
                    size="large"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    {isOpen ? <CloseIcon /> : <MenuIcon />}
                  </MuiIconButton>
                  <Drawer
                    anchor="top"
                    open={isOpen}
                    PaperProps={{ sx: { top: 64 } }}
                    slotProps={{
                      root: { style: { top: 64 } },
                      backdrop: { sx: { top: 64 } },
                    }}
                    onClose={() => setIsOpen(false)}
                  >
                    <List>
                      {navItems.map((item, index) => (
                        <NavbarDrawer item={item} key={index} />
                      ))}
                    </List>
                  </Drawer>
                </Box>
              )}
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </MuiAppBar>
  );
};
