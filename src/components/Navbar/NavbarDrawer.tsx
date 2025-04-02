'use client';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionProps,
  AccordionSummary,
  ListItem,
  ListItemButton,
} from '@mui/material';
import Link from 'next/link';
import { FC, useState } from 'react';

type MenuItem = {
  label: string;
  href?: string;
  children?: MenuItem[];
  disabled?: boolean;
  onClick?: () => void;
};

type ControlledAccordionProps = AccordionProps & {
  item: MenuItem;
  onOpen: () => void;
};
const ControlledAccordion: FC<ControlledAccordionProps> = ({
  item,
  children,
  onOpen,
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Accordion expanded={expanded}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon onClick={() => setExpanded(!expanded)} />}
        onClick={onOpen}
      >
        {item.href ? <Link href={item.href}>{item.label}</Link> : item.label}
      </AccordionSummary>
      {children}
    </Accordion>
  );
};

type NavbarDrawerProps = { item: MenuItem; onOpen: () => void };
export const NavbarDrawer: FC<NavbarDrawerProps> = ({ item, onOpen }) => {
  if (!item.children?.length) {
    return (
      <ListItem key={item.label} onClick={onOpen}>
        <ListItemButton component={Link} href={item.href ?? '/'} disableRipple>
          {item.label}
        </ListItemButton>
      </ListItem>
    );
  }

  return (
    <ControlledAccordion item={item} key={item.label} onOpen={onOpen}>
      {item.children.map((child) => (
        <NavbarDrawer item={child} key={child.label} onOpen={onOpen} />
      ))}
    </ControlledAccordion>
  );
};
