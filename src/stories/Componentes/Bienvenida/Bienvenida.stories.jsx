
import React from 'react';
import Bienvenida from './Index';

export default {
  title: 'Contenedor',
  component: Bienvenida,
  args: {
    textoBienvenida: 'No hay tareas por ahora :)'
  }
}

const Template = (args) => <Bienvenida {...args} />;

export const Default = Template.bind({});