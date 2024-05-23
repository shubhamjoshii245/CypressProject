
import fixture from "../../fixtures/example.json"
class login
{
 
    locator = {
        firstname: "input[id='firstname']",
        lastname : "input[id='lastname']",
        EmailAddress: "input[id='email_address']",
        password: "input[id='password']",
        confirmpassword:"input[id='password-confirmation']",
        CreateAccount : "div[class='panel header'] ul[class='header links'] li:nth-child(3)",
        submitcreate:"button[class='action submit primary']",
                // Mensdropdown:"span[class='ui-menu-icon ui-icon ui-icon-carat-1-e'])",
        productname: "a[class='product-item-link'][title='Argus All-Weather Tank']",
        producttextverify: "span[class='base']",
        Productsize:"div[id='option-label-size-143-item-166']",
        chooseproductcolor:"div[id='option-label-color-93-item-52']",
        productquantity:"input[id='qty']",
        Addtocart:"button[id='product-addtocart-button']",
        Scrolltop:"input[id='search']",
        checkout:"[class='action showcart active']",
        proedecheckout :"button[id='top-cart-btn-checkout']",
        companyname: "input[id='OJSAKA7']",
        address:"input[id='VWGA2FM']",
        city: "input[id='NK9O3BE']",
        dropdown:"select[id='EFUHGLA']",
        zip:"input[id='N9VDDHW']",
        phone: "input[id='AGWA9GQ']"  ,
        register: "button[class='button action continue primary']",
        placeorder:"[class='action primary checkout']"
      }
      
     Registerdetails()
        {
        cy.get(this.locator.CreateAccount).click()
        cy.get(this.locator.firstname).type(fixture.name)
        cy.get(this.locator.lastname).type(fixture.lastname)
        cy.get(this.locator.EmailAddress).type(fixture.email)
        cy.get(this.locator.password).type(fixture.password)
        cy.get(this.locator.confirmpassword).type(fixture.password)
        cy.get(this.locator.submitcreate).click();
       }

        ProductSelction()
        {
        cy.get(this.locator.Mensdropdown).click();
        cy.get(this.locator.productname).scrollTo("center")
        cy.get(this.locator.productname).click()
        cy.get(this.locator.producttextverify).should('have.text',"Argus All-Weather Tank")
        cy.get(this.locator.Productsize).click()
        cy.get(this.locator.chooseproductcolor).click()
        cy.get(this.locator.productquantity).clear().type(10)
        }

        Addtocart()
        {
            cy.get(this.locator.Addtocart).click()
            cy.get(this.locator.Scrolltop).scrollTo(0,10)
            cy.get(this.locator.checkout).click()
            cy.get(this.locator.proedecheckout).click()
        }

        placeorderdetails()
        {
            cy.get(this.locator.companyname).type("devqaexpert")
            cy.get(this.locator.address).type("clerk colony")
            cy.get(this.locator.city).type("indore")
            cy.get(this.locator.dropdown).select('2').should('have.value','2'); 
            cy.get(this.locator.zip).type("452011")
            cy.get(this.locator.phone).type("9865327845")
            cy.get(this.locator.register).click()
            cy.get(this.locator.placeorder)
        }

}
export default new login();
