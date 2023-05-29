import { MapLayer } from "./components/layer";
import { POI } from "./components/poi";
import { Animation } from "./components/animation";
import { Route } from "./components/route";
import { Map } from "./map";

interface Event {
  name: string;
  description: string;
  price: number;
  date: Date;
  xCoord: number;
  yCoord: number;
}

async function getEvents(): Promise<POI[]> {
  const base = "http://localhost:5174";
  const res = await fetch(`${base}/api/events`);
  const data: { events: Event[] } = await res.json();
  const events = data.events;
  const newPOIs: POI[] = [];

  for (const event of events) {
    const poi = convertEventToPOI(event);
    newPOIs.push(poi);
  }

  return newPOIs;
}

function convertEventToPOI(event: Event): POI {
  const poi = new POI({}, null);
  poi.title = event.name;
  poi.text = event.description;
  poi.street = `${event.price}$`;
  poi.imageUrl = "";
  poi.position.set(event.xCoord, event.yCoord, 0.01);

  return poi;
}

export class MapScene {
  layerList: Array<MapLayer>;
  poiList: Array<POI>;
  animationList: Array<Animation>;
  eventsList: POI[];
  routesList: Array<Route>;
  scene: THREE.Scene;
  map: Map;

  constructor(scene: THREE.Scene, map: Map) {
    this.scene = scene;
    this.map = map;
    this.layerList = [];
    this.poiList = [];
    this.animationList = [];
    this.routesList = [];
    this.eventsList = [];
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

    getEvents().then((data) => {
      this.eventsList = data;

      for (const event of this.eventsList) {
        event.scene = this.map;
        this.scene.add(event);
      }
    });

    const animations = data.animations;
    for (const animation of animations) {
      const mapAnimation = new Animation(animation, 0.35);
      this.animationList.push(mapAnimation);
      this.scene.add(mapAnimation);
    }

    for (const event of this.eventsList) {
      this.scene.add(event);
    }

    const routes = data.routes;
    for (const route of routes) {
      const mapRoute = new Route(route.name, this.map);
      for (const poi of route.poi) {
        for (const mapPoi of this.poiList) {
          if (mapPoi.title == poi.name) {
            mapRoute.addPoi(mapPoi);
          }
        }
      }
      mapRoute.createRoute();
      this.routesList.push(mapRoute);
    }
  }

  updateAnimations(cameraPosition: THREE.Vector3) {
    for (const animation of this.animationList) {
      animation.update(cameraPosition);
    }
  }
}
