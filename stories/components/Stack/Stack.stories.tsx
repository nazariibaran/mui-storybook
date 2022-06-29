import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Stack } from '../../../components'

export default {
  title: 'Components/Stack',
  component: Stack,
} as ComponentMeta<typeof Stack>

const children = [
  <div style={{ background: '#007bff' }} key="1">Child 1</div>,
  <div style={{ background: '#6c757d' }} key="2">Child 2</div>,
  <div style={{ background: '#28a745' }} key="3">Child 3</div>,
  <div style={{ background: '#dc3545' }} key="4">Child 4</div>,
  <div style={{ background: '#ffc107' }} key="5">Child 5</div>,
]

const Template: ComponentStory<typeof Stack> = (args) => (
  <Stack {...args} />
)

export const Column = Template.bind({})
Column.args = {
  children
}

export const Row = Template.bind({})
Row.args = {
  direction: 'row',
  children
}
