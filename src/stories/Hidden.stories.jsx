import React from 'react';
import Hidden from './Componentes/Hidden';

export default {
  title: "Hidden",
  component: Hidden,
};

const Template = (args) => <Hidden {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const HoverActive = Template.bind({});
HoverActive.args = {
  className: 'hover'
};
