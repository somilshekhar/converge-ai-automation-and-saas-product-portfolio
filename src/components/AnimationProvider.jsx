"use client";
import { useGsapReveal } from "@/hooks/useGsapReveal";

export default function AnimationProvider({ children }) {
    useGsapReveal(".gsap-reveal");
    return <>{children}</>;
}
