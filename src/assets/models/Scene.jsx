import { useGLTF } from '@react-three/drei';

import ModelLink from '../../assets/models/Frame.glb';
import { useEffect } from 'react';

export default function Model({ setIsLoading }) {
  const { scene } = useGLTF(ModelLink);

  useEffect(() => {
    setIsLoading(false);
    console.log(15);
  }, [setIsLoading]);
  return (
    <primitive
      onLoad={() => console.log(15)}
      object={scene}
      position={[0, -0.6, 0]}
      rotation={[-Math.PI / 2, -Math.PI / 2, -Math.PI / 2]}
      scale={[0.038, 0.038, 0.038]}
    />
  );
}
