import React, { useState } from 'react';
import { useTareaContext } from './FunctionContext';
import styled from '@emotion/styled'

const ContenedorFormulario = styled.div`
  text-align: center;
  background: #4d82bc;
  position: relative;
  border-radius: 10px;
  padding: 10px 25px;
  box-shadow: 0px 0px 58px -24px rgba(0,0,0,1);
  font-family: Roboto, sans-serif;
  @media (max-width: 300px) {
    padding: 1vh 10vw;
  }
`

const Formulario = styled.form`
  max-width: 430px;
  padding: 5% 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const TituloFormulario = styled.h1`
  font-size: 30px;
  @media (max-width: 500px) {
    font-size: 7vw;
  }
`

const ContenedorInputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ContenedorInputIndividual = styled.div`
  margin: 5%;
`

const Input = styled.input`
  margin: 5px 0;
  width: 350px;
  font-size: 15px;
  background-color: #DEE5FF;
  padding: 15px;
  border-radius: 5px;
  border: none;
  outline: none;
  @media (max-width: 500px) {
    width: 70vw;
    font-size: 4vw;
  }
  @media (max-width: 300px) {
    padding: 1vh 2vw;
  }
`

const Error = styled.div`
  color: #fff;
  font-size: 14px;
`

const BotonEnviar = styled.button`
  margin: 2%;
  display: inline-block;
  padding: 4% 5vw;
  width: 70%;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  background-color: #005187;
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  &:hover{
    background-color: #0e5e92;
  }
  @media (max-width: 400px) {
    font-size: 6vw;
  }
`

const IconoSalirFormulario = styled.i`
  position: absolute;
  top: 5%;
  right: 3%;
  font-size: 35px;
  cursor: pointer;
  @media (max-width: 400px) {
    font-size: 10vw;
    top: 3%;
  }
`

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

    manejarEnvioFnc()
    ponerHiddenFnc();
  };

  return (
    <ContenedorFormulario hidden={hidden}>
      <Formulario onSubmit={handleSubmit} noValidate>
        <TituloFormulario>To-Do List</TituloFormulario>
        <ContenedorInputs>
          <ContenedorInputIndividual className='contenedor_input_individual'>
            <Input
              className='input'
              type='text'
              placeholder='Escribe el título de la tarea'
              name='titulo'
              value={titulo}
              onChange={cambioTituloFnc}
            />
            {errors.titulo && <Error className="error_message">{errors.titulo}</Error>}
          </ContenedorInputIndividual>

          <ContenedorInputIndividual className='contenedor_input_individual'>
            <Input
              className='input'
              type='text'
              placeholder='Escribe la descripción de la tarea'
              name='descripcion'
              value={descripcion}
              onChange={cambioDescripcionFnc}
            />
            {errors.descripcion && <Error className="error_message">{errors.descripcion}</Error>}
          </ContenedorInputIndividual>

          <ContenedorInputIndividual className='contenedor_input_individual'>
            <Input
              className='input'
              type='time'
              placeholder='Selecciona la hora de la tarea'
              name='hora'
              value={hora}
              onChange={cambioTimeFnc}
            />
            {errors.hora && <Error className="error_message">{errors.hora}</Error>}
          </ContenedorInputIndividual>
        </ContenedorInputs>

        <BotonEnviar type="submit" className='boton_enviar'>Agregar tarea</BotonEnviar>

        <IconoSalirFormulario className="icono_salir_formulario bi bi-x" onClick={ponerHiddenFnc}></IconoSalirFormulario>
      </Formulario>
    </ContenedorFormulario>
  );
}
export default TareaFormulario;
