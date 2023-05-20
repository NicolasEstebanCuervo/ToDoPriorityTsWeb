import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled'
import { BiX } from 'react-icons/bi';

const ContenedorFormulario = styled.div`
  margin: auto;
  max-width: 430px;
  text-align: center;
  color:#fff;
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
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: #0c3755;
    transition: background-color 0.4s ease; 
  }

  &:not(:hover) {
    background-color: #005187;
    transition: background-color 0.4s ease; 
  }
  &.hover{
    transition: background-color 0.4s ease; 
    background-color: #0c3755;
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

function FormularioComponent({manejarEnvioFnc,descripcion,cambioTimeFnc,titulo,hora,cambioTituloFnc,ponerHiddenFnc,hidden,cambioDescripcionFnc,className}) {
  const [errors, setErrors] = useState({
    titulo: null,
    descripcion: null,
    hora: null
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!titulo) {
      newErrors.titulo = 'Por favor, ingrese un título';
    }
    if (!descripcion) {
      newErrors.descripcion = 'Por favor, ingrese una descripción';
    }
    if (!hora) {
      newErrors.hora = 'Por favor, ingrese una hora';
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
          <ContenedorInputIndividual>
            <Input
              className='input'
              type='text'
              placeholder='Escribe el título de la tarea'
              name='titulo'
              value={titulo}
              onChange={cambioTituloFnc}
            />
            {errors.titulo && <Error>{errors.titulo}</Error>}
          </ContenedorInputIndividual>

          <ContenedorInputIndividual>
            <Input
              className='input'
              type='text'
              placeholder='Escribe la descripción de la tarea'
              name='descripcion'
              value={descripcion}
              onChange={cambioDescripcionFnc}
            />
            {errors.descripcion && <Error>{errors.descripcion}</Error>}
          </ContenedorInputIndividual>

          <ContenedorInputIndividual >
            <Input
              className='input'
              type='time'
              placeholder='Selecciona la hora de la tarea'
              name='hora'
              value={hora}
              onChange={cambioTimeFnc}
            />
            {errors.hora && <Error>{errors.hora}</Error>}
          </ContenedorInputIndividual>
        </ContenedorInputs>

        <BotonEnviar type='submit' className={className}>Agregar tarea</BotonEnviar>

        <IconoSalirFormulario className='icono_salir_formulario' onClick={ponerHiddenFnc}><BiX /></IconoSalirFormulario>
      </Formulario>
    </ContenedorFormulario>
  );
} 

FormularioComponent.propTypes = {
  errors: PropTypes.bool.isRequired
};

export default FormularioComponent;
