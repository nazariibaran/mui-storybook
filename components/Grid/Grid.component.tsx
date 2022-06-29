import * as React from 'react';
import { Grid as GridMUI } from '@mui/material';

import { GridProps } from './Grid.props';

/**
 * Renders Grid
 */
const Grid: React.FC<GridProps> = (props) => {
  const { children } = props || {};

  return (
    <GridMUI {...props}>
      {children}
    </GridMUI>
  );
};

export { Grid };
