const chai = require('chai');
const chaiHttp = require('chai-http');
const createServer = require('../index');
const should = chai.should();

chai.use(chaiHttp);

const dockerHost = 'http://localhost:3000'
let server;

before(async function() {
  server = await createServer();
});

describe('Sneakers Get All test\n', function() {
  it('should list all sneakers on /sneakers GET', function(done) {
    chai.request(server)
      .get('/sneakers')
      .end(function(err, res) {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      });
  });
});

describe('Docker Sneakers Get All test\n', function() {
    it('should list all sneakers on /sneakers GET docker', function(done) {
        chai.request(dockerHost)
            .get('/sneakers')
            .end(function(err, res){
                res.should.have.status(200);
                done();
            });
    });
});
