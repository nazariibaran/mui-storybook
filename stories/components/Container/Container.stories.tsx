import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Container } from '../../../components';

export default {
  title: 'Components/Container',
  component: Container,
} as ComponentMeta<typeof Container>

const children = [
  <div key='1' style={{ background: '#28a745' }}>Container Content</div>
]

const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  children
}

export const NoGutters = Template.bind({})
NoGutters.args = {
  children,
  disableGutters: true
}

export const MaxWidth = Template.bind({})
MaxWidth.args = {
  children,
  maxWidth: 'sm'
}