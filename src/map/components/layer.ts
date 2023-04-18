import * as THREE from "three";

export class MapLayer {
    mesh : THREE.Mesh;

    constructor(element : any){
        const texture = new THREE.TextureLoader().load(element.url, (tex) => {
            tex.needsUpdate = true;
            this.mesh.scale.set(1.0, tex.image.height / tex.image.width, 1.0);
        });

        const material = new THREE.MeshBasicMaterial({  
            map: texture,
            transparent: true
        });

        const geometry = element.scale == null ? new THREE.PlaneGeometry(1, 1) : new THREE.PlaneGeometry(element.scale, element.scale);

        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.position.set(element.x, element.y, element.z);
    }

    getMesh(){
        return this.mesh;
    }

}