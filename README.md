# Testes Automatizados com Cypress

Este repositório contém um projeto de testes automatizados utilizando **Cypress**, seguindo o padrão **Page Object Model (POM)** e realizando **interceptação de API** para validações e simulações de respostas.

---

## 🚀 Tecnologias Utilizadas

- **[Cypress](https://www.cypress.io/)**: Framework de testes end-to-end moderno e confiável.
- **Padrão Page Object Model (POM)**: Organização modular dos testes para facilitar a manutenção.
- **Interceptação de API (cy.intercept)**: Simulação e validação de respostas HTTP durante os testes.

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
 npx cypress run --config-file cypress_prod.config.js

```

### 2. Rodar Cypress em Modo Headless
```bash
 npx cypress run --config-file cypress_prod.config.js

```

---

## 📂 Estrutura do Projeto

```plaintext
.
├── cypress/
│   ├── e2e/
│   │   ├── pages/                 # Page Objects (POM)
│   │   ├── tests/                 # Testes organizados por funcionalidade
│   │   └── support/               # Funções de suporte e comandos customizados
│   ├── fixtures/                  # Dados simulados (mocks)
│   ├── plugins/                   # Configurações adicionais
│   ├── support/       
│   │   ├── commands.js            # Comandos customizados
│   │   ├── e2e.js                 # Configurações globais
│
├── cypress_dev.config.js          # Configuração principal do Cypress para ambiente de dev/testes
├── cypress_prod.config.js         # Configuração principal do Cypress para ambiente de produção
├── package.json                   # Dependências e scripts do projeto
└── README.md                      # Documentação do projeto
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

## 📝 Licença

Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.
