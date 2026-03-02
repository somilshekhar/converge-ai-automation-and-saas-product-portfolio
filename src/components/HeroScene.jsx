"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Environment } from "@react-three/drei";
import * as THREE from "three";
import styles from "./HeroScene.module.css";

function ChromeSculpture() {
    const meshRef = useRef();
    const materialRef = useRef();

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.1;
            meshRef.current.rotation.y += 0.003;
            meshRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.1) * 0.05;
        }
    });

    return (
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.8}>
            <mesh ref={meshRef} scale={2.2}>
                <torusKnotGeometry args={[1, 0.35, 256, 64, 2, 3]} />
                <MeshDistortMaterial
                    ref={materialRef}
                    color="#b8b8b8"
                    metalness={1}
                    roughness={0.08}
                    distort={0.15}
                    speed={1.5}
                    envMapIntensity={1.8}
                />
            </mesh>
        </Float>
    );
}

function Particles() {
    const count = 120;
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

    useFrame((state) => {
        if (pointsRef.current) {
            pointsRef.current.rotation.y += 0.0005;
            pointsRef.current.rotation.x += 0.0002;
        }
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[positions, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.02}
                color="#555555"
                transparent
                opacity={0.6}
                sizeAttenuation
            />
        </points>
    );
}

export default function HeroScene() {
    return (
        <div className={styles.canvas}>
            <Canvas
                camera={{ position: [0, 0, 6], fov: 45 }}
                dpr={[1, 1.5]}
                gl={{
                    antialias: true,
                    alpha: true,
                    powerPreference: "high-performance",
                }}
            >
                <ambientLight intensity={0.15} />
                <directionalLight position={[5, 5, 5]} intensity={0.8} color="#ffffff" />
                <directionalLight position={[-3, -2, 4]} intensity={0.3} color="#8899aa" />
                <pointLight position={[0, 3, 3]} intensity={0.5} color="#cccccc" />
                <Environment preset="city" environmentIntensity={0.4} />
                <ChromeSculpture />
                <Particles />
            </Canvas>
        </div>
    );
}
