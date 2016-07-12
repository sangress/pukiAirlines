/* global require, module */

var Angular2App = require('angular-cli/lib/broccoli/angular2-app');

module.exports = function(defaults) {
  return new Angular2App(defaults, {
    vendorNpmFiles: [
      '@ngrx/**/*.+(js|js.map)',
      'systemjs/dist/system-polyfills.js',
      'systemjs/dist/system.src.js',
      'zone.js/dist/**/*.+(js|js.map)',
      'es6-shim/es6-shim.js',
      'reflect-metadata/**/*.+(js|js.map)',
      'rxjs/**/*.+(js|js.map)',
      '@angular/**/*.+(js|js.map)',
      'ng2-bootstrap/**/*.js',
      'moment/moment.js',
      'angular2-in-memory-web-api/**/*.js',
      'lodash/*.js',
      'nvd3/build/*.js',
      'nvd3/build/*.css',
      'bootstrap/dist/css/*.css',
      'd3/**/*.js'

      // 'nvd3/src/**/*.js',
      // 'nvd3/src/**/*.css'
    ]
  });
};
