import Contador from './components/Contador'
import ContaClick from './components/ContaClick'
import Relogio from './components/Relogio'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Contador />
        <ContaClick />
        <Relogio />
      </header>
    </div>
  );
}

export default App;
