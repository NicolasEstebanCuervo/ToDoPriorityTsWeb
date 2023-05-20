import React from 'react';
import { RiAddFill } from 'react-icons/ri';
import styled from '@emotion/styled';

const IconoHidden = styled.span`
  font-size: 70px;
  cursor: pointer;
  position: absolute;
  color: #fff;
  top: 2%;
  right: 2%;
  transition: transform 0.3s, color 0.3s;
  font-family: Roboto, sans-serif;
  &:hover {
    transform: scale(0.9);
    color: #766EFF;
  }

  &.hover {
    transform: scale(0.9);
    color: #766EFF;
  }

  @media (max-width: 150px) {
    font-size: 20vw;
  }
`;

const Hidden = ({ className, onClick }) => {
  return (
    <>
      <IconoHidden className={className}>
        <RiAddFill onClick={onClick} />
      </IconoHidden>
    </>
  );
};

export default Hidden;
