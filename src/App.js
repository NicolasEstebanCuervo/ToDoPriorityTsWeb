import "bootstrap-icons/font/bootstrap-icons.css";
import { TareaProvider } from './Componentes/FunctionContext';
import Global from "./Componentes/Global"
import styled from '@emotion/styled'

const ContenedorApp = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

function App() {
  return (
    <ContenedorApp>
      <TareaProvider>
        <Global />
      </TareaProvider>
    </ContenedorApp>
  );
}

export default App;
