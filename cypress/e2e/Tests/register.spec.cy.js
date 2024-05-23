import loginPage from "../Pages/register";
import login from "../Pages/register";

import fixture from "../../fixtures/example.json"
describe('loginTest',()=>
{
    const url = Cypress.config('BaseUrl');
    beforeEach(()=>{
        cy.visit(fixture.url);
    })
  
    it('register details',()=>{
      loginPage.Registerdetails();
    })
   
    // it('product details',()=>{
    //     //click on the product and verfiy the product name 
    //     login.ProductSelction();
    // })
    
    // it('add to cart',()=>{
    // //add to cart process
    // login.Addtocart();
    // })
   
    // it('place order',()=>{
    // //entering users detils
    // login.placeorderdetails();
// })

})

