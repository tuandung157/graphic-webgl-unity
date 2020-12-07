import * as THREE from '/build/three.module.js';
export default class SnowMan {
    constructor(x, y, z){
        this.snowMan = this.SnowMan();
        this.snowMan.position.set(x, y, z);
    }

    SnowMan(){
        let group = new THREE.Group();

        let brownMaterial = new THREE.MeshPhongMaterial({color: 0x3d2817}); // brown
        let greenMaterial = new THREE.MeshPhongMaterial({color: 0x2d4c1e}); // green
        let creamMaterial = new THREE.MeshPhongMaterial({color: 0xd7ead2}); // cream
        let whiteMaterial = new THREE.MeshPhongMaterial({color: 0xffffff}); // white
        let yellowMaterial = new THREE.MeshPhongMaterial({color: 0x7cff00}); //yellow
        
        //hat
        let h1 = new THREE.Mesh(new THREE.CylinderGeometry(3, 3, 0.2), yellowMaterial);
        h1.position.y = 25;
        h1.receiveShadow = true;
        h1.castShadow = true;

        let h2 = new THREE.Mesh(new THREE.CylinderGeometry(2, 2, 5, 12), yellowMaterial);
        h2.position.y = 25;
        h2.receiveShadow = true;
        h2.castShadow = true;

        //body
        let c1 = new THREE.Mesh(new THREE.SphereGeometry(6, 32, 32), whiteMaterial);
        c1.position.y = 10;
        c1.receiveShadow = true;
        c1.castShadow = true;
        let c2 = new THREE.Mesh(new THREE.SphereGeometry(4, 32, 32), whiteMaterial);
        c2.position.y = 18;
        c2.receiveShadow = true;
        c2.castShadow = true;
        let c3 = new THREE.Mesh(new THREE.SphereGeometry(3, 32, 32), whiteMaterial);
        c3.position.y = 23;
        c3.receiveShadow = true;
        c3.castShadow = true;

        //hand
        
        group.add(h1);
        group.add(h2);
        group.add(c1);
        group.add(c2);
        group.add(c3);
        return group;
    }
}