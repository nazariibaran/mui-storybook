import * as React from 'react';
import { Stack as StackMUI } from '@mui/material';

import { StackProps } from './Stack.props';

/**
 * Renders Stack
 */
const Stack: React.FC<StackProps> = (props) => {
  const { children } = props || {};

  return (
    <StackMUI {...props}>
      {children}
    </StackMUI>
  );
};

export { Stack };
