// // src/components/ThreeDScene.js
// import React, { useEffect, useRef } from 'react';
// import * as THREE from 'three';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import humanoid from '../assets/humanoid-robot.png'

// const ThreeDScene = () => {
//   const mountRef = useRef(null); // Reference to DOM element for rendering

//   useEffect(() => {
//     // Scene, camera, renderer setup
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );
//     const renderer = new THREE.WebGLRenderer();
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     mountRef.current.appendChild(renderer.domElement); // Mount renderer to DOM element

//     // Lighting
//     const light = new THREE.DirectionalLight(0xffffff, 1);
//     light.position.set(0, 10, 10).normalize();
//     scene.add(light);

//     // Load 3D humanoid robot model using GLTFLoader
//     const loader = new GLTFLoader();
//     loader.load(humanoid, function (gltf) {
//       const robot = gltf.scene;
//       scene.add(robot);

//       // Animate the robot with rotation
//       const animate = () => {
//         requestAnimationFrame(animate);
//         robot.rotation.y += 0.01; // Rotate the model on the Y axis
//         renderer.render(scene, camera);
//       };

//       animate();
//     }, undefined, (error) => {
//       console.error('An error happened while loading the model:', error);
//     });

//     // Set camera position
//     camera.position.z = 5;

//     // OrbitControls for user interaction
//     const controls = new OrbitControls(camera, renderer.domElement);
//     controls.enableDamping = true;
//     controls.dampingFactor = 0.05;

//     // Cleanup on component unmount
//     return () => {
//       mountRef.current.removeChild(renderer.domElement);
//     };
//   }, []);

//   return <div ref={mountRef} />;
// };

// export default ThreeDScene;
