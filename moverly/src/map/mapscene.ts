import { MapLayer } from "./components/layer";
import { POI } from "./components/poi";
import { Animation } from "./components/animation";
import { Map } from "./map";
export class MapScene {
    layerList : Array<MapLayer>;
    poiList : Array<POI>;
    animationList : Array<Animation>;
    scene : THREE.Scene;
    map : Map;

    constructor(scene : THREE.Scene, map : Map){
        this.scene = scene;
        this.map = map;
        this.animationList = [];
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
        }

        const animations = data.animations;
        for (const animation of animations){
            const mapAnimation = new Animation(animation);
            this.animationList.push(mapAnimation);
            this.scene.add(mapAnimation);
        }
    }
}