import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import { snoise2 } from "./noise";

const NoiseMaterial = shaderMaterial(
  {
    amplitude: 1,
    frequency: 1,
    octaves: 4,
    time: 0
  },
  `
  ${snoise2}

  uniform float frequency;
  uniform float amplitude;
  uniform int octaves;
  uniform float time;

  void main() {

    vec3 pos = position;

    float f = frequency;
    float a = amplitude;

    float t = mod(time, 100.0);

    for(int i = 0; i < octaves; i++) {
      pos.z += snoise(uv.xy * f + vec2(t, 0.)) * a;
      f *= 2.0;
      a *= 0.5;
    }

    pos.z = abs(pos.z);

    gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.);
  }
`,
  `
  void main() {
    gl_FragColor = vec4(.6, .6, .6, 1.0);
  }
`,
  (material) => {
    if (material) {
      material.wireframe = true;
    }
  }
);

extend({ NoiseMaterial });
