import React from 'react';
import TareaFormulario from './Componentes/TareaFormulario';

export default {
  title: "TareaFormulario",
  component: TareaFormulario,
};

const Template = (args) => <TareaFormulario {...args} />;

export const Default = Template.bind({});
Default.args = {};

