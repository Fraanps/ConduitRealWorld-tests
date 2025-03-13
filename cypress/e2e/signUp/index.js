const element = require ('./elements').ELEMENTS;
import {faker} from '@faker-js/faker';

class register {

  // gerando usuários a partir da api
  generateFixtureUsers(quantity) {
    const arrayCredentials = [];
    const arrayResponses = [];

    Cypress._.times (quantity, () => {
      cy.request ({
        method: 'POST',
        url: '/api/users',
        body: {
          user: {
            username: faker.internet.username (),
            email: faker.internet.email (),
            password: faker.internet.password ()
          }
        }
      }).then ((response) => {
        const requestBody = JSON.parse (response.requestBody);
        arrayCredentials.push (requestBody); // aqui o response vem como string, por isso precisa do parse
        arrayResponses.push (response.body);
      });
    });
    cy.writeFile ('cypress/fixtures/usersCredentials.json', arrayCredentials);
    cy.writeFile ('cypress/fixtures/usersRegistered.json', arrayResponses);
  }

  fillRegisterForm(name, email, password) {
    cy.get(element.nameInput)
      .type(name)
      .should('have.attr', 'required');
    cy.get(element.emailInput)
      .type(email)
      .should('have.attr', 'required');
    cy.get(element.passwordInput)
      .type(password)
      .should('have.attr', 'required');


  }

  submitRegisterForm(){
    return cy.get(element.btnSubmit).click();
  }
}

export default new register ();

