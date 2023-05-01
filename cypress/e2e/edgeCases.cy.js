/// <reference types="cypress" />

beforeEach( () => {
    cy.visit( '/' );
} );

describe( 'Edge cases', () => {
    it( 'shows the calculator must be turned on first if other buttons pressed on first load', () => {
        cy.get( '[data-cy="._button"]' ).click();
        cy.on( 'window:alert', ( str ) => {
            expect( str ).to.equal( `Turn the calculator on first!` );
        } );
    } );

    it( 'errors out of user divides a number by 0', () => {
        cy.get( '[data-cy="ON/C_button"]' ).click();
        cy.get( '[data-cy="screen"]' ).should( 'contain', '0.' );

        cy.get( '[data-cy="5_button"]' ).click();
        cy.get( '[data-cy="screen"]' ).should( 'contain', '5.' );

        cy.get( '[data-cy="÷_button"]' ).click();

        cy.get( '[data-cy="0_button"]' ).click();
        cy.get( '[data-cy="=_button"]' ).click();

        cy.get( '[data-cy="screen"]' ).should( 'contain', 'E' );

    } );
} );
