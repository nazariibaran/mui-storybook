import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { faker } from '@faker-js/faker';
import { InfoBoard } from '../../../components';

export default {
  title: 'Components/InfoBoard',
  component: InfoBoard,
} as ComponentMeta<typeof InfoBoard>

const Template: ComponentStory<typeof InfoBoard> = (args) => (
  <InfoBoard {...args} />
)

export const Default = Template.bind({})
Default.args = {
  data: [
    {
      firstName: faker.name.firstName(),
    },
    {
      lastName: faker.name.lastName(),
    },
    {
      email: faker.internet.email(),
    }
  ]
}

export const Empty = Template.bind({})
Empty.args = {
  data: [],
}
