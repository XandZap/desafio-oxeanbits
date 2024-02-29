# Projeto Oxeanbits Desafio

## Pré-requisitos
Antes de começar, certifique-se de ter o Node.js, o npm e o git instalados em sua máquina.

## Clonando o Projeto
Para clonar o projeto, abra o terminal e execute o seguinte comando:

```
git clone https://github.com/XandZap/desafio-oxeanbits.git
```

Isso criará uma cópia do repositório em sua máquina local.

## Instalando as Dependências
Navegue até o diretório do projeto usando o terminal:

```
cd desafio-oxeanbits
```

Em seguida, instale as dependências do projeto com o seguinte comando:

```
npm install
```

Este comando instalará todas as dependências listadas no arquivo package.json.

## Configurando as Variáveis de Ambiente
As variáveis de ambiente são usadas para armazenar informações sensíveis do projeto, como chaves de API. No projeto Oxeanbits, usamos o arquivo .env para armazenar essas informações.

### Crie um arquivo .env: 
Abra o terminal, navegue até a raiz do seu projeto e crie um arquivo chamado .env pode ser através do comando touch.

```
touch .env
```

Em seguida, abra este arquivo em um editor de texto e defina suas variáveis de ambiente. 
As variáveis devem começar com REACT_APP_ para serem lidas pelo Create React App. Cole essas variáveis no seu arquivo .env:

```
REACT_APP_API_GIPHY_KEY=DPo7WGQoYASlVvciGiGZ7P2fXzJLEfud
REACT_APP_API_BASE_URL=https://api.giphy.com/v1/gifs/
```

## Iniciando o Projeto
Depois de instalar as dependências e configurar as variáveis de ambiente, você pode iniciar o projeto com o seguinte comando:

```
npm start
```

Isso iniciará o servidor de desenvolvimento e abrirá o aplicativo no seu navegador padrão.

## Scripts Disponíveis
Além do script start, o projeto também inclui os seguintes scripts:

```
npm run build
```
: Cria uma versão de produção do aplicativo.

```
npm run test
```
: Executa os testes do projeto.

```
npm run eject
```
: Ejeta o projeto do ambiente create-react-app. Este é um comando irreversível.
