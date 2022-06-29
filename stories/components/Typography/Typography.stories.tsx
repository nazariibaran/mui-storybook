import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Typography } from '../../../components'

export default {
  title: 'Components/Typography',
  component: Typography,
} as ComponentMeta<typeof Typography>

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} />
)

export const Heading1 = Template.bind({})
Heading1.args = {
  variant: 'h1',
  label: 'Heading 1'
}

export const Heading2 = Template.bind({})
Heading2.args = {
  variant: 'h2',
  label: 'Heading 2'
}

export const Heading3 = Template.bind({})
Heading3.args = {
  variant: 'h3',
  label: 'Heading 3'
}

export const Caption = Template.bind({})
Caption.args = {
  variant: 'caption',
  label: 'Caption'
}