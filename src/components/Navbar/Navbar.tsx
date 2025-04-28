'use client';

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
} from '@botspot/ui';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC, ReactNode, useState } from 'react';

import { NavbarDrawer } from './NavbarDrawer';
import { NavbarMenu } from './NavbarMenu';

// Legacy?
const DEFAULT_LOGO_SRC = '/logo.svg';

type MenuItem = {
  children?: MenuItem[];
  disabled?: boolean;
  href?: string;
  label: string;
  onClick?: () => void;
};

type NavbarProps = {
  cta: ReactNode;
  logoSrc?: string;
  navItems: MenuItem[];
};
export const Navbar: FC<NavbarProps> = ({
  cta,
  logoSrc = DEFAULT_LOGO_SRC,
  navItems,
}) => {
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
              <Link href="/">
                <Image
                  alt="logo"
                  height={46}
                  loading="lazy"
                  src={logoSrc}
                  width={150}
                />
              </Link>
              {matches ? (
                <>
                  <Box display="flex" flex={1}>
                    {navItems.map((item, index) => (
                      <NavbarMenu
                        currentPath={currentPath}
                        item={item}
                        key={index}
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
                    onClick={() => setIsOpen(!isOpen)}
                    size="large"
                  >
                    {isOpen ? <CloseIcon /> : <MenuIcon />}
                  </MuiIconButton>
                  <Drawer
                    slotProps={{
                      backdrop: { sx: { top: 64 } },
                      root: { style: { top: 64 } },
                    }}
                    anchor="top"
                    onClose={() => setIsOpen(false)}
                    open={isOpen}
                    PaperProps={{ sx: { top: 64 } }}
                  >
                    <List>
                      {navItems.map((item, index) => (
                        <NavbarDrawer
                          item={item}
                          key={index}
                          onOpen={() => setIsOpen(false)}
                        />
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
