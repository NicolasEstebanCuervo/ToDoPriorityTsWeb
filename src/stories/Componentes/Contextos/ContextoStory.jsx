import React, {createContext} from 'react';

export const contextoStory = createContext({
  manejarEnvioFnc,
  descripcion,
  cambioTimeFnc,
  titulo,
  hora,
  cambioDescripcionFnc,
  cambioTituloFnc,
  ponerHiddenFnc,
  hidden,
})