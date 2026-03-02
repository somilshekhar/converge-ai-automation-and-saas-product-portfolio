"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Environment } from "@react-three/drei";
import styles from "./HeroScene.module.css";

function ChromeSculpture() {
    const meshRef = useRef();

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.1;
            meshRef.current.rotation.y += 0.003;
            meshRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.1) * 0.05;
        }
    });

    return (
        <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.6}>
            <mesh ref={meshRef} scale={2}>
                <torusKnotGeometry args={[1, 0.35, 256, 64, 2, 3]} />
                <MeshDistortMaterial
                    color="#6366f1"
                    metalness={0.95}
                    roughness={0.12}
                    distort={0.12}
                    speed={1.2}
                    envMapIntensity={1.5}
                />
            </mesh>
        </Float>
    );
}

function Particles() {
    const count = 100;
    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 16;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 16;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 16;
        }
        return pos;
    }, []);

    const pointsRef = useRef();

    useFrame(() => {
        if (pointsRef.current) {
            pointsRef.current.rotation.y += 0.0004;
        }
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" args={[positions, 3]} />
            </bufferGeometry>
            <pointsMaterial size={0.025} color="#818cf8" transparent opacity={0.4} sizeAttenuation />
        </points>
    );
}

export default function HeroScene() {
    return (
        <div className={styles.canvas}>
            <Canvas
                camera={{ position: [0, 0, 6], fov: 45 }}
                dpr={[1, 1.5]}
                gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
            >
                <ambientLight intensity={0.1} />
                <directionalLight position={[5, 5, 5]} intensity={0.6} color="#a5b4fc" />
                <directionalLight position={[-3, -2, 4]} intensity={0.3} color="#6366f1" />
                <pointLight position={[0, 3, 3]} intensity={0.4} color="#818cf8" />
                <Environment preset="night" environmentIntensity={0.3} />
                <ChromeSculpture />
                <Particles />
            </Canvas>
        </div>
    );
}
