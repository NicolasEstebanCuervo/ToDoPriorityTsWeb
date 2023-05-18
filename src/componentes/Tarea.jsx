import React from 'react';
import '../Hojas_De_Estilo/Tarea.css';

function Tarea({ id, descripcion, time, titulo, completada, completarTareaFnc, eliminarTareaFnc }) {
  return (
    <div className={`tarea_contenedor ${time} ${completada ? `completada_${time}` : ''}`}>
      <div className='tarea_texto'>
        <div className='contenedor_titulo'>
          <h1 className='titulo'>{titulo}</h1>
          <div className='contenedor_iconos'>
            <i className="icono_check bi bi-check" onClick={() => completarTareaFnc(id)}></i>
            <i className="icono_salir bi bi-x" onClick={() => eliminarTareaFnc(id)}></i>
          </div>
        </div>
        <div className='contenedor_descripcion'>
          <h1 className='descripcion'>{descripcion}</h1>
        </div>
      </div>
    </div>
  );
}

export default Tarea;
