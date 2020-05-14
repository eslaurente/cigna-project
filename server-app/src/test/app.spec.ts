import chai from 'chai';
import 'mocha';
import chaiHttp from 'chai-http';

import { app } from '../app';
import allData from '../all-data.json';


chai.use(chaiHttp);

const { expect, request } = chai;

describe('API resources', () => {
  it('should respond with all specialists data', () => {
    return request(app).get('/api/specialists').then(res => {
        expect(res.status).to.eql(200);
        expect(res.text).to.eql(JSON.stringify({
            results: allData
        }));
     })
  });

    it('should respond with 404', () => {
    return request(app).get('/something-else')
      .then(res => {
        expect(res.status).to.eql(404);
        expect(res.text).to.eql('NOT FOUND');
      })
  });
});
