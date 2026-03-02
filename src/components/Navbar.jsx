"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

const links = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Process", href: "/process" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const path = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [open]);

    return (
        <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
            <div className={styles.inner}>
                <Link href="/" className={styles.logo}>
                    <span className={styles.logoIcon}>◆</span> Converge Digitals
                </Link>

                <nav className={`${styles.nav} ${open ? styles.navOpen : ""}`}>
                    {links.map((l) => (
                        <Link
                            key={l.href}
                            href={l.href}
                            className={`${styles.navLink} ${path === l.href ? styles.active : ""}`}
                            onClick={() => setOpen(false)}
                        >
                            {l.label}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className={`${styles.navLink} ${styles.mobileContact} ${path === "/contact" ? styles.active : ""}`}
                        onClick={() => setOpen(false)}
                    >
                        Contact
                    </Link>
                </nav>

                <Link href="/contact" className={`btn-primary ${styles.ctaBtn}`}>
                    Contact <span>→</span>
                </Link>

                <button
                    className={`${styles.mobileToggle} ${open ? styles.toggleOpen : ""}`}
                    onClick={() => setOpen(!open)}
                    aria-label="Menu"
                >
                    <span /><span /><span />
                </button>
            </div>
        </header>
    );
}
