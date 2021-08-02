define([ 'ergojr', 'pypot', 'gui' ], function(ERGOJR, PYPOT, gui) {

  var octopus = {};
  var PI = Math.PI;

  octopus.setErgo = function(ergo) {
    octopus.ergo = ergo;
  }

  PYPOT.HOST = gui.guiData.remoteHost;
  gui.controller.remoteHost.onChange(function(value) {
    PYPOT.HOST = gui.guiData.remoteHost;
  });

  PYPOT.PORT = gui.guiData.remotePort;
  gui.controller.remotePort.onChange(function(value) {
    PYPOT.PORT = gui.guiData.remotePort;
  });

  PYPOT.REST = gui.guiData.remoteAPI;
  gui.controller.remoteAPI.onChange(function(value) {
    PYPOT.REST = gui.guiData.remoteAPI;
    console.log(value);
    if (value) {
      console.log(gui.controller.remoteAPI.name);
      gui.controller.remoteAPI.name("API Rest/Scratch");
    } else {
      console.log(gui.controller.remoteAPI.name);
      gui.controller.remoteAPI.name("API Snap");
    }
  });

  PYPOT.FREQ = gui.guiData.remoteFrequency;
  gui.controller.remoteFrequency.onChange(function(value) {
    PYPOT.FREQ = gui.guiData.remoteFrequency;
    if (gui.guiData.remoteStatus) {
      PYPOT.stopPoll();
      PYPOT.startPoll();
    }
  });

  octopus.update = function() {
    if (octopus.ergo !== undefined) {
      if (gui.guiData.remoteStatus) {
        PYPOT.startPoll();
      } else {
        PYPOT.stopPoll();
      }

      octopus.ergo.S1.rotation.z = gui.guiData.m1 * PI / 180;
      octopus.ergo.S2.rotation.z = gui.guiData.m2 * PI / 180;
      octopus.ergo.S3.rotation.z = gui.guiData.m3 * PI / 180;
      octopus.ergo.S4.rotation.z = -gui.guiData.m4 * PI / 180 + PI / 2;
      octopus.ergo.S5.rotation.z = gui.guiData.m5 * PI / 180;
      octopus.ergo.S6.rotation.z = gui.guiData.m6 * PI / 180;
    }
  }

  return octopus;
});
