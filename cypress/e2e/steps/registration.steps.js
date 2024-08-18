import {
  When,
  Then,
  Given,
} from "@badeball/cypress-cucumber-preprocessor";

Given("I am a new user on the app", () => {
  cy.visit("http://localhost:3000/");
});

When("I am on the Registration screen", () => {
  cy.visit("http://localhost:3000");

  cy.getByData("register-page").should("be.visible");
});

Then("I should see the registration form", () => {
  cy.getByData("register-form").should("be.visible");
});

Then('I should also see fields for my name, email, and password', () => {
    cy.getByData('name-input').should('be.visible')
    cy.getByData('email-input').should('be.visible')
    cy.getByData('password-input').should('be.visible')
})

When('I enter {string} in the name field', name => {
    cy.getByData('name-input').type(name)
})

Then('I enter {string} in the email field', email => {
    cy.getByData('email-input').type(email)
})

Then('I enter {string} in the password field', password => {
    cy.getByData('password-input').type(password)
})

Then('I should see a user-friendly error message', () => {
  cy.getByData('error-message').should('be.visible')
})