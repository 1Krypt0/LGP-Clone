import * as THREE from 'three';

export class RouteLine extends THREE.LineSegments {
  constructor(start: THREE.Vector3, end: THREE.Vector3) {
    const points = [start.clone().setZ(0.001), end.clone().setZ(0.001)];
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineDashedMaterial({
      color: 0xff0000,
      linewidth: 3,
      dashSize: 1,
      gapSize: 0.1,
    });

    super(geometry, material);

    this.computeLineDistances();
  }
}