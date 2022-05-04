const request = require("supertest");
const app = require('../server');

describe('API server', () => {

    let api;

    beforeAll(() => {
        api = app.listen(5000, () => console.log('Test server running on port 5000'))
    })

    afterAll(done => {
        console.log('Gracefully stopping the test server');
        api.close(done)
    })

    test('Responds to get / with status 200', done => {
        request(api)
            .get('/')
            .expect(200, done)
    })
})
