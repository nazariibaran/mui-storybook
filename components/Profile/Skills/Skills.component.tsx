import * as React from 'react';
import { Container } from '../../Container';
import { Section } from '../../Section';
import { Stack } from '../../Stack';
import { Typography } from '../../Typography';

import { SkillsProps } from './Skills.props';

/**
 * Renders Skills
 */
const Skills: React.FC<SkillsProps> = (props) => {
  const { skillList } = props || {};

  return (
    <Container sx={{
      mt: 2
    }}>
      <Section title='Skills'>
        <Stack spacing={0.5}>
          {skillList?.map((skill, index) => (
            <Typography variant='caption' key={index} label={skill} />
          ))}
        </Stack>
      </Section>
    </Container>
  );
};

export { Skills };
