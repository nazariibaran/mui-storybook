import * as React from 'react';
import AvatarMUI from '@mui/material/Avatar';

import { AvatarProps } from './Avatar.props';

/**
 * Renders Avatar
 */
const Avatar: React.FC<AvatarProps> = (props) => {
  const { letterAvatar } = props || {};

  return (
    <AvatarMUI {...props}>
      {letterAvatar}
    </AvatarMUI>
  );
};

export { Avatar };
