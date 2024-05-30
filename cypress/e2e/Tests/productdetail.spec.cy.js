
import fixture from "../../fixtures/example.json"
import login from "../Pages/login"
import productdetail from "../Pages/productdetail";

describe('loginTest',()=>
{
    const url = Cypress.config('BaseUrl');
    beforeEach(()=>{
        cy.visit(fixture.url);
    })
  
    it('product details',()=>{
      login.logindetail();
      productdetail.productdetail();
    })

})

