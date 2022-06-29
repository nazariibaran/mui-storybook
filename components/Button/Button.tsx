import React from 'react';
import { Button as ButtonMUI } from '@mui/material';
import { ButtonProps } from './Button.props';

/**
 * Renders Button Component
 */
const Button: React.FC<ButtonProps> = (props) => {
  const { label } = props || {}

  return (
    <ButtonMUI
      {...props}
    >
      {label}
    </ButtonMUI>
  )
}

export { Button };