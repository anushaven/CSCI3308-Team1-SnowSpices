
// Imports the index.js file to be tested.
const server = require('../index'); //TO-DO Make sure the path to your index.js is correctly added
// Importing libraries

// Chai HTTP provides an interface for live integration testing of the API's.
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.should();
chai.use(chaiHttp);
const {assert, expect} = chai;

describe('Server!', () => {
  // Sample test case given to test / endpoint.
  it('Returns the default welcome message', done => {
    chai
      .request(server)
      .get('/welcome')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals('success');
        assert.strictEqual(res.body.message, 'Welcome!');
        done();
      });
  });

  // ===========================================================================
  // TO-DO: Part A Login unit test case

  //1. Positive test case
  //We are checking POST /register API by passing the user info in the correct order. This test case should pass and return a status 200 along with a "Success" message.
//positive cases
//NOT FINISHED
it('positive : /login', done => {
  chai
    .request(server)
    .post('/login')
    .send({ username: 'icsp', name: 'Ice Spice', email: 'icsp@colorado.edu', password: 'munch'})
    .end((err, res) => {
      expect(res).to.have.status(200);
      expect(res.body.message).to.equals('User login successful.');
      done();
    });
});

// 2. Negative test case
//We are checking POST /add_user API by passing the user info in in incorrect manner (name cannot be an integer). This test case should pass and return a status 200 along with a "Invalid input" message.
//NOT FINISHED
it('Negative : /login. Checking invalid username or password.', done => {
  chai
    .request(server)
    .post('/login')
    .send({ username: '', name: '', email: 'email@email.com', password: ''})
    .end((err, res) => {
      expect(res).to.have.status(200);
      expect(res.body.message).to.equals('Incorrect username or password.');
      done();
    });
});

it('positive : /register', done => {
  chai
    .request(server)
    .post('/register')
    .send({ski_or_board: 'ski', username: 'user50', mtn_name: 'Copper',  name: 'user', skill_level: '3',  email: 'email@email.com', password: 'default'})
    .end((err, res) => {
      expect(res).to.have.status(200);
      expect(res.body.message).to.equals('Registration successful.');
      done();
    });
});

it('Negative : /register. Checking invalid username or password.', done => {
  chai
    .request(server)
    .post('/register')
    .send({ username: '', name: '', email: 'email@email.com', password: ''})
    .end((err, res) => {
      expect(res).to.have.status(200);
      expect(res.body.message).to.equals('Invalid registration.');
      done();
    });
});

});