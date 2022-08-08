class LoginPage {

    usernameInputField(){
        return cy.get("#username")
      
    }

    passwordInputField(){
        return cy.get("#password")

    }
    inPatientWard(){
        return cy.get("[id='Inpatient Ward']")

    }
    isolationWard(){
        return cy.get("[id='Isolation Ward']")
    }
    laboratory(){
        return cy.get("#Laboratory")
    }
    outpatientClinic(){
        return cy.get("[id='Outpatient Clinic']")
    }
    pharmacy(){
        return cy.get("#Pharmacy")
    }
    registrationDesk(){
        return cy.get("[id='Registration Desk']")
    }
    loginButton(){
        return cy.get("#loginButton")
    }
    locationErrorElement(){
        return cy.get("#sessionLocationError")
    }

    usernamePasswordErrorElement(){
        return cy.get("#error-message")
    }

    cantLoginLink(){
        return cy.get('#cantLogin')
    }
    cantLoginModalElement(){
        return cy.get(".dialog-instructions")
    }
}

export default LoginPage;