import React, { useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import { OrbitControls, Html, Stars } from "@react-three/drei";
import Planet from "../components/ThreeDObjects/Planet";
import { projectObjs } from "../constants/constants copy";

const Wrapper = styled.div`
  position: relative;

  canvas {
    height: 100vh;
  }
`;

const projects = () => {
  return (
    <Wrapper>
      <Canvas camera={{ fov: 35, near: 0.6, zoom:1, far: 1000, position: [0, 0, 100] }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} />
  
        <Stars />
        {/* <OrbitControls /> */}
        <Suspense fallback={null}>
          {projectObjs.map((project, index) =>  {
            return (
              
              <Planet key={index} projectObj={project} />
             
              
            )
          })}
        </Suspense>
      </Canvas>
    </Wrapper>
  );
};

export default projects;
