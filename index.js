'use strict'; // eslint-disable-line strict

require('regenerator-runtime/runtime');

let indexPath = './src/index';

if (process.env.AWS_EXECUTION_ENV) {
  indexPath = './out/index';
} else {
  require('babel-register');
}

const out = require(indexPath);
module.exports = out.default || out;
