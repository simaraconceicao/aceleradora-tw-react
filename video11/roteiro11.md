# React para Iniciantes ❤️

11) Como usar imagens em react

Para usarmos imagens em react, podemos seguir os passos abaixo:

1) Salve sua imagem numa pasta nomeada de assets
2) Importe sua imagem guardando numa variável

```
import Image from '../assets/minha-imagem.png
```
  >> importante escrever no caminho o nome e extensão exatamente como você salvou

3) Para usar a imagem no componente

```
<img src={Imagem} alt="uma ilustração de um computador"/>
```

>> dentro do src use a variável que você atribuiu no import

>> é obrigatório usar o atributo alt, informando um texto alternativo coerente para o caso da imagem não carregar.