import React from 'react';
import { useTareaContext } from './FunctionContext';
import '../Hojas_De_Estilo/Bienvenida.css';

const Bienvenida = () => {
  const { bienvenida } = useTareaContext();

  return (
    <div className="contenedor_bienvenida" hidden={bienvenida}>
      <h1>No hay tareas por ahora :)</h1>
    </div>
  );
};

export default Bienvenida;
