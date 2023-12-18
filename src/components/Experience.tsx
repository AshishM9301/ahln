import { OrbitControls, ScrollControls } from "@react-three/drei";
import Office from "./Office.jsx";
import Animate from "./Animate.jsx";

import { Overlay } from "./Overlay.js";
const Experience = () => {
  return (
    <>
      <ambientLight intensity={2}>
        <OrbitControls />
        <ScrollControls>
          {/* <Overlay /> */}
          <Animate />
        </ScrollControls>
      </ambientLight>
    </>
  );
};

export default Experience;
