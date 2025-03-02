import * as THREE from 'three';

let camera, scene, renderer;


// init()


export function init(){
    console.log("init() called"); 
    camera = new THREE.PerspectiveCamera(70,window.innerWidth/window.innerHeight, 0.01, 10);
    camera.position.z =1;
    scene = new THREE.Scene();

  

    renderer = new THREE.WebGLRenderer({antialias : true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setAnimationLoop(Animation);
    document.body.appendChild(renderer.domElement);


}
function Animation(){


    renderer.render(scene, camera);

}