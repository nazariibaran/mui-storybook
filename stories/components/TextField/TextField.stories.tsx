import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { TextField } from '../../../components'


export default {
  title: 'Components/TextField',
  component: TextField
} as ComponentMeta<typeof TextField>

const Template: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  label: "Primary"
}

export const ReadOnly = Template.bind({})
ReadOnly.args = {
  label: "Read Only",
  inputProps: {
    readOnly: true
  },
  value: "29/06/2022"
}

export const Number = Template.bind({})
Number.args = {
  label: "Number",
  type: "number"
}

export const Password = Template.bind({})
Password.args = {
  label: "Password",
  type: "password"
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: "Disabled",
  disabled: true
}
