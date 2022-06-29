import * as React from 'react';
import { Divider as DividerMUI } from '@mui/material';

import { DividerProps } from './Divider.props';

/**
 * Renders Divider
 */
const Divider: React.FC<DividerProps> = (props) => {
  return (
    <DividerMUI {...props} />
  );
};

export { Divider };
