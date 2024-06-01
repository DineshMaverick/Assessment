import {Then} from "cypress-cucumber-preprocessor/steps";

Then(/^I can see (\S*) products in the list/, (count) => {
    cy.get('.product-card__image').should('have.length', ~~count)
});

