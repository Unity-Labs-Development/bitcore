/**
 * To run against a local bitcore-node, create a `proxy.conf.override.js` in
 * this directory (as a sibling to this file), with your configuration, e.g.:
 *
 * ```
 * module.exports = {
 *  '/api': {
 *    target: {
 *      host: 'localhost',
 *      protocol: 'http',
 *      port: 3000
 *    },
 *    secure: false,
 *    changeOrigin: true,
 *    logLevel: 'debug'
 *  }
 * };
 * ```
 */

 module.exports = {
  '/api': {
    target: {
      host: 'www.vgoscan.com',
      protocol: 'http',
      port: 3000
    },
    secure: false,
    changeOrigin: true,
    logLevel: 'debug'
  }
 };