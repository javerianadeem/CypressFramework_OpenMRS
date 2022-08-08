export const configData = require('../fixtures/config.json')
export const loginData = require('../fixtures/loginData.json')
export const homeData = require('../fixtures/homeData.json')

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

export const assertCheckboxChecked = (selector) => {
    cy.get(selector).should('be.checked')
}

export const assertCheckboxUnchecked = (selector) => {
    cy.get(selector).should('not.be.checked')
}

export const validateUrl = (value) => {
    cy.location('href').should('include', value)
}

export const assertChangeLocationElements = () => {
    cy.get("[class='select']")
}
export const assertElementByTagAndText = (selector, text) => {
    selector.find('li').each(($ele, index)=> {
        expect(text.location_Elements[index]).to.equal($ele.text().trim())
    })
}   

// export const typeText = (selector, value) => {
//     cy.get(selector).type(value)
// }