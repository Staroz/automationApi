// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
Cypress.Commands.add('boardCreate', function(key, token, boardName) {

    cy.request({
        url: `?name=${boardName}&key=${key}&token=${token}`,
        method: 'POST',
        }).then(function(response){
            expect(response.status).to.eq(200);
            const id = response.body.id;
            console.log(id);
            cy.wrap(id).as('id');
            });
});

Cypress.Commands.add('boardUpdate', function(key, token, newBoardName) {

    cy.request({
        url: `${this.id}?&key=${key}&token=${token}&name=${newBoardName}`,
        method: 'PUT'
    }).then(response => {
        expect(response.status).to.eq(200);
        });
});

Cypress.Commands.add('boardDelete', function(key, token) {

        cy.request({
        url: `${this.id}?key=${key}&token=${token}`,
        method: 'DELETE',
        }).then(response=>{
                expect(response.status).to.eq(200);
            });
    })



// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })