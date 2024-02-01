import React from 'react';
 
import { PannellumVideo } from "pannellum-react";
import myVideo from "../video/pexels-ambientnature-atmosphere-5948574 (2160p) (1).mp4";
 
 
const About = () => (
  <div>
    <PannellumVideo
      video={myVideo}
      loop
      width="100%"
      height="100vh"
      autoRotate= {-5}
      pitch={10}
      yaw={18000}
      hfov={14000}
      // minHfov={200}
      // maxHfov={300}
    >
    </PannellumVideo>
 
    </div>
);
 
export default About;