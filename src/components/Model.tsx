import * as THREE from "three";
import React, { useState } from "react";
import { useGLTF, Points, PointsBuffer } from "@react-three/drei/native";
import { GLTF } from "three-stdlib";


type GLTFResult = GLTF & {
  nodes: {
    BaseSpiderMan: THREE.Mesh;
  };
  materials: {
    ["Material.001"]: THREE.MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(require('../assets/glb/3DHumanBodyModel.glb')) as GLTFResult;
  return (
    <>
      <Points
      >
        <directionalLight position={[1, 1, 1]} args={['gray', 5]} />
        <directionalLight position={[-1, 1, -1]} args={['gray', 5]} />
        <directionalLight position={[-1, 0, -1]} args={['gray', 5]} />
        <ambientLight color={'gray'} />
        <group
          {...props}
          dispose={null}
          scale={0.98}
          position={[0, -2, 0]}

        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BaseSpiderMan.geometry}
            material={materials["Material.001"]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={2.113}
          >
            <meshLambertMaterial />
          </mesh>
        </group>
        <pointsMaterial attach="material" vertexColors size={10} sizeAttenuation={false} color={"red"} />
      </Points>
    </>

  );
}

useGLTF.preload(require('../assets/glb/3DHumanBodyModel.glb'));
