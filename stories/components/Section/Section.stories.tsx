import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Section } from '../../../components';

export default {
  title: 'Components/Section',
  component: Section,
} as ComponentMeta<typeof Section>

const Template: ComponentStory<typeof Section> = (args) => (
  <Section {...args} />
)

const children = [
  <div style={{ background: '#007bff' }} key="1">Child 1</div>,
  <div style={{ background: '#6c757d' }} key="2">Child 2</div>,
  <div style={{ background: '#28a745' }} key="3">Child 3</div>,
  <div style={{ background: '#dc3545' }} key="4">Child 4</div>,
  <div style={{ background: '#ffc107' }} key="5">Child 5</div>,
]

export const Default = Template.bind({})
Default.args = {
  title: "Section"
}

export const WithContent = Template.bind({})
WithContent.args = {
  title: "Section",
  children,
}
