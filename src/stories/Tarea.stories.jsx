import React from 'react';
import Tarea from './Componentes/Tarea';

export default {
  title: 'Tarea',
  component: Tarea,
  args: {
    titulo: 'Estudiar',
    descripcion: 'Estudiar Github',
    time: 'prioridad_alta',
    completada: false,
  }
};

const Template = (args) => <Tarea {...args} />;

export const HoverActive = Template.bind({});
HoverActive.args = {
  className: 'hover'
};

export const Prioridad_Alta = Template.bind({});
Prioridad_Alta.args = {
  time: 'prioridad_alta',
};

export const Prioridad_Media = Template.bind({});
Prioridad_Media.args = {
  time: 'prioridad_media',
};

export const Prioridad_Baja = Template.bind({});
Prioridad_Baja.args = {
  time: 'prioridad_baja',
};

export const Prioridad_Alta_Completada = Template.bind({});
Prioridad_Alta.args = {
  completada: true,
};

export const Prioridad_Media_Completada = Template.bind({});
Prioridad_Media.args = {
  completada: true,
};

export const Prioridad_Baja_Completada = Template.bind({});
Prioridad_Baja.args = {
  completada: true,
};

