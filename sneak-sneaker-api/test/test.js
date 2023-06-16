const chai = require("chai");
const chaiHttp = require("chai-http");
const createServer = require("../index");
// eslint-disable-next-line no-unused-vars
const should = chai.should();

chai.use(chaiHttp);

const dockerHost = "http://localhost:3000";
let server;

before(function (done) {
  this.timeout(3000);
  createServer(true)
    .then((createdServer) => {
      server = createdServer;
      setTimeout(done, 2000);
    })
    .catch((err) => {
      console.error(err);
    });
});

describe("App inside container working test\n", function () {
  it("should return ok status on / in container app", function () {
    return chai
      .request(dockerHost)
      .get("/")
      .then(function (res) {
        res.should.have.status(200);
      });
  });
});

describe("Sneakers Get tests\n", function () {
  it("should list all sneakers on /sneakers as an array", function () {
    return chai
      .request(server)
      .get("/sneakers")
      .then(function (res) {
        res.should.have.status(200);
        res.body.should.be.a("array");
      });
  });
  it("should list an existing sneaker on /sneakers/:id as an object", function () {
    return chai
      .request(server)
      .get("/sneakers/1")
      .then(function (res) {
        res.should.have.status(200);
        res.body.should.be.a("object");
      });
  });
  it("should return 404 on /sneakers/:id for non-existent sneaker", function () {
    return chai
      .request(server)
      .get("/sneakers/0")
      .then(function (res) {
        res.should.have.status(404);
      });
  });
});
