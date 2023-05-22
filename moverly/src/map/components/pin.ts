import * as THREE from 'three';

export class Pin extends THREE.Sprite {
  constructor(imageUrl: string) {
    const texture = new THREE.TextureLoader().load(imageUrl);
    const material = new THREE.SpriteMaterial({ map: texture });
    super(material);
    this.scale.set(0.03, 0.03, 1);   
  }
}