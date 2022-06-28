import React, { useRef, useState, useEffect } from "react";
import { useLoader, useFrame, useThree  } from "@react-three/fiber";
import { TextureLoader } from "three";
import { Sphere, Html } from "@react-three/drei";
import ProjectCard2 from "../Projects/ProjectCard2";



const Planet = ({  projectObj }) => {

  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])

  const {viewport} = useThree()

  console.log(viewport.width)
  let responsivePosition = [viewport.width * projectObj.position[0], projectObj.position[1], projectObj.position[2] ]
  let scale = 3;

  if(viewport.width <= 30){
    responsivePosition[0] = -0.3 * viewport.width
    scale = 1.7
  }

  if(viewport.width <= 30 && projectObj.id === 5){
    responsivePosition[1] = -12
  }

  if(viewport.width <= 30 && projectObj.id === 4){
    responsivePosition[1] = -18
  }

  const planetTexture = useLoader(TextureLoader, projectObj.image);

  const mesh = useRef();
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });

  return (
    
    <Sphere ref={mesh} scale={hovered || clicked ? scale*2 : scale} position={responsivePosition} onPointerOver={(event) => hover(true)}
    onPointerOut={(event) => hover(false)}
    onClick={(event) => click(!clicked) }
    >
      <meshStandardMaterial
        map={planetTexture}
        attach="material"
        color="white"
      /> 
       <Html style={clicked ? {display: "block"} : {display: "none"}} >
          <ProjectCard2 projectObj={projectObj} />
        </Html>
    </Sphere>
    
  );
};

export default Planet;
