import * as THREE from "three";

export class MapElement {
    mesh : THREE.Mesh;

    constructor(url : string, xpos : number, ypos: number){
        const loader = new THREE.TextureLoader();

        const material = new THREE.MeshLambertMaterial({
            map: loader.load(url)
        });

        const geometry = new THREE.PlaneGeometry(1, 1*.75);

        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.position.set(xpos, ypos, 0);
    }

    getMesh(){
        return this.mesh;
    }

}