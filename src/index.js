module.exports = function({ types }) {
  return {
    visitor: {
      Identifier(path, start) {},
      BinaryExpression(path) {
        if (path.node.operator !== '===') {
          return;
        }

        path.node.left = types.identifier('babel');
        path.node.right = types.identifier('cool');
      }
    }
  }
}
