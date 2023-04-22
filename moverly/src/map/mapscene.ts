<<<<<<< HEAD
import { MapElement } from "./components/element";

export class MapScene {
    elementList : Array<MapElement>;
    scene : THREE.Scene;

    constructor(scene : THREE.Scene){
        this.scene = scene;
        this.elementList = [];
    }

    parse(data : any){
        const elements = data.elements;

        for (const element of elements){
            const mapElement = new MapElement(element.url, element.x, element.y);
            this.elementList.push(mapElement);
            console.log(mapElement)
            this.scene.add(mapElement.getMesh());
=======
import { MapLayer } from "./components/layer";
import { POI } from "./components/poi";
import { Map } from "./map";
export class MapScene {
    layerList : Array<MapLayer>;
    poiList : Array<POI>;
    scene : THREE.Scene;
    map : Map;

    constructor(scene : THREE.Scene, map : Map){
        this.scene = scene;
        this.map = map;
        this.layerList = [];
        this.poiList = [];
    }

    parse(data : any){
        const layers = data.layers;

        for (const layer of layers){
            const mapLayer = new MapLayer(layer);
            this.layerList.push(mapLayer);
            this.scene.add(mapLayer);
        }
        
        const pois = data.poi;
        for (const poi of pois){
            const mapPoi = new POI(poi, this.map);
            this.poiList.push(mapPoi);
            this.scene.add(mapPoi);
>>>>>>> dev
        }
    }
}