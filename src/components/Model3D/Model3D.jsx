import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
// import Model from 'assets/models/Scene';
import { Suspense } from 'react';

function Model3D() {
  return (
    <div style={{ width: '100%', height: '700px' }}>
      <Canvas>
        <ambientLight intensity={0.4} />
        <pointLight position={[1, 1, 1]} />
        <Suspense fallback={'Loading'}>
          {/* <Model /> */}
          <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={'red'} />
          </mesh>
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Model3D;
