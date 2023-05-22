import * as THREE from 'three';

export class RouteLine extends THREE.Line {
  constructor(start: THREE.Vector3, end: THREE.Vector3) {
    const curve = new THREE.CatmullRomCurve3(
      [start, new THREE.Vector3(0, 0, 0.1), end],
      false,
      "catmullrom",
      0.5
    );
    const points = curve.getPoints(1000);
    const geometry = new THREE.BufferGeometry().setFromPoints(points);

    const material = new THREE.LineBasicMaterial({
        color: 0xff0000,
        linewidth: 3
    });
    super(geometry, material);
  }
}