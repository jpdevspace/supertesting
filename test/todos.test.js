'use strict';

const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');

const app = require('../server');

describe('API Tests', () => {
  let task = {
    name: 'integration test'
  };

  describe('GET all tasks', () => {
    it('Should get all tasks', done => {
      request(app)
        .get('/tasks')
        .end((err, res) => {
          if (err) {
            console.error(err)
          }
          expect(res.statusCode).to.equal(200);
          expect(res.body).to.be.an('array');
          expect(res.body).to.be.empty;
          done();
        });
    })
  });

  describe('Create task', () => {
    it('Should create a task', done => {
      request(app)
        .post('/tasks')
        .send(task)
        .end((err, res) => {
          if (err) {
            console.error(err)
          }
          expect(res.statusCode).to.equal(200);
          expect(res.body.name).to.equal('integration test');
          task = res.body; // Now our task object not only has name prop but an id (and everything else attached by the DB)
          done();
        });
    });
  });

  describe('GET a task by its ID', () => {
    it('Should get a specific task', done => {
      request(app)
        .get(`/tasks/${task._id}`)
        .end((err, res) => {
          if (err) {
            console.error(err);
          }
          expect(res.statusCode).to.equal(200);
          expect(res.body.name).to.be.equal('integration test');
          done();
        });
    });
  });
});
