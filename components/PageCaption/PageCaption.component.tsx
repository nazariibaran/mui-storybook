import * as React from 'react';
import AppsIcon from '@mui/icons-material/Apps';

import { PageCaptionProps } from './PageCaption.props';
import { Typography } from '../Typography';
import { Stack } from '../Stack';

/**
 * Renders PageCaption
 */
const PageCaption: React.FC<PageCaptionProps> = (props) => {
  const { title } = props || {};

  return (
    <Stack direction='row' alignItems='center' {...props}>
      <AppsIcon fontSize='large' />
      <Typography fontSize='large' label={title} />
    </Stack>
  );
};

export { PageCaption };
