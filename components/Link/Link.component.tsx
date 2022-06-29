import * as React from 'react';
import { Link as LinkMUI } from '@mui/material';

import { LinkProps } from './Link.props';

/**
 * Renders Link Component
 */
const Link: React.FC<LinkProps> = (props) => {
  const { label, children } = props || {};

  return (
    <LinkMUI {...props}>
      {label || children}
    </LinkMUI>
  );
};

export { Link };
