export class BasePage {
    static get url() {
        return '';
    }
    static visit() {
        cy.visit(this.url);
    }   
    
    static get textSuccess() {
        return cy.get('.text-success');
    }

    static get submitButton() {
        return cy.get('#submit');
    }
}