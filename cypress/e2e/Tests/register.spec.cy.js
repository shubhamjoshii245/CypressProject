import loginPage from "../Pages/register";
import fixture from "../../fixtures/example.json"

describe('loginTest',()=>
{
    const url = Cypress.config('BaseUrl');
    beforeEach(()=>{
        cy.visit(fixture.url);
    })
  
   // process of register 
    it('register details',()=>{
      loginPage.Registerdetails();
    })

    //with wrong email address
    it('register details with wrong email',()=>{
      loginPage.WithwrongwemailRegisterdetails
    });
   })
   

