import {ELEMENTS as elementHeader} from "../menuSuperior/elements";

const element = require('./elements').ELEMENTS;

class login{
  // validação de login
  validateLoginPage(){
    cy.url('/login').then(()=> {
      cy.contains('Login');
    });
  }

  loginWithAllCredentials(username, password){
    cy.get(element.emailInput)
      .should('have.attr', 'type', 'email')
      .and('have.attr', 'placeholder', 'Email')
      .type(username);

    cy.get (element.passwordInput)
      .should ('have.attr', 'type', 'password')
      .and ('have.attr', 'placeholder', 'Password')
      .type (password);

    // acessando o botão do login de uma forma que seja possível fazer alguma validação
    return cy.get(element.loginButton).contains('Login').click();

  }

  loginWithValidCredencials(username, password){
    cy.get(element.emailInput)
      .should('have.attr', 'type', 'email')
      .and('have.attr', 'placeholder', 'Email')
      .type(username);

    cy.get (element.passwordInput)
      .should ('have.attr', 'type', 'password')
      .and ('have.attr', 'placeholder', 'Password')
      .type (password);

    cy.intercept('POST', 'api/users/login').as('postLogin'); // inteceptação do post
    cy.get (element.loginButton).contains('Login').click();
    // fazendo a verificação de status
    cy.wait('@postLogin').its ('response.statusCode').should ('eq', 200);;

  } // apenas para demonstração

  toLogout(){
    return cy.get(elementHeader.profileIcon).click().then(() => {
      cy.get(elementHeader.profileMenu)
        .contains('Logout').click();
    });
  }

  acessarPaginaRegistro(){
    return cy.contains(element.registerLinkText).click();
  }

}

export default new login();