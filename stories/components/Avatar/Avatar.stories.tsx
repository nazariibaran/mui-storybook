import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Avatar } from '../../../components'

export default {
  title: 'Components/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => (
  <Avatar {...args} />
)

export const Default = Template.bind({})
Default.args = {}

export const LetterAvatar = Template.bind({})
LetterAvatar.args = {
  letterAvatar: 'NB',
}

export const LetterAvatarWithColor = Template.bind({})
LetterAvatarWithColor.args = {
  letterAvatar: 'NB',
  sx: {
    backgroundColor: 'green',
  }
}

export const ImageAvatar = Template.bind({})
ImageAvatar.args = {
  src: 'https://material-ui.com/static/images/avatar/1.jpg',
}