# React para Iniciantes ❤️

12) Como usar CSS em react

Até aqui fizemos tudo sem estilizar. Para ser uma pessoa desenvolvedora que cria interfaces de usuárias precisamos também saber fazer isso muito bem.

No react temos algumas facilidades para criar estilos dos nossos componentes e páginas. Você pode usar algumas bibliotecas como o styled components, saas, material-ui, bootstrap, ant design entre outras.

Mas hoje, vamos fazer aqui da forma raiz com o css purinho.

Para usarmos imagens em react, podemos seguir os passos abaixo:

1) Crie seu arquivo com extensão .css

2) Importe seu arquivo

```
import from '../styles/style.css
```
  >> importante escrever no caminho o nome e extensão exatamente como você salvou na pasta

3) Para usar o estilo você pode atribuir className e id, ou até mesmo usar a tag como seletor css

```
<img className="minha-imagem" src={Imagem} alt="uma ilustração de um computador"/>
```

4) Dentro do arquivo de css, você vai usar os seletores e propriedades exatamente como você aprendeu no início dos estudos.

>> é importante ter atenção para não sobrescrever estilos de forma inesperada

>> para zerar seu estilo de forma global na aplicação você pode importá-lo nas camadas acima do componente, como o index ou app. 