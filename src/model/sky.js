import * as THREE from '/build/three.module.js';


export default class Sky {
    constructor() {
        this.sky = this.createSky();
    }

    createSky() {

        let skyGeo = new THREE.SphereBufferGeometry(1000, 64, 64);
        const textureLoader = new THREE.TextureLoader();

        let map = textureLoader.load("../resources/img/night.jpg");
        let skyMat = new THREE.MeshBasicMaterial({
            side: THREE.BackSide,
            color: 0xf494ce,
            map: map,
        });
        let sky = new THREE.Mesh(skyGeo, skyMat);
        sky.position.x = 0
        sky.position.y = 0
        sky.position.z = 0
        return sky;
    }
}