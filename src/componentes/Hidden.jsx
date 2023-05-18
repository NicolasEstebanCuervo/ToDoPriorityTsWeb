import React from 'react';
import { useTareaContext } from './FunctionContext';
import styled from '@emotion/styled'

const IconoHidden = styled.i`
  font-size: 70px;
  cursor: pointer;
  position: absolute;
  top: 2%;
  right: 2%;
  transition: transform 0.3s, color 0.3s; 
  &hover{
    transform: scale(0.9);
    color: #766EFF;
  }
  @media (max-width: 150px) {
    font-size: 20vw;
  }
`

const Hidden = () => {
  const { quitarHiddenFnc } = useTareaContext();
  return (
    <div>
      <IconoHidden className="bi bi-plus" onClick={quitarHiddenFnc}></IconoHidden>
    </div>
  );
};

export default Hidden;
