import { MapLayer } from "./components/layer";
import { POI } from "./components/poi";
import { Map } from "./map";

export class MapScene {
  layerList: Array<MapLayer>;
  poiList: Array<POI>;
  scene: THREE.Scene;
  map: Map;

  constructor(scene: THREE.Scene, map: Map) {
    this.scene = scene;
    this.map = map;
    this.layerList = [];
    this.poiList = [];
  }

  parse(data: any) {
    const layers = data.layers;

    for (const layer of layers) {
      const mapLayer = new MapLayer(layer);
      this.layerList.push(mapLayer);
      this.scene.add(mapLayer);
    }

    const pois = data.poi;
    for (const poi of pois) {
      const mapPoi = new POI(poi, this.map);
      this.poiList.push(mapPoi);
      this.scene.add(mapPoi);
    }
  }
}
