// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
// eslint-disable-next-line spaced-comment
/// <reference types="cypress" />
// @ts-check

const userEmail = `something+test${new Date().getTime()}@email.com`;

const registerUser = (email: string) => {
  cy.visit('http://localhost:3000');

    // Wait for title
    cy.contains('h3', 'User Registration', { timeout: 10000 });

    // Title
    cy.get('.center').should('be.visible')
      .and('have.text', 'User Registration');

    // Name and email
    cy.get('#input-name').type('A Name');
    cy.get('#input-email').type(email);

    // Next
    cy.get('#btn-step-1-next').click();

    // Passwords
    cy.get('#input-password').type('S0m3SecretPassword!');
    cy.get('#input-password-repeat').type('S0m3SecretPassword!');

    // Submit
    cy.get('#btn-step-2-submit').click();
}

describe('User registration', () => {
  it('shows name and email', function () {
    cy.visit('http://localhost:3000');

    // Wait for title
    cy.contains('h3', 'User Registration', { timeout: 10000 });

    // Title
    cy.get('.center').should('be.visible')
      .and('have.text', 'User Registration');

    // Inputs
    cy.get('.segment').should('be.visible')
      .and('include.text', 'Name')
      .and('include.text', 'Email');
  });

  it('shows error with invalid email and empty name', function () {
    cy.visit('http://localhost:3000');

    // Wait for title
    cy.contains('h3', 'User Registration', { timeout: 10000 });

    // Title
    cy.get('.center').should('be.visible')
      .and('have.text', 'User Registration');

    // Inputs
    cy.get('#input-email').type('invalidEmail');

    // Next
    cy.get('#btn-step-1-next').click();

    // Error messages
    cy.contains('div', 'Please enter a valid name', { timeout: 10000 }).should('be.visible');
    cy.contains('div', 'Please enter a valid email address', { timeout: 10000 }).should('be.visible');
  });

  it('can register a user', function () {
    // Register a user
    registerUser(userEmail);

    // Success message
    cy.contains('div', 'Registration Succesfull!', { timeout: 10000 }).should('be.visible');
  });

  it('can not register a user with the same email', function () {
    // Register a user
    registerUser(userEmail);

    // Error message
    cy.contains('div', 'Error!', { timeout: 10000 }).should('be.visible');
  });
});

export {};