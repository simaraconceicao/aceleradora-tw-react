import { useState } from 'react'
import './App.css'; 

function App() {
  const [name, setName] = useState('')
  return (
    <div className="App">
      <input 
        placeholder="digite seu nome"
        onChange={e => setName(e.target.value)}
      />
      <h1>Hello,</h1>
      <h2>{name}</h2>
    </div>
  );
}

export default App;
