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
        cy.get("#reportingui-reports-homepagelink-reportingui-reports-homepagelink-extension")
    }

    dataManagementTab(){
        cy.get("#coreapps-datamanagement-homepageLink-coreapps-datamanagement-homepageLink-extension")
    }

    configureMetadataTab(){
        cy.get("#org-openmrs-module-adminui-configuremetadata-homepageLink-org-openmrs-module-adminui-configuremetadata-homepageLink-extension")
    }

    systemAdministrationTab(){
        cy.get("#coreapps-systemadministration-homepageLink-coreapps-systemadministration-homepageLink-extension")
    }

}

export default HomePage;