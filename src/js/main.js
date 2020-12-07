import * as THREE from '/build/three.module.js';
import {OrbitControls} from '/jsm/controls/OrbitControls.js';
import {Reflector} from '/jsm/objects/Reflector.js';

import Sky from "/model/sky.js";
import Snow from "/model/snow.js";
import Tree from "/model/tree.js";
import Moon from "/model/moon.js";
import SnowMan from "/model/snowMan.js";
import Log from "/model/log.js";
import * as Tent from "/model/loadObj.js";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 3200);
camera.position.z = 50;
camera.position.y = 30;

const renderer = new THREE.WebGLRenderer();

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.BasicShadowMap;

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputEncoding = THREE.sRGBEncoding;
document.body.appendChild(renderer.domElement);

//control
const controls = new OrbitControls(camera, renderer.domElement);
controls.maxPolarAngle = Math.PI * 0.5;
controls.minDistance = 50;
controls.maxDistance = 500;

//ground
let planeGeo = new THREE.CylinderGeometry( 1200, 1200, 20, 64 );
const textureLoader1 = new THREE.TextureLoader();

let map1 = textureLoader1.load("../resources/img/snow.jpg");
map1.wrapS = THREE.RepeatWrapping;
map1.wrapT = THREE.RepeatWrapping;
map1.repeat.set( 60, 60 );

let planeMat = new THREE.MeshPhongMaterial({
    map: map1,
});

let plane = new THREE.Mesh(planeGeo, planeMat);
plane.position.x = 0;
plane.position.y = -15;
plane.position.z = 0;
plane.receiveShadow = true;
plane.castShadow = true;
scene.add( plane );


//lake
let lakeGeo = new THREE.CylinderGeometry( 100, 100, 20, 60 );
const textureLoader2 = new THREE.TextureLoader();

let map2 = textureLoader2.load("../resources/img/water-ice2.jpg");
map2.wrapS = THREE.RepeatWrapping;
map2.wrapT = THREE.RepeatWrapping;
map2.repeat.set( 1, 1 );

let lakeMat = new THREE.MeshPhongMaterial({
    map: map2,
});

let lake = new THREE.Mesh(lakeGeo, lakeMat);
lake.position.x = 10;
lake.position.y = -14.9;
lake.position.z = 140;
lake.receiveShadow = true;
lake.castShadow = true;
scene.add( lake );

// let lake1 = new THREE.Mesh(lakeGeo, lakeMat);
// lake1.position.x = 120;
// lake1.position.y = -14.9;
// lake1.position.z = 450;
// lake1.receiveShadow = true;
// lake1.castShadow = true;
// scene.add( lake1 );

//init lake with mirror
// scene size
const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

let mirrorLakeGeo = new THREE.CircleBufferGeometry(50, 64);
const mirrorLake = new Reflector( mirrorLakeGeo, {
    clipBias: 0.03,
    textureWidth: WIDTH * window.devicePixelRatio,
    textureHeight: HEIGHT * window.devicePixelRatio,
    color: 0x777777
})

mirrorLake.position.y = -4.5;
mirrorLake.position.z = 120;
mirrorLake.position.x = 50;
mirrorLake.rotateX( - Math.PI / 2 );
// scene.add( mirrorLake );

// init
function init(){
    skyInit();
    initTree();
    initMoon();
    initSnowMan();
    initLog();
    initTent();
}

// init sky
function skyInit(){
    let sky = new Sky();
    scene.add(sky.createSky());
}
//init snow
    let snow = new Snow();
    let snowGroup = snow.createSnow(500);
    scene.add(snowGroup);
//init tree
function initTree(){
    scene.add(new Tree(10, -10, 10).tree);
    scene.add(new Tree(-10, -10, 0).tree);

    scene.add(new Tree(30, -10, -30).tree);

    scene.add(new Tree(0, -10, 20).tree);
    scene.add(new Tree(-20, -10, 30).tree);
}
function initMoon(){
    scene.add(new Moon(40,120,40).moon);
}
function initSnowMan(){
    scene.add(new SnowMan(30,-10,30).snowMan);
}
function initLog(){
    scene.add(new Log(-20,-10,-20, Math.PI/4).log);
    scene.add(new Log(-30,-10,-30, 0).log);

    scene.add(new Log(70,-10,30, Math.PI).log);
    scene.add(new Log(80,-10,40, 0).log);
}
//tent
function initTent(){
    Tent.default(scene);
}

//light
var dirLight = new THREE.DirectionalLight(0xffffff, 1);

dirLight.position.set(40,120,40);

dirLight.castShadow = true;

dirLight.shadow.camera.near = 100;
dirLight.shadow.camera.far = 1000;
dirLight.shadow.camera.left = -50;
dirLight.shadow.camera.bottom = -50;
dirLight.shadow.camera.right = 50;
dirLight.shadow.camera.top = 50;
dirLight.shadow.bias=0.00001;
// dirLight.target.position.set(20, -2, 0);

dirLight.shadow.radius = 1;
scene.add(dirLight);
// scene.add(dirLight.target);

// point light
let centerLight = new THREE.PointLight(0xee693c, 5, 100, 2);
centerLight.position.set(50, 2, 20);
scene.add(centerLight);

////////////////////////////////////////////////////////////////////////
function update(){
    //update func for model  
    //snow fall
    snow.update();
    snowGroup.translateY(-0.1);
    // console.log()
    if(snowGroup.position.y < -200){
        snowGroup.position.y =0;
    }
}
var animate = function () {
    requestAnimationFrame(animate);
    controls.update();
    update();
    render();
};

function render() {

    renderer.render(scene, camera);
    
}
init();
animate();