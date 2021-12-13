import { useState } from 'react';

export const useCounter = (initialState = 10) => {
  const [counter, setCounter] = useState(initialState);

  //Función para incrementar el valor del estado en 1
  const increment = () => {
    setCounter(counter + 1);
  };

  //Función para decrementar el valor del estado en 1
  const decrement = () => {
    setCounter(counter - 1);
  };

  //Función para reset del estado inicial
  const reset = () => {
    setCounter(initialState);
  };

  return { counter, increment, decrement, reset };
};
