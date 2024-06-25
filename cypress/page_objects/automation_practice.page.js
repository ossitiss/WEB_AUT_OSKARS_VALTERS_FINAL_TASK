
export class automation_practice{

    static visit(){
        return cy.visit("https://demoqa.com/automation-practice-form");
    }

    static get enterFirstName(){
        return cy.get("#firstName");
    }

    static get enterLastName(){
        return cy.get("#lastName");
    }

    static get enterUserEmail(){
        return cy.get("#userEmail");
    }
    
    static checkRadioButton(value){
        return cy.get(`input[type="radio"][value="${value}"]`);
    }

    static get enterPhoneNr(){
        return cy.get("#userNumber");
    }

    static get clickdateOfBirthInput(){
        return cy.get("#dateOfBirthInput");
    }

    static get selectMonth(){
        return cy.get('.react-datepicker__month-dropdown-container select');
    }

    static get selectYear(){
        return cy.get('.react-datepicker__year-dropdown-container select');
    }

    static get selectDay(){
        return cy.get('[aria-label="Choose Friday, February 28th, 1930"]');
    }

    static get selectSubject() {
        return cy.get('#subjectsInput');
    }
    
    static selectMusicCheckbox(value){
        return cy.get(`input[type="checkbox"][id="${value}"]`);
    }

    static get uploadImg(){
        return cy.get('input[type=file][id="uploadPicture"]').selectFile('cypress/image/Untitled.png')
    }

    static get writeAdress(){
        return cy.get("#currentAddress");
    }

    static get selectState(){
       return cy.get('#state');
    }

    static get selectCity(){
        return cy.get('#city');
     }
    
     static get tbodyRowValid(){
        cy.get('tbody').within(() => {
            cy.contains('tr', 'Student Name').should('contain', 'Janis Berzins');
            cy.contains('tr', 'Student Email').should('contain', 'email@email.lv');
            cy.contains('tr', 'Gender').should('contain', 'Male');
            cy.contains('tr', 'Mobile').should('contain', '9876543210');
            cy.contains('tr', 'Date of Birth').should('contain', '28 February,1930');
            cy.contains('tr', 'Subjects').should('contain', 'Economics');
            cy.contains('tr', 'Hobbies').should('contain', 'Music');
            cy.contains('tr', 'Picture').should('contain', 'Untitled.png');
            cy.contains('tr', 'Address').should('contain', 'Random Adress 10-20'); 
            cy.contains('tr', 'State and City').should('contain', 'NCR Delhi');
        });
     }
}
