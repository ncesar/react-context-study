import React, { useContext } from 'react';
import { UserContext } from '../UserContext';
import { login } from './login';

const Index = () => {
  const { user, setUser } = useContext(UserContext); //escolhemos o contexto a ser utilizado
  return (
    <>
      <h1>
        This is index
        <br /> Look>> {JSON.stringify(user, null, 2)}
      </h1>
      <button
        onClick={async () => {
          const user = await login();
          setUser(user);
        }}
      >
        Login
      </button>
    </>
  );
};

export default Index;
