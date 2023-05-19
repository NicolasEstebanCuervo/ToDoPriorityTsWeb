import React from 'react';
import TareaFormulario from './Componentes/TareaFormulario';
<<<<<<< Updated upstream
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
=======
import TareaContext from "./Componentes/FunctionContext"

const Provider = ({
  sRDateRange,
  children,
}) => {
  return (
      <TareaContext.Provider
          value={{
              manejarEnvioFnc:0,
              descripcion:0,
              cambioTimeFnc:0,
              titulo:0,
              hora:0,
              cambioDescripcionFnc:0,
              cambioTituloFnc:0,
              ponerHiddenFnc:0,
              hidden:0,
          }}>
          {children}
      </TareaContext.Provider>
  );
};

export default {
  title: 'TareaFormulario',
  component: TareaFormulario,
  args: {},
  decorators: [(Story) => <Provider>{Story()}</Provider>],
};

const Template = (args) => {
  return <TareaFormulario {...args} />;
};
>>>>>>> Stashed changes

export const Default = Template.bind({});
Default.args = {};

<<<<<<< Updated upstream
export const HoverActive = Template.bind({});
HoverActive.args = {
  className: 'hover',
};
=======
export const Custom = Template.bind({});
Custom.decorators = [
    (Story) => <Provider>{Story()}</Provider>,
];
>>>>>>> Stashed changes
