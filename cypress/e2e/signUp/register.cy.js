import home from '../home/index';
import login from '../login/index';
import register from '../signUp/index';
import {faker} from '@faker-js/faker';


const element = require ('./elements').ELEMENTS;

describe ('Register Feature', () => {

  beforeEach (() => {
    home.accessHomePage ();
    home.accessLoginPage ()
    login.validateLoginPage ();
  })

  it ('Sistema não deve permitir criação de contas para usuários já cadastrados', () => {

    login.acessarPaginaRegistro ().then (() => {
      cy.url ().should ('contain', '/register');
    });

    cy.intercept ('POST', '/api/users').as ('postUser');
    register.fillRegisterForm (
      Cypress.env ('nameDefault'),
      Cypress.env ('emailDefault'),
      Cypress.env ('passwordDefault'));


    register.submitRegisterForm ().then (() => {
      cy.wait ('@postUser').then (({response}) => {
        expect (response.statusCode).to.equal (422);
      });
    });
  });

  Cypress._.times (3, () => {
    it ('Criar conta para usuário não existente', () => {
      login.acessarPaginaRegistro ().then (() => {
        cy.url ().should ('contain', '/register');
      });

      cy.intercept ('POST', '/api/users').as ('postUser');

      register.fillRegisterForm (faker.person.fullName (), faker.internet.email (), faker.internet.password ());
      register.submitRegisterForm ().then (() => {
        cy.wait ('@postUser').then (({response}) => {
          expect (response.statusCode).to.equal (201);
        })
      })


    })
  })

});







