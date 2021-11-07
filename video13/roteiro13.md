# React para Iniciantes ❤️

13) Introdução aos testes no React (React Testing Library)<br>

Como pessoas iniciantes na programação uma das ferramentas que pode nos dar confiança em nosso trabalho e em cada linha de código que escrevemos são os testes.

Além disso, o mercado espera que advoguemos pela qualidade em nosso trabalho.

Por isso, em entrevistas de emprego costumam perguntar se temos alguma familiaridade com testes unitários. Essa aula vai ser o seu passo incial para sua resposta a essa pergunta ser 'SIM'.

Quando criamos nossas aplicações com create-react-app a configuração para usar testes já vem toda pronta. São alguns daqueles arquivos default que a gente apagou lá na primeira aula.

Vamos aprender a testar em react?

1) Vamos verificar no package.json se temos as dependencias testing library e o script de test

2) Escrevemos o arquivo de test com a extensão .test.js

3) Dentro do arquivo de test vamos importa o arquivo que queremos testar e também as funções do testing library

```
import { render, screen } from '@testing-library/react'
import App from './App'
```

4) Para criar seu teste a sintaxe pode ser esta abaixo:

```
describe('Hello world', () => {
  it('should render hello world', () => {
    render(<App />);
    const helloElement = screen.getByText('Hello, World!')
    expect(helloElement).toBeInTheDocument()
  })
})
```

5) Para rodar o scrip de test, no terminal rodamos yarn test

>> No futuro, é muito importante estudar sobre TDD (Programação orientada a testes), saber também como criar mocks de objetos e funções e ser bastante críticas em avaliar quais casos de testes fazem sentido. :) 




