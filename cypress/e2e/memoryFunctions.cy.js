/// <reference types="cypress" />

beforeEach( () => {
    cy.visit( '/');
    cy.get('[data-cy="ON/C_button"]').click();
    cy.get('[data-cy="screen"]').should( 'contain', '0.');
});

describe( 'Memory Functions', () => {
    describe( 'Memory Store and Recall (MRC)', () => {
        it( 'Stores number in memory with M+ and recalls with MRC', () => {
            // Store 5 in memory
            cy.get('[data-cy="5_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '5.');
            cy.get('[data-cy="M+_button"]').click();
            
            // Clear screen and recall from memory
            cy.get('[data-cy="ON/C_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '0.');
            cy.get('[data-cy="MRC_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '5.');
        });

        it( 'Stores decimal number in memory', () => {
            // Store 3.14 in memory
            cy.get('[data-cy="3_button"]').click();
            cy.get('[data-cy="._button"]').click();
            cy.get('[data-cy="1_button"]').click();
            cy.get('[data-cy="4_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '3.14');
            cy.get('[data-cy="M+_button"]').click();
            
            // Clear and recall
            cy.get('[data-cy="ON/C_button"]').click();
            cy.get('[data-cy="MRC_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '3.14');
        });

        it( 'Clears memory when MRC pressed twice on same value', () => {
            // Store 7 in memory
            cy.get('[data-cy="7_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '7.');
            cy.get('[data-cy="M+_button"]').click();
            
            // First MRC recalls value
            cy.get('[data-cy="ON/C_button"]').click();
            cy.get('[data-cy="MRC_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '7.');
            
            // Second MRC on same value clears memory
            cy.get('[data-cy="MRC_button"]').click();
            
            // Try to recall again - should be 0
            cy.get('[data-cy="ON/C_button"]').click();
            cy.get('[data-cy="MRC_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '0.');
        });

        it( 'Recalls memory value in middle of calculation', () => {
            // Store 10 in memory
            cy.get('[data-cy="1_button"]').click();
            cy.get('[data-cy="0_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '10.');
            cy.get('[data-cy="M+_button"]').click();
            
            // Start calculation and use memory
            cy.get('[data-cy="5_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '5.');
            cy.get('[data-cy="+_button"]').click();
            cy.get('[data-cy="MRC_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '10.');
            cy.get('[data-cy="=_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '15.');
        });
    });

    describe( 'Memory Add (M+)', () => {
        it( 'Adds positive number to empty memory', () => {
            cy.get('[data-cy="8_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '8.');
            cy.get('[data-cy="M+_button"]').click();
            
            // Recall to verify
            cy.get('[data-cy="ON/C_button"]').click();
            cy.get('[data-cy="MRC_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '8.');
        });

        it( 'Adds multiple numbers to memory', () => {
            // Add 5 to memory
            cy.get('[data-cy="5_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '5.');
            cy.get('[data-cy="M+_button"]').click();
            
            // Add 3 to memory (total should be 8)
            cy.get('[data-cy="3_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '3.');
            cy.get('[data-cy="M+_button"]').click();
            
            // Recall to verify total
            cy.get('[data-cy="ON/C_button"]').click();
            cy.get('[data-cy="MRC_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '8.');
        });

        it( 'Adds decimal numbers to memory', () => {
            // Add 2.5 to memory
            cy.get('[data-cy="2_button"]').click();
            cy.get('[data-cy="._button"]').click();
            cy.get('[data-cy="5_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '2.5');
            cy.get('[data-cy="M+_button"]').click();
            
            // Add 1.3 to memory (total should be 3.8)
            cy.get('[data-cy="1_button"]').click();
            cy.get('[data-cy="._button"]').click();
            cy.get('[data-cy="3_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '1.3');
            cy.get('[data-cy="M+_button"]').click();
            
            // Recall to verify
            cy.get('[data-cy="ON/C_button"]').click();
            cy.get('[data-cy="MRC_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '3.8');
        });

        it( 'Adds negative number to memory', () => {
            // Add 10 to memory first
            cy.get('[data-cy="1_button"]').click();
            cy.get('[data-cy="0_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '10.');
            cy.get('[data-cy="M+_button"]').click();
            
            // Add -3 to memory (total should be 7)
            cy.get('[data-cy="3_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '3.');
            cy.get('[data-cy="+/-_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '-3.');
            cy.get('[data-cy="M+_button"]').click();
            
            // Recall to verify
            cy.get('[data-cy="ON/C_button"]').click();
            cy.get('[data-cy="MRC_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '7.');
        });
    });

    describe( 'Memory Subtract (M-)', () => {
        it( 'Subtracts number from empty memory', () => {
            cy.get('[data-cy="6_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '6.');
            cy.get('[data-cy="M-_button"]').click();
            
            // Recall to verify (should be -6)
            cy.get('[data-cy="ON/C_button"]').click();
            cy.get('[data-cy="MRC_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '-6.');
        });

        it( 'Subtracts from existing memory value', () => {
            // Add 10 to memory first
            cy.get('[data-cy="1_button"]').click();
            cy.get('[data-cy="0_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '10.');
            cy.get('[data-cy="M+_button"]').click();
            
            // Subtract 4 from memory (total should be 6)
            cy.get('[data-cy="4_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '4.');
            cy.get('[data-cy="M-_button"]').click();
            
            // Recall to verify
            cy.get('[data-cy="ON/C_button"]').click();
            cy.get('[data-cy="MRC_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '6.');
        });

        it( 'Subtracts decimal from memory', () => {
            // Add 5 to memory first
            cy.get('[data-cy="5_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '5.');
            cy.get('[data-cy="M+_button"]').click();
            
            // Subtract 1.5 from memory (total should be 3.5)
            cy.get('[data-cy="1_button"]').click();
            cy.get('[data-cy="._button"]').click();
            cy.get('[data-cy="5_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '1.5');
            cy.get('[data-cy="M-_button"]').click();
            
            // Recall to verify
            cy.get('[data-cy="ON/C_button"]').click();
            cy.get('[data-cy="MRC_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '3.5');
        });

        it( 'Subtracts negative number from memory (effectively adds)', () => {
            // Add 5 to memory first
            cy.get('[data-cy="5_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '5.');
            cy.get('[data-cy="M+_button"]').click();
            
            // Subtract -2 from memory (total should be 7)
            cy.get('[data-cy="2_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '2.');
            cy.get('[data-cy="+/-_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '-2.');
            cy.get('[data-cy="M-_button"]').click();
            
            // Recall to verify
            cy.get('[data-cy="ON/C_button"]').click();
            cy.get('[data-cy="MRC_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '7.');
        });
    });

    describe( 'Complex Memory Operations', () => {
        it( 'Combines M+, M-, and MRC in sequence', () => {
            // Start with 10 in memory
            cy.get('[data-cy="1_button"]').click();
            cy.get('[data-cy="0_button"]').click();
            cy.get('[data-cy="M+_button"]').click();
            
            // Add 5 (total: 15)
            cy.get('[data-cy="5_button"]').click();
            cy.get('[data-cy="M+_button"]').click();
            
            // Subtract 3 (total: 12)
            cy.get('[data-cy="3_button"]').click();
            cy.get('[data-cy="M-_button"]').click();
            
            // Add 8 (total: 20)
            cy.get('[data-cy="8_button"]').click();
            cy.get('[data-cy="M+_button"]').click();
            
            // Recall final result
            cy.get('[data-cy="ON/C_button"]').click();
            cy.get('[data-cy="MRC_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '20.');
        });

        it( 'Uses memory in calculation chain', () => {
            // Store 7 in memory
            cy.get('[data-cy="7_button"]').click();
            cy.get('[data-cy="M+_button"]').click();
            
            // Calculate 3 * (memory) = 3 * 7 = 21
            cy.get('[data-cy="3_button"]').click();
            cy.get('[data-cy="x_button"]').click();
            cy.get('[data-cy="MRC_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '7.');
            cy.get('[data-cy="=_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '21.');
        });

        it( 'Memory persists across multiple calculations', () => {
            // Store 100 in memory
            cy.get('[data-cy="1_button"]').click();
            cy.get('[data-cy="0_button"]').click();
            cy.get('[data-cy="0_button"]').click();
            cy.get('[data-cy="M+_button"]').click();
            
            // Do first calculation: 5 + 3 = 8
            cy.get('[data-cy="5_button"]').click();
            cy.get('[data-cy="+_button"]').click();
            cy.get('[data-cy="3_button"]').click();
            cy.get('[data-cy="=_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '8.');
            
            // Do second calculation: 2 * 4 = 8
            cy.get('[data-cy="2_button"]').click();
            cy.get('[data-cy="x_button"]').click();
            cy.get('[data-cy="4_button"]').click();
            cy.get('[data-cy="=_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '8.');
            
            // Memory should still contain 100
            cy.get('[data-cy="MRC_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '100.');
        });
    });
});