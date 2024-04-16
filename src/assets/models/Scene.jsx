import { useGLTF } from '@react-three/drei';

import ModelLink from '../../assets/models/test.glb';

export default function Model() {
  const { scene } = useGLTF(ModelLink);
  return (
    <primitive
      object={scene}
      position={[-1, -2.7, 0]}
      rotation={[0, -Math.PI / 1.8, 0]}
      scale={[35, 35, 35]}
    />
  );
}
