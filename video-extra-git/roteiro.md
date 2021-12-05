# Git, Github e Netlify para Iniciantes

Eaeee, tô aqui interrompendo seu módulo de react para falar um pouquinho sobre Git, Github e Netlify para Iniciantes. Esse conteúdo vai ser super importante pra você entender como usar essas ferramentas a seu favor na criação de um portfólio dev, no trabalho em equipe, no controle de versões dos seus projetos ou até mesmo para hospedar seus projetos na web, dando ali seu endereço, o seu www pra ele. Vamos lá! 

Antes de começar o conteúdo quero explicar pra você algumas palavras que vou usar muito durante esse vídeo:

  - repositório local: quando você transforma sua pastinha do seu projeto no seu computador/local em um repositório do git. 
  - repositório remoto: quando você coloca alguma pastinha de projetos seus que usam git lá no site do github.
  - hospedagem de site:


1) O que é git e como configurar? 

O Git é um sistema para controlar versão de códigos e é usado pela grande maioria das pessoas desenvolvedoras atualmente. Isso significa dizer que usando o git a gente pode esquecer o medo de perder alguma alteração que a gente fez no nosso código. 

Ou se a gente precisar trabalhar em equipe fica super fácil de identificar quem mexeu em cada linha de código ou como resolver conflitos se as pessoas mexerem nas mesmas linhas.

Nesse vídeo a gente não vai focar em como trabalhar em equipe usando o git, mas é super importante no futuro você procurar saber mais sobre branch, merge e pull request. Foca aqui, eu disse no futuro, rs! 

Nesse pouco tempo que temos juntas vamos focar em como você pode controlar as versões dos seus projetos pessoais nesse período de estudo e de criação de portfólio. 


``Iniciando com Git``
 - download: E pra isso vamos começar fazendo o download do git neste link: https://git-scm.com/downloads. Depois de escolher a versão ideal para as configurações do seu computador, inicie a instalação, aperte em next/seguinte para concluir. 
 
 - git bash
 Quando você fez a instalação do git ele trouxe também o gitbash que é um terminal com uma interface bem amigável e que reconhece os comandos do git. :)
 Use-o! Você pode ir na sua área de trabalho e clicar com o botão direito do mouse, escolha a opção `git bash here` ele abrirá o terminal com sua localização na área de trabalho.

 Para ter certeza que a instalação do git correu bem. Você pode usar o comando ```git --version```.

 - git config
 Agora precisamos configurar o git colocando a sua assinatura nele. No mesmo terminal use os comandos:
 Primeiro: `git config --global user.name "Seu nome"`
 Segundo: `git config --global user.email "seu-email@example.com"`



2) O que é e como criar uma conta no github?

o github é um tipo de rede social para pessoas desenvolvedoras. Mas a principal funcionalidade é que ele é um serviço online onde você pode colocar seus repositórios do git e deixar disponível na sua conta. 

Ou seja, um lugar onde você pode reunir os seus códigos e formar o seu portfólio. Você pode usar o seu link do perfil para fortalecer o seu currículo. 

- criando uma conta

Entre nesse link: https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home 

E crie uma conta com um e-mail válido e um nome de usuário válido também além disso, prefira não usar espaços, caracteres especiais ou apelidos muito dificéis, pois essa conta fará parte do seu currículo.

- Preencha seus dados e conheça um pouco a ferramenta.
Não esqueça de preencher seu nome,foto e suas principais informações. Esse aqui é o meu perfil, aproveite para me seguir.Rs 
Quando alguém perguntar pelo seu perfil você pode usar esse link aqui em cima ou passar seu usuário que você fez quando criou a conta.

Aqui nessa área fica a quantidades de vezes que você usou o site. Aqui ficam seus projetinhos quando você sobe na plataforma.

3) O que é Netlify? 

Uma das formas mais faceis de hospedar sites gratuitamente. Ele automatiza o processo de hospedagem e tem uma interface super amigável. 

Crie sua conta aqui nesse link: https://app.netlify.com/signup
Escolha a opção do github e autorize com o usuario e senha da outra plataforma numa janelinha que vai abrir pra você.

Essa é a carinha dele. Projetos com html, css e javascript basta você arrastar e soltar aqui.
E eles ficam aqui pra você acessar.

7) Adicionando um repositorio remoto no meu projeto em react e enviando atualizações para um repositório remoto a partir do meu repositório local

 - principais comandos e para que servem
   - git init (com react nao precisa, pois o create react app já faz)
   - git remote add 
   - git status
   - git add .
   - git commit -m
   - git push origin master (integrando git com github)
   - falar do git ignore

8) Hospedando meu projeto no netlify (config e deploy automatizado)

Era isso, pessu! Parabéns! Agora você já pode incluir no seu currículo que está estudando também git e github para controle de versão e netlify para deploy. Esses tópicos não são mais um bônus no currículo de uma pessoa desenvolvedora é pré-requisito para a maioria das vagas.

O mais legal é que não importa qual linguagem ou qual ferramenta você esteja utilizando, você sempre precisará criar versionamento para seu código. Até o próximo vídeo!