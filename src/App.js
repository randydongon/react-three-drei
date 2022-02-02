import "./App.css";
import { Canvas } from "react-three-fiber";
import { Physics, useBox, usePlane } from "@react-three/cannon";
import { OrbitControls, Stars } from "@react-three/drei";

function Box() {
  const [ref, api] = useBox(() => ({ mass: 1 }));
  return (
    <mesh onClick={() => api.velocity.set(0, 2, 0)} ref={ref} position={[0, 2, 0]}>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="#189AB4" time={1} />
    </mesh>
  );
}
function Plane() {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0] }));
  return (
    <mesh ref={ref} position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshLambertMaterial attach="material" color="lightblue" />
    </mesh>
  );
}

function App() {
  return (
    <Canvas style={{ width: "100%", height: "100vh", background: "#000" }}>
      {/* <TransformControls mode="translate" /> */}
      <OrbitControls makeDefault />
      <Stars />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <Physics>
        <Box />
        <Plane />
      </Physics>
    </Canvas>
  );
}

export default App;
