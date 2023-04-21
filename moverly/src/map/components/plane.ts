import { Mesh, MeshBasicMaterial, PlaneGeometry, TextureLoader } from "three";

function createMaterial() {
  const texture = new TextureLoader().load("/assets/bg.jpg");
  const material = new MeshBasicMaterial({ map: texture });

  return material;
}

function createPlane() {
  const geometry = new PlaneGeometry(20, 10);
  const plane = new Mesh(geometry, createMaterial());
  plane.position.set(3,3,0);

  return plane;
}

export { createPlane };
