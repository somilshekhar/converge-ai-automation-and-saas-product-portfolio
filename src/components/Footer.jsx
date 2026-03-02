import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <span className={styles.logoIcon}>◆</span>
                        <div>
                            <span className={styles.brandName}>Converge Digitals</span>
                            <span className={styles.tagline}>AI, Automation & SaaS — Engineered.</span>
                        </div>
                    </div>

                    <div className={styles.columns}>
                        <div className={styles.col}>
                            <span className={styles.colLabel}>Quick Links</span>
                            {[["Home", "/"], ["Services", "/services"], ["Projects", "/projects"], ["About", "/about"]].map(([label, href]) => (
                                <Link key={href} href={href} className={styles.colLink}>{label}</Link>
                            ))}
                        </div>
                        <div className={styles.col}>
                            <span className={styles.colLabel}>Company</span>
                            {[["Process", "/process"], ["Contact", "/contact"]].map(([label, href]) => (
                                <Link key={href} href={href} className={styles.colLink}>{label}</Link>
                            ))}
                        </div>
                        <div className={styles.col}>
                            <span className={styles.colLabel}>Connect</span>
                            {["LinkedIn", "Twitter", "GitHub"].map((s) => (
                                <a key={s} href="#" className={styles.colLink}>{s}</a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={styles.divider} />

                <div className={styles.bottom}>
                    <span className={styles.copy}>© {new Date().getFullYear()} Converge Digitals. All rights reserved.</span>
                    <a href="mailto:hello@convergedigitals.com" className={styles.email}>hello@convergedigitals.com</a>
                </div>
            </div>
        </footer>
    );
}
