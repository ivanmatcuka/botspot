import {
  Accordion,
  AccordionSummary,
  ListItem,
  ListItemButton,
} from '@botspot/ui';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from 'next/link';
import { ComponentProps, FC, useState } from 'react';

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
} & ComponentProps<typeof Accordion>;
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
      <ListItem onClick={onOpen}>
        <ListItemButton component={Link} href={item.href ?? '/'} disableRipple>
          {item.label}
        </ListItemButton>
      </ListItem>
    );
  }

  return (
    <ControlledAccordion item={item} onOpen={onOpen}>
      {item.children.map((child, index) => (
        <NavbarDrawer item={child} key={index} onOpen={onOpen} />
      ))}
    </ControlledAccordion>
  );
};
