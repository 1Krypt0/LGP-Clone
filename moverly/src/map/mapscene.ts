import { MapLayer } from "./components/layer";
import { POI } from "./components/poi";
import { Animation } from "./components/animation";
import { Route } from "./components/route";
import { Map } from "./map";
import { Sound } from "./components/sound";

export class MapScene {
  layerList : Array<MapLayer>;
  poiList : Array<POI>;
  animationList: Array<Animation>;
  routesList : Array<Route>;
  soundsList : Array<Sound>
  scene : THREE.Scene;
  map : Map;

  constructor(scene : THREE.Scene, map : Map){
      this.scene = scene;
      this.map = map;
      this.layerList = [];
      this.poiList = [];
      this.animationList = [];
      this.routesList = [];
      this.soundsList = []
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
      for (const animation of animations) {
        const mapAnimation = new Animation(animation, 0.35);
        this.animationList.push(mapAnimation);
        this.scene.add(mapAnimation);
      }
      
      const sounds = data.sounds;
      for (const sound of sounds) {
        const mapSound = new Sound(this.scene, this.map.getListener(), sound); 
        this.soundsList.push(mapSound);
      }

      const routes = data.routes;
      for (const route of routes){
          const mapRoute = new Route(route.name, this.map);
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

  updateAnimations(cameraPosition : THREE.Vector3) {
    for (const animation of this.animationList) {
      animation.update(cameraPosition);
    }

    for (const sound of this.soundsList) {
      sound.update(cameraPosition);
    }
  }


  muteSounds(){
    for (const sound of this.soundsList) {
      sound.muteSound();
    }
  }
}