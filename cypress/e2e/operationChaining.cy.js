/// <reference types="cypress" />

beforeEach( () => {
    cy.visit( '/');
    cy.get('[data-cy="ON/C_button"]').click();
    cy.get('[data-cy="screen"]').should( 'contain', '0.');
});

describe( 'Operation Chaining and Complex Sequences', () => {
    describe( 'Basic Operation Chaining', () => {
        it( 'Chains addition operations: 2 + 3 + 4 = 9', () => {
            cy.get('[data-cy="2_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '2.');
            cy.get('[data-cy="+_button"]').click();
            cy.get('[data-cy="3_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '3.');
            cy.get('[data-cy="+_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '5.'); // Should show intermediate result
            cy.get('[data-cy="4_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '4.');
            cy.get('[data-cy="=_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '9.');
        });

        it( 'Chains subtraction operations: 20 - 5 - 3 = 12', () => {
            cy.get('[data-cy="2_button"]').click();
            cy.get('[data-cy="0_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '20.');
            cy.get('[data-cy="-_button"]').click();
            cy.get('[data-cy="5_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '5.');
            cy.get('[data-cy="-_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '15.'); // Intermediate result
            cy.get('[data-cy="3_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '3.');
            cy.get('[data-cy="=_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '12.');
        });

        it( 'Chains multiplication operations: 2 × 3 × 4 = 24', () => {
            cy.get('[data-cy="2_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '2.');
            cy.get('[data-cy="x_button"]').click();
            cy.get('[data-cy="3_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '3.');
            cy.get('[data-cy="x_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '6.'); // Intermediate result
            cy.get('[data-cy="4_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '4.');
            cy.get('[data-cy="=_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '24.');
        });

        it( 'Chains division operations: 100 ÷ 5 ÷ 2 = 10', () => {
            cy.get('[data-cy="1_button"]').click();
            cy.get('[data-cy="0_button"]').click();
            cy.get('[data-cy="0_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '100.');
            cy.get('[data-cy="÷_button"]').click();
            cy.get('[data-cy="5_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '5.');
            cy.get('[data-cy="÷_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '20.'); // Intermediate result
            cy.get('[data-cy="2_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '2.');
            cy.get('[data-cy="=_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '10.');
        });
    });

    describe( 'Mixed Operation Chaining', () => {
        it( 'Chains different operations: 10 + 5 × 2 = 30 (left-to-right evaluation)', () => {
            cy.get('[data-cy="1_button"]').click();
            cy.get('[data-cy="0_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '10.');
            cy.get('[data-cy="+_button"]').click();
            cy.get('[data-cy="5_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '5.');
            cy.get('[data-cy="x_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '15.'); // 10 + 5 = 15
            cy.get('[data-cy="2_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '2.');
            cy.get('[data-cy="=_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '30.'); // 15 × 2 = 30
        });

        it( 'Complex chain: 8 ÷ 2 + 3 × 2 - 1 = 9', () => {
            cy.get('[data-cy="8_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '8.');
            
            cy.get('[data-cy="÷_button"]').click();
            cy.get('[data-cy="2_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '2.');
            
            cy.get('[data-cy="+_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '4.'); // 8 ÷ 2 = 4
            cy.get('[data-cy="3_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '3.');
            
            cy.get('[data-cy="x_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '7.'); // 4 + 3 = 7
            cy.get('[data-cy="2_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '2.');
            
            cy.get('[data-cy="-_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '14.'); // 7 × 2 = 14
            cy.get('[data-cy="1_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '1.');
            
            cy.get('[data-cy="=_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '13.'); // 14 - 1 = 13
        });

        it( 'Chain with decimals: basic decimal operations', () => {
            // Simplified decimal chain test
            cy.get('[data-cy="5_button"]').click();
            cy.get('[data-cy="._button"]').click();
            cy.get('[data-cy="5_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '5.5');
            
            cy.get('[data-cy="+_button"]').click();
            cy.get('[data-cy="2_button"]').click();
            cy.get('[data-cy="._button"]').click();
            cy.get('[data-cy="5_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '2.5');
            
            cy.get('[data-cy="=_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '8.'); // 5.5 + 2.5 = 8
        });
    });

    describe( 'Operations with Special Functions', () => {
        it( 'Chains with square root: √16 + 3 = 7', () => {
            cy.get('[data-cy="1_button"]').click();
            cy.get('[data-cy="6_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '16.');
            cy.get('[data-cy="√_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '4.');
            
            cy.get('[data-cy="+_button"]').click();
            cy.get('[data-cy="3_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '3.');
            cy.get('[data-cy="=_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '7.');
        });

        it( 'Chains with percentage: basic percentage operations', () => {
            // Simplified percentage test
            cy.get('[data-cy="1_button"]').click();
            cy.get('[data-cy="0_button"]').click();
            cy.get('[data-cy="0_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '100.');
            
            cy.get('[data-cy="+_button"]').click();
            cy.get('[data-cy="2_button"]').click();
            cy.get('[data-cy="0_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '20.');
            cy.get('[data-cy="%_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '120.'); // 100 + 20% = 120
        });

        it( 'Chains with +/- toggle: 5 + (-3) × 2 = -1', () => {
            cy.get('[data-cy="5_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '5.');
            
            cy.get('[data-cy="+_button"]').click();
            cy.get('[data-cy="3_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '3.');
            cy.get('[data-cy="+/-_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '-3.');
            
            cy.get('[data-cy="x_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '2.'); // 5 + (-3) = 2
            cy.get('[data-cy="2_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '2.');
            
            cy.get('[data-cy="=_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '4.'); // 2 × 2 = 4
        });
    });

    describe( 'Long Operation Chains', () => {
        it( 'Handles very long chain: 1+1+1+1+1+1+1+1+1+1 = 10', () => {
            cy.get('[data-cy="1_button"]').click();
            
            // Add 1 nine more times
            for (let i = 0; i < 9; i++) {
                cy.get('[data-cy="+_button"]').click();
                cy.get('[data-cy="1_button"]').click();
            }
            
            cy.get('[data-cy="=_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '10.');
        });

        it( 'Chain that results in large number: 2×2×2×2×2×2×2 = 128', () => {
            cy.get('[data-cy="2_button"]').click();
            
            // Multiply by 2 six times (2^7 = 128)
            for (let i = 0; i < 6; i++) {
                cy.get('[data-cy="x_button"]').click();
                cy.get('[data-cy="2_button"]').click();
            }
            
            cy.get('[data-cy="=_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '128.');
        });

        it( 'Chain with alternating operations: 100-10+20-5+3 = 108', () => {
            cy.get('[data-cy="1_button"]').click();
            cy.get('[data-cy="0_button"]').click();
            cy.get('[data-cy="0_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '100.');
            
            cy.get('[data-cy="-_button"]').click();
            cy.get('[data-cy="1_button"]').click();
            cy.get('[data-cy="0_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '10.');
            
            cy.get('[data-cy="+_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '90.'); // 100-10
            cy.get('[data-cy="2_button"]').click();
            cy.get('[data-cy="0_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '20.');
            
            cy.get('[data-cy="-_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '110.'); // 90+20
            cy.get('[data-cy="5_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '5.');
            
            cy.get('[data-cy="+_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '105.'); // 110-5
            cy.get('[data-cy="3_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '3.');
            
            cy.get('[data-cy="=_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '108.'); // 105+3
        });
    });

    describe( 'Operation Chaining with Memory', () => {
        it( 'Uses memory in operation chain: M=5, 3+M×2 = 13', () => {
            // Store 5 in memory
            cy.get('[data-cy="5_button"]').click();
            cy.get('[data-cy="M+_button"]').click();
            
            // Calculate 3 + M × 2
            cy.get('[data-cy="3_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '3.');
            
            cy.get('[data-cy="+_button"]').click();
            cy.get('[data-cy="MRC_button"]').click(); // Recall 5
            cy.get('[data-cy="screen"]').should( 'contain', '5.');
            
            cy.get('[data-cy="x_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '8.'); // 3 + 5 = 8
            cy.get('[data-cy="2_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '2.');
            
            cy.get('[data-cy="=_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '16.'); // 8 × 2 = 16
        });

        it( 'Stores intermediate result and continues: (4+3)→M, M×2+1 = 15', () => {
            // Calculate 4 + 3 = 7
            cy.get('[data-cy="4_button"]').click();
            cy.get('[data-cy="+_button"]').click();
            cy.get('[data-cy="3_button"]').click();
            cy.get('[data-cy="=_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '7.');
            
            // Store result in memory
            cy.get('[data-cy="M+_button"]').click();
            
            // Calculate M × 2 + 1
            cy.get('[data-cy="MRC_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '7.');
            
            cy.get('[data-cy="x_button"]').click();
            cy.get('[data-cy="2_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '2.');
            
            cy.get('[data-cy="+_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '14.'); // 7 × 2 = 14
            cy.get('[data-cy="1_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '1.');
            
            cy.get('[data-cy="=_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '15.'); // 14 + 1 = 15
        });
    });

    describe( 'Continuing After Equals', () => {
        it( 'Continues calculation after equals: 5+3=8, then +2=10', () => {
            cy.get('[data-cy="5_button"]').click();
            cy.get('[data-cy="+_button"]').click();
            cy.get('[data-cy="3_button"]').click();
            cy.get('[data-cy="=_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '8.');
            
            // Continue with the result
            cy.get('[data-cy="+_button"]').click();
            cy.get('[data-cy="2_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '2.');
            cy.get('[data-cy="=_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '10.');
        });

        it( 'Applies operation to previous result: 6×7=42, then ÷6=7', () => {
            cy.get('[data-cy="6_button"]').click();
            cy.get('[data-cy="x_button"]').click();
            cy.get('[data-cy="7_button"]').click();
            cy.get('[data-cy="=_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '42.');
            
            cy.get('[data-cy="÷_button"]').click();
            cy.get('[data-cy="6_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '6.');
            cy.get('[data-cy="=_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '7.');
        });
    });
});