import fixture from "../../fixtures/example.json"
class logindetails
{
    locator = {
        SignIn:"div[class='panel header'] ul[class='header links'] li:nth-child(2)",
        EmailAddress: "input[id='email']",
        password: "input[id='pass']",
        submitcreate:"button[class='action login primary']",
      }
  
     logindetail()
        {
        cy.get(this.locator.SignIn).click()
        cy.get(this.locator.EmailAddress).type(fixture.email)
        cy.get(this.locator.password).type(fixture.password)
        cy.get(this.locator.submitcreate).click();
       }
}
export default new logindetails();
