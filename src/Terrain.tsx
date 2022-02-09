import { useRef } from "react";
import "./NoiseMaterial";
import { useFrame } from "@react-three/fiber";
import { ShaderMaterial } from "three";

interface Props {
  amplitude: number;
  subDivisions: number;
  frequency: number;
  octaves: number;
}

const WIDTH = 200;
const HEIGHT = 200;

export default function Terrain({
  amplitude,
  subDivisions,
  frequency,
  octaves
}: Props) {
  const ref = useRef<ShaderMaterial>(null);
  const divisions = Math.floor(subDivisions);

  useFrame(() => {
    if (ref.current) {
      ref.current.uniforms.time.value += 0.003;
    }
  });

  return (
    <mesh rotation-x={-0.5 * Math.PI} position-y={-10}>
      <planeBufferGeometry args={[WIDTH, HEIGHT, divisions, divisions]} />
      {/* @ts-ignore */}
      <noiseMaterial
        ref={ref}
        amplitude={amplitude}
        frequency={frequency}
        octaves={octaves}
      />
    </mesh>
  );
}
