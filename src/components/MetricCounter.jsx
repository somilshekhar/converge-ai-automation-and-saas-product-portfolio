"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./MetricCounter.module.css";

export default function MetricCounter({ value, label, suffix = "" }) {
    const ref = useRef(null);
    const [display, setDisplay] = useState("0");
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    animateCount();
                }
            },
            { threshold: 0.3 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [hasAnimated]);

    const animateCount = () => {
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
    };

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
