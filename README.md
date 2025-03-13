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
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

---

## 🛠️ Instalação

1. Clone este repositório:
```bash
git clone https://github.com/seu-usuario/projeto-cypress.git
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
 # ou yarn cypress open
```

### 2. Rodar Cypress em Modo Headless
```bash
 npx cypress run --config-file cypress_prod.config.js
# ou yarn cypress run
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

[//]: # (## 🛠️ Utilizando Page Object Model &#40;POM&#41;)

[//]: # ()
[//]: # (Os testes utilizam o **Page Object Model &#40;POM&#41;** para modularização e reutilização de código. Exemplo de um arquivo de página:)

[//]: # ()
[//]: # (```javascript)

[//]: # (class LoginPage {)

[//]: # (  visit&#40;&#41; {)

[//]: # (    cy.visit&#40;'/login'&#41;;)

[//]: # (  })

[//]: # ()
[//]: # (  fillUsername&#40;username&#41; {)

[//]: # (    cy.get&#40;'#username'&#41;.type&#40;username&#41;;)

[//]: # (  })

[//]: # ()
[//]: # (  fillPassword&#40;password&#41; {)

[//]: # (    cy.get&#40;'#password'&#41;.type&#40;password&#41;;)

[//]: # (  })

[//]: # ()
[//]: # (  submit&#40;&#41; {)

[//]: # (    cy.get&#40;'button[type="submit"]'&#41;.click&#40;&#41;;)

[//]: # (  })

[//]: # (})

[//]: # ()
[//]: # (export default new LoginPage&#40;&#41;;)

[//]: # (```)

[//]: # ()
[//]: # (Uso no teste:)

[//]: # (```javascript)

[//]: # (import LoginPage from '../pages/LoginPage';)

[//]: # ()
[//]: # (describe&#40;'Teste de Login', &#40;&#41; => {)

[//]: # (  it&#40;'Deve realizar login com sucesso', &#40;&#41; => {)

[//]: # (    LoginPage.visit&#40;&#41;;)

[//]: # (    LoginPage.fillUsername&#40;'usuario_teste'&#41;;)

[//]: # (    LoginPage.fillPassword&#40;'senha_teste'&#41;;)

[//]: # (    LoginPage.submit&#40;&#41;;)

[//]: # (    cy.url&#40;&#41;.should&#40;'include', '/dashboard'&#41;;)

[//]: # (  }&#41;;)

[//]: # (}&#41;;)

[//]: # (```)

[//]: # ()
[//]: # (---)

[//]: # ()
[//]: # (## 🌐 Interceptação de API)

[//]: # ()
[//]: # (Os testes utilizam `cy.intercept&#40;&#41;` para mockar e validar chamadas de API.)

[//]: # ()
[//]: # (Exemplo:)

[//]: # (```javascript)

[//]: # (describe&#40;'Teste de Interceptação', &#40;&#41; => {)

[//]: # (  it&#40;'Deve interceptar a resposta da API', &#40;&#41; => {)

[//]: # (    cy.intercept&#40;'GET', '/api/eventos', { fixture: 'eventos.json' }&#41;.as&#40;'getEventos'&#41;;)

[//]: # (    cy.visit&#40;'/eventos'&#41;;)

[//]: # (    cy.wait&#40;'@getEventos'&#41;;)

[//]: # (    cy.get&#40;'.evento-item'&#41;.should&#40;'have.length', 3&#41;; // Assumindo que eventos.json tem 3 itens)

[//]: # (  }&#41;;)

[//]: # (}&#41;;)

[//]: # (```)

[//]: # ()
[//]: # (---)

[//]: # ()
[//]: # (## 🔄 Execução Automática com CI/CD)

[//]: # ()
[//]: # (Para integração contínua, adicione o seguinte script ao `package.json`:)

[//]: # (```json)

[//]: # ("scripts": {)

[//]: # (  "test": "cypress run")

[//]: # (})

[//]: # (```)

[//]: # ()
[//]: # (E configure seu pipeline para rodar `npm test` ou `yarn test`.)

[//]: # ()
[//]: # (---)

[//]: # ()
[//]: # (## ✨ Contribuição)

[//]: # ()
[//]: # (Contribuições são bem-vindas! Para colaborar:)

[//]: # ()
[//]: # (1. Faça um fork do projeto.)

[//]: # (2. Crie uma branch: `git checkout -b minha-feature`.)

[//]: # (3. Commit suas alterações: `git commit -m 'Minha nova funcionalidade'`.)

[//]: # (4. Envie para o repositório remoto: `git push origin minha-feature`.)

[//]: # (5. Abra um Pull Request.)

[//]: # ()
[//]: # (---)

## 📝 Licença

Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.
