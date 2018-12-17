const withTypescript = require('@zeit/next-typescript');
const withCSS = require('@zeit/next-css');

module.exports = withTypescript(withCSS());
// module.exports = withTypescript({
//   webpack(config, options) {
//     return config;
//   },
// });
// https://github.com/zeit/next-plugins/tree/master/packages/next-typescript
