import * as React from 'react';
import { capitalize } from '../../utils';
import { Stack } from '../Stack';
import { TextField } from '../TextField';
import { Typography } from '../Typography';

import { InfoBoardProps } from './Info-Board.props';

/**
 * Renders InfoBoard
 */
const InfoBoard: React.FC<InfoBoardProps> = (props) => {
  const { data } = props || {};

  return (
    <Stack spacing={2} {...props}>
      {data?.map((item, index) => {
        const key = Object.keys(item)
        const value = Object.values(item)

        return (
          <Stack direction='row' alignItems='center' justifyContent='space-between' key={index}>
            <Typography
              variant='body1'
              label={capitalize(key[0])}
            />
            <TextField inputProps={{
              readOnly: true,
            }}
              size='small'
              value={value}
            />
          </Stack>
        )
      })}
    </Stack>
  );
};

export { InfoBoard };
