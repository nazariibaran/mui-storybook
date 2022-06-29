import * as React from 'react';
import TextFieldMUI from '@mui/material/TextField';

import { TextFieldProps } from './TextField.props';

/**
 * Renders TextField Component
 */
const TextField: React.FC<TextFieldProps> = (props) => {
  return (
    <TextFieldMUI {...props} />
  );
};

export { TextField };
