import React from 'react';

function App() {
  function methodDoesNotExist() {
    throw new Error('error');
  }
  return (
    <div>
      <button onClick={methodDoesNotExist}>Break the world</button>
    </div>
  );
}

export default App;
