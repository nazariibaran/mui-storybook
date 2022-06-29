import * as React from 'react';
import TypographyMUI from '@mui/material/Typography';
import { TypographyProps } from './Typography.props';

/**
 * Renders Typography Component
 */
const Typography: React.FC<TypographyProps> = (props) => {
  const { label } = props || {}

  return (
    <TypographyMUI {...props}>
      {label}
    </TypographyMUI>
  );
};

export { Typography };
