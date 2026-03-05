"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import styles from "./MetricCounter.module.css";

export default function MetricCounter({ value, label, suffix = "" }) {
    const ref = useRef(null);
    const [display, setDisplay] = useState("0");

    const animateCount = useCallback(() => {
        const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));
        const duration = 2000;
        const startTime = performance.now();

        const tick = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = eased * numericValue;

            if (value.includes(".")) {
                setDisplay(current.toFixed(1));
            } else {
                setDisplay(Math.floor(current).toLocaleString());
            }

            if (progress < 1) {
                requestAnimationFrame(tick);
            } else {
                setDisplay(value);
            }
        };

        requestAnimationFrame(tick);
    }, [value]);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Reset to 0 and re-animate every time it enters the viewport
                    setDisplay("0");
                    animateCount();
                }
            },
            { threshold: 0.3 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [animateCount]);

    return (
        <div className={styles.metric} ref={ref}>
            <span className={styles.value}>
                {display}
                {suffix}
            </span>
            <span className={styles.label}>{label}</span>
        </div>
    );
}
