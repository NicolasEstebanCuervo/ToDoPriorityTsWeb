import styled from '@emotion/styled'

const Bienvenida = ({textoBienvenida, hidden} : {textoBienvenida:string, hidden:boolean}) => {
  return (
    <ContenedorBienvenida hidden={hidden}>
      <TextoBienvenida>{textoBienvenida}</TextoBienvenida>
    </ContenedorBienvenida>
  );
};

export default Bienvenida;

const ContenedorBienvenida = styled.div`
  margin:auto;
  width: 70vw;
  position: relative;
  height: auto;
  padding: 10% 0;
  background: #4d82bc;
  color: #fff;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0px 0px 58px -24px rgba(0, 0, 0, 1);
  font-family: Roboto, sans-serif;
  &:before{
    content: '';
    display: inline-block;
    height: 100%;
    vertical-align: middle;
    margin-right: -0.25em;
  }
`

const TextoBienvenida = styled.h1`
  display: inline-block;
  vertical-align: middle;
  font-size: 30px;

  @media (max-width: 700px) {
    font-size: 5vw;
  }
` 