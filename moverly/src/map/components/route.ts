import { POI } from './poi';


export class Route {
    routeList : Array<POI>;

    constructor(){
        this.routeList = [];
    }

    addPoi(poi : POI){
        this.routeList.push(poi);
    }

    getRoute(){
        return this.routeList;
    }
}