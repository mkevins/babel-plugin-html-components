module.exports = function({ types }) {
  return {
    name: 'HTML Elements Transformer',
    visitor: {
      JSXIdentifier(path, start) {
        if (path.node.name !== 'div') {
          return;
        }

        path.node.name = 'Div';
      },
    },
    manipulateOptions(options, parserOptions) {
      parserOptions.plugins.push('jsx');
    }
  }
}
