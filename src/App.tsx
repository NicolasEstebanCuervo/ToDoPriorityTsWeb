import { TareaProvider } from './Contextos/FunctionContext';
import Global from "./Componentes/Global"
import styled from '@emotion/styled'

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

const ContenedorApp = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`