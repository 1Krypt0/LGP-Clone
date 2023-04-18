import * as THREE from "three";

export class POI extends THREE.Mesh{
    material : THREE.Material
    geometry : THREE.PlaneGeometry 
       
    constructor(poi : any){
        super();
        this.material = new THREE.MeshBasicMaterial({
            color : "red",
            transparent : true,
            //opacity : 0
        });

        this.geometry = new THREE.PlaneGeometry(0.0075, 0.0075);;
        this.position.set(poi.x, poi.y, 0);
    }
    onClick(){
        console.log("Algo");
    }

}