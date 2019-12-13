import React, { useContext } from 'react';
import { UserContext } from '../UserContext';

const Second = () => {
  const { user } = useContext(UserContext); //escolhemos o contexto a ser utilizado
  return (
    <>
      <h1>
        This is index
        <br /> Look>> {JSON.stringify(user, null, 2)}
      </h1>
    </>
  );
};

export default Second;
