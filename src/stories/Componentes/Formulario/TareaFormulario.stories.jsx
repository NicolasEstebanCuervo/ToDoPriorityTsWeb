import React from 'react';
import FormularioComponent from './Index';
import { action } from '@storybook/addon-actions';

import TareaContext from '../Contextos/FunctionContext'

const Provider = ({ children }) => {
  return (
    <TareaContext.Provider
      value={{
        manejarEnvioFnc: '',
        descripcion: '',
        cambioTimeFnc: () => {},
        titulo: '',
        hora: '',
        cambioDescripcionFnc:() => {},
        cambioTituloFnc: () => {},
        ponerHiddenFnc: () => {},
        hidden: '',
      }}
    >
      {children}
    </TareaContext.Provider>
  );
};

export default {
  title: 'FormularioComponent',
  component: FormularioComponent,
  decorators: [(Story) => <Provider>{Story()}</Provider>],
};

const Template = (args) => {
  return <FormularioComponent 
  cambioTimeFnc = {action('El valor del tiempo limite de la tarea esta siendo actualizado.')}
  cambioDescripcionFnc={action('El valor de la descripcion esta siendo actualizado.')}
  cambioTituloFnc={action('El valor del titulo esta siendo actualizado.')}
  ponerHiddenFnc={action('Se cerro el formulario')}
  {...args} />;
};

export const Default = Template.bind({});
Default.decorators = [
  (Story) => <Provider>{Story()}</Provider>,
];

export const HoverActive = Template.bind({});
HoverActive.args = {
  className: 'hover',
};
