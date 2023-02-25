import React from "react";
import { api_popular } from "../../src/Api/axios";
import SlideMovie from "../../src/Components/SlideMovie";
import { set } from "../../src/Redux/actions/moviesAction";
import store from "../../src/Redux/store";
import { handleMovies } from "../../src/Utils/constants";

describe("SlideMovie.cy.tsx", () => {
  it("test API - GET movies", () => {
    cy.request({
      method: "GET",
      url: `${process.env.REACT_APP_MOVIE}/${api_popular}`,
      failOnStatusCode: false,
    }).as("movies");

    cy.get("@movies").its("status").should("eq", 200);
    cy.get("@movies").then((response) => {
      cy.log(response["body"]["results"]);
      let data = handleMovies(response["body"]["results"]);
      store.dispatch(
        set({
          moviesPopular: data,
          seriesPopular: [],
          moviesTop: [],
          moviesUpcoming: [],
        })
      );
    });
  });
  beforeEach(() => {
    cy.mount(
      
        <SlideMovie
          data={store.getState().movie.movies.moviesPopular}
          title={"top rated"}
        />
    
    );
  });
  it("test list ul length 20", () => {
    cy.get('ul').children().should('have.length', 20);
  });
  it("test exists image poster", () => {
    cy.get("img").should("be.visible");
  });
  it("test exists title or name", () => {
    cy.get("[data-cy=title-name]").should("be.visible");
  });
 
});
