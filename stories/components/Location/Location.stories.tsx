import React from 'react';
import { faker } from '@faker-js/faker';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Location } from '../../../components';

export default {
  title: 'Components/Location',
  component: Location,
} as ComponentMeta<typeof Location>

const Template: ComponentStory<typeof Location> = (args) => (
  <Location {...args} />
)

export const WithLabel = Template.bind({})
WithLabel.args = {
  label: faker.address.city(),
}

export const NoLabel = Template.bind({})
NoLabel.args = {
  label: '',
}