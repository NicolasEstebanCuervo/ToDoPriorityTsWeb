import React from 'react';
import TareaFormulario from './Componentes/TareaFormulario';
import { action } from '@storybook/addon-actions';

export default {
  title: "TareaFormulario",
  component: TareaFormulario,
  args: {
  }
};

const Template = (args) => <TareaFormulario 
    cambioTituloFnc={action('El valor del titulo esta siendo alterado')}
    cambioDescripcionFnc={action('El valor de la descripcion esta siendo alterado')}
    cambioTimeFnc={action('El valor del time esta siendo alterado')}
    ponerHiddenFnc={action('El formulario se cerro')}
    {...args} 
  />;

export const Default = Template.bind({});
Default.args = {};

export const HoverActive = Template.bind({});
HoverActive.args = {
  className: 'hover',
};