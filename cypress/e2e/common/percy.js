import {Then} from "cypress-cucumber-preprocessor/steps";


Then(/^I take a screenshot and name it ([\S|\s]*)$/, function (screenshotName) {
    cy.wait(1000)
    cy.percySnapshot(screenshotName);
});