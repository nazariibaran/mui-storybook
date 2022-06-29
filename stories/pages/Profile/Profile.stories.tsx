import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Profile from '../../../pages/profile'


export default {
  title: 'Pages/Profile',
  component: Profile,
} as ComponentMeta<typeof Profile>

const Template: ComponentStory<typeof Profile> = (args) => (
  <Profile {...args} />
)

export const Default = Template.bind({})