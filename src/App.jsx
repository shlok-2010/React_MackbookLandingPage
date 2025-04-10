import React from "react";
import { Canvas } from "@react-three/fiber";
import "./style.css";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import MacContainer from "./MacContainer";

const App = () => {
  return (
    <div className="w-full h-screen font-['Helvetica-Now-Display ']">
      <div className="navbar line py-5  flex gap-10 absolute top-0 left-1/2 -translate-x-1/2">
      {["iPhone" , "iPad" , "services", "ios" ,"mac", "products" ,"Watch" ,"AirPods" ,"" ,"Entertainment" ,"Accessories"].map(e => <a href=""className="text-white font-[500] text-sm  " >
        {e}
      </a>)}
      </div>
      <div className="absolute flex flex-col   top-13 left-1/2 -translate-x-1/2  text-white">
      <h3 className="masked text-7xl  tracking-tighter font-[700]  pl-40">macbook pro.</h3>
      <h4 className="text-center ">Oh So Pro....!</h4>
      <p className=" text-center w-3/4 pl-50 ">MacBook Pro is a powerful, sleek laptop with excellent performance, Retina display, and long battery life.</p>
      </div>
    <Canvas camera={{ fov: 12, position: [0, -10, 220] }}>
      <Environment
        files={[
          "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr",
        ]}
      />
      <ScrollControls pages={3}>
        <MacContainer />
        <OrbitControls/>
      </ScrollControls>
    </Canvas>
    </div>
  );
};

export default App;
