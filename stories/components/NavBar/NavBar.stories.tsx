import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NavBar } from '../../../components';

export default {
  title: 'Components/NavBar',
  component: NavBar,
} as ComponentMeta<typeof NavBar>;

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

const Template: ComponentStory<typeof NavBar> = (args) => (
  <NavBar {...args} />
);

export const Column = Template.bind({});
Column.args = {
  links: navLinks
}

export const Row = Template.bind({});
Row.args = {
  direction: 'row',
  links: navLinks
}
