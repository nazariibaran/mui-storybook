import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ContactInfo } from '../../../../components';
import { faker } from '@faker-js/faker';

export default {
  title: 'Components/Profile/ContactInfo',
  component: ContactInfo,
} as ComponentMeta<typeof ContactInfo>

const contactInfo = [
  { phone: faker.phone.number() },
  { address: faker.address.streetAddress() },
  { email: faker.internet.email() },
]

const Template: ComponentStory<typeof ContactInfo> = (args) => (
  <ContactInfo {...args} />
)

export const Default = Template.bind({})
Default.args = {
  contactInfo
}

export const Empty = Template.bind({})
Empty.args = {}
