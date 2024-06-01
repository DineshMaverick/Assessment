import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
Cypress.config('experimentalSessionSupport', true)
Cypress.session.clearAllSavedSessions();
window.ResizeObserver = undefined; 
Given('the user is on the article page {string}', (articleUrl) => {
    cy.visit(articleUrl);
    
  });
  

When('the user clicks on "Get a day pass", yellow button, inside the article', () => {
    cy.wait(5000);
    cy.scrollTo('bottom');
    cy.clickButtonInIframe('#axate-notice', 'Get a day pass');
    cy.clickSubmitButton();
});

And('the user fills in a random {string}', (email) => {
   cy.get('#email').clear().type(email);
  });

  And('the user selects {string} as the country and enters a valid UK {string}', (Country, PostCode) => {
    cy.get('#country').select(Country);
    cy.get(`#postcode`).clear().type(PostCode);
  });
  And('the user selects a random preference for marketing preferences', () => {
    const marketingCheckboxes = ['#publisher_marketing_news', '#publisher_marketing_offers', '#axate_marketing'];
    marketingCheckboxes.forEach((checkbox) => {
      cy.get(checkbox).then(($el) => {
        if ($el.prop('checked')) {
          cy.get(checkbox).uncheck();
        } else {
          cy.get(checkbox).check();
        }
      });
    });
  });
  
And('the user clicks "Continue"', () => {
    cy.contains('button', 'Continue').click();


});

And('the user selects any payment amount', () => {
  // Assuming there are options to select payment amount, choose the first one
  cy.get('.amount-picker-container label').contains(/^£\d+(\.\d{2})?$/).eq(0).click();
  cy.contains('button', 'Continue').click();
});

And('the user selects Voucher', () => {
    cy.get('.voucher.card').click();
});

And('the user fills in {string}', (voucherCode) => {
    cy.get('#voucher').clear().type(voucherCode);
});

When('the user clicks "Continue"', () => {
    cy.contains('button', 'Continue').click();
});

Then('the user should see confirmation "You are ready to read your first article"', () => {
  cy.get('.confirmation-message').should('contain.text', 'You are ready to read your first article');
});
