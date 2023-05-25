import { ChangeEvent, ReactNode } from 'react';
import FormularioComponent from './Index';
import { action } from '@storybook/addon-actions';
import { contextoStory } from '../../Contextos/ContextoStory';

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <contextoStory.Provider
      value={{
        manejarEnvioFnc: () => {},
        descripcion: '',
        cambioTimeFnc: () => {},
        titulo: '',
        hora: '',
        cambioDescripcionFnc: () => {},
        cambioTituloFnc: () => {},
        ponerHiddenFnc: () => {},
        hidden: false,
      }}
    >
      {children}
    </contextoStory.Provider>
  );
};

export default {
  title: 'FormularioComponent',
  component: FormularioComponent,
  decorators: [(Story: any) => <Provider>{Story()}</Provider>],
};

const Template = (args: any) => {
  return (
    <FormularioComponent
      cambioTimeFnc={action('El valor del tiempo limite de la tarea esta siendo actualizado.')}
      cambioDescripcionFnc={action('El valor de la descripcion esta siendo actualizado.')}
      cambioTituloFnc={action('El valor del titulo esta siendo actualizado.')}
      ponerHiddenFnc={action('Se cerro el formulario')}
      {...args}
    />
  );
};

export const Default = Template.bind({});

export const HoverActive = () => <Template className="hover" />;
