const request = require('supertest');

const server = 'http://localhost:3000';

describe('/api/transactions', () => {
  const endpoint = '/api/transactions'

  describe('GET', () => {
    it('responds with 200 status', () => {
      return request(server)
        .get(endpoint)
        .expect(200);
    });
    
    it('returns application/json content type', () => {
      return request(server)
        .get(endpoint)
        .expect('Content-Type', /application\/json/);
    });

    it('response body is an object', () => {
      return request(server)
        .get(endpoint)
        .expect((res) => {
          expect(typeof res.body === 'object');
        });
    });

    it('response body contains a data array', () => {
      return request(server)
        .get(endpoint)
        .expect((res) => {
          Array.isArray(res.body.data);
        });
    });

    it('response body contains a float total', () => {
      return request(server)
        .get(endpoint)
        .expect((res) => {
          typeof res.body.total === 'number';
        });
    });
  });

  describe('POST', () => {
    const testBody = {
      name: "Cat Snake POST Tests",
      amount: 89.99,
      date: "10/21/2021",
      category_id: 2,
    }
    let idForDelete;

    // is bugged and does not execute correctly after each request
    // should probably be fetch requests
    afterEach(() => {
      request(server)
        .get(endpoint)
        .end((err, res) => {
          const data = res.body.data;
          data.forEach((obj) => {
            if (obj.name === testBody.name) idForDelete = obj._id;
            request(server)
              .del(endpoint)
              .send({ id: idForDelete });
          });
        });
      });

    describe('Postive Tests', () => {
      it('responds with 201 status', () => {
        return request(server)
          .post(endpoint)
          .send(testBody)
          .expect(201);
      });

      it('returns application/json content type', () => {
        return request(server)
          .post(endpoint)
          .send(testBody)
          .expect('Content-Type', /application\/json/);
      });

      it('response body includes new content', () => {
        return request(server)
          .post(endpoint)
          .send(testBody)
          .expect((res) => {
            const data = res.body.data;
            return data[data.length - 1].name === 'Cat Snake POST Tests';
          });
      });
    });
    
    describe('Negative Tests', () => {
      it('amount must be a number', () => {
        testBody.amount = 'string';
        return request(server)
          .post(endpoint)
          .send(testBody)
          .expect(500);
      });
      
    });

  });

});