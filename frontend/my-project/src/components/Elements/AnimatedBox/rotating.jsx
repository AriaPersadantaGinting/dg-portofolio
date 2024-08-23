import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";

const RotatingBox = () => {
  const mountRef = useRef(null);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    // Setup scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Create a box
    const geometry = new THREE.BoxGeometry(1, 1, 1);

    // Front side material
    const materialFront = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
      side: THREE.DoubleSide,
    });
    // Back side material
    const materialBack = new THREE.MeshBasicMaterial({
      color: 0xff0000,
      side: THREE.DoubleSide,
    });

    const materials = [
      materialFront, // Right
      materialFront, // Left
      materialFront, // Top
      materialFront, // Bottom
      materialFront, // Front
      materialBack, // Back
    ];

    const cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);

    camera.position.z = 5;

    // Animation function
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the cube based on state
      if (isFlipped) {
        cube.rotation.y += 0.05;
      } else {
        cube.rotation.y -= 0.05;
      }

      renderer.render(scene, camera);
    };
    animate();

    // Clean up on component unmount
    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, [isFlipped]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800">
      <div ref={mountRef} className="w-full h-full"></div>
      <button
        onClick={() => setIsFlipped(!isFlipped)}
        className="mt-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-300"
      >
        Flip Box
      </button>
    </div>
  );
};

export default RotatingBox;
