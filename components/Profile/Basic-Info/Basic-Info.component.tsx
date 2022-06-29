import * as React from 'react';

import { BasicInfoProps } from './Basic-Info.props';
import { Section } from '../../Section';
import { InfoBoard } from '../../Info-Board';
import { Container } from '../../Container';

/**
 * Renders BasicInfo
 */
const BasicInfo: React.FC<BasicInfoProps> = (props) => {
  const { basicInfo } = props || {};

  return (
    <Container {...props}>
      <Section title='Basic Information'>
        <InfoBoard data={basicInfo} />
      </Section>
    </Container>
  );
};

export { BasicInfo };
