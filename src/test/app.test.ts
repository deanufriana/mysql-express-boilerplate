import request from "supertest";
import app from '../app';
import dotenv from 'dotenv'
dotenv.config()
const req_app = request(app)
describe('Test api create product', () => {
    const url = "/product/create"
    test('create product success', (done) => {
        req_app
            .post(url)
            .set('Accept', 'application/json')
            .send({ name: Math.random().toString(36).substring(8), price: Math.floor(Math.random() * 1000) })
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
})
