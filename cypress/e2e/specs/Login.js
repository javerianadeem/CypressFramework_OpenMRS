// import { before } from 'cypress/types/lodash';
// import { beforeEach } from 'mocha';
import * as businessHelper from '../../helpers/businessHelpers'
import LoginPage from '../../pageObjects/LoginPage'

let loginPage;

before(()=> {
    loginPage = new LoginPage();
})

describe("Login Test cases",()=> {
    beforeEach(()=> {
        businessHelper.visitPage(businessHelper.configData.appUrl)
    })
    it("TC-001: Verify location error when user clicks login without entering any details", () => {
        loginPage.loginButton().click()
        businessHelper.assertElementByText(loginPage.locationErrorElement,businessHelper.loginData.locationErrorMessage)
    })

    it("TC-002: Verify login error when user is enters location but does not enter username or password", () => {
        loginPage.inPatientWard().click()
        loginPage.loginButton().click()
        businessHelper.assertElementByText(loginPage.usernamePasswordErrorElement,businessHelper.loginData.usernamePasswordErrorMessage)
    })

    it("TC-003: Verify input boxes of username, password and location category exists", () => {
        businessHelper.assertElementByVisibility(loginPage.usernameInputField)
        businessHelper.assertElementByVisibility(loginPage.passwordInputField)
        businessHelper.assertElementByVisibility(loginPage.inPatientWard)
        businessHelper.assertElementByVisibility(loginPage.isolationWard)
        businessHelper.assertElementByVisibility(loginPage.laboratory)
        businessHelper.assertElementByVisibility(loginPage.outpatientClinic)
        businessHelper.assertElementByVisibility(loginPage.pharmacy)
        businessHelper.assertElementByVisibility(loginPage.registrationDesk)
    })

    it("TC-004: Verify location error when user enters username and password and click login", () => {
        loginPage.usernameInputField().type(businessHelper.loginData.validUsername)
        loginPage.passwordInputField().type(businessHelper.loginData.validPassword)
        loginPage.loginButton().click()
        businessHelper.assertElementByText(loginPage.locationErrorElement,businessHelper.loginData.locationErrorMessage)

    })
    it("TC-005: Verify pop-up appears when user clicks 'Can't log in?'", () => {
        loginPage.cantLoginLink().click()
        businessHelper.assertElementByText(loginPage.cantLoginModalElement, businessHelper.loginData.cantLoginModalMessage)
    })
    it("TC-006: Verify error when user enters wrong credentials", () => {
        loginPage.usernameInputField().type(businessHelper.loginData.invalidUsername)
        loginPage.passwordInputField().type(businessHelper.loginData.invalidPassword)
        loginPage.inPatientWard().click()
        loginPage.loginButton().click()
    })
    it("TC-007: Verify user successfully lands on home page on entering correct credentials", () => {
        cy.validUserLogin()
    })

})