const withTypescript = require('@zeit/next-typescript');

module.exports = withTypescript();
// module.exports = withTypescript({
//   webpack(config, options) {
//     return config;
//   },
// });
// https://github.com/zeit/next-plugins/tree/master/packages/next-typescript
