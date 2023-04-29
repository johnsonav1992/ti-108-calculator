/// <reference types="cypress" />

beforeEach( () => {
    cy.visit( 'http://localhost:3000/' );
    cy.get( '[data-cy="ON/C_button"]' ).click();
    cy.get( '[data-cy="screen"]' ).should( 'contain', '0.' );
} );

describe( 'Basic Calculations', () => {
    it( 'Adds two single-digit numbers', () => {
        cy.get( '[data-cy="2_button"]' ).click();
        cy.get( '[data-cy="screen"]' ).should( 'contain', '2.' );
        cy.get( '[data-cy="+_button"]' ).click();
        cy.get( '[data-cy="2_button"]' ).click();
        cy.get( '[data-cy="=_button"]' ).click();
        cy.get( '[data-cy="screen"]' ).should( 'contain', '4.' );
    } );
} );
