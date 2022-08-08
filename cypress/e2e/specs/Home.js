// import { before } from 'cypress/types/lodash';
// import { beforeEach } from 'mocha';
// import { expect } from 'chai';
import * as businessHelper from '../../helpers/businessHelpers'
import HomePage from '../../pageObjects/HomePage'

let homePage;

before(()=> {
    homePage = new HomePage();
    businessHelper.visitPage(businessHelper.configData.appUrl)
    cy.validUserLogin();
})

describe("Login Test cases",()=> {
    beforeEach(()=> {
        

    })    
   
    it("TC-005: Clicking on My account should navigate to Account page", () => {
        homePage.adminDropdown().click()
        homePage.myAccount().click({force:true})  
        businessHelper.validateUrl("myaccount")
        cy.go("back")
            
    }) 

     it("TC-001: Verify that all the tabs are visible", () => {
       businessHelper.assertElementByVisibility(homePage.findPatientRecordTab)
       businessHelper.assertElementByVisibility(homePage.activeVisitsTab)
       businessHelper.assertElementByVisibility(homePage.registerAPatientTab)
       businessHelper.assertElementByVisibility(homePage.captureVitalsTab)
       businessHelper.assertElementByVisibility(homePage.appointmentSchedulingTab)
       businessHelper.assertElementByVisibility(homePage.reportsTab)
       businessHelper.assertElementByVisibility(homePage.dataManagementTab)
       businessHelper.assertElementByVisibility(homePage.configureMetadataTab)
       businessHelper.assertElementByVisibility(homePage.systemAdministrationTab)
    })

    it("TC-002: Verify the header text is visible", () => {
        homePage.headerElement().contains(businessHelper.homeData.headerText)
    })   

    it("TC-004: Verify admin dropdown is clickable", () => {
        businessHelper.assertElementByVisibility(homePage.adminDropdown)
        homePage.adminDropdown().click({force:true})
        // businessHelper.assertElementByVisibility(homePage.myAccount)
    }) 

    it("TC-003: Verify dropdown and dropdown locations available", () => {
        businessHelper.assertElementByVisibility(homePage.changeLocationDropdown)
        homePage.changeLocationDropdown().click()
        cy.fixture("locationElements.json").then((locationName)=> {
            businessHelper.assertElementByTagAndText(homePage.changeLocationDropDownElements(), locationName)
        })  
    })  

    it("TC-006: Verify on clicking logout using is navigated to login page", () => {
        homePage.logoutButton().click()
        businessHelper.validateUrl("login")
    })
    
    

})