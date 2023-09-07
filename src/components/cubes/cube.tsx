import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from 'three'

export const Cube = () => {

  const cube = useRef<Mesh>(null!);

  useFrame((state, delta) => {
    cube.current.rotation.y += delta;
    cube.current.rotation.x += delta * 0.2;
  })

  return (
    <>
      <mesh ref={cube}>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
    </>
  );
};