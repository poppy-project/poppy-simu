define([ 'dat', 'container' ], function(dat, container) {

  var getParameterByName = function(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  var remoteHost = getParameterByName('remote-host');
  var remotePort = getParameterByName('remote-port');

  var gui = {};

  gui.gui = new dat.GUI({ autoPlace: false });
  var guiContainer = document.querySelector('.visualizer-gui');
  guiContainer.appendChild(gui.gui.domElement)

  gui.guiData = {
    m1: 0,
    m2: 0,
    m3: 0,
    m4: 0,
    m5: 0,
    m6: 0,

    partColor: 0xFFFFFF,

    remoteStatus: remoteHost ? true : false,
    remoteHost: remoteHost || '127.0.0.1',
    remotePort: remotePort || '8080',
    remoteFrequency: 20,
  };

  gui.controller = {};

  gui.controller.motors = gui.gui.addFolder('Angles des moteurs');
  gui.controller.motors.add(gui.guiData, 'm1', -180, 180, 1).name('m1').listen();
  gui.controller.motors.add(gui.guiData, 'm2', -180, 180, 1).name('m2').listen();
  gui.controller.motors.add(gui.guiData, 'm3', -180, 180, 1).name('m3').listen();
  gui.controller.motors.add(gui.guiData, 'm4', -180, 180, 1).name('m4').listen();
  gui.controller.motors.add(gui.guiData, 'm5', -180, 180, 1).name('m5').listen();
  gui.controller.motors.add(gui.guiData, 'm6', -180, 180, 1).name('m6').listen();
  gui.controller.motors.open();

  gui.controller.remote = gui.gui.addFolder('Contrôle à distance');
  gui.controller.remote.add(gui.guiData, 'remoteStatus').name('Synchroniser');
  gui.controller.remoteHost = gui.controller.remote.add(gui.guiData, 'remoteHost').name('Hôte');
  gui.controller.remotePort = gui.controller.remote.add(gui.guiData, 'remotePort').name('Port');
  gui.controller.remoteFrequency = gui.controller.remote.add(gui.guiData, 'remoteFrequency', 1, 35, 1).name('Fréquence');
  gui.controller.remote.open();

  return gui;
});
