import './App.css'

function App() {
  return (
    <div className="App">
      <input placeholder="digite seu nome" onChange={e => {console.log(e.target.value)}}/>
      <button onClick={e => {console.log('estou clicando')}}>clica aqui</button>
    </div>
  )
}

export default App;
