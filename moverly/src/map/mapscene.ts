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
        }
    }
}