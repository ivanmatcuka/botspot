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

type ControlledAccordionProps = AccordionProps & { item: MenuItem };
const ControlledAccordion: FC<ControlledAccordionProps> = ({
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

type NavbarDrawerProps = { item: MenuItem };
export const NavbarDrawer: FC<NavbarDrawerProps> = ({ item }) => {
  if (!item.children?.length) {
    return (
      <ListItem key={item.label}>
        <ListItemButton component={Link} href={item.href ?? '/'} disableRipple>
          {item.label}
        </ListItemButton>
      </ListItem>
    );
  }

  return (
    <ControlledAccordion item={item} key={item.label}>
      {item.children.map((child) => (
        <NavbarDrawer item={child} key={child.label} />
      ))}
    </ControlledAccordion>
  );
};
