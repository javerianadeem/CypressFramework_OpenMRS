import LoginPage from '../PageObjects/LoginPage'
import HomePage from '../pageObjects/HomePage';
import * as businessHelper from '../helpers/businessHelpers'


let loginPage, homePage;
loginPage = new LoginPage()
homePage = new HomePage()

Cypress.Commands.add("validUserLogin", () => {
    loginPage.usernameInputField().type(businessHelper.loginData.validUsername)
    loginPage.passwordInputField().type(businessHelper.loginData.validPassword)
    loginPage.isolationWard().click()        
    loginPage.loginButton().click()
    homePage.headerElement().contains(businessHelper.homeData.headerText)
})