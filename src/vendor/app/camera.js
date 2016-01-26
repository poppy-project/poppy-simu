define([ 'three', 'container' ], function(THREE, container) {

  var canvasRatio = container.offsetWidth / container.offsetHeight;
  var camera = new THREE.PerspectiveCamera(38, canvasRatio, 1, 10000);

  camera.position.set(-300, 300, -500);

  window.addEventListener('resize', function() {
    camera.aspect = container.offsetWidth / container.offsetHeight;
    camera.updateProjectionMatrix();
  }, false);

  return camera;
});
