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
      date: "2021/10/20",
      category_id: 2,
    }
    let idForDelete;

    // is bugged and does not execute correctly after each request
    // should probably be fetch requests
    afterEach(() => {
      request(server)
        .get(endpoint)
        .then((res) => {
          const data = res.body.data;
          idForDelete = data[data.length - 1]['_id'];
        })
        .catch((err) => console.log(err));
    });

    afterEach(() => {
      request(server)
        .delete(endpoint)
        .send({id: idForDelete});
    })

    describe('Postive Tests', () => {
      it('responds with 201 status', () => {
        return request(server)
          .post(endpoint)
          .send(testBody)
          .expect(201);
      });

      xit('returns application/json content type', () => {
        return request(server)
          .post(endpoint)
          .send(testBody)
          .expect('Content-Type', /application\/json/);
      });

      xit('response body includes new content', () => {
        return request(server)
          .post(endpoint)
          .send(testBody)
          .expect((res) => {
            const data = res.body.data;
            return data[data.length - 1].name === 'Cat Snake POST Tests';
          });
      });
    });
    
    xdescribe('Negative Tests', () => {
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