import * as THREE from '/build/three.module.js';
import {OBJLoader} from '/jsm/loaders/OBJLoader.js';

export default function (scene){
    const loader = new OBJLoader();
    
    loader.load('../resources/obj/tent_pole.obj',
        // called when resource is loaded
        function (object) {

            object.traverse(function (child) {

                if (child instanceof THREE.Mesh) {
                    child.material = new THREE.MeshPhysicalMaterial({color :0xfe1f14});
                    child.castShadow = true;
                    child.receiveShadow = true;             
                }

            });

            object.castShadow = true;
            object.receiveShadow = true;

            object.position.set(50, -10, 20);
            object.rotateY(Math.PI );
            object.scale.set(10, 10, 10);
            scene.add(object);
        },

        // called when loading is in progresses
        function (xhr) {

            console.log((xhr.loaded / xhr.total * 100) + '% loaded');

        },
        // called when loading has errors
        function (error) {

            console.log('An error happened');

        }
    );
}