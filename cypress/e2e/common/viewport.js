import { Then, Given } from "cypress-cucumber-preprocessor/steps";

Then(/^I scroll to top of the page$/, function () {
    cy.scrollTo(0, 0);
});

Given(/^I have corresponding device viewport$/, function () {
    // use of preset https://docs.cypress.io/api/commands/viewport#Arguments
    const resolutions = {
        "mobile": "iphone-8",
        "tablet": "ipad-2",
        "desktop": "macbook-11"
    }
    const device = Cypress.env("device");
    const preset = resolutions[device];
    if (!preset) {
        throw new Error("wrong configuration for device: " + device)
    } else {
        cy.viewport(preset)
    }
});