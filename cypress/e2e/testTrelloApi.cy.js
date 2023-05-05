/// <reference types= "cypress" />

const credentials = Cypress.env('CREDENTIALS_SECRET');

describe("Boards manipulation whit API", function() {
	before('Create a new Board in Trello', function() {
        cy.fixture('credentials.json').then(function(value) {
            const token = value.token;
            const key = value.key;
			const boardName = value.boardName;
            
            cy.boardCreate(key, token, boardName);
        });
    });
    
    it('Update board name', function() {
        
        cy.fixture('credentials.json').then(function(value) {
            const token = value.token;
            const key = value.key;
            const newBoardName = value.newBoardName;
            
            cy.boardUpdate(key, token, newBoardName);
        });
    });
    
    after('Delete the Board created',()=>{
        cy.fixture('credentials.json').then(function(value) {
            const token = value.token;
            const key = value.key;
            
            cy.boardDelete(key, token);
        });
    });
});

