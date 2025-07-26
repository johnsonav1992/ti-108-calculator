/// <reference types="cypress" />

beforeEach( () => {
    cy.visit( '/' );
    cy.get( '[data-cy="ON/C_button"]' ).click();
    cy.get( '[data-cy="screen"]' ).should( 'contain', '0.' );
} );

describe( 'Specialty Functions', () => {
    describe( 'Square Root (√)', () => {
        it( 'Calculates square root of perfect square', () => {
            cy.get( '[data-cy="9_button"]' ).click();
            cy.get( '[data-cy="screen"]' ).should( 'contain', '9.' );
            cy.get( '[data-cy="√_button"]' ).click();
            cy.get( '[data-cy="screen"]' ).should( 'contain', '3.' );
        } );

        it( 'Calculates square root of 16', () => {
            cy.get( '[data-cy="1_button"]' ).click();
            cy.get( '[data-cy="6_button"]' ).click();
            cy.get( '[data-cy="screen"]' ).should( 'contain', '16.' );
            cy.get( '[data-cy="√_button"]' ).click();
            cy.get( '[data-cy="screen"]' ).should( 'contain', '4.' );
        } );

        it( 'Calculates square root of decimal', () => {
            cy.get( '[data-cy="2_button"]' ).click();
            cy.get( '[data-cy="._button"]' ).click();
            cy.get( '[data-cy="2_button"]' ).click();
            cy.get( '[data-cy="5_button"]' ).click();
            cy.get( '[data-cy="screen"]' ).should( 'contain', '2.25' );
            cy.get( '[data-cy="√_button"]' ).click();
            cy.get( '[data-cy="screen"]' ).should( 'contain', '1.5' );
        } );

        it( 'Calculates square root of 2 (irrational)', () => {
            cy.get( '[data-cy="2_button"]' ).click();
            cy.get( '[data-cy="screen"]' ).should( 'contain', '2.' );
            cy.get( '[data-cy="√_button"]' ).click();
            cy.get( '[data-cy="screen"]' ).should( 'contain', '1.4142136.' );
        } );

        it( 'Square root of 1', () => {
            cy.get( '[data-cy="1_button"]' ).click();
            cy.get( '[data-cy="screen"]' ).should( 'contain', '1.' );
            cy.get( '[data-cy="√_button"]' ).click();
            cy.get( '[data-cy="screen"]' ).should( 'contain', '1.' );
        } );

        it( 'Square root of 0 returns 0', () => {
            cy.get( '[data-cy="0_button"]' ).click();
            cy.get( '[data-cy="screen"]' ).should( 'contain', '0.' );
            cy.get( '[data-cy="√_button"]' ).click();
            cy.get( '[data-cy="screen"]' ).should( 'contain', '0.' );
        } );

        it( 'Square root in calculation chain', () => {
            cy.get( '[data-cy="1_button"]' ).click();
            cy.get( '[data-cy="6_button"]' ).click();
            cy.get( '[data-cy="screen"]' ).should( 'contain', '16.' );
            cy.get( '[data-cy="√_button"]' ).click();
            cy.get( '[data-cy="screen"]' ).should( 'contain', '4.' );
            cy.get( '[data-cy="+_button"]' ).click();
            cy.get( '[data-cy="5_button"]' ).click();
            cy.get( '[data-cy="screen"]' ).should( 'contain', '5.' );
            cy.get( '[data-cy="=_button"]' ).click();
            cy.get( '[data-cy="screen"]' ).should( 'contain', '9.' );
        } );
    } );

    describe( 'Percentage (%)', () => {
        it( 'Calculates basic percentage - 50% of 100', () => {
            cy.get( '[data-cy="1_button"]' ).click();
            cy.get( '[data-cy="0_button"]' ).click();
            cy.get( '[data-cy="0_button"]' ).click();
            cy.get( '[data-cy="screen"]' ).should( 'contain', '100.' );
            cy.get( '[data-cy="x_button"]' ).click();
            cy.get( '[data-cy="5_button"]' ).click();
            cy.get( '[data-cy="0_button"]' ).click();
            cy.get( '[data-cy="screen"]' ).should( 'contain', '50.' );
            cy.get( '[data-cy="%_button"]' ).click();
            cy.get( '[data-cy="screen"]' ).should( 'contain', '50.' );
        } );

        it( 'Calculates percentage addition - 100 + 20%', () => {
            cy.get( '[data-cy="1_button"]' ).click();
            cy.get( '[data-cy="0_button"]' ).click();
            cy.get( '[data-cy="0_button"]' ).click();
            cy.get( '[data-cy="screen"]' ).should( 'contain', '100.' );
            cy.get( '[data-cy="+_button"]' ).click();
            cy.get( '[data-cy="2_button"]' ).click();
            cy.get( '[data-cy="0_button"]' ).click();
            cy.get( '[data-cy="screen"]' ).should( 'contain', '20.' );
            cy.get( '[data-cy="%_button"]' ).click();
            cy.get( '[data-cy="screen"]' ).should( 'contain', '120.' );
        } );

        it( 'Calculates percentage subtraction - 100 - 25%', () => {
            cy.get( '[data-cy="1_button"]' ).click();
            cy.get( '[data-cy="0_button"]' ).click();
            cy.get( '[data-cy="0_button"]' ).click();
            cy.get( '[data-cy="screen"]' ).should( 'contain', '100.' );
            cy.get( '[data-cy="-_button"]' ).click();
            cy.get( '[data-cy="2_button"]' ).click();
            cy.get( '[data-cy="5_button"]' ).click();
            cy.get( '[data-cy="screen"]' ).should( 'contain', '25.' );
            cy.get( '[data-cy="%_button"]' ).click();
            cy.get( '[data-cy="screen"]' ).should( 'contain', '75.' );
        } );

        it( 'Calculates percentage division - 200 ÷ 25%', () => {
            cy.get( '[data-cy="2_button"]' ).click();
            cy.get( '[data-cy="0_button"]' ).click();
            cy.get( '[data-cy="0_button"]' ).click();
            cy.get( '[data-cy="screen"]' ).should( 'contain', '200.' );
            cy.get( '[data-cy="÷_button"]' ).click();
            cy.get( '[data-cy="2_button"]' ).click();
            cy.get( '[data-cy="5_button"]' ).click();
            cy.get( '[data-cy="screen"]' ).should( 'contain', '25.' );
            cy.get( '[data-cy="%_button"]' ).click();
            cy.get( '[data-cy="screen"]' ).should( 'contain', '800.' );
        } );

        it( 'Calculates percentage of decimal number', () => {
            cy.get( '[data-cy="1_button"]' ).click();
            cy.get( '[data-cy="2_button"]' ).click();
            cy.get( '[data-cy="._button"]' ).click();
            cy.get( '[data-cy="5_button"]' ).click();
            cy.get( '[data-cy="screen"]' ).should( 'contain', '12.5' );
            cy.get( '[data-cy="x_button"]' ).click();
            cy.get( '[data-cy="8_button"]' ).click();
            cy.get( '[data-cy="screen"]' ).should( 'contain', '8.' );
            cy.get( '[data-cy="%_button"]' ).click();
            cy.get( '[data-cy="screen"]' ).should( 'contain', '1.' );
        } );
    } );

    describe( 'Plus/Minus Toggle (+/-)', () => {
        it( 'Makes positive number negative', () => {
            cy.get( '[data-cy="5_button"]' ).click();
            cy.get( '[data-cy="screen"]' ).should( 'contain', '5.' );
            cy.get( '[data-cy="+/-_button"]' ).click();
            cy.get( '[data-cy="screen"]' ).should( 'contain', '-5.' );
        } );

        it( 'Makes negative number positive', () => {
            cy.get( '[data-cy="7_button"]' ).click();
            cy.get( '[data-cy="screen"]' ).should( 'contain', '7.' );
            cy.get( '[data-cy="+/-_button"]' ).click();
            cy.get( '[data-cy="screen"]' ).should( 'contain', '-7.' );
            cy.get( '[data-cy="+/-_button"]' ).click();
            cy.get( '[data-cy="screen"]' ).should( 'contain', '7.' );
        } );

        it( 'Toggles decimal number sign', () => {
            cy.get( '[data-cy="3_button"]' ).click();
            cy.get( '[data-cy="._button"]' ).click();
            cy.get( '[data-cy="1_button"]' ).click();
            cy.get( '[data-cy="4_button"]' ).click();
            cy.get( '[data-cy="screen"]' ).should( 'contain', '3.14' );
            cy.get( '[data-cy="+/-_button"]' ).click();
            cy.get( '[data-cy="screen"]' ).should( 'contain', '-3.14' );
        } );

        it( 'Does not affect zero', () => {
            cy.get( '[data-cy="0_button"]' ).click();
            cy.get( '[data-cy="screen"]' ).should( 'contain', '0.' );
            cy.get( '[data-cy="+/-_button"]' ).click();
            cy.get( '[data-cy="screen"]' ).should( 'contain', '0.' );
        } );

        it( 'Toggles sign during calculation', () => {
            cy.get( '[data-cy="8_button"]' ).click();
            cy.get( '[data-cy="screen"]' ).should( 'contain', '8.' );
            cy.get( '[data-cy="+/-_button"]' ).click();
            cy.get( '[data-cy="screen"]' ).should( 'contain', '-8.' );
            cy.get( '[data-cy="+_button"]' ).click();
            cy.get( '[data-cy="3_button"]' ).click();
            cy.get( '[data-cy="screen"]' ).should( 'contain', '3.' );
            cy.get( '[data-cy="=_button"]' ).click();
            cy.get( '[data-cy="screen"]' ).should( 'contain', '-5.' );
        } );

        it( 'Toggles result after calculation', () => {
            cy.get( '[data-cy="6_button"]' ).click();
            cy.get( '[data-cy="screen"]' ).should( 'contain', '6.' );
            cy.get( '[data-cy="+_button"]' ).click();
            cy.get( '[data-cy="4_button"]' ).click();
            cy.get( '[data-cy="screen"]' ).should( 'contain', '4.' );
            cy.get( '[data-cy="=_button"]' ).click();
            cy.get( '[data-cy="screen"]' ).should( 'contain', '10.' );
            cy.get( '[data-cy="+/-_button"]' ).click();
            cy.get( '[data-cy="screen"]' ).should( 'contain', '-10.' );
        } );
    } );
} );
