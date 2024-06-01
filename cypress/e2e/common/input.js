import { When } from "cypress-cucumber-preprocessor/steps";

//type
When(/^I type (\S*) into field with placeholder (\S*)/, (data, placeholderText) => {
    cy.get(`[placeholder=${placeholderText}]`).type(data);
});