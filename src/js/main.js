import * as THREE from '/build/three.module.js';
import {OrbitControls} from '/jsm/controls/OrbitControls.js';

import Sky from "/model/sky.js";
import Snow from "/model/snow.js";




const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 800);
camera.position.z = 50;
camera.position.y = 30;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);

let planeGeo = new THREE.CylinderGeometry( 250, 250, 1, 64 );
const textureLoader1 = new THREE.TextureLoader();

let map1 = textureLoader1.load("../resources/img/snow.jpg");
map1.wrapS = THREE.RepeatWrapping;
map1.wrapT = THREE.RepeatWrapping;
map1.repeat.set( 60, 60 );

let planeMat = new THREE.MeshBasicMaterial({
    map: map1,
});

let plane = new THREE.Mesh(planeGeo, planeMat);
plane.position.x = 0
plane.position.y = -10
plane.position.z = 0
scene.add( plane );


// init
function init(){
    skyInit();
}
// init sky
function skyInit(){
    let sky = new Sky();
    scene.add(sky.createSky());
}
//init snow
    let snow = new Snow();
    let snowGroup = snow.createSnow(300);
    scene.add(snowGroup);

////////////////////////////////////////////////////////////////////////

var animate = function () {
    requestAnimationFrame(animate);
    controls.update();
    
    //update func for model  
    //snow fall
    snow.update();
    snowGroup.translateY(-0.1);
    // console.log()
    if(snowGroup.position.y < -200){
        snowGroup.position.y =0;
    }


    render();
};

function render() {
    renderer.render(scene, camera);
}

animate();