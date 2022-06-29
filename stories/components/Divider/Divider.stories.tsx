import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Divider } from '../../../components';

export default {
  title: 'Components/Divider',
  component: Divider,
} as ComponentMeta<typeof Divider>

const Template: ComponentStory<typeof Divider> = (args) => (
  <Divider {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  color: 'primary'
}

export const Secondary = Template.bind({})
Secondary.args = {
  color: 'secondary'
}
