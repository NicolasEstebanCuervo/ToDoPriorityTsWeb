import React from 'react';
import Hidden from '../Hidden/Index';
import Bienvenida from '../Bienvenida/Index';
import ListaDeTareas from '../ListaDeTareas/Index';
import { useTareaContext } from '../Contextos/FunctionContext';

const Global = () => {
  const { bienvenida, quitarHiddenFnc } = useTareaContext();
  return (
    <>
      <div>
        <ListaDeTareas />
        <Hidden onClick={quitarHiddenFnc} />
        <Bienvenida hidden={bienvenida} textoBienvenida='No hay tareas por ahora :)'/>
      </div>
    </>
  );
};

export default Global;