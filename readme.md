# Desafio Frontend BIT - SP

Desafio B2W Fronend.


## Tabela de Informações

- [Requisito para o Desafio B2W](#requisito-para-o-desafio-b2w)
- [Instalações Necessárias](#instalações-necessárias)
  - [Node](#node)
  - [Sass](#sass)
- [Servidor](#servidor)
  - [Clonando o Desafio B2W](#clonando-o-desafio-b2w)
  - [Rodando o Desafio B2W](#rodando-o-desafio-b2w)
- [Estrutura do Desafio B2W](#estrutura-do-desafio-b2w)



## Instalações Necessárias

A instalação dos requisitos abaixo são necessários para rodar o Desafio Frontend B2W.
Na ausência de um dos itens o Desafio não irá rodar.

## Node

Para rodar o desafio B2W é necessário ter o Node instalado em sua maquina.
  
  - Para instalação do Node.JS segue link para download [NODE-JS](https://nodejs.org/en/)

Após a instalação verifique qual a versão do Node instalado com `node -v`.

## Sass

Para instalar o SASS é necessário ter o Node, sem ele você não conseguira instalar o SASS.

- Instalação via linha de comando:

```
- Ambiente WINDOWS:
  
  npm install -g node-sass

- Ambiente LINUX:
  
  sudo npm install -g node-sass

```


## Servidor
  
O projeto roda na porta 3000 do seu servidor `http://localhost:3000/`

## Clonando o Desafio B2W

Para clonar o desafio é necessário ter o git instalado em sua maquina.
  - para instala-lo acesse o link para download [GIT](https://git-scm.com/).

Acesse o link [Clone GitHub](https://github.com/rafaelcarvalhocaetano/challenge-code-sx)

Clonando via linha de comando:
  
- Acesse o botão `Clone or download`.

- Verifique se no canto direito superior encontra-se `Use HTTPS`. Se estiver dessa maneira clique no botão `copy to clipboard`.

- Abra seu `terminal git` selecione um destina desajado para clonar o desafio e digite.

```
  git clone 'endereço-obtido-no-git' 'novo-nome-do-desafio'

```
Se preferir pode deixar o sem `'novo-nome-do-desafio'`, pois criará um repositório com mesmo nome do original. 

## Executando o Projeto

Para rodar o projeto após ter clonado acesse o destino do projeto via linha de comando digite `npm start`.

## Estrutura do Desafio B2W

Estrutura do desafio constituida conforme representação abaixo:

```
Desafio_B2W/
  node_modules/
  public/
    imagens/
      icone2.png
      icone3.png
      icone4.png
      icone5.png
      icone6.png
      icone7.png
      icone8.png
      icone9.png
      icone10.png
      icone11.png
      icone12.png
      photo.png
    index.html
  src/
    componentes/
      Awart.js
      Contact.js
      Education.js
      Experience.js
      Objective.js
      Personalskill.js
      Photo.js
      Professionalskill.js
      Profile.js
    App.js
    App.scss
    App.test.js
    exp.js
    index.css
    index.js
  gitignore
  npm-debug.log
  package.json
  README.md
```



## Requisito para o Desafio B2W

Segue abaixo o requisito para o desafio Frontend da B2W.

  Para o teste, pedimos que seja entrega em até 3 dias, mas de acordo com a experiência e/ou ferramentas escolhidas por você, talvez precise de mais tempo para concluir o desafio, nos avise!
  
  Para ajudá-lo, temos algumas dicas:
  
  O layout do desafio é [esse](https://ucarecdn.com/a3d9551d-8bb1-4e58-b152-0832dbffd5a2/testeb2w.jpg)
  
  Aqui temos o arquivo .psd para [download](https://drive.google.com/open?id=0BwJHZ1PdHAcGalV4U0NGTWMzSW8)
  
  Aqui, o link para [API](http://www.mocky.io/v2/57dfec211000009020598073)

## Desafio:

  Desenvolver a página seguindo o [layout](https://ucarecdn.com/a3d9551d-8bb1-4e58-b152-0832dbffd5a2/testeb2w.jpg), que atenda os seguintes critérios:
  
  - Código HTML semântico
  - Utilize alguma metodologia CSS e um pré-processador, de preferência Sass
  - Faça que sua página tenha uma ótima experiência para o usuário, independente do dispositivo que ele esteja usando.
  - Utilize o framework [React](https://facebook.github.io/react/)
  - Utilize algum module bundler, seja [Webpack](https://webpack.github.io/) ou [Brunch](http://brunch.io/)
  - O Javascript seja escrito utilizando as especificações do EcmaScript 2015 (ES6)
  - Caso haja necessidade, pode utilizar um Task Manager. Sugerimos o [Gulp](http://gulpjs.com/)
  - Seria ótimo se escrevesse testes unitários.

Crie um Fork desse repositório e nos envie um **pull request**

Não esqueça de ensinar como rodamos seu projeto :sunglasses: