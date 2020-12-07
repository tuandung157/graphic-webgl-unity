import * as THREE from '/build/three.module.js';

export default class Snow {
    constructor() {
        this.snow = this.createSnow();
    }

    createSnow(flakeCount) {
        var flakeGeometry = new THREE.TetrahedronGeometry(0.5); // radius
        var flakeMaterial = new THREE.MeshBasicMaterial({ color: 0xe5f8f5 });

        var snow = new THREE.Group();

        for (let i = 0; i < flakeCount; i++) {
        var flakeMesh = new THREE.Mesh(flakeGeometry, flakeMaterial);
        flakeMesh.position.set(
            (Math.random() - 0.5) * 150,
            (Math.random() - 0.0) * 300,
            (Math.random() - 0.5) * 150
        );
        snow.add(flakeMesh);
        }
 
        return snow;

    }

    createSnowTest(){
        var flakeGeometry = new THREE.TetrahedronGeometry(1); // radius
        var flakeMaterial = new THREE.MeshBasicMaterial({ color: 0xe5f8f5 });

        var flakeMesh = new THREE.Mesh(flakeGeometry, flakeMaterial);
        return flakeMesh;
        
    }

    update(){
        
        // this.snow.translateY(-0.02);
        // console.log(this.snow);
    }
}