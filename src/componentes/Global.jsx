import React from 'react';
import Hidden from './Hidden';
import Bienvenida from '../stories/Bienvenida';
import ListaDeTareas from './ListaDeTareas';
import { useTareaContext } from './FunctionContext';

const Global = () => {
  const { bienvenida } = useTareaContext();
  return (
    <>
      <div>
        <ListaDeTareas />
        <Hidden />
      </div>
      <Bienvenida hidden={bienvenida} textoBienvenida='No hay tareas por ahora :)'/>
    </>
  );
};

export default Global;