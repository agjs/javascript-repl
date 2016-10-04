const chai = require('chai');
const expect = chai.expect;

describe('Object', function () {

    it('should consider positive and negative values to be different', function(done){

        expect(-0).to.equal(0);
        expect(Object.is(0, -0)).to.equal(false);    

        done();
    });

});