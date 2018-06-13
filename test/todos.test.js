'use strict';

const chai = require('chai');
const expect = chai.expect();
const request = require('supertest');

const app = require('../server');

describe('Todos list API Integration test', () => {
  describe('#GET / tasks', () => {
    request(app)
      .get('/tasks')
        .end((err, res) => {
          
        })
  })
});
