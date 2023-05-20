import React from 'react';
import Hidden from './Index';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Hidden',
  component: Hidden,
};

const Template = (args) => <Hidden {...args} onClick={action('Se abrió el formulario')} />;

export const Default = Template.bind({});
Default.args = {};

export const HoverActive = Template.bind({});
HoverActive.args = {
  className: 'hover',
};