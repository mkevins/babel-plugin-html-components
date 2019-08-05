const babel = require('babel-core');
const plugin = require('../src/');

var example = `
foo === bar;
`;

it('works', () => {
  const {code} = babel.transform(example, {plugins: [plugin]});
  expect(code).toMatchSnapshot();
});
