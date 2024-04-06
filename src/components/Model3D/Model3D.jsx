import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Model from 'components/Shoe';

function Model3D() {
  return (
    <div style={{ width: '700px', height: '700px' }}>
      <Suspense fallback={<div>Loading</div>}>
        <Canvas>
          <ambientLight intensity={0.4} />
          <pointLight position={[1, 1, 1]} />
          <Model />
        </Canvas>
      </Suspense>
    </div>
  );
}

export default Model3D;
