import React, { useContext } from 'react';
import { UserContext } from '../UserContext';

const Index = () => {
  const { value, setValue } = useContext(UserContext); //escolhemos o contexto a ser utilizado
  return (
    <>
      <h1>
        This is index
        <br /> Look>> {value}
      </h1>
      <button onClick={() => setValue('a value')}>Change value</button>
    </>
  );
};

export default Index;
