import fixture from "../../fixtures/example.json"
import login from "./login"

class productdetail
{
    locator = {
        Mensdropdown:"[id='ui-id-5']",
        productname: "a[class='product-item-link'][title='Argus All-Weather Tank']",
        producttextverify: "a[title='Meteor Workout Short']",
        Productsize:"div[id*='option-label-size-']:nth-of-type(1)",
        chooseproductcolor:"div[option-label='Black']",
        addtocart:"button[id='product-addtocart-button'] > span",
        addedtocart:"div[class*='minicart-wrapper'] > a[class*='action']",
        procedtocart:"button[id='top-cart-btn-checkout']",
        shopping:"div[data-bind='html: $parent.prepareMessageForHtml(message.text)'] > a",
        proceedtocheckout:"button[data-role='proceed-to-checkout'] > span",
        company:"input[id='company']",
        scrolliyt:"p[class='info']",
        scrollinto:"a[title='Meteor Workout Short']",
        producttag:"strong[class='product-item-name'] > a[title='Meteor Workout Short']",
      }
  
     productdetail()
        {
        cy.get(this.locator.Mensdropdown).click()
        cy.get(this.locator.scrolliyt).scrollIntoView()
        cy.get(this.locator.scrollinto).scrollIntoView()
        cy.get(this.locator.producttag).should('be.visible').click()
        cy.get(this.locator.Productsize).should('be.visible').click()
        cy.get(this.locator.chooseproductcolor).should('be.visible').click()
        cy.get(this.locator.addtocart).click()
        cy.get(this.locator.addedtocart).click()
        cy.wait(1000)
        cy.get(this.locator.shopping).should('be.visible').click() 
        cy.get(this.locator.proceedtocheckout).click()
        //cy.get(this.locator.company).click()
       }
}
export default new productdetail();
