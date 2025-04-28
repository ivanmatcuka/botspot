import { Menu } from '@botspot/ui';
import Link from 'next/link';
import { FC } from 'react';

import { NextButton } from '../NextButton';

type MenuItem = {
  children?: MenuItem[];
  disabled?: boolean;
  href?: string;
  label: string;
  onClick?: () => void;
};

type NavbarMenuProps = {
  currentPath: string;
  hasParent?: boolean;
  item: MenuItem;
};
export const NavbarMenu: FC<NavbarMenuProps> = ({
  currentPath,
  hasParent = false,
  item,
}) => {
  if (!item.children?.length) {
    // @TODO: secure
    const isActive = currentPath + '/' === item.href;
    const roundedClass = hasParent ? '!rounded-none' : '';
    const activeClass = isActive ? 'active' : '';

    return (
      <NextButton
        className={`${activeClass} ${roundedClass}`}
        disabled={item.disabled}
        href={item.href ?? '/'}
        variant="menuItem"
      >
        {item.label}
      </NextButton>
    );
  }

  return (
    <Link href={item.href || '#'}>
      <Menu
        className={currentPath === item.href ? 'active' : ''}
        label={item.label}
      >
        {item.children.map((child, index) => (
          <NavbarMenu
            currentPath={currentPath}
            hasParent={true}
            item={child}
            key={index}
          />
        ))}
      </Menu>
    </Link>
  );
};
