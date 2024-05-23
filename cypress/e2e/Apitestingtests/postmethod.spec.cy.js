
describe('Reqres API Testing', () => {
it('POST - Create user', () => {

    const newUser = {
      name: 'John Doe',
      job: 'Software Developer'
    };
    cy.request('POST', 'https://reqres.in/api/users', newUser).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('name', 'John Doe');
      expect(response.body).to.have.property('job', 'Software Developer');
    });
});
});