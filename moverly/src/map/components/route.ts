import { POI } from './poi';
import { Map } from "../map";
import { RouteLine } from './routeline';


export class Route {
    name : string;
    routeList : Array<POI>;
    routeLines : Array<RouteLine>;
    scene : Map;

    constructor(name : string, scene : Map){
        this.name = name;
        this.scene = scene;
        this.routeList = [];
        this.routeLines = [];
    }

    addPoi(poi : POI){
        this.routeList.push(poi);
    }

    createRoute(){
        for (let i = 0; i < this.routeList.length - 1; i++){
            const poi1 = this.routeList[i];
            const poi2 = this.routeList[i + 1];
            const routeLine = new RouteLine(poi1.position, poi2.position);
            this.routeLines.push(routeLine);
        }
    }

    showRoute(){
        this.scene.showRoute(this);
    }

    hideRoute(){
        this.scene.hideRoute(this);
    }


}