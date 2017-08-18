import { ExampleHandler } from './example';

describe('ExampleHandler', () => {
  const handler = new ExampleHandler();

  describe('#run', () => {
    it('should return a response code of 200', async () => {
      const response = await handler.run();
      response.should.be.an.Object().with.property('statusCode', 200);
    });

    it('should return a body of "Hello world!"', async () => {
      const response = await handler.run();
      response.should.be.an.Object().with.property('body', { result: 'Hello world!' });
    });
  });
});