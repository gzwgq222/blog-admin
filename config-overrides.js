const { override, fixBabelImports } = require('customize-cra');

module.exports = function override(config, env) {
  // do stuff with the webpack config...
  return config
};
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
   })
 )