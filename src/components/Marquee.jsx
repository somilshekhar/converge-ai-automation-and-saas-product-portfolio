"use client";
import styles from "./Marquee.module.css";

export default function Marquee({ items = [], speed = 30 }) {
    const content = items.map((item, i) => (
        <span key={i} className={styles.item}>{item}</span>
    ));

    return (
        <div className={styles.marquee}>
            <div className={styles.track} style={{ animationDuration: `${speed}s` }}>
                {content}{content}{content}
            </div>
        </div>
    );
}
