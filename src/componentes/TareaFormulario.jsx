import React, { useState } from 'react';
import '../Hojas_De_Estilo/TareaFormulario.css';
import { useTareaContext } from './FunctionContext';

function TareaFormulario() {
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
  } = useTareaContext();

  const [errors, setErrors] = useState({
    titulo: null,
    descripcion: null,
    hora: null
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!titulo) {
      newErrors.titulo = "Por favor, ingrese un título";
    }
    if (!descripcion) {
      newErrors.descripcion = "Por favor, ingrese una descripción";
    }
    if (!hora) {
      newErrors.hora = "Por favor, ingrese una hora";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({
      titulo: null,
      descripcion: null,
      hora: null
    });

    manejarEnvioFnc();
    ponerHiddenFnc();
  };

  return (
    <div className='contenedor_formulario' hidden={hidden}>
      <form className='tarea_formulario' onSubmit={handleSubmit} noValidate>
        <h1>To-Do List</h1>
        <div className='contenedor_tareas'>
          <div className='contenedor_input_individual'>
            <input
              className='input'
              type='text'
              placeholder='Escribe el título de la tarea'
              name='titulo'
              value={titulo}
              onChange={cambioTituloFnc}
            />
            {errors.titulo && <div className="error_message">{errors.titulo}</div>}
          </div>
          <div className='contenedor_input_individual'>
            <input
              className='input'
              type='text'
              placeholder='Escribe la descripción de la tarea'
              name='descripcion'
              value={descripcion}
              onChange={cambioDescripcionFnc}
            />
            {errors.descripcion && <div className="error_message">{errors.descripcion}</div>}
          </div>
          <div className='contenedor_input_individual'>
            <input
              className='input'
              type='time'
              placeholder='Selecciona la hora de la tarea'
              name='hora'
              value={hora}
              onChange={cambioTimeFnc}
            />
            {errors.hora && <div className="error_message">{errors.hora}</div>}
          </div>
        </div>
        <button type="submit" className='boton_enviar'>
          Agregar tarea
        </button>

        <i className="icono_salir_formulario bi bi-x" onClick={ponerHiddenFnc}></i>
      </form>
    </div>
  );
}

export default TareaFormulario;
