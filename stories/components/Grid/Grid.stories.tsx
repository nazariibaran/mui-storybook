import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Grid } from '../../../components';

export default {
  title: 'Components/Grid',
  component: Grid,
} as ComponentMeta<typeof Grid>

const fullChild = [
  <Grid item xs={12} key="1" style={{ background: '#28a745' }}>GRID-12</Grid>
]

const halfChild = [
  <Grid item xs={6} key="1" style={{ background: '#28a745' }}>GRID-6</Grid>,
]

const oneThirdChild = [
  <Grid item xs={4} key="1" style={{ background: '#28a745' }}>GRID-4</Grid>,
]

const Template: ComponentStory<typeof Grid> = (args) => (
  <Grid {...args} />
)

export const Full = Template.bind({})
Full.args = {
  children: fullChild
}

export const HalfChild = Template.bind({})
HalfChild.args = {
  container: true,
  children: halfChild
}

export const OneThird = Template.bind({})
OneThird.args = {
  container: true,
  children: oneThirdChild
}
