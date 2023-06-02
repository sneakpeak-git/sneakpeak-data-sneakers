const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp);

const host = 'http://localhost:3000'

describe('Sneakers Get All test\n', function() {
    it('should list all sneakers on /sneakers GET', function(done) {
        chai.request('http://localhost:3000')
            .get('/sneakers')
            .end(function(err, res){
                res.should.have.status(200);
                done();
            });
    });
});
