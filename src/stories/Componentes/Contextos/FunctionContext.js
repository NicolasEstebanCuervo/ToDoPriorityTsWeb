import React, { createContext, useState, useContext, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TareaContext = createContext();

export const TareaProvider = ({ children }) => {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [time, setTime] = useState('');
  const [hora, setHora] = useState('');
  const [hidden, setHidden] = useState(true);
  const [bienvenida, setBienvenida] = useState(false);
  const [tareas, setTareas] = useState([]);

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

  const cambioTituloFnc = e => {
    setTitulo(e.target.value);
  };

  const cambioDescripcionFnc = e => {
    setDescripcion(e.target.value);
  };

  const cambioTimeFnc = e => {
    const horaActual = new Date().getHours();
    const horaInput = parseInt(e.target.value);

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
    setHora(e.target.value);
  };

  const manejarEnvioFnc = e => {
    const tareaNueva = {
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

  const agregarTareaFnc = tarea => {
    if (tarea.descripcion.trim()) {
      setTareas(tareas => {
        tarea.descripcion = tarea.descripcion.trim();
        tarea.titulo = tarea.titulo.trim();
        return [tarea, ...tareas];
      });
      setBienvenida(true);
    }
  };

  const eliminarTareaFnc = id => {
    setTareas(tareas => tareas.filter(tarea => tarea.id !== id));
  };

  useEffect(() => {
    if (tareas.length === 0) {
      setBienvenida(false);
    }
  }, [tareas]);

  const completarTareaFnc = id => {
    const tareasActualizadas = tareas.map(tarea => {
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
