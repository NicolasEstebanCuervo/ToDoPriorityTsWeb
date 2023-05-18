import React from 'react';
import '../Hojas_De_Estilo/Hidden.css';
import { useTareaContext } from './FunctionContext';

const Hidden = () => {
  const { quitarHiddenFnc } = useTareaContext();
  return (
    <div>
      <i className="icono_hidden bi bi-plus" onClick={quitarHiddenFnc}></i>
    </div>
  );
};

export default Hidden;
