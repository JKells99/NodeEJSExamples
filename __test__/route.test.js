// server.test.js
const request = require('supertest');
let app = require('../index');


beforeAll((done) => {
    server = app.listen(3001, done); // Use a different port to avoid conflicts
}, 15000); // Increase timeout to 15 seconds

afterAll((done) => {
    server.close(done); // Close the server after all tests are done
}, 15000); // Increase timeout to 15 seconds

describe('Unit testing the base routes', function() {
    test('games should return OK status', async function () {
        const response = await request(app).get('/games');
        expect(response.status).toBe(200);
    });

    test('home should return OK status', async function () {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
    });

    test('animals should return OK status', async function () {
        const response = await request(app).get('/animals');
        expect(response.status).toBe(200);
    });

});



