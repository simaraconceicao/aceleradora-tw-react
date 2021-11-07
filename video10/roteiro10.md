# React para Iniciantes ❤️

10) Criando Rotas (react router dom)

Lembra que com react estamos construindo SPA(single page application)? O que significa dizer que na real a gente só construiu uma única página. E quando a gente precisa criar um menu e algumas páginas diferentes. Precisamos usar uma biblioteca que nos ajude com isso, a construir rotas no react.

Para que no fim das contas, quando clicarmos no menu ou alterarmos na URL a gente consiga visualizar o conteúdo correto. Vamos aprender a usar a biblioteca react-router-dom.

1) Vamos instalar com o yarn ou npm 

2) Vamos criar o arquivo que irá gerenciar nossos endereços

```
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from '../Pages/Home'
import Sobre from '../Pages/Sobre'
import Portfolio from '../Pages/Portfolio'
import Contato from '../Pages/Contato'

function Routes(){
  return(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home}/>                
            <Route path="/sobre" component={Sobre}/> 
            <Route path="/portfolio" component={Portfolio}/>    
            <Route path="/contato" component={Contato}/>       
        </Switch>   
    </BrowserRouter>
  )
}
export default Routes
```

3) Vamos criar o menu

```
import { Link } from 'react-router-dom'

const Menu = () =>{
  return(
    <ul className="menu">
      <li>
        <Link className="link" to="/">Home</Link>
      </li>
      <li>
        <Link  className="link" to="/sobre">Sobre</Link>
      </li>
      <li>
        <Link  className="link" to="/portfolio">Portfólio</Link>
      </li>
      <li>
        <Link className="link" to="/contato">Contato</Link>
      </li>
    </ul>
  )

}

export default Menu
```

4) Podemos usar o menu nas páginas

5) No app em vez de chamar cada página, iremos usar as Rotas

```
import './Styles/global.css'
import Routes from './Routes/Routes'

function App() {
  return (
    <div>      
      <Routes/>    
    </div>   
  )
}

export default App;
```

