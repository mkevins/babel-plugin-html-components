const { default: template }= require('@babel/template');

// some default transforms
const defaultTransforms = {
  'div': 'Div',
  'figure': 'Figure',
  'img': 'Img',
  'ul': 'Ul',
  'li': 'Li',
  'figcaption': 'Figcaption',
};

// default source path
const defaultSourcePath = '@wordpress/element';

const buildImport = template(`
import { IMPORT_NAME } from 'SOURCE_PATH';
`);

module.exports = function({ types }) {
  // This function injects the necessary imports at the top of the file.
  // It keeps track of imports to prevent duplicates.
  const injectImport = (file, componentName, sourcePath) => {
    let htmlComponentInjections = file.get('htmlComponentInjections');

    if (!htmlComponentInjections) {
      htmlComponentInjections = new Map();
      file.set('htmlComponentInjections', htmlComponentInjections);
    }

    const hasComponentInjection = htmlComponentInjections.get(componentName);

    if (!hasComponentInjection) {
      const importNode = buildImport({
        IMPORT_NAME: types.identifier(componentName),
        SOURCE_PATH: types.stringLiteral(sourcePath),
      });

      // do the injection
      file.path.unshiftContainer('body', importNode);

      // remember the injection
      htmlComponentInjections.set(componentName, true);
    }
  };

  return {
    name: 'HTML Elements Transformer',
    visitor: {
      JSXIdentifier(path, state) {
        const { opts: options, file } = state;
        const {
          transforms = defaultTransforms,
          sourcePath = defaultSourcePath
        } = options;

        if (!transforms.hasOwnProperty(path.node.name)) {
          return;
        }

        const componentName = transforms[path.node.name];

        // inject, if necessary
        injectImport(file, componentName, sourcePath);

        // rename jsx identifier according to transform
        path.node.name = componentName;
      },
    },
    // use jsx syntax for parsing
    manipulateOptions(options, parserOptions) {
      parserOptions.plugins.push('jsx');
    }
  }
}
