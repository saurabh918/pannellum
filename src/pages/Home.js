import { useState } from "react";
import { Pannellum } from "pannellum-react";

import fantasyNight from "../images/fantasy_night.jfif"
import fantasySky from "../images/fantasy_sky.jfif"
const Home = () => {

  const [ currentScene, setCurrentScene] = useState(fantasyNight)

  return (
          <div className="h-screen flex">
                <Pannellum
                    width="100%"
                    height="100%"
                    image={currentScene}
                    yaw={300}
                    hfov={110}
                    autoLoad
                    autoRotate={-5}
                    compass={true}
                    showZoomCtrl={true}
                    mouseZoom={true}
                    onLoad={() => {
                        console.log("panorama loaded");
                    }}
                >
                    <Pannellum.Hotspot
                        type="custom"
                        pitch={-10}
                        yaw={-120}
                        handleClick={(evt, name) =>
                            setCurrentScene(currentScene !== fantasyNight ? fantasyNight : fantasySky)
                        }
                    />
                </Pannellum>

            </div>
  )
}

export default Home;