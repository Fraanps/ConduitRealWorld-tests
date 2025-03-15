const element = require ('./elements').ELEMENTS
const elementHeader = require ('../menuSuperior/elements').ELEMENTS;


class home {
  // fazendo uma verificação em cada campo
  accessLoginPage() {
    cy.contains (element.loginAccessLinkText)
      .should ('have.attr', 'href', '#/login')
      .click ();
  }

  accessHomePage() {
    cy.visit ('/');
  }

  accessNewArticlePage() {
    cy.contains ('New Article')
      .should ('have.attr', 'href', '#/editor')
      .click ();
  }



}

export default new home ();

