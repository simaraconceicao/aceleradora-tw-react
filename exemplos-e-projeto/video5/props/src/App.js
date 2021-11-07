import './App.css';
import Title from './components/Title'
import Paragraph from './components/Paragraph'
import LowerCase from './components/LowerCase'
import UpperCase from './components/UpperCase'

function App() {
  return (
    <div className="App">
      <Title text='Eu sou um texto de props' />
      <Paragraph>Eu sou um paragrafo de props children</Paragraph>
      <Title text='Eu sou um titulo reutilizando o componente title' />
      <Paragraph>Eu sou um paragrafo reutilizando o componente paragraph</Paragraph>
      <LowerCase text='MEU TEXTINHO EM MINUSCULO' />
      <UpperCase text='meu textinho em maiusculo' />
    </div>
  );
}

export default App;
