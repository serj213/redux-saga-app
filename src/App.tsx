import React from 'react';
import Counter from './Components/Counter/Counter';

const App: React.FC = () => {
  return (
    <div style={{ maxWidth: 650, marginLeft: 'auto', marginRight: 'auto', paddingTop: 100 }}>
      <h1>Тренируемся в использовании Redux-saga</h1>
      <br />

      <Counter />
    </div>
  );
};

export default App;
