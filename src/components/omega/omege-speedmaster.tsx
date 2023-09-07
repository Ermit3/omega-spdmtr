/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame } from "@react-three/fiber";
import { Mesh, Group } from "three";
import gsap from "gsap";

type GLTFResult = GLTF & {
  nodes: {
    pCylinder64: THREE.Mesh;
    pCylinder67: THREE.Mesh;
    pCylinder70: THREE.Mesh;
    pCylinder62: THREE.Mesh;
    pCylinder65: THREE.Mesh;
    pCylinder68: THREE.Mesh;
    pCylinder71: THREE.Mesh;
    pCylinder61: THREE.Mesh;
    pCylinder63: THREE.Mesh;
    pCylinder66: THREE.Mesh;
    pCylinder69: THREE.Mesh;
    pCylinder72: THREE.Mesh;
    pCylinder49: THREE.Mesh;
    pCylinder52: THREE.Mesh;
    pCylinder56: THREE.Mesh;
    pCylinder60: THREE.Mesh;
    pCylinder50: THREE.Mesh;
    pCylinder53: THREE.Mesh;
    pCylinder57: THREE.Mesh;
    pCylinder54: THREE.Mesh;
    pCylinder58: THREE.Mesh;
    pCylinder51: THREE.Mesh;
    pCylinder55: THREE.Mesh;
    pCylinder59: THREE.Mesh;
    Mesh018: THREE.Mesh;
    Mesh018_1: THREE.Mesh;
    Mesh019: THREE.Mesh;
    Mesh019_1: THREE.Mesh;
    pCylinder48: THREE.Mesh;
    Mesh045: THREE.Mesh;
    Mesh045_1: THREE.Mesh;
    polySurface12: THREE.Mesh;
    Mesh044: THREE.Mesh;
    Mesh044_1: THREE.Mesh;
    glass: THREE.Mesh;
    pusherReset: THREE.Mesh;
    crown: THREE.Mesh;
    hourHand: THREE.Mesh;
    hourLume001: THREE.Mesh;
    minuteHand: THREE.Mesh;
    hourLume: THREE.Mesh;
    Mesh010: THREE.Mesh;
    Mesh010_1: THREE.Mesh;
    Mesh010_2: THREE.Mesh;
    pusherStart: THREE.Mesh;
    Mesh008: THREE.Mesh;
    Mesh008_1: THREE.Mesh;
    hourLume002: THREE.Mesh;
    Mesh013: THREE.Mesh;
    Mesh013_1: THREE.Mesh;
    lumeMarkers: THREE.Mesh;
    Mesh011: THREE.Mesh;
    Mesh011_1: THREE.Mesh;
    Mesh007: THREE.Mesh;
    Mesh007_1: THREE.Mesh;
    Mesh012: THREE.Mesh;
    Mesh012_1: THREE.Mesh;
    Mesh012_2: THREE.Mesh;
    Mesh016: THREE.Mesh;
    Mesh016_1: THREE.Mesh;
    dial: THREE.Mesh;
    logo: THREE.Mesh;
    logo001: THREE.Mesh;
  };
  materials: {
    metalPolished: THREE.MeshStandardMaterial;
    bazelMetalMat: THREE.MeshStandardMaterial;
    lockMat: THREE.MeshStandardMaterial;
    bazelSideMetalMat: THREE.MeshStandardMaterial;
    glassMat: THREE.MeshPhysicalMaterial;
    whiteHandMat: THREE.MeshStandardMaterial;
    lumeMat: THREE.MeshStandardMaterial;
    metalPolishedBack: THREE.MeshStandardMaterial;
    metalBrushedBack: THREE.MeshStandardMaterial;
    metalBackSeahorse: THREE.MeshStandardMaterial;
    bazelBlackMat: THREE.MeshStandardMaterial;
    dialMat: THREE.MeshStandardMaterial;
  };
};

