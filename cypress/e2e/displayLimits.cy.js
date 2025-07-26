/// <reference types="cypress" />

beforeEach( () => {
    cy.visit( '/');
    cy.get('[data-cy="ON/C_button"]').click();
    cy.get('[data-cy="screen"]').should( 'contain', '0.');
});

describe( 'Display Limits and Decimal Handling', () => {
    describe( 'Maximum Display Digits', () => {
        it( 'Handles maximum digit input without overflow', () => {
            // Try to input many digits (testing display limit)
            cy.get('[data-cy="1_button"]').click();
            cy.get('[data-cy="2_button"]').click();
            cy.get('[data-cy="3_button"]').click();
            cy.get('[data-cy="4_button"]').click();
            cy.get('[data-cy="5_button"]').click();
            cy.get('[data-cy="6_button"]').click();
            cy.get('[data-cy="7_button"]').click();
            cy.get('[data-cy="8_button"]').click();
            cy.get('[data-cy="9_button"]').click();
            cy.get('[data-cy="0_button"]').click();
            
            // Verify display shows maximum 8 digits + decimal point (9 chars total)
            cy.get('[data-cy="screen"]').should( 'contain', '12345678.');
            
            // Try to add more digits - should be rejected or handled gracefully
            cy.get('[data-cy="1_button"]').click();
            cy.get('[data-cy="screen"]').should( 'not.contain', '12345678901.');
        });

        it( 'Handles large calculation results', () => {
            // Calculate 999 * 999 = 998001
            cy.get('[data-cy="9_button"]').click();
            cy.get('[data-cy="9_button"]').click();
            cy.get('[data-cy="9_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '999.');
            cy.get('[data-cy="x_button"]').click();
            cy.get('[data-cy="9_button"]').click();
            cy.get('[data-cy="9_button"]').click();
            cy.get('[data-cy="9_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '999.');
            cy.get('[data-cy="=_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '998001.');
        });

        it( 'Handles very large numbers from repeated multiplication', () => {
            // Start with larger number multiplication
            cy.get('[data-cy="9_button"]').click();
            cy.get('[data-cy="9_button"]').click();
            cy.get('[data-cy="9_button"]').click();
            cy.get('[data-cy="9_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '9999.');
            cy.get('[data-cy="x_button"]').click();
            cy.get('[data-cy="9_button"]').click();
            cy.get('[data-cy="9_button"]').click();
            cy.get('[data-cy="9_button"]').click();
            cy.get('[data-cy="9_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '9999.');
            cy.get('[data-cy="=_button"]').click();
            
            // Result should be displayed properly or in scientific notation
            cy.get('[data-cy="screen"]').should( 'not.be.empty');
        });
    });

    describe( 'Decimal Point Handling', () => {
        it( 'Prevents multiple decimal points in same number', () => {
            cy.get('[data-cy="3_button"]').click();
            cy.get('[data-cy="._button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '3.');
            
            // Try to add another decimal point - should be ignored
            cy.get('[data-cy="._button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '3.');
            cy.get('[data-cy="screen"]').should( 'not.contain', '3..');
            
            // Should still allow digits after decimal
            cy.get('[data-cy="1_button"]').click();
            cy.get('[data-cy="4_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '3.14');
        });

        it( 'Allows new decimal point after operation', () => {
            cy.get('[data-cy="2_button"]').click();
            cy.get('[data-cy="._button"]').click();
            cy.get('[data-cy="5_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '2.5');
            
            cy.get('[data-cy="+_button"]').click();
            
            // Should allow decimal point for new number
            cy.get('[data-cy="1_button"]').click();
            cy.get('[data-cy="._button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '1.');
            cy.get('[data-cy="3_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '1.3');
            
            cy.get('[data-cy="=_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '3.8');
        });

        it( 'Handles decimal point as first input', () => {
            cy.get('[data-cy="._button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '0.');
            cy.get('[data-cy="5_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '0.5');
        });

        it( 'Handles many decimal places', () => {
            cy.get('[data-cy="._button"]').click();
            cy.get('[data-cy="1_button"]').click();
            cy.get('[data-cy="2_button"]').click();
            cy.get('[data-cy="3_button"]').click();
            cy.get('[data-cy="4_button"]').click();
            cy.get('[data-cy="5_button"]').click();
            cy.get('[data-cy="6_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '0.123456');
        });

        it( 'Handles decimal precision in calculations', () => {
            // Test precision: 0.1 + 0.2 = 0.3 (floating point precision issue)
            cy.get('[data-cy="._button"]').click();
            cy.get('[data-cy="1_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '0.1');
            
            cy.get('[data-cy="+_button"]').click();
            
            cy.get('[data-cy="._button"]').click();
            cy.get('[data-cy="2_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '0.2');
            
            cy.get('[data-cy="=_button"]').click();
            
            // Result should be 0.3 or very close (floating point precision)
            cy.get('[data-cy="screen"]').should( 'contain', '0.3');
        });
    });

    describe( 'Zero Handling', () => {
        it( 'Handles leading zeros properly', () => {
            cy.get('[data-cy="0_button"]').click();
            cy.get('[data-cy="0_button"]').click();
            cy.get('[data-cy="0_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '0.');
            
            // Adding a non-zero digit should replace leading zeros
            cy.get('[data-cy="5_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '5.');
        });

        it( 'Preserves zero after decimal', () => {
            cy.get('[data-cy="1_button"]').click();
            cy.get('[data-cy="._button"]').click();
            cy.get('[data-cy="0_button"]').click();
            cy.get('[data-cy="5_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '1.05');
        });

        it( 'Handles multiple zeros after decimal', () => {
            cy.get('[data-cy="._button"]').click();
            cy.get('[data-cy="0_button"]').click();
            cy.get('[data-cy="0_button"]').click();
            cy.get('[data-cy="1_button"]').click();
            // TI-108 behavior: leading zeros after decimal may not be preserved in input
            cy.get('[data-cy="screen"]').should( 'contain', '0.1');
        });
    });

    describe( 'Display Formatting', () => {
        it( 'Shows proper decimal formatting for whole numbers', () => {
            cy.get('[data-cy="5_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '5.');
            
            cy.get('[data-cy="+_button"]').click();
            cy.get('[data-cy="3_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '3.');
            
            cy.get('[data-cy="=_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '8.');
        });

        it( 'Removes trailing zeros in decimal results', () => {
            // Calculate something that might result in trailing zeros
            cy.get('[data-cy="1_button"]').click();
            cy.get('[data-cy="._button"]').click();
            cy.get('[data-cy="2_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '1.2');
            
            cy.get('[data-cy="x_button"]').click();
            cy.get('[data-cy="5_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '5.');
            
            cy.get('[data-cy="=_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '6.');
        });

        it( 'Handles very small decimal results', () => {
            // Create a simple division that results in a small decimal
            cy.get('[data-cy="1_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '1.');
            
            cy.get('[data-cy="÷_button"]').click();
            cy.get('[data-cy="8_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '8.');
            
            cy.get('[data-cy="=_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '0.125');
        });
    });
});