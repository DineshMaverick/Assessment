import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Cypress.config('experimentalSessionSupport', true)

Cypress.session.clearAllSavedSessions();

Given(/^I go to (.*) library products page/, (libraryName) => {
    cy.on('uncaught:exception', (err, runnable) => false);
    cy.visit("/" + libraryName + "/products");
});
