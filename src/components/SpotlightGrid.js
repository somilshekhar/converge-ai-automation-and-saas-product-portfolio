"use client";
import { useCallback } from "react";

export default function SpotlightGrid({ children, className = "" }) {
    const handleMouseMove = useCallback((e) => {
        const cards = e.currentTarget.querySelectorAll(".spotlight-card");
        cards.forEach((card) => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty("--x", `${e.clientX - rect.left}px`);
            card.style.setProperty("--y", `${e.clientY - rect.top}px`);
        });
    }, []);

    return (
        <div
            className={`spotlight-group ${className}`}
            onMouseMove={handleMouseMove}
        >
            {children}
        </div>
    );
}
