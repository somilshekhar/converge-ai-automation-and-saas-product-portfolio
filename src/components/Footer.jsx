import Link from "next/link";
import styles from "./Footer.module.css";

const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Process", href: "/process" },
    { label: "Contact", href: "/contact" },
];

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>
                {/* ─── Massive brand ─── */}
                <div className={styles.brandRow}>
                    <span className={styles.brand}>Converge®</span>
                </div>

                <div className={styles.divider} />

                {/* ─── Bottom row ─── */}
                <div className={styles.bottomRow}>
                    <div className={styles.left}>
                        <span className={styles.copy}>
                            © {new Date().getFullYear()} Converge Digitals. All rights reserved.
                        </span>
                    </div>

                    <nav className={styles.nav}>
                        {quickLinks.map((l) => (
                            <Link key={l.href} href={l.href} className={styles.navLink}>
                                {l.label}
                            </Link>
                        ))}
                    </nav>

                    <div className={styles.right}>
                        <a href="mailto:hello@convergedigitals.com" className={styles.email}>
                            hello@convergedigitals.com
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
