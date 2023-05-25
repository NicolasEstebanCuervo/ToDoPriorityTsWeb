import React, { createContext, useState, useContext, useEffect, ChangeEvent, ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface Tarea {
  id: string;
  titulo: string;
  descripcion: string;
  time: string;
  hidden: boolean;
  completada: boolean;
}

export interface TareaContextProps {
  titulo: string;
  descripcion: string;
  time: string;
  hora: string;
  hidden: boolean;
  bienvenida: boolean;
  quitarHiddenFnc: () => void;
  ponerHiddenFnc: () => void;
  cambioTituloFnc: (event: ChangeEvent<HTMLInputElement>) => void;
  cambioDescripcionFnc: (event: ChangeEvent<HTMLInputElement>) => void;
  cambioTimeFnc: (event: ChangeEvent<HTMLInputElement>) => void;
  manejarEnvioFnc: () => void;
  tareas: Tarea[];
  eliminarTareaFnc: (id: string) => void;
  completarTareaFnc: (id: string) => void;
}

const TareaContext = createContext<TareaContextProps | undefined>(undefined);

export const TareaProvider = ({ children } : { children: ReactNode }) => {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [time, setTime] = useState('');
  const [hora, setHora] = useState('');
  const [hidden, setHidden] = useState(true);
  const [bienvenida, setBienvenida] = useState(false);
  const [tareas, setTareas] = useState<Tarea[]>([]);

  const quitarHiddenFnc = () => {
    if (hidden === true) {
      setHidden(false);
      setBienvenida(true);
    }
  };

  const ponerHiddenFnc = () => {
    setHidden(true);
    setBienvenida(tareas.length > 0);
  };

  useEffect(() => {
    setBienvenida(tareas.length > 0);
  }, [tareas]);

  const cambioTituloFnc = (event: ChangeEvent<HTMLInputElement>) => {
    setTitulo(event.target.value);
  };

  const cambioDescripcionFnc = (event: ChangeEvent<HTMLInputElement>) => {
    setDescripcion(event.target.value);
  };

  const cambioTimeFnc = (event: ChangeEvent<HTMLInputElement>) => {
    const horaActual = new Date().getHours();
    const horaInput = parseInt(event.target.value);

    let horasDiferencia = Math.floor(horaInput - horaActual);
    if (horasDiferencia < 0) {
      horasDiferencia += 24;
    }

    let horaLimite = (horaActual + horasDiferencia) % 24;
    if (horaLimite < 0) {
      horaLimite += 24;
    }

    if (horasDiferencia >= 0 && horasDiferencia <= 3) {
      setTime('prioridad_alta');
    } else if (horasDiferencia >= 4 && horasDiferencia <= 6) {
      setTime('prioridad_media');
    } else {
      setTime('prioridad_baja');
    }
    setHora(event.target.value);
  };

  const manejarEnvioFnc = () => {
    const tareaNueva: Tarea = {
      id: uuidv4(),
      titulo: titulo,
      descripcion: descripcion,
      time: time,
      hidden: hidden,
      completada: false,
    };
    agregarTareaFnc(tareaNueva);
    setTitulo('');
    setDescripcion('');
    setHora('');
  };

  const agregarTareaFnc = (tarea: Tarea) => {
    if (tarea.descripcion.trim()) {
      setTareas((tareas) => {
        tarea.descripcion = tarea.descripcion.trim();
        tarea.titulo = tarea.titulo.trim();
        return [tarea, ...tareas];
      });
      return(setBienvenida(true));
    }
  };

  const eliminarTareaFnc = (id: string) => {
    return(setTareas((tareas) => tareas.filter((tarea) => tarea.id !== id)));
  };

  useEffect(() => {
    if (tareas.length === 0) {
      setBienvenida(false);
    }
  }, [tareas]);

  const completarTareaFnc = (id: string) => {
    const tareasActualizadas = tareas.map((tarea) => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };

  return (
    <TareaContext.Provider
      value={{
        titulo,
        descripcion,
        time,
        hora,
        hidden,
        bienvenida,
        quitarHiddenFnc,
        ponerHiddenFnc,
        cambioTituloFnc,
        cambioDescripcionFnc,
        cambioTimeFnc,
        manejarEnvioFnc,
        tareas,
        eliminarTareaFnc,
        completarTareaFnc,
      }}
    >
      {children}
    </TareaContext.Provider>
  );
};
export const useTareaContext = () => useContext(TareaContext);

export default TareaContext;
