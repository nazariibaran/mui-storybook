import * as React from 'react';

import { ContactInfoProps } from './Contact-Info.props';
import { Section } from '../../Section';
import { InfoBoard } from '../../Info-Board';
import { Container } from '../../Container';

/**
 * Renders ContactInfo
 */
const ContactInfo: React.FC<ContactInfoProps> = (props) => {
  const { contactInfo } = props || {};

  return (
    <Container {...props}>
      <Section title='Contact Information'>
        <InfoBoard data={contactInfo} />
      </Section>
    </Container>
  );
};

export { ContactInfo };
