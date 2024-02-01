import React from 'react';
 
import { Pannellum } from "pannellum-react";
import fantasyCave from "../images/fantasy_cave.jfif"
 
 
const Work = () => (
  <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
    <Pannellum
        type= "equirectangular"
        width="100%"
        height="100vh"
        image={fantasyCave}
        pitch={10}
        yaw={180}
        hfov={110}
        autoLoad
        onLoad={() => {
            console.log("panorama loaded");
        }}
    >
      <Pannellum.Hotspot
        type="info"
        pitch={25}
        yaw={-157}
        text="About Page"
        URL="/about"
      />
    </Pannellum>
    <div style={{ width: "80%", margin:"auto", position: 'absolute', bottom: '50px', right: '50px', zIndex: 1000, color: "#fff", fontSize: "20px"}}>
      Title Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet est tempus, mollis est vel, semper est. In pulvinar lacinia tellus, eu varius lacus ullamcorper ac. Nulla sagittis lectus eu leo vehicula molestie. Mauris sagittis varius neque. Vivamus vel consectetur enim. Mauris volutpat justo et urna faucibus ultricies. Nullam ut convallis ex. Phasellus non ex sit amet leo posuere dignissim. Sed varius mi at mi suscipit, sed feugiat ligula elementum.
      In hac habitasse platea dictumst. Vivamus ac tortor lobortis, ullamcorper orci a, vestibulum elit. Phasellus et enim tempus, mollis nisi eu, convallis dolor. Phasellus at fringilla mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam nec orci vehicula, malesuada diam ac, elementum augue. Morbi suscipit vel ante at vestibulum. Ut fringilla sem et sem rhoncus, ac aliquet turpis consectetur. Nunc semper nibh ut ipsum rutrum dictum. Nunc blandit sapien quis massa finibus vulputate. Nulla eu eros lobortis, finibus ipsum sed, bibendum dolor. Phasellus a feugiat mauris. Proin convallis convallis metus, nec efficitur mi viverra sed. Nullam eu porttitor diam.
 </div>
    </div>
);
 
export default Work;