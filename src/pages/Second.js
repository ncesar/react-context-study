import React, { useContext } from 'react';
import { UserContext } from '../UserContext';

const Second = () => {
  const message = useContext(UserContext); //escolhemos o contexto a ser utilizado
  return (
    <h1>
      This is Second
      <br /> Look>> {message}
    </h1>
  );
};

export default Second;
