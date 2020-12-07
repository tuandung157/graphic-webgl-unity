import * as THREE from '/build/three.module.js';
export default class Log {
    constructor(x, y, z, alpha){
        this.log = this.LogInit();
        this.log.position.set(x, y, z);
        this.log.rotateY(alpha);
    }

    LogInit(){
        let group = new THREE.Group();

        let brownMaterial = new THREE.MeshPhongMaterial({color: 0x3d2817}); // brown
        let greenMaterial = new THREE.MeshPhongMaterial({color: 0x2d4c1e}); // green
        let creamMaterial = new THREE.MeshPhongMaterial({color: 0xd7ead2}); // cream
        let whiteMaterial = new THREE.MeshPhongMaterial({color: 0xffffff}); // white
        let yellowMaterial = new THREE.MeshPhongMaterial({color: 0x7cff00}); //yellow



        let c0 = new THREE.Mesh(new THREE.CylinderGeometry(2, 2, 12, 4, 1), brownMaterial);
        c0.position.y = 6;
        c0.receiveShadow = true;
        c0.castShadow = true;
        c0.rotateZ(Math.PI/2);

        let c1 = new THREE.Mesh(new THREE.CylinderGeometry(2, 2, 12, 8, 1), brownMaterial);
        c1.position.y = 6;
        c1.position.z = 4;
        c1.receiveShadow = true;
        c1.castShadow = true;
        c1.rotateZ(Math.PI/2);

        let c3 = new THREE.Mesh(new THREE.CylinderGeometry(2, 1, 12, 8, 1), brownMaterial);
        c3.position.y = 6;
        c3.position.z = 6;
        c3.receiveShadow = true;
        c3.castShadow = true;
        c3.rotateZ(Math.PI/2);

        let c2 = new THREE.Mesh(new THREE.CylinderGeometry(2, 2, 12, 5, 1), brownMaterial);
        c2.position.y = 8.7;
        c2.position.z = 2;
        c2.receiveShadow = true;
        c2.castShadow = true;
        c2.rotateZ(Math.PI/2);

        group.add(c0);
        group.add(c1);
        group.add(c2);
        group.add(c3);
        return group;
    }
}