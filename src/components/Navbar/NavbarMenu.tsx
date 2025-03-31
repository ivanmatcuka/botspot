'use client';

import Link from 'next/link';
import { FC } from 'react';

import { Button } from '@/components/Button';
import { Menu } from '@/components/Menu/Menu';

type MenuItem = {
  label: string;
  href?: string;
  children?: MenuItem[];
  disabled?: boolean;
  onClick?: () => void;
};

type NavbarMenuProps = { item: MenuItem; currentPath: string };

export const NavbarMenu: FC<NavbarMenuProps> = ({ item, currentPath }) => {
  if (!item.children?.length) {
    return (
      <Button
        className={currentPath === item.href ? 'active' : ''}
        component={Link}
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
