const chai = require('chai');
const expect = chai.expect;

describe('Object', function () {

	it('should consider Object.is() to return false on positive and negative zero', function (done) {

		expect(Object.is(0, -0)).to.equal(false);
		done();
	});

	it('should consider tripple assignment operator to return true on positive and negative zero', function (done) {

		expect(-0 === 0).to.equal(true);
		done();
	});

});