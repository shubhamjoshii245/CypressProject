import loginPage from "../Pages/register";
import login from "../Pages/login";

import fixture from "../../fixtures/example.json"
describe('loginTest',()=>
{
    const url = Cypress.config('BaseUrl');
    beforeEach(()=>{
        cy.visit(fixture.url);
    })
  
    it('login details',()=>{
      login.logindetail();
    })
})

