import React, { createContext } from 'react';

interface ContextoStoryProps {
  manejarEnvioFnc: () => void;
  descripcion: string;
  cambioTimeFnc: (e: React.ChangeEvent<HTMLInputElement>) => void;
  titulo: string;
  hora: string;
  cambioDescripcionFnc: (e: React.ChangeEvent<HTMLInputElement>) => void;
  cambioTituloFnc: (e: React.ChangeEvent<HTMLInputElement>) => void;
  ponerHiddenFnc: () => void;
  hidden: boolean;
}

export const contextoStory = createContext<ContextoStoryProps>({
  manejarEnvioFnc: () => {},
  descripcion: '',
  cambioTimeFnc: () => {},
  titulo: '',
  hora: '',
  cambioDescripcionFnc: () => {},
  cambioTituloFnc: () => {},
  ponerHiddenFnc: () => {},
  hidden: false,
})