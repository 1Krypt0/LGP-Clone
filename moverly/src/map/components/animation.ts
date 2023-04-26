import * as THREE from 'three';

export class Animation extends THREE.Mesh {
    material: THREE.Material;
    geometry: THREE.PlaneGeometry;
    video: HTMLVideoElement;

  constructor(element: any) {
    super();

    this.video = document.createElement('video');
    this.video.src = element.url;
    this.video.loop = true;
    this.video.muted = true;
    this.video.autoplay = true;

    const texture = new THREE.VideoTexture(this.video);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.format = THREE.RGBAFormat;

    this.material = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true
    });

    this.geometry = element.scale == null ? new THREE.PlaneGeometry(1, 1) : new THREE.PlaneGeometry(element.scale, element.scale);

    this.position.set(element.x, element.y, element.z);
    this.video.play();
  }
}