import React from 'react';
import Hidden from './Hidden';
import Bienvenida from './Bienvenida';
import ListaDeTareas from './ListaDeTareas';
import { useTareaContext } from './FunctionContext';

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