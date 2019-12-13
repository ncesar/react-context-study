import React, { useState, useMemo } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Main from './pages/Main';
import Second from './pages/Second';
import { UserContext } from './UserContext';

function App() {
  const [value, setValue] = useState('hello from context xD');
  const providerValue = useMemo(
    () => ({
      value,
      setValue,
    }),
    [
      value,
      setValue,
    ] /* isso previne que o value/setVAlue seja renderizado direto, mesmo quando ele
    nao foi alterado. Ele só vai realmente renderizar quando houver alguma mudança dos dois. */,
  );

  return (
    <Router>
      <div className="App">
        <Link to="/">Main</Link>
        <br />
        <Link to="/second">Second</Link>
      </div>
      <UserContext.Provider value={providerValue}>
        {/*no value passamos a info que queremos distribuir
        Todos consumidores que são descendentes de um Provider 
        serão renderizados novamente sempre que a prop value do Provider for alterada.
        */}
        <Route path="/" exact component={Main} />
        <Route path="/second" component={Second} />
      </UserContext.Provider>
    </Router>
  );
}

export default App;
