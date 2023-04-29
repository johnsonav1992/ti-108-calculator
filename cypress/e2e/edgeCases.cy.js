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
} );
