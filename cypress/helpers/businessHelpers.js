export const configData = require('../fixtures/config.json')
export const loginData = require('../fixtures/loginData.json')

export const visitPage = ((url) => {
    cy.visit(url)
    cy.log(url)
})

export const assertElementByText = (selector, value) => {
    cy.get(selector).should('have.text',value)
}

export const assertElementByVisibility = (selector) => {
    cy.get(selector).should('be.visible')
}

// export const typeText = (selector, value) => {
//     cy.get(selector).type(value)
// }