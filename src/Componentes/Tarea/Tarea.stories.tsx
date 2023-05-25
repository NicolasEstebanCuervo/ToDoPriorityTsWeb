import { HTMLAttributes } from 'react';
import Tarea from './Index';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Tarea',
  component: Tarea,
};

interface ContenedorTareaProps {
  completada?: boolean;
  time?: string;
  prioridad?: string;
}

const Template = (args: ContenedorTareaProps) => (
  <Tarea
    completada={false}
    id="1020"
    titulo='Estudiar'
    descripcion='Estudiar Github'
    completarTareaFnc={(id) => {action('Se marco como completada la tarea')(id);}}
    eliminarTareaFnc={(id) => {action('Se marco como completada la tarea')(id);}}
    {...args}
  />
);

export const Prioridad_Alta = () => <Template time="prioridad_alta"/>

export const Prioridad_Media = () => <Template time="prioridad_media"/>

export const Prioridad_Baja = () => <Template time="prioridad_baja"/>

export const Prioridad_Alta_Completada = () => <Template time='prioridad_alta' completada={true}/>

export const Prioridad_Media_Completada = () => <Template time='prioridad_media' completada={true}/>

export const Prioridad_Baja_Completada = () => <Template time='prioridad_baja' completada={true}/>