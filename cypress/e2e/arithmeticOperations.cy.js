/// <reference types="cypress" />

beforeEach(  () => {
    cy.visit(  '/' );
    cy.get( '[data-cy="ON/C_button"]' ).click();
    cy.get( '[data-cy="screen"]' ).should(  'contain', '0.' );
} );

describe(  'Arithmetic Operations', () => {
    describe( 'Subtraction', () => {
        it( 'Subtracts two single-digit numbers', () => {
            cy.get('[data-cy="9_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '9.');
            cy.get('[data-cy="-_button"]').click();
            cy.get('[data-cy="4_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '4.');
            cy.get('[data-cy="=_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '5.');
        });

        it( 'Subtracts resulting in negative number', () => {
            cy.get('[data-cy="3_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '3.');
            cy.get('[data-cy="-_button"]').click();
            cy.get('[data-cy="7_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '7.');
            cy.get('[data-cy="=_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '-4.');
        });

        it( 'Subtracts decimal numbers', () => {
            cy.get('[data-cy="5_button"]').click();
            cy.get('[data-cy="._button"]').click();
            cy.get('[data-cy="7_button"]').click();
            cy.get('[data-cy="5_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '5.75');
            cy.get('[data-cy="-_button"]').click();
            cy.get('[data-cy="2_button"]').click();
            cy.get('[data-cy="._button"]').click();
            cy.get('[data-cy="2_button"]').click();
            cy.get('[data-cy="5_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '2.25');
            cy.get('[data-cy="=_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '3.5');
        });

        it( 'Subtracts from zero', () => {
            cy.get('[data-cy="0_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '0.');
            cy.get('[data-cy="-_button"]').click();
            cy.get('[data-cy="5_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '5.');
            cy.get('[data-cy="=_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '-5.');
        });
    });

    describe( 'Multiplication', () => {
        it( 'Multiplies two single-digit numbers', () => {
            cy.get('[data-cy="7_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '7.');
            cy.get('[data-cy="x_button"]').click();
            cy.get('[data-cy="8_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '8.');
            cy.get('[data-cy="=_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '56.');
        });

        it( 'Multiplies by zero', () => {
            cy.get('[data-cy="9_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '9.');
            cy.get('[data-cy="x_button"]').click();
            cy.get('[data-cy="0_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '0.');
            cy.get('[data-cy="=_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '0.');
        });

        it( 'Multiplies decimal numbers', () => {
            cy.get('[data-cy="2_button"]').click();
            cy.get('[data-cy="._button"]').click();
            cy.get('[data-cy="5_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '2.5');
            cy.get('[data-cy="x_button"]').click();
            cy.get('[data-cy="4_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '4.');
            cy.get('[data-cy="=_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '10.');
        });

        it( 'Multiplies large numbers', () => {
            cy.get('[data-cy="9_button"]').click();
            cy.get('[data-cy="9_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '99.');
            cy.get('[data-cy="x_button"]').click();
            cy.get('[data-cy="9_button"]').click();
            cy.get('[data-cy="9_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '99.');
            cy.get('[data-cy="=_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '9801.');
        });
    });

    describe( 'Division', () => {
        it( 'Divides two single-digit numbers evenly', () => {
            cy.get('[data-cy="8_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '8.');
            cy.get('[data-cy="÷_button"]').click();
            cy.get('[data-cy="2_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '2.');
            cy.get('[data-cy="=_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '4.');
        });

        it( 'Divides resulting in decimal', () => {
            cy.get('[data-cy="7_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '7.');
            cy.get('[data-cy="÷_button"]').click();
            cy.get('[data-cy="2_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '2.');
            cy.get('[data-cy="=_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '3.5');
        });

        it( 'Divides decimal numbers', () => {
            cy.get('[data-cy="9_button"]').click();
            cy.get('[data-cy="._button"]').click();
            cy.get('[data-cy="6_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '9.6');
            cy.get('[data-cy="÷_button"]').click();
            cy.get('[data-cy="3_button"]').click();
            cy.get('[data-cy="._button"]').click();
            cy.get('[data-cy="2_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '3.2');
            cy.get('[data-cy="=_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '3.');
        });

        it( 'Divides by one', () => {
            cy.get('[data-cy="4_button"]').click();
            cy.get('[data-cy="2_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '42.');
            cy.get('[data-cy="÷_button"]').click();
            cy.get('[data-cy="1_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '1.');
            cy.get('[data-cy="=_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '42.');
        });

        it( 'Divides zero by number', () => {
            cy.get('[data-cy="0_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '0.');
            cy.get('[data-cy="÷_button"]').click();
            cy.get('[data-cy="5_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '5.');
            cy.get('[data-cy="=_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '0.');
        });
    });

    describe( 'Mixed Operations', () => {
        it( 'Performs addition then subtraction', () => {
            cy.get('[data-cy="1_button"]').click();
            cy.get('[data-cy="0_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '10.');
            cy.get('[data-cy="+_button"]').click();
            cy.get('[data-cy="5_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '5.');
            cy.get('[data-cy="-_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '15.');
            cy.get('[data-cy="3_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '3.');
            cy.get('[data-cy="=_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '12.');
        });

        it( 'Performs multiplication then division', () => {
            cy.get('[data-cy="6_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '6.');
            cy.get('[data-cy="x_button"]').click();
            cy.get('[data-cy="4_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '4.');
            cy.get('[data-cy="÷_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '24.');
            cy.get('[data-cy="2_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '2.');
            cy.get('[data-cy="=_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '12.');
        });
    });
});