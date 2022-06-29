import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { PageCaption } from '../../../components';

export default {
  title: 'Components/PageCaption',
  component: PageCaption,
} as ComponentMeta<typeof PageCaption>

const Template: ComponentStory<typeof PageCaption> = (args) => (
  <PageCaption {...args} />
)

export const Default = Template.bind({})
Default.args = {
  title: 'Profile Page',
}