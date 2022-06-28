import React, {  Suspense } from "react";
import { Canvas} from "@react-three/fiber";
import styled from "styled-components";
import { Stars } from "@react-three/drei";
import Planet from "../ThreeDObjects/Planet";
import { projectObjs } from "../../constants/constants copy";
import Model from "../ThreeDObjects/Text-for-proj";


import {
  
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";

const Wrapper = styled.div`
  position: relative;
  canvas {
    height: 180vh;
  }
`;

const Projects = () => {

  return (
    

    <Wrapper id="projects">
          <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
      <Canvas camera={{ fov: 35, near: 0.6, zoom:.8, far: 1000, position: [0, 0, 100] }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} />
  
        <Stars />
        <Suspense fallback={null}>
          {projectObjs.map((projObj, index) =>  {
            
            return (
           
              <Planet key={index} projectObj={projObj}/>
             
              
            )
          })}
          <Model />
        </Suspense>
      
      </Canvas>
    </Wrapper>
    
  );
};

export default Projects;
