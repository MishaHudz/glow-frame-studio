import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Model from 'assets/models/Scene';
import { Suspense } from 'react';
import { ModelContainer } from './Model3D.styled';

function Model3D() {
  return (
    <ModelContainer>
      <Canvas>
        <ambientLight intensity={0.4} />
        <pointLight position={[1, 1, 1]} />
        <Suspense fallback={'Loading'}>
          <Model />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </ModelContainer>
  );
}

export default Model3D;
