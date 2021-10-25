# React para Iniciantes ❤️

8) State - useState

Lembra o exemplo do perfil do instagram? Eu disse que uma das soluções para se fazer isso é usando props. Um complemento seria usando state, que é o super poder passado para o componente para que ele possa lidar com dados e atualizar a tela toda vez que um evento acontecer (com uma pessoa usuária interagindo ou alguma configuração que a gente tenha criado).

Vamos aprender praticando:

1) Antes de tudo você precisa importar de dentro do react o hook useState

```
import { useState } from 'react'
```

2) Dentro do seu componente antes do retorno você destrutura um array que recebe duas informações
 >> uma variável onde vamos guardar nosso valor inicial e suas futuras atualizações
 >> uma função que vai receber a lógica para atualizar a variável

```
const [contador, setContador] = useState(0)
```
> dentro do seu estado inicial podemos passar valores de qualquer tipo de dados em javacript, nesse caso aqui começamos com o número zero, mas poderia ser um array, um objeto, uma string entr outros.

3) Podemos declarar a lógica da nossa função que irá atualizar nossa variável

```
setContador(contador += 1)
```
4) Podemos dizer quando queremos que nossa função atualizadora seja chamada a partir de uma configuração ou de um evento
```
setInterval(
  setContador(contador += 1),
  1000
)
```
ou 

```
function handleClick() {
  setContador(contador += 1)
}
```
5) Usar nosso evento no html do componente

```
<button onClick= {handleClick}>click me</button>
```

6) Chamar o estado no html do
```
<p>{contador}</>
```

**Exemplos:**
| Recurso | Descrição |
| --- | --- |
| `contador de clicks` |  Agora vamos treinar criar componentes, guardar memória no componente e atualizar na tela a quantidade de vezes que um botão está sendo clicado. |

| Recurso | Descrição |
| --- | --- |
| `Contador` |  Agora vamos treinar criar componentes, guardar memória no componente e atualizar na tela um contador que soma 1 ou diminui 1 toda vez que o botão for clicado.|

| Recurso | Descrição |
| --- | --- |
| `Relógio` |  Vamos criar um componente que retorna nosso horário local e atualiza automaticamente na tela|
