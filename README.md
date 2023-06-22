# Testes | Desafio Automação - Mottu [GitHub]("https://github.com/rcastrocastro/desafio-mottu.git")

---

## Índice
- [Sobre](#-sobre)
- [Instalação Projeto Mobile](#-instalação)
- [Execução dos Testes Mobile](#-execução-dos-testes)
- [Report Allure](#-report)
- [Sugestão de Melhoria](#-sugestão-melhoria)
- [Execução dos Testes API](#-execução-dos-testes-api)

---

## Sobre
Desafio Mottu! Esse teste é separado em duas partes: Automação mobile e Automação de API(Postman).


**Automação Mobile:** Automação do apk *nuclone.apk*,realizado utilizando *Appium* com *WebdriverIO*. Para o report foi escolhido *allure-report*.

**Obs..:** Utilizado o padrão *Page Objects*.

**Automação API:** Automação da API *Marvel*, utilizando o postman. A Collection se encontra disponível dentro da pasta Desafio-API, junto com o relatório de execução e as variáveis globais que foram utilizadas.

## Instalação Projeto Mobile

#### Para instalação do projeto se faz necessário clonar o repositório
git clone https://github.com/rcastrocastro/desafio-mottu.git

# Abrir o projeto
Acessar o diretório e abrir o código na IDE de programação

# Dependências
- Node JS
- Java JDK
- Android SDK
- Appium
- WebdriverIO
- Configuração das variáveis #JAVA_HOME e #ANDROID_HOME
```
export ANDROID_HOME="/Users/[USER]/Library/Android/sdk"
export PATH=$ANDROID_HOME/platform-tools:$PATH
export PATH=$ANDROID_HOME/tools:$PATH
```
---

## Execução dos Testes Mobile
Utilizando a IDE vscode, abra o terminal e na raiz do projeto executar o comando "npm i" para instalar todas as dependências contidas no arquivo package.json.
Após a instalação das dependências do projeto e das demais dependências dos pre-requesitos podemos executar a suíte de teste com o comando "npx wdio". Com esse comando será executado o teste e o report da execução será gerado na pasta "allure-results".

---

## Visualização do Allure Reports
Para conseguir visualizar o report é necessário a execução do seguinte comando no terminal:

- npm run allure-generate

**Obs..:** O comando irá inciar o servidor allure e o relatório será aberto no navegador.

---

## Sugestão de Melhoria
Ao abrir o aplicativo o componente que esconde e mostra o saldo está invertido, para uma melhor experiência do usuário seria inverter a funcionalidade, quando o componente estiver apresentando o olho cortado esconde o saldo e quando estiver apresentando somente o componente olho o saldo será exibido. 

# Execução Testes API

## Descrição
Para a execução dos teste da API é necessário abrir o postman e importar os 3 arquivos disponibilizados na pasta Desafio-API.

## Script de Teste

O script de teste a seguir é executado após uma solicitação ser feita à API Marvel.
