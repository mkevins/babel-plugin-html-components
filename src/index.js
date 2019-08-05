const defaultTransforms = {
  'div': 'Div',
  'figure': 'Figure',
};

module.exports = function({ types }) {
  return {
    name: 'HTML Elements Transformer',
    visitor: {
      JSXIdentifier(path, { transforms = defaultTransforms }) {
        if (!transforms.hasOwnProperty(path.node.name)) {
          return;
        }
        path.node.name = transforms[path.node.name];
      },
    },
    manipulateOptions(options, parserOptions) {
      parserOptions.plugins.push('jsx');
    }
  }
}
