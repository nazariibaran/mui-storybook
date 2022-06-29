import * as React from 'react';
import { Container as ContainerMUI } from '@mui/material';

import { ContainerProps } from './Container.props';

/**
 * Renders Container Component
 */
const Container: React.FC<ContainerProps> = (props) => {
  return (
    <ContainerMUI {...props} />
  );
};

export { Container };
