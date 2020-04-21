import chai from 'chai';
import chaiHttp from 'chai-http';
import config from 'config';
import app from '../../../src/app';

chai.use(chaiHttp);
const { expect } = chai;

let server;
// eslint-disable-next-line no-undef
before(done => {
  server = app.listen(done);
});

describe(`${config.swagger.basePath}`, () => {
  describe('GET', () => {
    it('should return health status', async () => {
      const response = await chai.request(server).get(`${config.swagger.basePath}`);
      expect(response).to.have.status(200);
      expect(response.body).to.have.own.property('health');
      expect(response.body.health).to.equal('OK');
    });
  });
});
