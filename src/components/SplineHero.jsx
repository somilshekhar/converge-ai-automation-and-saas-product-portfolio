"use client";
import styles from "./SplineHero.module.css";

export default function SplineHero() {
    return (
        <div className={styles.container}>
            <iframe
                src="https://my.spline.design/genkubgreetingrobot-cEiekO1zo1jphFHALb3BpvXT/"
                frameBorder="0"
                width="100%"
                height="100%"
                style={{ border: 'none', background: 'transparent' }}
                title="3D Robot"
                allow="autoplay"
                loading="lazy"
            />
            {/* Overlays to hide Spline watermark and edges */}
            <div className={styles.watermarkCover} />
            <div className={styles.bottomFade} />
            <div className={styles.rightFade} />
        </div>
    );
}
