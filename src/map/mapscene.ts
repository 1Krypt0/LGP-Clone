import { MapLayer } from "./components/layer";

export class MapScene {
    layerList : Array<MapLayer>;
    scene : THREE.Scene;

    constructor(scene : THREE.Scene){
        this.scene = scene;
        this.layerList = [];
    }

    parse(data : any){
        const layers = data.layers;

        for (const layer of layers){
            const mapLayer = new MapLayer(layer);
            this.layerList.push(mapLayer);
            this.scene.add(mapLayer.getMesh());
        }
    }
}