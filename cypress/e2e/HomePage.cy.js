/// <reference types="cypress" />

describe("Home Page Cypress Tests", () => {
  it("shoull return navbar title correctly", () => {
    cy.visit("/");
  });
});
