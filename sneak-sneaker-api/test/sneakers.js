const chai = require('chai');
const chaiHttp = require('chai-http');
const createServer = require('../index'); // Import the createServer function
const should = chai.should();

chai.use(chaiHttp);

describe('Sneakers Get All test\n', function() {
    let server;
    before(async function() {
        const app = await createServer();
        server = app.listen();
    });

    after(function() {
        server.close();
    });

    it('should list all sneakers on /sneakers GET', function(done) {
        chai.request(server)
            .get('/sneakers')
            .end(function(err, res){
                res.should.have.status(200);
                
                done();
            });
    });
    
});

