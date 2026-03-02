import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data";
import MetricCounter from "@/components/MetricCounter";
import styles from "./page.module.css";

export async function generateStaticParams() {
    return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);
    if (!project) return {};
    return {
        title: `${project.title} – Converge Digitals`,
        description: project.summary,
    };
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
                <div className="container">
                    <span className={styles.label}>CASE STUDY</span>
                    <h1 className={styles.heading}>{project.title}</h1>
                    <div className={styles.heroTags}>
                        {project.tags.map((t) => (
                            <span key={t} className={styles.tag}>{t}</span>
                        ))}
                    </div>
                    <p className={styles.heroSummary}>{project.summary}</p>
                </div>
            </section>

            {/* ─── MAIN IMAGE ─── */}
            <section className={styles.mainImage}>
                <div className="image-placeholder" style={{ paddingBottom: "48%" }} />
            </section>

            {/* ─── CHALLENGE ─── */}
            <section className={`section ${styles.twoCol}`}>
                <div className="container">
                    <div className={styles.twoColInner}>
                        <div className={styles.colLabel}>
                            <span className="section-heading">The Challenge</span>
                        </div>
                        <div className={styles.colContent}>
                            <p className="body-text">{project.challenge}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── APPROACH ─── */}
            <section className={`section ${styles.twoCol}`}>
                <div className="container">
                    <div className={styles.twoColInner}>
                        <div className={styles.colLabel}>
                            <span className="section-heading">Our Approach</span>
                        </div>
                        <div className={styles.colContent}>
                            <ol className={styles.approachList}>
                                {project.approach.map((step, i) => (
                                    <li key={i} className={styles.approachItem}>{step}</li>
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
                        <div className="image-placeholder" style={{ paddingBottom: "65%" }} />
                        <div className="image-placeholder" style={{ paddingBottom: "65%" }} />
                    </div>
                </div>
            </section>

            {/* ─── IMPACT ─── */}
            <section className={`section ${styles.impact}`}>
                <div className="container">
                    <p className="section-heading">Impact</p>
                    <div className={styles.metricsRow}>
                        {project.metrics.map((m) => (
                            <MetricCounter key={m.label} value={m.value} suffix={m.suffix} label={m.label} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── TECH STACK ─── */}
            <section className={`section ${styles.techSection}`}>
                <div className="container">
                    <p className="section-heading">Technologies Used</p>
                    <div className={styles.techRow}>
                        {project.technologies.map((tech) => (
                            <span key={tech} className={styles.techBadge}>{tech}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── NAV ─── */}
            <section className={styles.projectNav}>
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
