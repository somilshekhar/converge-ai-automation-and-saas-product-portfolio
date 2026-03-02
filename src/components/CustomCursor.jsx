"use client";
import { useEffect, useRef } from "react";
import styles from "./CustomCursor.module.css";

export default function CustomCursor() {
    const dot = useRef(null);
    const ring = useRef(null);
    const pos = useRef({ x: 0, y: 0 });
    const ringPos = useRef({ x: 0, y: 0 });
    const hovering = useRef(false);

    useEffect(() => {
        const onMove = (e) => {
            pos.current = { x: e.clientX, y: e.clientY };
            if (dot.current) {
                dot.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
            }
        };

        const onEnter = () => { hovering.current = true; };
        const onLeave = () => { hovering.current = false; };

        const interactives = () => document.querySelectorAll("a, button, [role='button'], input, textarea, select");

        const addHoverListeners = () => {
            interactives().forEach((el) => {
                el.addEventListener("mouseenter", onEnter);
                el.addEventListener("mouseleave", onLeave);
            });
        };

        // Smooth ring follow
        let raf;
        const animate = () => {
            ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.15;
            ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.15;
            if (ring.current) {
                ring.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) scale(${hovering.current ? 1.6 : 1})`;
                ring.current.style.opacity = hovering.current ? "0.6" : "1";
            }
            if (dot.current) {
                dot.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) scale(${hovering.current ? 0.5 : 1})`;
            }
            raf = requestAnimationFrame(animate);
        };

        window.addEventListener("mousemove", onMove);
        addHoverListeners();
        raf = requestAnimationFrame(animate);

        // Re-add listeners when DOM changes
        const observer = new MutationObserver(addHoverListeners);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener("mousemove", onMove);
            cancelAnimationFrame(raf);
            observer.disconnect();
        };
    }, []);

    return (
        <>
            <div ref={dot} className={styles.dot} />
            <div ref={ring} className={styles.ring} />
        </>
    );
}
