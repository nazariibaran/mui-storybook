import * as React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Stack } from '../Stack';
import { Typography } from '../Typography';

import { LocationProps } from './Location.props';

/**
 * Renders Location Component
 */
const Location: React.FC<LocationProps> = (props) => {
  const { label } = props || {};

  return (
    <Stack direction='row' alignItems='center' {...props}>
      <LocationOnIcon color='primary' />
      <Typography variant='body1' label={label} />
    </Stack>
  );
};

export { Location };
