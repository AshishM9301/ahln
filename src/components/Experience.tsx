import { OrbitControls, ScrollControls } from "@react-three/drei";
import Office from "./Office.jsx";
import { Overlay } from "./Overlay.js";
const Experience = () => {
  return (
    <>
      <ambientLight intensity={1}>
        <OrbitControls enableZoom={false} enabled={false} />
        <ScrollControls pages={3} damping={0.25}>
          <Overlay />
          <Office />
        </ScrollControls>
      </ambientLight>
    </>
  );
};

export default Experience;
