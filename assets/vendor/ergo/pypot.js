define([ 'gui' ], function(gui) {

  var defaultMotors = [ 'm1', 'm2', 'm3', 'm4', 'm5', 'm6' ];

  var PYPOT = {
    HOST: '127.0.0.1',
    PORT: '8080',
    FREQ: 20,
    motors: {},
    pollRequest: null,
    motorIds: defaultMotors,
    poller: undefined,
    motors: (function(_motors) {
      var ret = {};
      _motors.forEach(function(motorId) {
        ret[motorId] = 0;
      });

      return ret;
    })(defaultMotors)
  };

  PYPOT.startPoll = function() {
    if (!PYPOT.poller) {
      console.log('init polling');
      PYPOT.poller = setInterval(PYPOT.pollPos, 1000 / PYPOT.FREQ);
    }
  }

  PYPOT.stopPoll = function() {
    if (PYPOT.poller) {
      clearInterval(PYPOT.poller);
      PYPOT.poller = undefined;
      PYPOT.pollRequest = null;
    }
  }

  PYPOT.pollPos = function() {
    var req, pollUrl;

    if (PYPOT.pollRequest !== null) {
      return;
    }

    pollUrl = 'http://' + PYPOT.HOST + ':' + PYPOT.PORT + '/motors/register/present_position';
    PYPOT.pollRequest = new XMLHttpRequest();

    PYPOT.pollRequest.onreadystatechange = function() {
      var res;

      if (PYPOT.pollRequest.readyState === 4) {
        if (PYPOT.pollRequest.status === 200) {
          res = JSON.parse(PYPOT.pollRequest.responseText);
          for (var motorId in res) {
            PYPOT.motors[motorId] = res[motorId].present_position;
            gui.guiData[motorId] = res[motorId].present_position;
          }
          PYPOT.pollRequest = null;
        } else {
          console.log('Something wrong while reading REST API (code: ' + PYPOT.pollRequest.status + ')');
        }
      }
    }

    PYPOT.pollRequest.open('GET', pollUrl);
    PYPOT.pollRequest.send();
  }

  window.PYPOT = PYPOT;

  return PYPOT;
});
