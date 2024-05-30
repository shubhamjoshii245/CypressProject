import fixture from "../../fixtures/example.json"
import login from "./login"

class search
{
    locator = {
        search:"input[id='search']",
        productsearch:"li[class='item product product-item']:nth-of-type(1) a[class='product-item-link']",
        producttextvalue:"span[class='base']",
        productsize:"div[option-label='XS']",
        productcolor:"div[id*='option-label-color-']",
        productquantity:"input[id='qty']",
        addtocart:"button[id='product-addtocart-button'] > span",
        clicktoshopping:"shopping cart",
        proceedtocart:"button[data-role='proceed-to-checkout']",
        addtocartbutton:"button[id='product-addtocart-button'] > span",
        proceedtocartbutton:"button[id='top-cart-btn-checkout']",
        company:"input[name='company']",
        street:"#U1Y1CXL",
      }
  
     searchproduct()
        {
        cy.get(this.locator.search).type('Argus All-Weather Tank')
        cy.get(this.locator.search).type('{enter}')
        cy.get(this.locator.productsearch).scrollIntoView()
        cy.get(this.locator.productsearch).should('exist').click()
        cy.get(this.locator.producttextvalue).should('contain','Argus All-Weather Tank')
        cy.get(this.locator.productsize).should('exist').click()
        cy.get(this.locator.productcolor).should('exist').click()
        cy.get(this.locator.productquantity).clear().type('2').should('have.value','2')
        cy.get(this.locator.addtocartbutton).click()
        cy.wait(1000)
        cy.contains(this.locator.clicktoshopping).should('be.visible').click()
        cy.get(this.locator.proceedtocart).click()
        cy.get(this.locator.company).type('devqa')
        cy.get(this.locator.street).type('dsasssse').screenshot()
       }
}
export default new search();
