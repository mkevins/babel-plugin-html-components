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

    const {code} = babel.transform(source, {plugins: [ plugin ]});

    expect(code).toMatchSnapshot();
  });

  it('works with nested elements', () => {
    let source = `
      class MyComponent extends Component {
        render() {
          return (
            <div className={ 'outer' }>
              <div className={ 'styled' } />
            </div>
          );
        }
      }
    `;

    const {code} = babel.transform(source, {plugins: [ plugin ]});

    expect(code).toMatchSnapshot();
  });

  it('does not modify other components', () => {
    let source = `
      class MyComponent extends Component {
        render() {
          return (
            <>
              <MyThing className={ 'outer' }>
                <div className={ 'styled' } />
              </MyThing>
              <div className={ 'outer' }>
                <MyThing className={ 'inner' } />
              </div>
            </>
          );
        }
      }
    `;

    const {code} = babel.transform(source, {plugins: [ plugin ]});

    expect(code).toMatchSnapshot();
  });
});

