import * as React from 'react';

import { SectionProps } from './Section.props';
import { Typography } from '../Typography';
import { Stack } from '../Stack';
import { Divider } from '../Divider';
import { Container } from '../Container';

/**
 * Renders Section
 */
const Section: React.FC<SectionProps> = (props) => {
  const { title, children } = props || {};

  return (
    <Container disableGutters>
      <Stack sx={{
        pb: 2
      }}>
        <Typography color={'rgba(0, 0, 0, 0.4)'} variant='h6' label={title} />
        <Divider />
      </Stack>
      {children}
    </Container>
  );
};

export { Section };
