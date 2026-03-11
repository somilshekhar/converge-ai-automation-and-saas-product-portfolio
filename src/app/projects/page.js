import Link from "next/link";
import { projects } from "@/lib/data";
import { buildPageMetadata } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata = buildPageMetadata({
    title: "Projects | Converge Digitals AI Lab",
    description: "Strategy, design, and technology — in action. Explore our case studies.",
    path: "/projects",
});

export default function ProjectsPage() {
    return (
        <>
            {/* ─── HERO ─── */}
            <section className={styles.hero}>
                <div className="container">
                    <p className={`${styles.label} gsap-reveal`}>Portfolio</p>
                    <h1 className="page-heading gsap-heading">Our Work</h1>
                    <p className="subtitle gsap-reveal" style={{ marginTop: "1.5rem" }}>
                        Strategy, design, and technology — in action.
                    </p>
                </div>
            </section>

            {/* ─── PROJECT LIST (Sticky Scroll Stack) ─── */}
            <div className={styles.scrollStackContainer}>
                {projects.map((p, index) => (
                    <div
                        key={p.slug}
                        className={styles.stickyWrapper}
                        style={{ zIndex: index + 1 }}
                    >
                        <Link
                            href={`/projects/${p.slug}`}
                            className={`${styles.projectRow} ${index % 2 !== 0 ? styles.reversed : ""}`}
                            data-cursor="view"
                        >
                            <div className={styles.projectImage}>
                                <div className="image-placeholder" style={{ paddingBottom: "62%" }} />
                            </div>
                            <div className={styles.projectInfo}>
                                <span className={styles.projectLabel}>{p.label}</span>
                                <h2 className={styles.title}>{p.title}</h2>
                                <p className={styles.summary}>{p.summary}</p>
                                <div className={styles.tags}>
                                    {p.tags.map((t) => (
                                        <span key={t} className={styles.tag}>{t}</span>
                                    ))}
                                </div>
                                <span className={styles.link}>View Case Study →</span>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

            {/* ─── CTA ─── */}
            <section className={`section ${styles.cta} gsap-reveal`}>
                <div className="container" style={{ textAlign: "center" }}>
                    <h2 className="page-heading gsap-heading">Ready to start your project?</h2>
                    <div style={{ marginTop: "2.5rem" }}>
                        <Link href="/contact" className="pill-btn">Get in Touch →</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
