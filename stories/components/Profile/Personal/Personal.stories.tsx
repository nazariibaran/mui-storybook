import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Personal } from '../../../../components';

export default {
  title: 'Components/Profile/Personal',
  component: Personal,
} as ComponentMeta<typeof Personal>

const personalInfo = {
  firstName: 'Nazarii',
  lastName: 'Baran',
  location: 'Lviv, Ukraine',
  position: 'Frontend Developer',
}

const Template: ComponentStory<typeof Personal> = (args) => (
  <Personal {...args} />
)

export const Default = Template.bind({})
Default.args = {
  personalInfo
}

export const Empty = Template.bind({})
Empty.args = {}
