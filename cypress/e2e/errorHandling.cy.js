/// <reference types="cypress" />

beforeEach( () => {
    cy.visit( '/');
    cy.get('[data-cy="ON/C_button"]').click();
    cy.get('[data-cy="screen"]').should( 'contain', '0.');
});

describe( 'Error Handling and Recovery', () => {
    describe( 'Division by Zero', () => {
        it( 'Shows error when dividing by zero', () => {
            cy.get('[data-cy="8_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '8.');
            cy.get('[data-cy="÷_button"]').click();
            cy.get('[data-cy="0_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '0.');
            cy.get('[data-cy="=_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', 'E');
        });

        it( 'Shows error when dividing decimal by zero', () => {
            cy.get('[data-cy="3_button"]').click();
            cy.get('[data-cy="._button"]').click();
            cy.get('[data-cy="1_button"]').click();
            cy.get('[data-cy="4_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '3.14');
            cy.get('[data-cy="÷_button"]').click();
            cy.get('[data-cy="0_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '0.');
            cy.get('[data-cy="=_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', 'E');
        });

        it( 'Shows error when dividing zero by zero', () => {
            cy.get('[data-cy="0_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '0.');
            cy.get('[data-cy="÷_button"]').click();
            cy.get('[data-cy="0_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '0.');
            cy.get('[data-cy="=_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', 'E');
        });

        it( 'Handles division by zero in chain calculations', () => {
            // 5 + 3 = 8, then 8 / 0 = error
            cy.get('[data-cy="5_button"]').click();
            cy.get('[data-cy="+_button"]').click();
            cy.get('[data-cy="3_button"]').click();
            cy.get('[data-cy="÷_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '8.');
            cy.get('[data-cy="0_button"]').click();
            cy.get('[data-cy="=_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', 'E');
        });
    });

    describe( 'Square Root of Negative Numbers', () => {
        it( 'Handles square root of negative number', () => {
            cy.get('[data-cy="9_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '9.');
            cy.get('[data-cy="+/-_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '-9.');
            cy.get('[data-cy="√_button"]').click();
            
            // Should show NaN or error - check what the calculator actually does
            cy.get('[data-cy="screen"]').should( 'not.contain', '-9.');
            // The result should be NaN or some error indication
        });

        it( 'Handles square root of negative decimal', () => {
            cy.get('[data-cy="4_button"]').click();
            cy.get('[data-cy="._button"]').click();
            cy.get('[data-cy="5_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '4.5');
            cy.get('[data-cy="+/-_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '-4.5');
            cy.get('[data-cy="√_button"]').click();
            
            // Should handle negative square root appropriately
            cy.get('[data-cy="screen"]').should( 'not.contain', '-4.5');
        });
    });

    describe( 'Calculator Off State', () => {
        it( 'Shows alert when trying to use number buttons before turning on', () => {
            cy.visit( '/'); // Fresh visit without turning on
            
            cy.window().then((win) => {
                cy.stub(win, 'alert').as('windowAlert');
            });
            
            cy.get('[data-cy="5_button"]').click();
            cy.get('@windowAlert').should( 'have.been.calledWith', 'Turn the calculator on first!');
        });

        it( 'Shows alert when trying to use operation buttons before turning on', () => {
            cy.visit( '/'); // Fresh visit without turning on
            
            cy.window().then((win) => {
                cy.stub(win, 'alert').as('windowAlert');
            });
            
            cy.get('[data-cy="+_button"]').click();
            cy.get('@windowAlert').should( 'have.been.calledWith', 'Turn the calculator on first!');
        });

        it( 'Shows alert when trying to use specialty buttons before turning on', () => {
            cy.visit( '/'); // Fresh visit without turning on
            
            cy.window().then((win) => {
                cy.stub(win, 'alert').as('windowAlert');
            });
            
            cy.get('[data-cy="√_button"]').click();
            cy.get('@windowAlert').should( 'have.been.calledWith', 'Turn the calculator on first!');
        });

        it( 'Shows alert when trying to use memory buttons before turning on', () => {
            cy.visit( '/'); // Fresh visit without turning on
            
            cy.window().then((win) => {
                cy.stub(win, 'alert').as('windowAlert');
            });
            
            cy.get('[data-cy="MRC_button"]').click();
            cy.get('@windowAlert').should( 'have.been.calledWith', 'Turn the calculator on first!');
        });

        it( 'Allows ON/C button when calculator is off', () => {
            cy.visit( '/'); // Fresh visit
            cy.get('[data-cy="ON/C_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '0.');
        });
    });

    describe( 'Error Recovery', () => {
        it( 'Recovers from division by zero error with ON/C', () => {
            // Create error state
            cy.get('[data-cy="5_button"]').click();
            cy.get('[data-cy="÷_button"]').click();
            cy.get('[data-cy="0_button"]').click();
            cy.get('[data-cy="=_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', 'E');
            
            // Clear error and verify normal operation
            cy.get('[data-cy="ON/C_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '0.');
            
            // Test that calculator works normally after error
            cy.get('[data-cy="3_button"]').click();
            cy.get('[data-cy="+_button"]').click();
            cy.get('[data-cy="2_button"]').click();
            cy.get('[data-cy="=_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '5.');
        });

        it( 'Recovers from square root of negative error', () => {
            // Create error with negative square root
            cy.get('[data-cy="4_button"]').click();
            cy.get('[data-cy="+/-_button"]').click();
            cy.get('[data-cy="√_button"]').click();
            
            // Clear any error state
            cy.get('[data-cy="ON/C_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '0.');
            
            // Verify normal operation
            cy.get('[data-cy="9_button"]').click();
            cy.get('[data-cy="√_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '3.');
        });

        it( 'Handles multiple consecutive errors gracefully', () => {
            // First error: divide by zero
            cy.get('[data-cy="7_button"]').click();
            cy.get('[data-cy="÷_button"]').click();
            cy.get('[data-cy="0_button"]').click();
            cy.get('[data-cy="=_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', 'E');
            
            // Try another operation that might cause error (without clearing)
            cy.get('[data-cy="√_button"]').click();
            
            // Clear and verify recovery
            cy.get('[data-cy="ON/C_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '0.');
            
            // Normal operation should work
            cy.get('[data-cy="2_button"]').click();
            cy.get('[data-cy="x_button"]').click();
            cy.get('[data-cy="3_button"]').click();
            cy.get('[data-cy="=_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '6.');
        });
    });

    describe( 'Invalid Operation Sequences', () => {
        it( 'Handles operation button pressed without operands', () => {
            // Try operation immediately after turning on
            cy.get('[data-cy="+_button"]').click();
            
            // Should handle gracefully - might ignore or use 0 as first operand
            cy.get('[data-cy="5_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '5.');
            cy.get('[data-cy="=_button"]').click();
            
            // Result depends on implementation - could be 5 if it used 0 + 5
            cy.get('[data-cy="screen"]').should( 'not.be.empty');
        });

        it( 'Handles equals button pressed without complete operation', () => {
            cy.get('[data-cy="5_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '5.');
            cy.get('[data-cy="=_button"]').click();
            
            // Should probably just show the current number
            cy.get('[data-cy="screen"]').should( 'contain', '5.');
        });

        it( 'Handles multiple consecutive operation buttons', () => {
            cy.get('[data-cy="8_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '8.');
            cy.get('[data-cy="+_button"]').click();
            cy.get('[data-cy="-_button"]').click(); // Consecutive operation
            cy.get('[data-cy="3_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '3.');
            cy.get('[data-cy="=_button"]').click();
            
            // Just verify the calculator doesn't crash and shows some result
            cy.get('[data-cy="screen"]').should('not.be.empty');
        });

        it( 'Handles multiple consecutive equals buttons', () => {
            cy.get('[data-cy="6_button"]').click();
            cy.get('[data-cy="+_button"]').click();
            cy.get('[data-cy="4_button"]').click();
            cy.get('[data-cy="=_button"]').click();
            cy.get('[data-cy="screen"]').should( 'contain', '10.');
            
            // Press equals again - behavior depends on implementation
            cy.get('[data-cy="=_button"]').click();
            cy.get('[data-cy="screen"]').should( 'not.be.empty');
        });
    });
});