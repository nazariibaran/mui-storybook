import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Header } from '../../../components';

export default {
  title: 'Components/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const navLinks = [
  {
    label: 'Home',
    href: '#'
  },
  {
    label: 'About',
    href: '#'
  },
  {
    label: 'Contact',
    href: '#'
  }
]

const Template: ComponentStory<typeof Header> = (args) => (
  <Header {...args} />
);

export const Default = Template.bind({});
Default.args = {}

export const WithNavLinks = Template.bind({});
WithNavLinks.args = {
  navLinks
}

export const WithPageTitle = Template.bind({});
WithPageTitle.args = {
  pageTitle: 'Profile Page'
}

export const Full = Template.bind({});
Full.args = {
  pageTitle: 'Profile Page',
  navLinks
}
