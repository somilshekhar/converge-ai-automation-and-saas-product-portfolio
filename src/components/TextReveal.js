"use client";
import { useEffect, useRef } from "react";
import styles from "./TextReveal.module.css";

export default function TextReveal({ text, className = "" }) {
    const containerRef = useRef(null);

    useEffect(() => {
        let ctx;
        const init = async () => {
            const { gsap } = await import("gsap");
            const { ScrollTrigger } = await import("gsap/ScrollTrigger");
            gsap.registerPlugin(ScrollTrigger);

            ctx = gsap.context(() => {
                const words = containerRef.current.querySelectorAll(`.${styles.word}`);

                gsap.fromTo(
                    words,
                    { color: "rgba(255, 255, 255, 0.12)" },
                    {
                        color: "rgba(255, 255, 255, 1)",
                        stagger: 0.05,
                        ease: "none",
                        scrollTrigger: {
                            trigger: containerRef.current,
                            start: "top 75%",
                            end: "bottom 40%",
                            scrub: 1,
                        },
                    }
                );
            }, containerRef);
        };

        init();

        return () => {
            if (ctx) ctx.revert();
        };
    }, [text]);

    const words = text.split(" ");

    return (
        <p ref={containerRef} className={`${styles.container} ${className}`}>
            {words.map((word, i) => (
                <span key={i} className={styles.word}>
                    {word}
                    {i < words.length - 1 ? "\u00A0" : ""}
                </span>
            ))}
        </p>
    );
}
