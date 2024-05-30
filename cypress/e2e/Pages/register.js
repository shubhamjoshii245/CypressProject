
import fixture from "../../fixtures/example.json"
class register
{
 
    locator = {
        firstname: "input[id='firstname']",
        lastname : "input[id='lastname']",
        EmailAddress: "input[id='email_address']",
        password: "input[id='password']",
        confirmpassword:"input[id='password-confirmation']",
        CreateAccount : "div[class='panel header'] ul[class='header links'] li:nth-child(3)",
        submitcreate:"button[class='action submit primary']",
        wrongemailtext:"div[id='email_address-error']"
      }
      
     Registerdetails()
        {
        cy.get(this.locator.CreateAccount).click()
        cy.get(this.locator.firstname).should('be.visible')
        cy.get(this.locator.firstname).type(fixture.name)
        cy.get(this.locator.lastname).type(fixture.lastname).should('be.visible')
        cy.get(this.locator.lastname).type(fixture.lastname)
        cy.get(this.locator.EmailAddress).type(fixture.email).should('be.visible')
        cy.get(this.locator.EmailAddress).type(fixture.email)
        cy.get(this.locator.password).type(fixture.password).should('be.visible')
        cy.get(this.locator.password).type(fixture.password)
        cy.get(this.locator.confirmpassword).type(fixture.password).should('be.visible')
        cy.get(this.locator.confirmpassword).type(fixture.password)
        cy.get(this.locator.submitcreate).click();

       }

       //try to register with wrong email
      //  WithwrongwemailRegisterdetails()
      //   {
      //   cy.get(this.locator.CreateAccount).click()
      // // cy.get(this.locator.firstname).should('be.visible')
      //   cy.get(this.locator.firstname).type(fixture.name)
      //   //cy.get(this.locator.lastname).should('be.visible')
      //   cy.get(this.locator.lastname).type(fixture.lastname)
      //   //cy.get(this.locator.EmailAddress).should('be.visible')
      //   cy.get(this.locator.EmailAddress).type(fixture.email)
      //   cy.get(this.locator.wrongemailtext).should('not.exist')
      //   //cy.get(this.locator.password).type(fixture.password).should('be.visible')
      //   cy.get(this.locator.password).type(fixture.password)
      //  // cy.get(this.locator.confirmpassword).type(fixture.password).should('be.visible')
      //   cy.get(this.locator.confirmpassword).type(fixture.password)
      //   cy.get(this.locator.submitcreate).click();
       }

export default new register();
