
import React from 'react';
import { storiesOf } from '@storybook/react';

import Bienvenida from './Bienvenida';

export default {
  title: "Componentes/Contenedor",
  component: Bienvenida,
  args: {
    textoBienvenida: "No hay tareas por ahora :)"
  }
}

const Template = (args) => <Bienvenida {...args} />;

export const Default = Template.bind({});