const request = require('supertest');
const { app } = require('../lib/app');

describe('color api tests', () => {
  it('requesting / path will return list of colors', () => {
    return request(app)
      .get('/')
      .then(res => {
        expect(res.text).toEqual(expect.stringContaining('Colors'));
      });
  });

  it('requesting / path will return list of colors', () => {
    return request(app)
      .get('/color.html?name=orange')
      .then(res => {
        expect(res.text).toEqual(expect.stringContaining('Full Color List'));
      });
  });
});
