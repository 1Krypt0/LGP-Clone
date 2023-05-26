import * as THREE from 'three';

export class RouteLine extends THREE.Line {
  constructor(start: THREE.Vector3, end: THREE.Vector3) {
    const offset = 0.001;
    const curve = new THREE.CatmullRomCurve3(
      [start.clone().setZ(offset), end.clone().setZ(offset)],
      false,
      'catmullrom',
      0.5
    );
    const points = curve.getPoints(1000);
    const geometry = new THREE.BufferGeometry().setFromPoints(points);

    const material = new THREE.LineDashedMaterial({
      color: 0xff0000,
      linewidth: 5,
      dashSize: 0.01,
      gapSize: 0.01,
      opacity: 0,
      transparent: true,
    });

    super(geometry, material);

    this.computeLineDistances();
  }
}