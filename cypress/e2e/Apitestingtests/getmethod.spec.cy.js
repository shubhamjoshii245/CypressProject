describe('Reqres API Testing', () => {
    const baseUrl = 'https://reqres.in/users?page=2';
  
    it('GET - List users', () => {
      cy.request('GET', 'https://reqres.in/api/users/2').then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('data');
      });
    });    
})  