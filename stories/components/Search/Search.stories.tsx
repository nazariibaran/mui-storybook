import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Search } from '../../../components'

export default {
  title: 'Components/Search',
  component: Search,
} as ComponentMeta<typeof Search>

const Template: ComponentStory<typeof Search> = (args) => (
  <Search {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}