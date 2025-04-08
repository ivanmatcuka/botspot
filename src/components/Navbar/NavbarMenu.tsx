'use client';

import { Menu } from '@botspot/ui';
import { FC } from 'react';

import { Button } from '../NextButton/NextButton';

type MenuItem = {
  children?: MenuItem[];
  disabled?: boolean;
  href?: string;
  label: string;
  onClick?: () => void;
};

type NavbarMenuProps = { currentPath: string; item: MenuItem };

export const NavbarMenu: FC<NavbarMenuProps> = ({ currentPath, item }) => {
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
      {item.children.map((child) => (
        <NavbarMenu currentPath={currentPath} item={child} key={child.label} />
      ))}
    </Menu>
  );
};
