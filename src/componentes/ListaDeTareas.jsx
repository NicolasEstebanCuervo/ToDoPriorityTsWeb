import React from 'react';
import TareaFormulario from './TareaFormulario';
import Tarea from './Tarea';
import '../Hojas_De_Estilo/ListaDeTareas.css';
import { useTareaContext } from './FunctionContext';

function ListaDeTareas() {
  const { tareas, eliminarTareaFnc, completarTareaFnc, hidden } = useTareaContext();

  return (
    <div>
      <TareaFormulario />
      <div className="tareas_lista_contenedor" hidden={!hidden}>
        {tareas.map((tarea) => (
          <Tarea
            key={tarea.id}
            id={tarea.id}
            descripcion={tarea.descripcion}
            titulo={tarea.titulo}
            time={tarea.time}
            completada={tarea.completada}
            completarTareaFnc={completarTareaFnc}
            eliminarTareaFnc={eliminarTareaFnc}
          />
        ))}
      </div>
    </div>
  );
}

export default ListaDeTareas;
