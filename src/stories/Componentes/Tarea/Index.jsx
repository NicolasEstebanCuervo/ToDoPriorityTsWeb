import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled'
import { BiCheck, BiX } from 'react-icons/bi';

const ContenedorTarea = styled.div`
  width: 600px;
  min-height: 250px;
  margin: 20% auto;
  display: flex;
  justify-content: space-between;
  border-radius: 7px;
  cursor: pointer;
  position: relative;
  color: #fff;
  font-family: Roboto, sans-serif;
  -webkit-box-shadow: 0px 0px 58px -24px rgba(0,0,0,1);
  -moz-box-shadow: 0px 0px 58px -24px rgba(0,0,0,1);
  box-shadow: 0px 0px 58px -24px rgba(0,0,0,1);
  &:hover .icono {
    opacity: 1;
    transition: opacity 0.4s ease;
  }

  &.hover .icono{
    opacity: 1;
    transition: opacity 0.4s ease;
  }   

  .icono {
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  @media (max-width: 700px) {
    width: 80vw;
  }

  ${props =>
  props.completada && props.time && `
    &.completada_${props.time} {
      background-color: ${props.time === 'prioridad_alta' ? '#ff3f3f' : (props.time === 'prioridad_media' ? '#f8825b' : (props.time === 'prioridad_baja' ? '#34e265' : '#b32f2f'))};
      text-decoration: line-through;
    }
`}

  ${props =>
    props.time === 'prioridad_alta' &&
    `
    background-color: #fe1952;
  `}

  ${props =>
    props.time === 'prioridad_media' &&
    `
    background-color: #FFAA55;
  `}

  ${props =>
    props.time === 'prioridad_baja' &&
    `
    background-color: #98EC9A;
  `}
`;

const ContenedorTextosTarea = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ContenedorTitulo = styled.div`
  background-color: rgba(242, 242, 242, 0.2);
  padding: 0 10px 0px 20px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 400px) {
    padding: 3% 10%;
  }
`;

const Titulo = styled.h1`
  font-size: 30px;
  margin:auto 0;
  &::first-letter {
    text-transform: uppercase;
  }
  @media (max-width: 400px) {
    font-size: 8vw;
  }
`;

const ContenedorIconos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 45px;
  @media (max-width: 400px) {
    font-size: 8vw;
  }
`;

const ContenedorDescripcion = styled.div`
  padding: 0 10px 0px 20px;
  margin-top: 10px;
  @media (max-width: 400px) {
    padding: 3% 10%;
  }
`;

const Descripcion = styled.h1`
  font-size: 25px;
  &::first-letter {
    text-transform: uppercase;
  }
  @media (max-width: 400px) {
    font-size: 7vw;
  }
`;

function Tarea({ id, descripcion, time, titulo, completada, prioridad, completarTareaFnc, eliminarTareaFnc, className }) {
  return (
    <ContenedorTarea
      className={`tarea_contenedor ${className} ${time} ${completada ? `completada_${time}` : ''} `}
      completada={completada}
      time={time}
      prioridad={prioridad}
    >
      <ContenedorTextosTarea>
        <ContenedorTitulo>
          <Titulo>{titulo}</Titulo>
          <ContenedorIconos>
            <BiCheck className='icono' onClick={() => completarTareaFnc(id)} />
            <BiX className='icono' onClick={() => eliminarTareaFnc(id)} />
          </ContenedorIconos>
        </ContenedorTitulo>
        <ContenedorDescripcion>
          <Descripcion>{descripcion}</Descripcion>
        </ContenedorDescripcion>
      </ContenedorTextosTarea>
    </ContenedorTarea>
  );
}

Tarea.propTypes = {
  descripcion: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  completada: PropTypes.bool.isRequired,
};

export default Tarea;
