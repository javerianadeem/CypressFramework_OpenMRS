// import { before } from 'cypress/types/lodash';
// import { beforeEach } from 'mocha';
import * as businessHelper from '../../helpers/businessHelpers'
import HomePage from '../../pageObjects/HomePage'

let homePage;

before(()=> {
    homePage = new HomePage();
})

describe("Login Test cases",()=> {
    beforeEach(()=> {
        businessHelper.visitPage(businessHelper.configData.appUrl)
        cy.validUserLogin();

    })
    it("TC-001: Verify that all the tabs are visible", () => {
       
    })

    it("TC-002: Verify the header text is visible", () => {
        homePage.headerElement().contains(businessHelper.homeData.headerText)
    })

    // it("TC-003: Verify on clicking logout using is navigated to login page", () => {
    //     businessHelper.assertElementByVisibility(loginPage.usernameInputField)
    //     businessHelper.assertElementByVisibility(loginPage.passwordInputField)
    //     businessHelper.assertElementByVisibility(loginPage.inPatientWard)
    //     businessHelper.assertElementByVisibility(loginPage.isolationWard)
    //     businessHelper.assertElementByVisibility(loginPage.laboratory)
    //     businessHelper.assertElementByVisibility(loginPage.outpatientClinic)
    //     businessHelper.assertElementByVisibility(loginPage.pharmacy)
    //     businessHelper.assertElementByVisibility(loginPage.registrationDesk)
    // })

    

})