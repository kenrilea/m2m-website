const THREE = (window.THREE = require("three"));

THREE.Cache.enabled = true;

import proxy from "../../proxy.js";
import { FlatShading } from "three";

let run = container => {
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(75, 1 / 1, 0.1, 500);
  var renderer = new THREE.WebGLRenderer();
  renderer.gammaOutput = true;
  renderer.gammaFactor = 2.2;
  renderer.setSize(500, 500);
  container.appendChild(renderer.domElement);
  var geometry = new THREE.BoxGeometry(2, 2, 2);
  var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  var cube = new THREE.Mesh(geometry, material);

  var animate = function() {
    requestAnimationFrame(animate);

    cube.rotation.x = 0;
    cube.rotation.y = 0;

    renderer.render(scene, camera);
  };
};
export default run;
