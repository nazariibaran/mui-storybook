import * as React from 'react';
import { Container } from '../../Container';
import { Location } from '../../Location';
import { Stack } from '../../Stack';
import { Typography } from '../../Typography';

import { PersonalProps } from './Personal.props';

/**
 * Renders Personal
 */
const Personal: React.FC<PersonalProps> = (props) => {
  const {
    personalInfo: {
      firstName = '',
      lastName = '',
      location = '',
      position = '',
    } = {}
  } = props || {};

  const fullName = `${firstName} ${lastName}`;

  return (
    <Container>
      <Stack direction='row' justifyContent='space-between' alignItems='center' >
        <Typography variant='h4' label={fullName} />
        <Location label={location} />
      </Stack>
      <Typography variant='h6' color='primary' label={position} />

    </Container>
  );
};

export { Personal };
