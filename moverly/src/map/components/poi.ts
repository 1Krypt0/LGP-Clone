import * as THREE from "three";
import { Map } from "../map";
import { PopUp } from "./popup";

export class POI extends THREE.Mesh{
    material : THREE.Material
    geometry : THREE.CircleGeometry 
    scene : Map
    popup : PopUp | null
    title : string | null
    text : string | null
       
    constructor(poi : any, scene : Map){
        super();
        this.scene = scene;
        this.material = new THREE.MeshBasicMaterial({
            transparent : true,
            opacity : 0
        });

        this.geometry = new THREE.CircleGeometry(0.003, 32);;
        this.position.set(poi.x, poi.y, 0);
        this.popup = null;
        this.title = null;
        if (poi.title){
            this.title = poi.title;
        }
        this.text = null;
        if (poi.text) {
            this.text = poi.text;
        }
        this.layers.enableAll();
    }
    onClick(){
        if(this.popup != null) return;
        if (this.title == null || this.text == null) return;
        this.popup = new PopUp(this.title, this.text);
        
        this.popup.position.set( 0.1, 0.1, 0 );
        this.add( this.popup );
        this.popup.layers.set( 0 );
        this.scene.openPopUp(this);
    }

    closePopup(){
        if(this.popup == null) return;

        this.remove(this.popup);
        this.popup = null;
    }

}