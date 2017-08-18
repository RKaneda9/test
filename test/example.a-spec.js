import request from 'request-promise';

describe('example', () => {
  it('should return a response with a result of "Hello world!"', async () => {
    const response = await request({
      url: 'http://localhost:3000/example',
      resolveWithFullResponse: true
    });

    response.statusCode.should.equal(200);

    const body = JSON.parse(response.body);

    body.should.be.an.Object()
      .with.property('result', 'Hello world!');
  });
});
