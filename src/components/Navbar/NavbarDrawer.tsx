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
  children?: MenuItem[];
  disabled?: boolean;
  href?: string;
  label: string;
  onClick?: () => void;
};

type ControlledAccordionProps = {
  item: MenuItem;
  onOpen: () => void;
} & AccordionProps;
const ControlledAccordion: FC<ControlledAccordionProps> = ({
  children,
  item,
  onOpen,
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Accordion expanded={expanded}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon onClick={() => setExpanded(!expanded)} />}
      >
        {item.href ? (
          <Link href={item.href} onClick={onOpen}>
            {item.label}
          </Link>
        ) : (
          item.label
        )}
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
        <ListItemButton
          component={Link}
          href={item.href ?? '/'}
          prefetch={false}
          disableRipple
        >
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
