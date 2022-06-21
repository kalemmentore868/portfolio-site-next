import React, { useRef, useState } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";
import * as THREE from "three";
import { Sphere, Html } from "@react-three/drei";
import ProjectCard from "../Projects/ProjectCard";

const Planet = ({  projectObj, key }) => {

  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  

  const planetTexture = useLoader(TextureLoader, projectObj.image);

  const mesh = useRef();
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });

  return (
    
    <Sphere ref={mesh} scale={hovered ? 6 : 3} position={projectObj.position} onPointerOver={(event) => hover(true)}
    onPointerOut={(event) => hover(false)}>
      <meshStandardMaterial
        map={planetTexture}
        attach="material"
        color="white"
      />
       <Html>
          <ProjectCard projectObj={projectObj} key={key}/>
        </Html>
    </Sphere>
    
  );
};

export default Planet;
