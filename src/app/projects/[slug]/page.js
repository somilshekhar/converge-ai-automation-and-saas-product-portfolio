import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data";
import MetricCounter from "@/components/MetricCounter";
import { buildPageMetadata } from "@/lib/seo";
import styles from "./page.module.css";

export async function generateStaticParams() {
    return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);
    if (!project) return {};

    return buildPageMetadata({
        title: `${project.title} Case Study | Converge Digitals AI Lab`,
        description: project.summary,
        path: `/projects/${project.slug}`,
        type: "article",
    });
}

export default async function ProjectDetail({ params }) {
    const { slug } = await params;
    const idx = projects.findIndex((p) => p.slug === slug);
    if (idx === -1) notFound();

    const project = projects[idx];
    const prev = idx > 0 ? projects[idx - 1] : null;
    const next = idx < projects.length - 1 ? projects[idx + 1] : null;

    return (
        <>
            {/* ─── HERO ─── */}
            <section className={styles.hero}>
                <div className="container gsap-hero-entrance">
                    <span className={`${styles.label} gsap-reveal`}>CASE STUDY</span>
                    <h1 className={`${styles.heading} gsap-heading`}>{project.title}</h1>
                    <div className={`${styles.heroTags} gsap-reveal`}>
                        {project.tags.map((t) => (
                            <span key={t} className={styles.tag}>{t}</span>
                        ))}
                    </div>
                    <p className={`${styles.heroSummary} gsap-reveal`}>{project.summary}</p>
                </div>
            </section>

            {/* ─── MAIN IMAGE ─── */}
            <section className={`${styles.mainImage} gsap-reveal`}>
                <div className="image-placeholder" style={{ paddingBottom: "48%" }} />
            </section>

            {/* ─── CHALLENGE ─── */}
            <section className={`section ${styles.twoCol}`}>
                <div className="container">
                    <div className={styles.twoColInner}>
                        <div className={`${styles.colLabel} gsap-reveal`}>
                            <span className="section-heading">The Challenge</span>
                        </div>
                        <div className={`${styles.colContent} gsap-reveal`}>
                            <p className="body-text">{project.challenge}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── APPROACH ─── */}
            <section className={`section ${styles.twoCol}`}>
                <div className="container">
                    <div className={styles.twoColInner}>
                        <div className={`${styles.colLabel} gsap-reveal`}>
                            <span className="section-heading">Our Approach</span>
                        </div>
                        <div className={styles.colContent}>
                            <ol className={styles.approachList}>
                                {project.approach.map((step, i) => (
                                    <li key={i} className={`${styles.approachItem} gsap-reveal`}>{step}</li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── SECONDARY IMAGES ─── */}
            <section className={styles.dualImages}>
                <div className="container">
                    <div className={styles.dualGrid}>
                        <div className="image-placeholder gsap-reveal" style={{ paddingBottom: "65%" }} />
                        <div className="image-placeholder gsap-reveal" style={{ paddingBottom: "65%" }} />
                    </div>
                </div>
            </section>

            {/* ─── IMPACT ─── */}
            <section className={`section ${styles.impact} gsap-reveal`}>
                <div className="container">
                    <p className="section-heading gsap-reveal">Impact</p>
                    <div className={styles.metricsRow}>
                        {project.metrics.map((m) => (
                            <MetricCounter key={m.label} value={m.value} suffix={m.suffix} label={m.label} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── TECH STACK ─── */}
            <section className={`section ${styles.techSection} gsap-reveal`}>
                <div className="container">
                    <p className="section-heading gsap-reveal">Technologies Used</p>
                    <div className={styles.techRow}>
                        {project.technologies.map((tech) => (
                            <span key={tech} className={`${styles.techBadge} gsap-reveal`}>{tech}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── NAV ─── */}
            <section className={`${styles.projectNav} gsap-reveal`}>
                <div className="container">
                    <div className={styles.navDivider} />
                    <div className={styles.navRow}>
                        <div>
                            {prev && (
                                <Link href={`/projects/${prev.slug}`} className={styles.navLink}>
                                    ← {prev.title}
                                </Link>
                            )}
                        </div>
                        <div style={{ textAlign: "right" }}>
                            {next && (
                                <Link href={`/projects/${next.slug}`} className={styles.navLink}>
                                    {next.title} →
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
