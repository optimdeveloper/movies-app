import React from "react";
import Welcome from "../../src/Screens/Welcome";

describe("Welcome.cy.tsx", () => {
  beforeEach(() => {
    cy.mount(<Welcome />);
  });
  it("test button go to page login", () => {
    cy.get("[data-cy=btn-login]").click({ force: true });
    cy.location("pathname").should("match", /\/login$/);
  });
  it("test title page", () => {
    cy.get("p")
      .should("be.visible")
      .contains("Películas y series ilimitadas y mucho más");
  });
  it("test subtitle 1 page", () => {
    cy.get("h5")
      .should("be.visible")
      .contains("Disfruta donde quieras. Cancela cuando quieras.");
  });
  it("test subtitle 2 page", () => {
    cy.get("h6")
      .should("be.visible")
      .contains(
        "¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix."
      );
  });
});
