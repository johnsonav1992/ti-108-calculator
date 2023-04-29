/// <reference types="cypress" />

describe( 'Core Functions', () => {
    it( 'visit the page correctly', () => {
        cy.visit( 'http://localhost:3000/' );
    } );

    it( ' turns on the calculator', () => {
        cy.visit( 'http://localhost:3000/' );
        cy.get( '[data-cy="ON/C_button"' ).click();
        cy.get( '[data-cy="screen"' ).should( 'contain', '0.' );
    } );
} );
