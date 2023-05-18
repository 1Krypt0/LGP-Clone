import * as THREE from "three";
import { Map } from "../map";
import { PopUp } from "./popup";
import { FontLoader } from "three/addons/loaders/FontLoader.js";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";

export class POI extends THREE.Mesh {
  material: THREE.Material;
  geometry: THREE.CircleGeometry;
  scene: Map;
  popup: PopUp | null;
  title: string | null;
  text: string | null;

  constructor(poi: any, scene: Map) {
    super();
    this.scene = scene;
    this.material = new THREE.MeshBasicMaterial({
      color: 0xff0000,
      transparent: true,
      opacity: 1,
    });
    const loader = new FontLoader();

    this.geometry = new THREE.CircleGeometry(0.003, 32);
    this.position.set(poi.x, poi.y, 0.01);
    this.popup = null;
    this.title = null;
    if (poi.title) {
      this.title = poi.title;
    }
    this.text = null;
    if (poi.text) {
      this.text = poi.text;
    }

    const fontUrl = "/assets/fonts/helvetiker_regular.typeface.json";

    loader.load(fontUrl, (font) => {
      const geometry = new TextGeometry("i", {
        font: font,
        size: 0.003,
        height: 0.001,
      });
      const textMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff,
      });
      const textMesh = new THREE.Mesh(geometry, textMaterial);
      const box = new THREE.Box3().setFromObject(textMesh);
      const size = box.getSize(new THREE.Vector3());
      textMesh.position.set(-size.x / 2, -size.y / 2, 0.0);
      this.add(textMesh);
    });

    this.layers.enableAll();
  }
  onClick() {
    if (this.popup != null) return;
    if (this.title == null || this.text == null) return;
    this.popup = new PopUp(this.title, this.text);

    this.popup.position.set(0, 0, 0);
    this.add(this.popup);
    this.popup.layers.set(0);
    this.scene.openPopUp(this);
  }

  closePopup() {
    if (this.popup == null) return;

    this.remove(this.popup);
    this.popup = null;
  }
}
