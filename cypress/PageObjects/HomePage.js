class HomePage {

    headerElement(){
        return cy.get('h4')
    }

    findPatientRecordTab(){
        return cy.get("#coreapps-activeVisitsHomepageLink-coreapps-activeVisitsHomepageLink-extension")
    }

    activeVisitsTab(){
        return cy.get("#org-openmrs-module-coreapps-activeVisitsHomepageLink-org-openmrs-module-coreapps-activeVisitsHomepageLink-extension")
    }

    registerAPatientTab(){
        return cy.get("#referenceapplication-registrationapp-registerPatient-homepageLink-referenceapplication-registrationapp-registerPatient-homepageLink-extension")
    }

    captureVitalsTab(){
        return cy.get("#referenceapplication-vitals-referenceapplication-vitals-extension")
    }
    
    appointmentSchedulingTab(){
        return cy.get("#appointmentschedulingui-homeAppLink-appointmentschedulingui-homeAppLink-extension")
    }

    reportsTab(){
        return cy.get("#reportingui-reports-homepagelink-reportingui-reports-homepagelink-extension")
    }

    dataManagementTab(){
        return cy.get("#coreapps-datamanagement-homepageLink-coreapps-datamanagement-homepageLink-extension")
    }

    configureMetadataTab(){
        return cy.get("#org-openmrs-module-adminui-configuremetadata-homepageLink-org-openmrs-module-adminui-configuremetadata-homepageLink-extension")
    }

    systemAdministrationTab(){
        return cy.get("#coreapps-systemadministration-homepageLink-coreapps-systemadministration-homepageLink-extension")
    }

    logoutButton(){
        return cy.xpath("//a[contains(text(),'Logout')]")
    }
    changeLocationDropdown(){
        return cy.get(".change-location")
    }
    adminDropdown(){
        return cy.xpath("//li[@class='nav-item identifier']")
    }
    myAccount(){
        return cy.xpath("//ul[@id='user-account-menu']//a")
    }
    changeLocationDropDownElements(){
        return cy.get(".select")
    }
    // adminDropdownIcon(){
    //     return cy.xpath("//li[@class='nav-item identifier']//i[@class='icon-user small']")
    // }
    homeLogo(){
        return cy.get(".logo")
    }


}

export default HomePage;