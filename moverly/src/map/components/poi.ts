import * as THREE from "three";
import { Map } from "../map";
import { PopUp } from "./popup";
import { Pin} from "./pin";
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';

export class POI extends THREE.Mesh{
    material : THREE.Material
    geometry : THREE.CircleGeometry 
    scene : Map
    pin : Pin
    popup : PopUp | null
    title : string | null
    street : string | null
    text : string | null
    imageUrl : string | null
    fromRestore : THREE.Vector3 | null
    toRestore : THREE.Vector3 | null
       
    constructor(poi : any, scene : Map){
        super();
        this.scene = scene;
        this.material = new THREE.MeshBasicMaterial({
            color: 0xff0000,
            transparent : true,
            opacity : 1
        });
        const loader = new FontLoader();

        this.geometry = new THREE.CircleGeometry(0.003, 32);
        this.position.set(poi.x, poi.y, 0.01);

        this.pin = new Pin("../src/assets/ui/pin.png"); 
        this.pin.position.set(this.position.x, this.position.y+0.015, this.position.z);

        this.popup = null;
        this.title = null;
        if (poi.title){
            this.title = poi.title;
        }
        this.street = null;
        if (poi.street) {
            this.street = poi.street;
        }
        this.text = null;
        if (poi.text) {
            this.text = poi.text;
        }
        this.imageUrl = null;
        if (poi.imageUrl) {
            this.imageUrl = poi.imageUrl;
        }
        this.fromRestore = null;
        this.toRestore = null;

        const fontUrl = '/src/assets/ui/helvetiker_regular.typeface.json';

        loader.load(fontUrl, (font) => {
            const geometry = new TextGeometry("i", {
                font: font,
                size: 0.003,
                height: 0.0001,
            });
            const textMaterial = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            });
            const textMesh = new THREE.Mesh(geometry, textMaterial);
            const box = new THREE.Box3().setFromObject(textMesh);
            const size = box.getSize(new THREE.Vector3());
            textMesh.position.set(-size.x / 2, -size.y / 2, 0.0);
            this.add(textMesh);
        });

        this.layers.enableAll();
    }

    onClick(){
        if(this.popup != null) return;
        if (this.title == null || this.text == null) return;
        this.popup = new PopUp(this.title, this.street, this.text, this.imageUrl);
        this.visible = false;
        this.popup.position.set( 0, 0, 0 );
        this.add( this.popup );
        this.popup.layers.set( 0 );
        this.scene.openPopUp(this);
    }

    hover(){
        this.scale.set(2,2,1);
    }

    dehover(){
        this.scale.set(1,1,1);
    }

    closePopup(){
        if(this.popup == null) return;
        this.remove(this.popup);
        this.popup = null;
        this.visible = true;
        this.scene.openPopUp(null);
        this.remove(this.popup);
        this.popup = null;
        return {"from" : this.fromRestore, "target" : this.toRestore};
    }

    restorePosition(from : THREE.Vector3, to : THREE.Vector3){
        this.fromRestore = from.clone();
        this.toRestore = to.clone();
    }
}   
