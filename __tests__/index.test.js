const babel = require('@babel/core');
const plugin = require('../src/');

describe('plugin', () => {
  it('transforms div to Div', () => {
    let source = `
      class MyComponent extends Component {
        render() {
          return <div className={ 'styled' } />;
        }
      }
    `;

    const {code} = babel.transform(source, {plugins: [
      '@babel/plugin-syntax-jsx',
      plugin
    ]});

    expect(code).toMatchSnapshot();
  });
});

