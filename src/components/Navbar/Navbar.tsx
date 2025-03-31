'use client';

import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Accordion,
  AccordionProps,
  AccordionSummary,
  Box,
  Container,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  AppBar as MuiAppBar,
  IconButton as MuiIconButton,
  Toolbar,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC, ReactNode, useCallback, useMemo, useState } from 'react';

import { Button } from '@/components/Button/Button';
import { Menu } from '@/components/Menu/Menu';

const ControlledAccordion: FC<AccordionProps & { item: MenuItem }> = ({
  item,
  children,
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Accordion expanded={expanded}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon onClick={() => setExpanded(!expanded)} />}
      >
        {item.href ? <Link href={item.href}>{item.label}</Link> : item.label}
      </AccordionSummary>
      {children}
    </Accordion>
  );
};

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

  const renderMenu = useCallback(
    (item: MenuItem) => {
      if (!item.children?.length) {
        return (
          <Button
            className={currentPath === item.href ? 'active' : ''}
            disabled={item.disabled}
            href={item.href ?? '/'}
            key={item.label}
            variant="menuItem"
          >
            {item.label}
          </Button>
        );
      }

      return (
        <Menu
          className={currentPath === item.href ? 'active' : ''}
          href={item.href}
          key={item.label}
          label={item.label}
        >
          {item.children.map((child) => renderMenu(child))}
        </Menu>
      );
    },
    [currentPath],
  );

  const menu = useMemo(
    () => navItems.map((item) => renderMenu(item)),
    [navItems, renderMenu],
  );

  const renderDrawer = useCallback((item: MenuItem) => {
    if (!item.children?.length) {
      return (
        <ListItem key={item.label}>
          <ListItemButton href={item.href ?? '/'} disableRipple>
            {item.label}
          </ListItemButton>
        </ListItem>
      );
    }

    return (
      <ControlledAccordion item={item} key={item.label}>
        {item.children.map((child) => renderDrawer(child))}
      </ControlledAccordion>
    );
  }, []);

  const drawer = useMemo(
    () => navItems.map((item) => renderDrawer(item)),
    [navItems, renderDrawer],
  );

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
              {matches ? (
                <Link href="/">
                  <Image alt="logo" height={46} src="/logo.svg" width={150} />
                </Link>
              ) : (
                cta
              )}
              {matches ? (
                <>
                  <Box display="flex" flex={1}>
                    {menu}
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
                    <List>{drawer}</List>
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
