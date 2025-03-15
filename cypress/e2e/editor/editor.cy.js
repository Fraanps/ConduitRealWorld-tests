/// <reference types="Cypress"/>
import login from "../login/index";
import home from "../home/index";
import editor from "../editor/index";
import {faker} from "@faker-js/faker";

const element = require ('./elements').ELEMENTS;

describe ('Gerenciar artigo - versão page objects', () => {
  beforeEach (() => {
    home.accessHomePage ('/');
    home.accessLoginPage ();
    login.validateLoginPage ();
    login.loginWithValidCredencials ('fran@gmail.com', '123456')
  });

  it.only ('Criar artigo com sucesso usando tag', () => {

    const title = faker.lorem.sentence (3);
    const description = faker.lorem.sentence ();
    const text = faker.lorem.paragraph (3);
    const tag = faker.lorem.word (3);

    cy.intercept ('POST', 'api/articles').as ('postArticle');

    home.accessNewArticlePage ();
    editor.fillArticleForm (title, description, text, tag);
    editor.publishArticle ().then (({response}) => {
      cy.wait ('@postArticle').then (({response}) => {
        expect (response.statusCode).to.equal (201);
      });
      cy.get ('@titleArticle').then (() => {
        cy.url().should('include', '/article/');
        cy.contains (title);
        cy.contains(tag);


      });


    });


  });

});