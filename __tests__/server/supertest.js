const request = require('supertest');

const server = 'http://localhost:3000';

describe('/api/transaction', () => {
  const endpoint = '/api/transaction'

  describe('GET', () => {
    it('responds with 200 status', () => {
      request(server)
        .get(endpoint)
        .expect(200);
    });
    
    it('returns application/json content type', () => {
      request(server)
        .get(endpoint)
        .expect('Content-Type', /application\/json/);
    });

    it('response.body is an object', () => {
      request(server)
        .get(endpoint)
        .expect((res) => {
          Object.isObject(res.body);
        });
    });

    it('response.body contains a data array', () => {
      request(server)
        .get(endpoint)
        .expect((res) => {
          Array.isArray(res.body.data);
        });
    });

    it('response.body contains a float total', () => {
      request(server)
        .get(endpoint)
        .expect((res) => {
          typeof res.body.total === 'number';
        });
    });
  });

  describe('POST', () => {
    const testBody = {
      "name": "Cat Snake POST Test 1",
      "amount": "420.69",
      "date": "2021/10/20",
      "category_id": "2",
    }

    it('responds with 201 status', () => {
      request(server)
        .post(endpoint)
        .send(testBody)
        .expect(201);
    });

    // testBody.name = 
    // it('')
  });

});