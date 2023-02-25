import React from "react";
import BoxLogin from "../../src/Components/BoxLogin";

describe("BoxLogin.cy.tsx", () => {
  beforeEach(() => {
    cy.mount(<BoxLogin />);
  });
  it("test button go to page home", () => {
    cy.get("button").click({ force: true });
    cy.location("pathname").should("match", /\/home$/);
  });
  it("test title box", () => {
    cy.get("h4").should("be.visible").contains("Inicia Sesión");
  });
  it("test exists input email", () => {
    cy.get("[data-cy=input-e]").children().next().should('have.descendants','input').children().should('be.visible')
  });
  it("test exists input pass", () => {
    cy.get("[data-cy=input-p]").children().next().should('have.descendants','input').children().should('be.visible')
  });
});
