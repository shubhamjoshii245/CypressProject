
import fixture from "../../fixtures/example.json"
import login from "../Pages/login"
import productdetail from "../Pages/productdetail";
import search from "../Pages/search";

describe('loginTest',()=>
{
    const url = Cypress.config('BaseUrl');
    beforeEach(()=>{
        cy.visit(fixture.url);
    })
  
    //search specif product for purchased
    it('product details',()=>{
      login.logindetail();
      search.searchproduct();
    })

    //trying to login with wrong credetails
    it('product details with wrong credentails',()=>{
      login.invalidlogindetail()
      search.searchproduct();
    })

})

