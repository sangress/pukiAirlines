/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  'ng2-bootstrap': 'vendor/ng2-bootstrap',
  'moment': 'vendor/moment',
  'angular2-in-memory-web-api': 'vendor/angular2-in-memory-web-api',
  'lodash': 'vendor/lodash',
  '@angular/forms': 'vendor/@angular/forms',
  '@ngrx': 'vendor/@ngrx'
};

/** User packages configuration. */
const packages: any = {
  'ng2-bootstrap': {
    defaultExtension: 'js',
    main: 'ng2-bootstrap.js'
  },
  'moment': {
    defaultExtension: 'js',
    main: 'moment.js'
  },
  'angular2-in-memory-web-api': {
    defaultExtension: 'js',
    main: 'index.js'
  },
  'lodash': {
    defaultExtension: 'js',
    main: 'lodash.js'
  },
  '@angular/forms': {
    defaultExtension: 'js',
    main: 'index.js'
  },
  '@ngrx/core': {
    main: 'index.js',
    format: 'cjs'
  },
  '@ngrx/store': {
    main: 'index.js',
    format: 'cjs'
  }
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  'app/planes',
  'app/plane-details',
  'app/add-plane',
  'app/menu',
  'app/passengers',
  'app/passenger-details',
  'app/edit-passenger',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
