import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Model from 'assets/models/Scene';
import { Suspense, useState } from 'react';
import { LoaderContainer, ModelContainer } from './Model3D.styled';
import { CircleLoader } from 'react-spinners';

function Model3D() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ModelContainer>
      <Canvas>
        <ambientLight intensity={0.4} />
        <pointLight position={[1, 1, 1]} />
        <Suspense fallback="Loading">
          <Model setIsLoading={setIsLoading} />
          <OrbitControls />
        </Suspense>
      </Canvas>
      {isLoading && (
        <LoaderContainer>
          <CircleLoader
            color="#fb6514"
            loading
            speedMultiplier={1}
            size={100}
          />
        </LoaderContainer>
      )}
    </ModelContainer>
  );
}

export default Model3D;
