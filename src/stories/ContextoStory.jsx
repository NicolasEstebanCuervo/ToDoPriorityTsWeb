import React, {createContext} from 'react';


export const contextoStory = createContext({
  values={
    manejarEnvioFnc,
    descripcion,
    cambioTimeFnc,
    titulo,
    hora,
    cambioDescripcionFnc,
    cambioTituloFnc,
    ponerHiddenFnc,
    hidden,
  }
})