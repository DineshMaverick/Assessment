import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
//import Tesseract from 'tesseract.js'

Cypress.config('experimentalSessionSupport', true)

Cypress.session.clearAllSavedSessions();
window.ResizeObserver = undefined; 
// This will launch the staging environment page and validate the user journey of the components like links,tables,images and buttons
Given('I go to staging environment page and validate the components', () => {
  const url = 'https://${dsm_user}:${dsm_pwd}@dsmdemo-com.integration-cf65.gskinternet.com/';
cy.visit(url, { failOnStatusCode: false });
cy.document().its('readyState').should('equal', 'complete');

//*********Checking all the links navigation and status codes *********/

const links = [];
const internalLinks = [];
const externalLinks = [];

cy.get('a').each((link) => {
  const href = link.prop('href');

  if (href && typeof href === 'string' && !href.startsWith('mailto:') && !href.startsWith('tel:')) {
    // Replace specific URL with base URL
    let url = href.replace('https://dsmdemo-com.integration-cf65.gskinternet.com/', Cypress.config().baseUrldsmstaging);

    cy.request({
      url: url,
      followRedirect: false,
      failOnStatusCode: false,
    })
      .then((response) => {
        // Check the status code of the request
        if (url.startsWith(Cypress.config().baseUrl)) {
          if (response.status === 200) {
            cy.log(`[Internal] ${url} - Status code: ${response.status}`);
            internalLinks.push({ url: url, status: response.status });
          } else {
            cy.log(`[Internal] ${url} - Status code: ${response.status} - Failed to click link`);
          }
        } else {
          cy.log(`[External] ${url} - Status code: ${response.status}`);
          externalLinks.push({ url: url, status: response.status });
        }

        links.push({ url: url, status: response.status });
      });
  }
}).then(() => {
  cy.log('All links:');
  cy.log(links);

  cy.log('Internal links:');
  cy.log(internalLinks);

  cy.log('External links:');
  cy.log(externalLinks);
});

//*************** Check if paragraph DOM element exists, and if it has text content, extract and print it in the console************//
cy.get('p').each((el) => {
  cy.wrap(el)
    .should('exist')
    .invoke('text')
    .then((text) => {
      if (text.trim() !== '') {
        cy.log(text);
      }
    });
});

//**********Extract the images one by one and check it's existence with alttext **********//
cy.get('img').each((img) => {
  const altText = img.attr('alt');
  const src = img.attr('src');
  cy.wrap(img).should('exist');
  cy.log(`Image with src '${src}' and alt text '${altText}' exists.`);
});

//**********Extract the Tables one by one and check it's existence   **********//
cy.get('table').each((table, index) => {
  cy.wrap(table).should('exist');
  cy.wrap(table).find('th').should('exist');
  cy.wrap(table).find('tr').should('exist');
  cy.wrap(table).find('td').should('exist').and(($td) => {
    const text = $td.text().trim();
    expect(text).not.to.be.empty;
  });
  const tableName = `Table ${index + 1}`;
  cy.log(`${tableName} exists and contains header, row, column, and text content.`);
});

// find all buttons and observe their behavior
cy.get('button').each((button) => {
  cy.wrap(button)
    .should('be.visible') // check that the button is visible
    .click() // click the button
});

})
Given('I go to Preprod environment page and validate the components', () => {
  const url = 'https://${dsm_user}:${dsm_pwd}@dsmdemo-com.preprod-cf65.gskinternet.com/';
  cy.visit(url, { failOnStatusCode: false });
  cy.document().its('readyState').should('equal', 'complete');
  
  //*********Checking all the links navigation and status codes *********/
  
  const links = [];
  const internalLinks = [];
  const externalLinks = [];
  
  cy.get('a').each((link) => {
    const href = link.prop('href');
  
    if (href && typeof href === 'string' && !href.startsWith('mailto:') && !href.startsWith('tel:')) {
      // Replace specific URL with base URL
      let url = href.replace('https://dsmdemo-com.integration-cf65.gskinternet.com/', Cypress.config().baseUrldsmpreprod);
  
      cy.request({
        url: url,
        followRedirect: false,
        failOnStatusCode: false,
      })
        .then((response) => {
          // Check the status code of the request
          if (url.startsWith(Cypress.config().baseUrl)) {
            if (response.status === 200) {
              cy.log(`[Internal] ${url} - Status code: ${response.status}`);
              internalLinks.push({ url: url, status: response.status });
            } else {
              cy.log(`[Internal] ${url} - Status code: ${response.status} - Failed to click link`);
            }
          } else {
            cy.log(`[External] ${url} - Status code: ${response.status}`);
            externalLinks.push({ url: url, status: response.status });
          }
  
          links.push({ url: url, status: response.status });
        });
    }
  }).then(() => {
    cy.log('All links:');
    cy.log(links);
  
    cy.log('Internal links:');
    cy.log(internalLinks);
  
    cy.log('External links:');
    cy.log(externalLinks);
  });
  
  //*************** Check if paragraph DOM element exists, and if it has text content, extract and print it in the console************//
  cy.get('p').each((el) => {
    cy.wrap(el)
      .should('exist')
      .invoke('text')
      .then((text) => {
        if (text.trim() !== '') {
          cy.log(text);
        }
      });
  });
  
  //**********Extract the images one by one and check it's existence with alttext **********//
  cy.get('img').each((img) => {
    const altText = img.attr('alt');
    const src = img.attr('src');
    cy.wrap(img).should('exist');
    cy.log(`Image with src '${src}' and alt text '${altText}' exists.`);
  });
  
  //**********Extract the Tables one by one and check it's existence   **********//
  cy.get('table').each((table, index) => {
    cy.wrap(table).should('exist');
    cy.wrap(table).find('th').should('exist');
    cy.wrap(table).find('tr').should('exist');
    cy.wrap(table).find('td').should('exist').and(($td) => {
      const text = $td.text().trim();
      expect(text).not.to.be.empty;
    });
    const tableName = `Table ${index + 1}`;
    cy.log(`${tableName} exists and contains header, row, column, and text content.`);
  });
  
  // find all buttons and observe their behavior
  cy.get('button').each((button) => {
    cy.wrap(button)
      .should('be.visible') // check that the button is visible
      .click() // click the button
  });
  


})
  