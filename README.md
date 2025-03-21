# Testes Automatizados com Cypress

Este repositório contém um projeto de testes E2E automatizados utilizando 
**Cypress**, seguindo o padrão **Page Object Model (POM)** e realizando 
**interceptação de API** para validações e simulações de respostas.

---
### 🚀 Bibliotecas e plugins
- Node
- [Cypress](https://www.cypress.io/)
- [Faker](https://www.npmjs.com/package/@faker-js/faker)
- [cypress-plugin-api](https://github.com/filiphric/cypress-plugin-api)
- [cypress-mochawesome-reporter](https://github.com/LironEr/cypress-mochawesome-reporter)

---

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js 14+](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

---

## 🛠️ Instalação

1. Clone este repositório:
```bash
git clone https://github.com/Fraanps/ConduitRealWorld-tests.git
cd projeto-cypress
```

2. Instale as dependências:
```bash
npm install  # ou yarn install
```

---

## ▶️ Executando os Testes

### 1. Rodar Cypress em Modo Interativo
```bash
 npm run open:e2e:prod
```

### 2. Rodar Cypress em Modo Headless
```bash
npm run run:e2e:prod
```
---

## 🛠️ Utilizando Page Object Model (POM)

Os testes utilizam o **Page Object Model (POM)** para modularização e reutilização de código. Exemplo de um arquivo de página:

## 🌐 Interceptação de API

O `cy.intercept()` nestes teste E2E está sendo utilizado para interceptar e monitorar as requisições da API
que ocorrem durante o fluxo de login. Vou explicar detalhadamente o propósito de cada interceptação e por que elas são úteis.

📌 O que o `cy.intercept()` faz?
O cy.intercept permite:
✅ Interceptar requisições feitas pela aplicação durante o teste.
✅ Aguardar as respostas dessas requisições antes de continuar.
✅ Validar se as requisições retornam os dados esperados.
