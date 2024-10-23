'use client';

import { Button } from '@/app/components/Button/Button';
import { Menu } from '@/app/components/Menu/Menu';

import {
  Box,
  IconButton as MuiIconButton,
  AppBar as MuiAppBar,
  Toolbar,
  useTheme,
  useMediaQuery,
  Drawer,
  ListItem,
  List,
  Accordion,
  AccordionSummary,
  ListItemButton,
  Grid,
  Container,
  AccordionProps,
} from '@mui/material';
import {
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from 'next/image';
import Link from 'next/link';
import useDetectScroll from '@smakss/react-scroll-direction';

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
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState<'relative' | 'sticky'>('relative');

  const { breakpoints } = useTheme();
  const matches = useMediaQuery(breakpoints.up('xl'));

  const { scrollDir } = useDetectScroll();

  const renderMenu = useCallback((item: MenuItem) => {
    if (!item.children) {
      return (
        <Button
          key={item.label}
          variant="menuItem"
          disabled={item.disabled}
          href={item.href ?? '/'}
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
  }, []);

  const menu = useMemo(
    () => navItems.map((item) => renderMenu(item)),
    [navItems, renderMenu],
  );

  const renderDrawer = useCallback((item: MenuItem) => {
    if (!item.children) {
      return (
        <ListItem key={item.label}>
          <ListItemButton disableRipple href={item.href ?? '/'}>
            {item.label}
          </ListItemButton>
        </ListItem>
      );
    }

    return (
      <ControlledAccordion key={item.label} item={item}>
        {item.children.map((child) => renderDrawer(child))}
      </ControlledAccordion>
    );
  }, []);

  const drawer = useMemo(
    () => navItems.map((item) => renderDrawer(item)),
    [navItems, renderDrawer],
  );

  useEffect(() => {
    if (scrollDir === 'up') {
      setPosition('sticky');
    } else {
      setPosition('relative');
    }
  }, [scrollDir]);

  return (
    <MuiAppBar
      position={position}
      className="border-b border-gray-200 z-[1201]"
      color="transparent"
      elevation={24}
      sx={{ backgroundColor: 'white' }}
    >
      <Toolbar disableGutters>
        <Container maxWidth="xl">
          <Grid container xs={12} mx="auto">
            <Grid
              item
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              flex={1}
            >
              <Link href="/">
                <Image width={150} height={46} src="/logo.svg" alt="logo" />
              </Link>
              {matches ? (
                <>
                  <Box display="flex">{menu}</Box>
                  {cta}
                </>
              ) : (
                <Box display="flex" justifyContent="flex-end">
                  <MuiIconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={() => setIsOpen(!isOpen)}
                    className="block xl:none"
                  >
                    {isOpen ? <CloseIcon /> : <MenuIcon />}
                  </MuiIconButton>
                  <Drawer
                    anchor="top"
                    open={isOpen}
                    onClose={() => setIsOpen(false)}
                    PaperProps={{ sx: { top: 64 } }}
                    slotProps={{
                      root: { style: { top: 64 } },
                      backdrop: { sx: { top: 64 } },
                    }}
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
