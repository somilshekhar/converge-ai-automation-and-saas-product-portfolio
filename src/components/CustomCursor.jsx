"use client";
import { useEffect, useRef } from "react";
import styles from "./CustomCursor.module.css";

export default function CustomCursor() {
    const dot = useRef(null);
    const ring = useRef(null);
    const pos = useRef({ x: 0, y: 0 });
    const ringPos = useRef({ x: 0, y: 0 });
    const hovering = useRef(false);
    const viewHover = useRef(false);

    useEffect(() => {
        // Don't run custom cursor on touch devices
        const isTouchDevice = window.matchMedia("(hover: none)").matches;
        if (isTouchDevice) {
            if (dot.current) dot.current.style.display = "none";
            if (ring.current) ring.current.style.display = "none";
            return;
        }

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

            // Check if hovered element wants to hide the custom cursor or use the "view" cursor
            const hoveredEl = document.elementFromPoint(pos.current.x, pos.current.y);
            const shouldHide = hoveredEl?.closest('[data-hide-cursor="true"]');
            const shouldView = hoveredEl?.closest('[data-cursor="view"]');

            viewHover.current = !!shouldView;

            if (ring.current) {
                ring.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) scale(${hovering.current && !shouldHide && !shouldView ? 1.6 : 1})`;
                ring.current.style.opacity = (shouldHide || shouldView) ? "0" : (hovering.current ? "0.6" : "1");
            }
            if (dot.current) {
                // If it's a view cursor, we transform the dot into the view bubble
                if (shouldView) {
                    dot.current.classList.add(styles.viewActive);
                    dot.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) scale(1)`;
                    dot.current.style.opacity = "1";
                } else {
                    dot.current.classList.remove(styles.viewActive);
                    dot.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) scale(${hovering.current && !shouldHide ? 0.5 : 1})`;
                    dot.current.style.opacity = shouldHide ? "0" : "1";
                }
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
            <div ref={dot} className={styles.dot}>
                <span className={styles.viewText}>VIEW</span>
            </div>
            <div ref={ring} className={styles.ring} />
        </>
    );
}
