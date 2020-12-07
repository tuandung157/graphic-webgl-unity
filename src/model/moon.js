import * as THREE from '/build/three.module.js';

export default class Moon {
    constructor(x,y,z) {
        this.moon = this.moonInit();
        this.moon.position.set(x,y,z);
    }

    moonInit(){
        let moonGeometry = new THREE.SphereGeometry( 5, 152, 152 );
        let sphere = new THREE.Mesh( moonGeometry);
        // sphere.position.set(0, 40, 0);

        let textureLoader = new THREE.TextureLoader();

        let textureCube = textureLoader.load('../resources/img/snow.jpg', function () {
            sphere.material.needsUpdate = true;
        });
        sphere.material.envMap = textureCube;
        sphere.material.transparent = true;
        sphere.material.color = new THREE.Color(0xffff55);
        textureCube.mapping = THREE.EquirectangularReflectionMapping;
        return sphere;
    }
    update(){

    }
}