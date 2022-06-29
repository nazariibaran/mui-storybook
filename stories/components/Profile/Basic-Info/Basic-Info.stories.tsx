import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BasicInfo } from '../../../../components';

export default {
  title: 'Components/Profile/BasicInfo',
  component: BasicInfo,
} as ComponentMeta<typeof BasicInfo>

const basicInfo = [
  { birthday: '31.07.1999' },
  { gender: 'Male' },
]

const Template: ComponentStory<typeof BasicInfo> = (args) => (
  <BasicInfo {...args} />
)

export const Default = Template.bind({})
Default.args = {
  basicInfo
}

export const Empty = Template.bind({})
Empty.args = {}
