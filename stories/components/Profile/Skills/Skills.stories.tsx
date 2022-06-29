import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Skills } from '../../../../components';

export default {
  title: 'Components/Profile/Skills',
  component: Skills,
} as ComponentMeta<typeof Skills>

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'NodeJS',
  'Express',
  'MongoDB',
  'Mongoose',
  'NextJS',
  'Storybook',
  'MaterialUI',
]

const Template: ComponentStory<typeof Skills> = (args) => (
  <Skills {...args} />
)

export const Default = Template.bind({})
Default.args = {
  skillList: skills,
}

export const Empty = Template.bind({})
Empty.args = {}
