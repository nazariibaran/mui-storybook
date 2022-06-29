import * as React from 'react';
import { Link } from '../Link';
import { Stack } from '../Stack';

import { NavBarProps } from './NavBar.props';

/**
 * Renders NavBar Component
 */
const NavBar: React.FC<NavBarProps> = (props) => {
  const { links } = props || {};
  const isLinks = links && links.length > 0;

  return (
    <Stack {...props}>
      {isLinks && links.map((link, index) => (
        <Link label={link?.label} key={index} {...link} />
      ))}
    </Stack>
  );
};

export { NavBar };
