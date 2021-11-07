# React para Iniciantes ❤️

9) UseEffect - Consumindo API em react

O useEffect é o hook que nos possibilita gerar efeitos colaterais na tela quando alguma variável modifica. Com um exemplo vai ficar bem melhor de entender. Vamos lá!

1) Antes de tudo você precisa importar de dentro do react o hook useEffect

```
import { useEffect } from 'react'
```

2) Dentro do seu componente antes do retorno chama a função useEffect que recebe dois parametros.
 >> uma arrow function que vai determinar a ação do efeito colateral
 >> um array que recebe as dependências, ou seja as variáveis que determinam quando essas mudanças devem acontecer

```
useEffect(() => {
  setLista()
}, [])
```
> quando esse array aparece vazio, significa que a interface irá receber os efeitos colaterais quando a tela for carregada

> geralmente utilizamos useEffect com useState

**Exemplos:**

| Recurso | Descrição |
| --- | --- |
| `API` |  Chegou o grande momento de consumir uma api externa e renderizar os dados na tela, vamos usar o useEffect e useState para isso. |

| Recurso | Descrição |
| --- | --- |
| `Busca` | Vamos consumir uma api externa, mostrar lista na tela e através de uma busca, vamos mudar o estado apenas mostrando na tela o item digitado. |

