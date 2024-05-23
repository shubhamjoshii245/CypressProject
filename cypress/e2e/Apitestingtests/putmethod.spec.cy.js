

describe('Reqres API Testing', () => {
    it('PUT - Update user', () => {
    const updatedUser = {
      name: 'Jane ',
      job: 'Project Manager'
    };
    cy.request('PUT', 'https://reqres.in/api/users/2', updatedUser).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('name', 'Jane ');
      expect(response.body).to.have.property('job', 'Project Manager');
    });
  });
})