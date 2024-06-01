
   
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

    
Cypress.Commands.add("checkTextContent", (selector, tag, expectedText) => {
    cy.get(`${selector} ${tag}:contains("${expectedText}")`).should((element) => element.length > 0);
})
Cypress.Commands.add("checkLinkUrl", (selector, tag,  expectedUrl) => {
    cy.get(`${selector} ${tag}[href="${expectedUrl}"]`).should((element) => element.length > 0);
})
Cypress.Commands.add("checkImageUrl", (selector, tag,  expectedUrl) => {
    cy.get(`${selector} ${tag}[src="${expectedUrl}"]`).should((element) => element.length > 0);
})
Cypress.Commands.add("checkButtonValue_text", (btnselector, btnvalueselector, expectedbtnValue,buttonclick) => {
    if(buttonclick>1)
    {
    cy.get(`${btnselector}`).eq(1).dblclick();
    }
    else{
     cy.get(`${btnselector}`).eq(1).click(); 
    }
    cy.get(btnvalueselector).contains(expectedbtnValue, { matchCase: false });
 }) 

Cypress.Commands.add("checkButtonValue_image", (btnselector, expectedbtnValue, buttonclick) => {
    if(buttonclick>1)
    {
    cy.get(`${btnselector}`).eq(1).dblclick();
    }
    else{
     cy.get(`${btnselector}`).eq(1).click(); 
    } 
    cy.get(`img[src='${expectedbtnValue}']`).should('be.visible');
    });
Cypress.Commands.add("checkInputValue", (input, inputvalue) => {
    cy.get(input).eq(1).type(inputvalue);
});
Cypress.Commands.add('videocomponent', () => {
    cy.get('#brightcove-player', { timeout: 30000 })
      .should('be.visible')
      .its('0.contentDocument.body')
      .find('.vjs-big-play-button')
      .click()
})

// Custom command to get the body of an iframe
/*Cypress.Commands.add('getIframeBody', (iframeSelector) => {
    cy.get(iframeSelector)
      .its('0.contentDocument.body').should('not.be.empty')
      .then(cy.wrap);
  });
  
  // Custom command to click a button inside an iframe
  Cypress.Commands.add('iframeButton', (iframeSelector, buttonText) => {
    cy.getIframeBody(iframeSelector)
      .contains('.button_cta > a.submit-button', buttonText)
      .should('be.visible')
      .scrollIntoView()
      .click({ force: true });
  });*/
  Cypress.Commands.add('clickButtonInIframe', (iframeSelector, buttonSelector) => {
    cy.get(iframeSelector).should('be.visible').then($iframe => {
      const iframeDoc = $iframe.contents();
      cy.wrap(iframeDoc.find('body')).within(() => {
        cy.contains(buttonSelector).should('be.visible').click();
      });
    });
  });

  Cypress.Commands.add('clickSubmitButton', () => {
    cy.get('.global-submitButton, button:contains("Continue"), a[href="#"]').click({ force: true });
  });
  

/*Cypress.Commands.overwriteQuery('get', function (originalFn, ...args) {
    console.log('get called with args:', args)
  
    const innerFn = originalFn.apply(this, args)
  
    return (subject) => {
      console.log('get inner function called with subject:', subject)
  
      return innerFn(subject)
    }
  })*/
  
  
  

  
  