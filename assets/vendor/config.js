var require = {
  baseUrl: baseUrl + '/vendor/app',
  shim: {
    // -- ergo
    'STLLibrary': {
      deps: [ 'threeCore' ],
      exports: 'STLLibrary'
    },
    'OLLO': { exports: 'OLLO' },
    'XL320': {
      deps: [ 'STLLibrary', 'OLLO' ],
      exports: 'XL320'
    },
    'ergojr': {
      deps: [ 'threeCore', 'STLLibrary', 'OLLO', 'XL320' ],
      exports: 'ERGOJR'
    },
    'pypot': { exports: 'PYPOT' },

    'threeCore': { exports: 'THREE' },
    'OrbitControls': {
      deps: [ 'threeCore' ],
      exports: 'THREE'
    },
    'STLLoader': {
      deps: [ 'threeCore' ],
      exports: 'THREE'
    },

    'coordinates': { exports: 'Coordinates' },
    'detector': { exports: 'Detector' },
    'stats': { exports: 'Stats' },
    'dat': { exports: 'dat' }
  },

  paths: {
    STLLibrary: '../ergo/STLLibrary',
    OLLO: '../ergo/ollo',
    XL320: '../ergo/XL320',
    ergojr: '../ergo/ergojr',
    pypot: '../ergo/pypot',

    three: '../lib/three',
    threeCore: '../lib/three.min',
    OrbitControls: '../lib/OrbitControls',
    STLLoader: '../lib/STLLoader',

    coordinates: '../lib/Coordinates',
    detector: '../lib/Detector',
    stats: '../lib/stats.min',
    dat: '../lib/dat.gui.min'
  }
};
