import { OrbitControls, Html } from "@react-three/drei";
import { styled } from "@stitches/react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Terrain from "./Terrain";
import { useControls } from "leva";

const CanvasWrapper = styled("div", {
  position: "absolute",
  top: "0px",
  left: "0px",
  width: "100%",
  height: "100%"
});

export default function App() {
  const props = useControls({
    amplitude: {
      value: 28,
      min: 0,
      max: 80,
      step: 0.1
    },
    frequency: {
      value: 0.93,
      min: 0,
      max: 3,
      step: 0.01
    },
    octaves: {
      value: 5,
      min: 1,
      max: 10,
      step: 1
    },
    subDivisions: 256
  });

  return (
    <>
      <CanvasWrapper>
        <Canvas dpr={[1, 2]} camera={{ position: [30, 60, -80] }}>
          <OrbitControls />
          <Suspense fallback={null}>
            <Terrain {...props} />
            <Html
              as="div" // Wrapping element (default: 'div')
              // wrapperClass // The className of the wrapping element (default: undefined)
              // prepend // Project content behind the canvas (default: false)
              // center // Adds a -50%/-50% css transform (default: false) [ignored in transform mode]
              // fullscreen // Aligns to the upper-left corner, fills the screen (default:false) [ignored in transform mode]
              distanceFactor={10} // If set (default: undefined), children will be scaled by this factor, and also by distance to a PerspectiveCamera / zoom by a OrthographicCamera.
              zIndexRange={[100, 0]} // Z-order range (default=[16777271, 0])
            >
              <h1
                style={{
                  position: "absolute",
                  top: "50%",
                  color: "#fff",
                  "z-index": "100",
                  "font-size": "564px",
                  left: "50%",
                  "font-family": "Sans-Serif",
                  "letter-spacing": "-.02em"
                }}
              >
                viadukt
              </h1>
            </Html>
          </Suspense>
        </Canvas>
      </CanvasWrapper>
    </>
  );
}
