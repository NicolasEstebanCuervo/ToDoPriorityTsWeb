import Tarea from '../Tarea';
import FormularioComponent from '../Formulario';
import { useTareaContext } from '../../Contextos/FunctionContext';
import styled from '@emotion/styled'

function ListaDeTareas() {

  const context = useTareaContext();

  if (!context) {
    return null;
  }

  const {
    manejarEnvioFnc,
    descripcion,
    cambioTimeFnc,
    titulo,
    hora,
    cambioDescripcionFnc,
    cambioTituloFnc,
    ponerHiddenFnc,
    hidden,
    tareas,
    eliminarTareaFnc,
    completarTareaFnc,
  } = context;;
  return (
    <div>
      <FormularioComponent 
        manejarEnvioFnc={manejarEnvioFnc} 
        descripcion={descripcion} 
        cambioTimeFnc={cambioTimeFnc} 
        titulo={titulo}
        hora={hora}
        cambioDescripcionFnc={cambioDescripcionFnc}
        cambioTituloFnc={cambioTituloFnc}
        ponerHiddenFnc={ponerHiddenFnc}
        hidden={hidden}
        />
      <ContenedorListaDeTareas hidden={!hidden}>
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
      </ContenedorListaDeTareas>
    </div>
  );
}

export default ListaDeTareas;

const ContenedorListaDeTareas = styled.div`
  margin: 15px;
`