import './App.css';
import filmes from './service/data'

function App() {
  return (
    <div className="App">
      {filmes.map(filme => 
        <div key={filme.id}>
          <h2>{filme.nome}</h2>
          <p>{filme.genero}</p>
          <img src={filme.capa} alt={filme.nome}/>
        </div>
    )}
    </div>
  );
}

export default App;
