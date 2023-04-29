/// <reference types="cypress" />

beforeEach( () => {
    cy.visit( '/' );
    cy.get( '[data-cy="ON/C_button"]' ).click();
    cy.get( '[data-cy="screen"]' ).should( 'contain', '0.' );
} );

describe( 'Basic Calculations', () => {
    it( 'Adds two single-digit numbers', () => {
        cy.get( '[data-cy="2_button"]' ).click();
        cy.get( '[data-cy="screen"]' ).should( 'contain', '2.' );
        cy.get( '[data-cy="+_button"]' ).click();
        cy.get( '[data-cy="1_button"]' ).click();
        cy.get( '[data-cy="screen"]' ).should( 'contain', '1.' );
        cy.get( '[data-cy="=_button"]' ).click();
        cy.get( '[data-cy="screen"]' ).should( 'contain', '3.' );
    } );

    it( 'Adds two double-digit numbers', () => {
        cy.get( '[data-cy="1_button"]' ).click();
        cy.get( '[data-cy="screen"]' ).should( 'contain', '1.' );
        cy.get( '[data-cy="0_button"]' ).click();
        cy.get( '[data-cy="screen"]' ).should( 'contain', '10.' );
        cy.get( '[data-cy="+_button"]' ).click();
        cy.get( '[data-cy="2_button"]' ).click();
        cy.get( '[data-cy="screen"]' ).should( 'contain', '2.' );
        cy.get( '[data-cy="5_button"]' ).click();
        cy.get( '[data-cy="screen"]' ).should( 'contain', '25.' );
        cy.get( '[data-cy="=_button"]' ).click();
        cy.get( '[data-cy="screen"]' ).should( 'contain', '35.' );
    } );

    it( 'Adds two single-digit/single-float numbers', () => {
        cy.get( '[data-cy="2_button"]' ).click();
        cy.get( '[data-cy="screen"]' ).should( 'contain', '2.' );
        cy.get( '[data-cy="._button"]' ).click();
        cy.get( '[data-cy="screen"]' ).should( 'contain', '2.' );
        cy.get( '[data-cy="5_button"]' ).click();
        cy.get( '[data-cy="screen"]' ).should( 'contain', '2.5' );
        cy.get( '[data-cy="+_button"]' ).click();
        cy.get( '[data-cy="1_button"]' ).click();
        cy.get( '[data-cy="screen"]' ).should( 'contain', '1.' );
        cy.get( '[data-cy="._button"]' ).click();
        cy.get( '[data-cy="screen"]' ).should( 'contain', '1.' );
        cy.get( '[data-cy="5_button"]' ).click();
        cy.get( '[data-cy="screen"]' ).should( 'contain', '1.5' );
        cy.get( '[data-cy="=_button"]' ).click();
        cy.get( '[data-cy="screen"]' ).should( 'contain', '4.' );
    } );

    it( 'Adds two double-digit/double-float numbers', () => {
        cy.get( '[data-cy="1_button"]' ).click();
        cy.get( '[data-cy="screen"]' ).should( 'contain', '1.' );
        cy.get( '[data-cy="0_button"]' ).click();
        cy.get( '[data-cy="screen"]' ).should( 'contain', '10.' );
        cy.get( '[data-cy="._button"]' ).click();
        cy.get( '[data-cy="screen"]' ).should( 'contain', '10.' );
        cy.get( '[data-cy="2_button"]' ).click();
        cy.get( '[data-cy="screen"]' ).should( 'contain', '10.2' );
        cy.get( '[data-cy="5_button"]' ).click();
        cy.get( '[data-cy="screen"]' ).should( 'contain', '10.25' );

        cy.get( '[data-cy="+_button"]' ).click();

        cy.get( '[data-cy="2_button"]' ).click();
        cy.get( '[data-cy="screen"]' ).should( 'contain', '2.' );
        cy.get( '[data-cy="0_button"]' ).click();
        cy.get( '[data-cy="screen"]' ).should( 'contain', '20.' );
        cy.get( '[data-cy="._button"]' ).click();
        cy.get( '[data-cy="screen"]' ).should( 'contain', '20.' );
        cy.get( '[data-cy="2_button"]' ).click();
        cy.get( '[data-cy="screen"]' ).should( 'contain', '20.2' );
        cy.get( '[data-cy="5_button"]' ).click();
        cy.get( '[data-cy="screen"]' ).should( 'contain', '20.25' );

        cy.get( '[data-cy="=_button"]' ).click();
        cy.get( '[data-cy="screen"]' ).should( 'contain', '30.5' );
    } );

    it( 'Adds two single-float numbers', () => {
        cy.get( '[data-cy="._button"]' ).click();
        cy.get( '[data-cy="screen"]' ).should( 'contain', '0.' );
        cy.get( '[data-cy="2_button"]' ).click();
        cy.get( '[data-cy="screen"]' ).should( 'contain', '0.2' );

        cy.get( '[data-cy="+_button"]' ).click();

        cy.get( '[data-cy="._button"]' ).click();
        cy.get( '[data-cy="screen"]' ).should( 'contain', '0.' );
        cy.get( '[data-cy="3_button"]' ).click();
        cy.get( '[data-cy="screen"]' ).should( 'contain', '0.3' );

        cy.get( '[data-cy="=_button"]' ).click();
        cy.get( '[data-cy="screen"]' ).should( 'contain', '0.5' );
    } );

    it( 'Adds two double-float numbers', () => {
        cy.get( '[data-cy="._button"]' ).click();
        cy.get( '[data-cy="screen"]' ).should( 'contain', '0.' );
        cy.get( '[data-cy="2_button"]' ).click();
        cy.get( '[data-cy="screen"]' ).should( 'contain', '0.2' );
        cy.get( '[data-cy="5_button"]' ).click();
        cy.get( '[data-cy="screen"]' ).should( 'contain', '0.25' );

        cy.get( '[data-cy="+_button"]' ).click();

        cy.get( '[data-cy="._button"]' ).click();
        cy.get( '[data-cy="screen"]' ).should( 'contain', '0.' );
        cy.get( '[data-cy="3_button"]' ).click();
        cy.get( '[data-cy="screen"]' ).should( 'contain', '0.3' );
        cy.get( '[data-cy="5_button"]' ).click();
        cy.get( '[data-cy="screen"]' ).should( 'contain', '0.35' );

        cy.get( '[data-cy="=_button"]' ).click();
        cy.get( '[data-cy="screen"]' ).should( 'contain', '0.6' );
    } );

    it( 'Adds a single-digit and a single-digit/single-float number', () => {
        cy.get( '[data-cy="2_button"]' ).click();
        cy.get( '[data-cy="screen"]' ).should( 'contain', '2.' );

        cy.get( '[data-cy="+_button"]' ).click();

        cy.get( '[data-cy="3_button"]' ).click();
        cy.get( '[data-cy="screen"]' ).should( 'contain', '3.' );
        cy.get( '[data-cy="._button"]' ).click();
        cy.get( '[data-cy="screen"]' ).should( 'contain', '3.' );
        cy.get( '[data-cy="5_button"]' ).click();
        cy.get( '[data-cy="screen"]' ).should( 'contain', '3.5' );

        cy.get( '[data-cy="=_button"]' ).click();
        cy.get( '[data-cy="screen"]' ).should( 'contain', '5.5' );
    } );

    it( 'Adds a single-digit and a double-float number', () => {
        cy.get( '[data-cy="2_button"]' ).click();
        cy.get( '[data-cy="screen"]' ).should( 'contain', '2.' );

        cy.get( '[data-cy="+_button"]' ).click();

        cy.get( '[data-cy="._button"]' ).click();
        cy.get( '[data-cy="screen"]' ).should( 'contain', '0.' );
        cy.get( '[data-cy="5_button"]' ).click();
        cy.get( '[data-cy="screen"]' ).should( 'contain', '0.5' );
        cy.get( '[data-cy="5_button"]' ).click();
        cy.get( '[data-cy="screen"]' ).should( 'contain', '0.55' );

        cy.get( '[data-cy="=_button"]' ).click();
        cy.get( '[data-cy="screen"]' ).should( 'contain', '2.55' );
    } );
} );
