import Hidden from '../Hidden';
import Bienvenida from '../Bienvenida';
import ListaDeTareas from '../ListaDeTareas';
import { useTareaContext } from '../../Contextos/FunctionContext';

const Global = () => {
  const context = useTareaContext();

  if (!context) {
    return null;
  }

  const { bienvenida, quitarHiddenFnc } = context;

  return (
    <>
      <div>
        <ListaDeTareas />
        <Hidden onClick={quitarHiddenFnc} />
        <Bienvenida hidden={bienvenida} textoBienvenida='No hay tareas por ahora :)' />
      </div>
    </>
  );
};

export default Global;
