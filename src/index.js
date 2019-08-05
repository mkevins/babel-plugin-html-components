module.exports = function({ types }) {
  return {
    visitor: {
      JSXIdentifier(path, start) {
        if (path.node.name !== 'div') {
          return;
        }

        path.node.name = 'Div';
      },
    }
  }
}
