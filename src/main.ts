import "./style.css";

import {MapElement} from "./element"
import * as THREE from "three";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


const someElement = new MapElement("https://s3.amazonaws.com/duhaime/blog/tsne-webgl/assets/cat.jpg", 0,0);
scene.add(someElement.getMesh());

const someotherElement = new MapElement("assets/21577.jpg", 2,2);
scene.add(someotherElement.getMesh());

const otherElement = new MapElement("assets/download.jpeg", -2,-2);
scene.add(otherElement.getMesh());

camera.position.z = 5;

const light = new THREE.PointLight( 0xffffff, 1, 0 );

// Specify the light's position
light.position.set(1, 1, 100 );

// Add the light to the scene
scene.add(light);

function animate() {
  requestAnimationFrame( animate );
  renderer.render(scene, camera);
}

animate();
