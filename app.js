const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');

const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(chaiHttp);
chai.use(sinonChai);

const foo = name => `Hi there, ${name}`;

describe('Object', function() {
  it('should consider Object.is() to return false on positive and negative zero', function(done) {
    expect(Object.is(0, -0)).to.equal(false);
    done();
  });

  it('should consider tripple assignment operator to return true on positive and negative zero', function(done) {
    expect(-0 === 0).to.equal(true);
    done();
  });
});

describe('Function', function() {
  it('should return a greeting message with name passed as an argument', function(done) {
    expect(foo('John')).to.equal('Hi there, John');
    done();
  });
});

describe('Fake JSON Placeholder', function() {
  it('should return 200 and array of objects', function(done) {
    chai
      .request('https://jsonplaceholder.typicode.com')
      .get('/users')
      .end(function(err, res) {
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('array');
        expect(res.body[0].name).to.eql('Leanne Graham');
        done();
      });
  });
});
