const babel = require('@babel/core');
const plugin = require('../src/');
const pluginTester = require('babel-plugin-tester');
const path = require('path');

pluginTester({
  plugin: plugin,
  fixtures: path.join(__dirname, '__fixtures__'),
  snapshot: true,
});

