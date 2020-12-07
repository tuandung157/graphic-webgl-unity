import * as THREE from '/build/three.module.js';
export default class Tree {
    constructor(x, y, z){
        this.tree = this.createTree();
        this.tree.position.set(x, y, z);
    }

    createTree(){
        let group = new THREE.Group();

        let brownMaterial = new THREE.MeshPhongMaterial({color: 0x3d2817}); 
        let greenMaterial = new THREE.MeshPhongMaterial({color: 0x2d4c1e}); 
        let creamMaterial = new THREE.MeshPhongMaterial({color: 0xd7ead2}); 
        let whiteMaterial = new THREE.MeshPhongMaterial({color: 0xffffff}); 
        let yellowMaterial = new THREE.MeshPhongMaterial({color: 0x7cff00}); 
        let cream2Material = new THREE.MeshPhongMaterial({color: 0xffe7ba}); 
        let green2Material = new THREE.MeshPhongMaterial({color: 0x3c6714});
        //goc cay
        let c0 = new THREE.Mesh(new THREE.CylinderGeometry(2, 2, 12, 6, 1, true), brownMaterial);
        c0.position.y = 6;
        c0.receiveShadow = true;
        c0.castShadow = true;
        //la
        let c1 = new THREE.Mesh(new THREE.CylinderGeometry(0, 10, 15, 8), greenMaterial);
        c1.position.y = 18;
        c1.receiveShadow = true;
        c1.castShadow = true;

        let c2 = new THREE.Mesh(new THREE.CylinderGeometry(0, 8, 13, 8), green2Material);
        c2.position.y = 25;
        c2.receiveShadow = true;
        c2.castShadow = true;
        let c3 = new THREE.Mesh(new THREE.CylinderGeometry(0, 6, 12, 8), creamMaterial);
        c3.position.y = 32;
        c3.receiveShadow = true;
        c3.castShadow = true;

        group.add(c0);
        group.add(c1);
        group.add(c2);
        group.add(c3);
        return group;
    }
}