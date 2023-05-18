import React from 'react';
import Hidden from './Hidden';
import Bienvenida from './Bienvenida';
import ListaDeTareas from './ListaDeTareas';

const Global = () => {
  return (
    <>
      <div>
        <ListaDeTareas />
        <Hidden />
      </div>
      <Bienvenida />
    </>
  );
};

export default Global;