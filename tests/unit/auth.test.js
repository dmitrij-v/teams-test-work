/* eslint-disable arrow-body-style */
const request = require('supertest');
const httpStatus = require('http-status');
const { expect } = require('chai');
const sinon = require('sinon');
const app = require('../../app');

const sandbox = sinon.createSandbox();

describe('Authentication API', () => {

  afterEach(() => sandbox.restore())

  describe('POST /users', () => {
    it('should register a new user when request is ok', () => {
      return request(app)
        .post('/users')
        .send({'hello': 'world'})
        .expect(httpStatus.OK)
        .then(res => {
          
        });
    });
  });
});