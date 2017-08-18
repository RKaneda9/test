import { HTTPHandler } from '@ifit/wool';

export class ExampleHandler extends HTTPHandler {
  async run() {
    return {
      statusCode: 200,
      body: { result: 'Hello world!' }
    };
  }
}

export default ExampleHandler.create();
