import { MapLayer } from "./components/layer";
import { POI } from "./components/poi";
import { Route } from "./components/route";
import { Map } from "./map";

export class MapScene {
    layerList : Array<MapLayer>;
    poiList : Array<POI>;
    routesList : Array<Route>;
    scene : THREE.Scene;
    map : Map;

    constructor(scene : THREE.Scene, map : Map){
        this.scene = scene;
        this.map = map;
        this.layerList = [];
        this.poiList = [];
        this.routesList = [];
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
        const routes = data.routes;
        for (const route of routes){
            const mapRoute = new Route(this.map);
            for (const poi of route.poi){
                for (const mapPoi of this.poiList){
                    if (mapPoi.title == poi.name){
                       mapRoute.addPoi(mapPoi);
                    }
                }
            }
            mapRoute.createRoute();
            this.routesList.push(mapRoute);
    }
  }
}
