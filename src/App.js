import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas';
import "bootstrap-icons/font/bootstrap-icons.css";
import { TareaProvider } from './componentes/FunctionContext';
import Hidden from './componentes/Hidden';
import Bienvenida from './componentes/Bienvenida';

function App() {
  return (
    <div className='App'>
      <TareaProvider>
        <div className='tareas_lista_principal' >
          <ListaDeTareas />
          <Hidden />
        </div>
        <Bienvenida />
      </TareaProvider>
    </div>
  );
}

export default App;
