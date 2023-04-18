import { MapLayer } from "./components/layer";
import { POI } from "./components/poi";

export class MapScene {
    layerList : Array<MapLayer>;
    poiList : Array<POI>;
    scene : THREE.Scene;

    constructor(scene : THREE.Scene){
        this.scene = scene;
        this.layerList = [];
        this.poiList = [];
    }

    parse(data : any){
        const layers = data.layers;

        for (const layer of layers){
            const mapLayer = new MapLayer(layer);
            this.layerList.push(mapLayer);
            this.scene.add(mapLayer.getMesh());
        }
        
        const pois = data.poi;
        for (const poi of pois){
            const mapPoi = new POI(poi);
            this.layerList.push(mapPoi);
            this.scene.add(mapPoi.getMesh());
        }
    }
}