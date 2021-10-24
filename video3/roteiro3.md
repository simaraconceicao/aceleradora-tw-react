# React para Iniciantes ❤️

3) Olá, Mundo! Criando e entendendo meu primeiro projeto react (create react app, react.render, estrutura de pastas, apagando arquivos padrão)

Eu sou uma pessoa supersticiosa e me contaram que toda vez que a gente está aprendendo alguma tecnologia nova, dá sorte começar com um hello world! Então vamos nessa! rs

Para essas aulas, vamos usar o editor de códido, vs code. No meu computador eu tenho também o NodeJS instalado na versão LTS e  também o gerenciador de pacotes yarn.

Como saber se tenho o node e o yarn? Abra um terminal e digite os comandos abaixo:

`` yarn -v``

Seu retorno positivo será um número parecido com esse, que é a versão correspondente: 1.22.10

``node -v``

Seu retorno positivo será um número parecido com esse, que é a versão correspondente: v14.17.0

Se seus retornos não foram do modo acima, é porque você ainda não tem, pause esse vídeo agora e acesse os links abaixo para instalar.

Node: https://nodejs.org/en/

Yarn: https://yarnpkg.com/getting-started/install

Depois de instalar, rode os comandos novamente e tenha certeza que instalou direitinho.
Agora sim, vamos ao nosso hello world em React.

1) Lembra que eu falei que react é uma biblioteca e que a gente pode acessar? Vamos fazer isso, no terminal rode o comando yarn create-react-app. Ele vai criar uma pasta contendo algumas outras pastas e arquivos dentro. Não se assuste! Demora um pouco até ficar pronto, rs.

``yarn create react-app hello-world``

Terminou e deu tudo certo, quando aparecer no terminal: ``Happy hacking!``

2) Ainda no terminal, ele nos dá uma sugestão de entrar na pasta de nosso projeto ``cd hello-world``e depois startar com ``yarn start``
Vamos fazer isso! 

3) Ele irá abrir um navegador sozinho usando a porta localhost:3000 e é lá que você consegue ter uma pré de como sua SPA está ficando.

4) Perceba que ele rodou uma págima pronta. Tharam! A gente só precisou rodar alguns pequenos comandos no terminal, certo? Vamos trocar esse conteúdo pelo nosso hello world. Vá até src > App.js (Apague a div e tudo que está dentro dela e escreva no lugar <h1>Hello, World!</h1> Salve e volte para o navegador! Uhullllll, agora vamos começar com o pé direito a entender todas essas pastas, arquivos e como estamos escrevendo num arquivo javascript e fazendo aparecer no html. <3

5) 
> node_modules

> public
  >> index.html

> gitignore

> package.json

> src
  >> index.js
  >> app.js
  >> app.css


