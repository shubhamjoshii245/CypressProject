import fixture from "../../fixtures/example.json"

class logindetails
{
    locator = {
        SignIn:"div[class='panel header'] ul[class='header links'] li:nth-child(2)",
        EmailAddress: "input[id='email']",
        password: "input[id='pass']",
        submitcreate:"button[class='action login primary']",
       search:"input[id='search']",
       verfiyinvalidtext:"div[data-bind='html: $parent.prepareMessageForHtml(message.text)']"

      }
  
     logindetail()
        {
          //providing email and password by fixture 
        cy.get(this.locator.SignIn).click()
        cy.get(this.locator.EmailAddress).type(fixture.email)
        cy.get(this.locator.password).type(fixture.password)
        cy.get(this.locator.submitcreate).click();

        //to check logged in or not to verfiy the search bar
        cy.get(this.locator.search).should('exist')
       }

       sigin()
       {
        cy.get(this.locator.SignIn).click()
       }

       invalidlogindetail()
       {
         //providing email and password by fixture 
       cy.get(this.locator.SignIn).click()
       cy.get(this.locator.EmailAddress).type(fixture.invalidemail)
       cy.get(this.locator.password).type(fixture.invalidpassword)
       cy.get(this.locator.submitcreate).click();
       
       //to check logged in or not to verfiy the search bar
       cy.get(this.locator.verfiyinvalidtext).should('contain','The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
      }
}
export default new logindetails();
