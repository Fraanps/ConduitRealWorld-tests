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

  it ('Criar artigo com sucesso usando tag', () => {

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
        cy.url ().should ('include', '/article/');
        cy.contains (title);
        cy.contains (tag);

      });
    });
  });
  it ('Excluir artigo postado pelo usuário', () => {

    let loggedUser = JSON.parse (window.localStorage.getItem ('loggedUser'));
    cy.createRandomArticle ().then ((article) => {
      cy.postArticleAPI (article, loggedUser);
    });

    cy.accessProfile ();
    cy.accessRecentArticle ();

    cy.intercept ('DELETE', '/api/articles/**').as ('deleteArticle');

    cy.contains ('Delete Article').click ().then (() => {
      cy.wait ('@deleteArticle').its ('response.statusCode').should ('eq', 200);
    });
  });
});

// describe.skip ("Gerenciar artigo - versão com uso de custom commands e login UI", () => {
//   beforeEach (() => {
//     cy.visit ('#/login')
//     cy.loginUI ('fran@gmail.com', '123456');
//   });
//
//   it ('Criar artigo com sucesso usando tag', () => {
//     const title = faker.lorem.sentence (3);
//     const description = faker.lorem.sentence ();
//     const text = faker.lorem.paragraph (2);
//     const tag = faker.lorem.word ();
//
//     cy.contains ('New Article')
//       .should ('have.attr', 'href', '#/editor')
//       .click ();
//
//     cy.fillArticle (title, description, text, tag);
//
//     cy.intercept ('POST', 'api/articles').as ('postArticle');
//     cy.intercept ('GET', 'api/articles/**').as ('getArticle');
//
//     cy.publishArticle ().then (() => {
//       cy.wait ('@postArticle').then (({response}) => {
//         expect (response.statusCode).to.equal (201);
//       });
//       cy.wait ('@getArticle').its ('response.statusCode').should ('eq', 200);
//       cy.url ().should ('include', '/article/');
//       cy.contains (title);
//       cy.contains (tag);
//     });
//   });
// });

// describe.skip ("Gerenciar artigo - versão com uso de custom commands e login via API", () => {
//   beforeEach (() => {
//
//     cy.loginAPI ('fran@gmail.com', '123456').as ('session')
//     cy.visit ('#/editor')
//
//   });
//
//   it.only ('Criar artigo com sucesso usando tag', () => {
//     const title = faker.lorem.sentence (3);
//     const description = faker.lorem.sentence ();
//     const text = faker.lorem.paragraph (2);
//     const tag = faker.lorem.word ();
//
//     cy.contains ('New Article')
//       .should ('have.attr', 'href', '#/editor')
//       .click ();
//
//     cy.fillArticle (title, description, text, tag);
//
//     cy.intercept ('POST', 'api/articles').as ('postArticle');
//     cy.intercept ('GET', 'api/articles/**').as ('getArticle');
//
//     cy.publishArticle ().then (() => {
//       cy.wait ('@postArticle').then (({response}) => {
//         expect (response.statusCode).to.equal (201);
//       });
//       cy.wait ('@getArticle').its ('response.statusCode').should ('eq', 200);
//       cy.url ().should ('include', '/article/');
//       cy.contains (title);
//       cy.contains (tag);
//     });
//   });
// });