export function OmegaSpeedmaster(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "./models/omega-speedmaster-4.glb"
  ) as GLTFResult;

  const omega = useRef<Group>(null!);
  const scroll = useScroll();
  const tl = useRef<any>();

  const minuteHand = useRef<Mesh>(null!);

  useEffect(() => {
    gsap.to(omega.current.position, {
      duration: 3,
      x: 0,
      y: 0,
      z: 0,
    });

    gsap.to(omega.current.rotation, {
      duration: 3,
      x: 0,
      y: 0
    });
  })

  useFrame((state, delta) => {
    tl.current.seek(scroll.offset * tl.current.duration());
    minuteHand.current.rotation.y -= delta * 0.1
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline({ defaults: { duration: 2, ease: 'power1.inOut' } })

    tl.current
      .to(omega.current.rotation, { y: -1 }, 1.7)
      .to(omega.current.position, { x: 1 }, 1.7)

      .to(omega.current.rotation, { y: 0 }, 4)
      .to(omega.current.rotation, { x: -0.5 }, 4)
      .to(omega.current.position, { x: 0 }, 4)

      .to(omega.current.rotation, { y: 3.75 }, 7.5)
      .to(omega.current.rotation, { x: 0 }, 7.5)

      .to(omega.current.rotation, { y: 3.75 }, 9)
      .to(omega.current.rotation, { x: 0 }, 9)
  }, [])

  return (
    <group {...props} dispose={null} ref={omega}>
      <group
        position={[0, 0, -0.03]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      >
        <group position={[0, 2.62, 0]}>
          <mesh
            geometry={nodes.pCylinder64.geometry}
            material={materials.metalPolished}
          />
          <mesh
            geometry={nodes.pCylinder67.geometry}
            material={materials.metalPolished}
          />
          <mesh
            geometry={nodes.pCylinder70.geometry}
            material={materials.metalPolished}
          />
          <mesh
            geometry={nodes.pCylinder62.geometry}
            material={materials.metalPolished}
          />
          <mesh
            geometry={nodes.pCylinder65.geometry}
            material={materials.metalPolished}
          />
          <mesh
            geometry={nodes.pCylinder68.geometry}
            material={materials.metalPolished}
          />
          <mesh
            geometry={nodes.pCylinder71.geometry}
            material={materials.metalPolished}
          />
          <mesh
            geometry={nodes.pCylinder61.geometry}
            material={materials.metalPolished}
          />
          <mesh
            geometry={nodes.pCylinder63.geometry}
            material={materials.metalPolished}
          />
          <mesh
            geometry={nodes.pCylinder66.geometry}
            material={materials.metalPolished}
          />
          <mesh
            geometry={nodes.pCylinder69.geometry}
            material={materials.metalPolished}
          />
          <mesh
            geometry={nodes.pCylinder72.geometry}
            material={materials.metalPolished}
          />
          <mesh
            geometry={nodes.pCylinder49.geometry}
            material={materials.metalPolished}
          />
          <mesh
            geometry={nodes.pCylinder52.geometry}
            material={materials.metalPolished}
          />
          <mesh
            geometry={nodes.pCylinder56.geometry}
            material={materials.metalPolished}
          />
          <mesh
            geometry={nodes.pCylinder60.geometry}
            material={materials.metalPolished}
          />
          <mesh
            geometry={nodes.pCylinder50.geometry}
            material={materials.metalPolished}
          />
          <mesh
            geometry={nodes.pCylinder53.geometry}
            material={materials.metalPolished}
          />
          <mesh
            geometry={nodes.pCylinder57.geometry}
            material={materials.metalPolished}
          />
          <mesh
            geometry={nodes.pCylinder54.geometry}
            material={materials.metalPolished}
          />
          <mesh
            geometry={nodes.pCylinder58.geometry}
            material={materials.metalPolished}
          />
          <mesh
            geometry={nodes.pCylinder51.geometry}
            material={materials.metalPolished}
          />
          <mesh
            geometry={nodes.pCylinder55.geometry}
            material={materials.metalPolished}
          />
          <mesh
            geometry={nodes.pCylinder59.geometry}
            material={materials.metalPolished}
          />
          <mesh
            geometry={nodes.Mesh018.geometry}
            material={materials.bazelMetalMat}
          />
          <mesh
            geometry={nodes.Mesh018_1.geometry}
            material={materials.metalPolished}
          />
          <mesh
            geometry={nodes.Mesh019.geometry}
            material={materials.bazelMetalMat}
          />
          <mesh
            geometry={nodes.Mesh019_1.geometry}
            material={materials.metalPolished}
          />
        </group>
        <group position={[0, 2.62, 0]}>
          <mesh
            geometry={nodes.pCylinder48.geometry}
            material={materials.metalPolished}
          />
          <mesh
            geometry={nodes.Mesh045.geometry}
            material={materials.lockMat}
          />
          <mesh
            geometry={nodes.Mesh045_1.geometry}
            material={materials.metalPolished}
          />
          <mesh
            geometry={nodes.polySurface12.geometry}
            material={materials.lockMat}
          />
          <mesh
            geometry={nodes.Mesh044.geometry}
            material={materials.bazelMetalMat}
          />
          <mesh
            geometry={nodes.Mesh044_1.geometry}
            material={materials.bazelSideMetalMat}
          />
        </group>
        <group position={[0, 2.62, 0]}>
          <mesh geometry={nodes.glass.geometry} material={materials.glassMat} />
          <mesh
            geometry={nodes.pusherReset.geometry}
            material={materials.metalPolished}
          />
          <mesh
            geometry={nodes.crown.geometry}
            material={materials.metalPolished}
          />
          <mesh
            geometry={nodes.hourHand.geometry}
            material={materials.whiteHandMat}
            rotation={[0, 0.96, 0]}
          >
            <mesh
              geometry={nodes.hourLume001.geometry}
              material={materials.lumeMat}
            />
          </mesh>
          <mesh
            ref={minuteHand}
            geometry={nodes.minuteHand.geometry}
            material={materials.whiteHandMat}
            rotation={[0, -0.87, 0]}
          >
            <mesh
              geometry={nodes.hourLume.geometry}
              material={materials.lumeMat}
            />
          </mesh>
          <mesh
            geometry={nodes.Mesh010.geometry}
            material={materials.bazelMetalMat}
          />
          <mesh
            geometry={nodes.Mesh010_1.geometry}
            material={materials.metalPolished}
          />
          <mesh
            geometry={nodes.Mesh010_2.geometry}
            material={materials.bazelSideMetalMat}
          />
          <mesh
            geometry={nodes.pusherStart.geometry}
            material={materials.metalPolished}
          />
          <group rotation={[-Math.PI, 0.7, -Math.PI]}>
            <mesh
              geometry={nodes.Mesh008.geometry}
              material={materials.bazelMetalMat}
            />
            <mesh
              geometry={nodes.Mesh008_1.geometry}
              material={materials.whiteHandMat}
            />
            <mesh
              geometry={nodes.hourLume002.geometry}
              material={materials.lumeMat}
            />
          </group>
          <mesh
            geometry={nodes.Mesh013.geometry}
            material={materials.bazelMetalMat}
          />
          <mesh
            geometry={nodes.Mesh013_1.geometry}
            material={materials.whiteHandMat}
          />
          <mesh
            geometry={nodes.lumeMarkers.geometry}
            material={materials.lumeMat}
          />
          <mesh
            geometry={nodes.Mesh011.geometry}
            material={materials.bazelMetalMat}
          />
          <mesh
            geometry={nodes.Mesh011_1.geometry}
            material={materials.whiteHandMat}
          />
          <mesh
            geometry={nodes.Mesh007.geometry}
            material={materials.bazelMetalMat}
          />
          <mesh
            geometry={nodes.Mesh007_1.geometry}
            material={materials.whiteHandMat}
          />
          <mesh
            geometry={nodes.Mesh012.geometry}
            material={materials.metalPolishedBack}
          />
          <mesh
            geometry={nodes.Mesh012_1.geometry}
            material={materials.metalBrushedBack}
          />
          <mesh
            geometry={nodes.Mesh012_2.geometry}
            material={materials.metalBackSeahorse}
          />
          <mesh
            geometry={nodes.Mesh016.geometry}
            material={materials.bazelBlackMat}
          />
          <mesh
            geometry={nodes.Mesh016_1.geometry}
            material={materials.metalPolished}
          />
          <mesh geometry={nodes.dial.geometry} material={materials.dialMat} />
        </group>
        <mesh
          geometry={nodes.logo.geometry}
          material={materials.metalPolished}
          position={[2.15, 2.17, 0]}
          rotation={[Math.PI / 2, -Math.PI / 2, 0]}
          scale={0.12}
        />
        <mesh
          geometry={nodes.logo001.geometry}
          material={materials.metalPolished}
          position={[0, -2.63, 1.11]}
          rotation={[-1.7, 0, 0]}
          scale={0.17}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./models/omega-speedmaster-4.glb");