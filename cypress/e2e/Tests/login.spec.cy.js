import loginPage from "../Pages/register";
import login from "../Pages/login";
import fixture from "../../fixtures/example.json"
describe('loginTest',()=>
{
    const url = Cypress.config('BaseUrl');
    beforeEach(()=>{
        cy.visit(fixture.url);
    })
  
    //used custom commands for login
    it('login details',()=>{
       login.sigin();
       cy.login('shubhamjoshi123@gmail.com','Joshi@786')
    })
})

