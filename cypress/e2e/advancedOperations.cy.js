/// <reference types="cypress" />

beforeEach( () => {
    cy.visit( '/' );
    cy.get( '[data-cy="ON/C_button"]' ).click();
    cy.get( '[data-cy="screen"]' ).should( 'contain', '0.' );
} );

describe( 'Advanced Calculations', () => {
    it( 'Adds two negative, single-digit numbers', () => {
        cy.get( '[data-cy="2_button"]' ).click();
        cy.get( '[data-cy="screen"]' ).should( 'contain', '2.' );
        cy.get( '[data-cy="+/-_button"]' ).click();
        cy.get( '[data-cy="screen"]' ).should( 'contain', '-' );
        cy.get( '[data-cy="screen"]' ).should( 'contain', '2.' );

        cy.get( '[data-cy="+_button"]' ).click();

        cy.get( '[data-cy="7_button"]' ).click();
        cy.get( '[data-cy="screen"]' ).should( 'contain', '7.' );
        cy.get( '[data-cy="+/-_button"]' ).click();
        cy.get( '[data-cy="screen"]' ).should( 'contain', '-' );
        cy.get( '[data-cy="screen"]' ).should( 'contain', '7.' );

        cy.get( '[data-cy="=_button"]' ).click();
        cy.get( '[data-cy="screen"]' ).should( 'contain', '-' );
        cy.get( '[data-cy="screen"]' ).should( 'contain', '9.' );
    } );

    it( 'Adds a positive and a negative single-digit number', () => {
        cy.get( '[data-cy="2_button"]' ).click();
        cy.get( '[data-cy="screen"]' ).should( 'contain', '2.' );
        cy.get( '[data-cy="+/-_button"]' ).click();
        cy.get( '[data-cy="screen"]' ).should( 'contain', '-' );
        cy.get( '[data-cy="screen"]' ).should( 'contain', '2.' );

        cy.get( '[data-cy="+_button"]' ).click();

        cy.get( '[data-cy="7_button"]' ).click();
        cy.get( '[data-cy="screen"]' ).should( 'contain', '7.' );

        cy.get( '[data-cy="=_button"]' ).click();
        cy.get( '[data-cy="screen"]' ).should( 'contain', '5.' );
    } );

    it( 'Adds three, positive single-digit numbers together in a row', () => {
        cy.get( '[data-cy="2_button"]' ).click();
        cy.get( '[data-cy="screen"]' ).should( 'contain', '2.' );

        cy.get( '[data-cy="+_button"]' ).click();

        cy.get( '[data-cy="3_button"]' ).click();
        cy.get( '[data-cy="screen"]' ).should( 'contain', '3.' );

        cy.get( '[data-cy="+_button"]' ).click();
        cy.get( '[data-cy="screen"]' ).should( 'contain', '5.' );

        cy.get( '[data-cy="4_button"]' ).click();
        cy.get( '[data-cy="screen"]' ).should( 'contain', '4.' );

        cy.get( '[data-cy="+_button"]' ).click();
        cy.get( '[data-cy="screen"]' ).should( 'contain', '9.' );
    } );

} );
