"use client";
import Link from "next/link";
import { processSteps } from "@/lib/data";
import styles from "./page.module.css";

export default function ProcessPage() {
    const handleSpotlightMouseMove = (e) => {
        const cards = e.currentTarget.querySelectorAll('.spotlight-card');
        cards.forEach((card) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    };

    return (
        <>
            {/* ─── HERO ─── */}
            <section className={styles.hero}>
                <div className="container">
                    <p className={`${styles.heroLabel} gsap-reveal`}>Methodology</p>
                    <h1 className="page-heading gsap-heading">How We Build</h1>
                    <p className="subtitle gsap-reveal" style={{ marginTop: "1.5rem" }}>
                        A disciplined, iterative process from discovery to deployment.
                    </p>
                </div>
            </section>

            {/* ─── TIMELINE ─── */}
            <section className={`section ${styles.timeline}`}>
                <div className="container">
                    <p className="section-heading gsap-reveal">Our Process</p>
                    <div className={styles.timelineTrack}>
                        <div className={`${styles.timelineLine} gsap-timeline-line`} />
                        {processSteps.map((step, i) => (
                            <div
                                key={step.number}
                                className={`${styles.timelineEntry} ${i % 2 !== 0 ? styles.entryRight : ""} gsap-reveal`}
                            >
                                <div className={styles.entryDot} />
                                <div className={styles.entryContent}>
                                    <span className={styles.entryNum}>{step.number}</span>
                                    <h3 className={styles.entryTitle}>{step.title}</h3>
                                    <p className={styles.entryDesc}>{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── AUTOMATION PIPELINE ─── */}
            <section className={`section ${styles.pipeline} gsap-reveal`}>
                <div className="container">
                    <p className="section-heading">Automation Pipeline</p>
                    <p className={styles.pipelineSubtitle}>
                        From raw data to intelligent action — our five-stage automation engine powers every deployment.
                    </p>
                    <div
                        className={`${styles.pipelineFlow} gsap-stagger-group spotlight-group`}
                        onMouseMove={handleSpotlightMouseMove}
                    >
                        {[
                            { num: "01", icon: "📥", title: "Data Ingestion", desc: "Collect and normalize data from APIs, databases, and live streams." },
                            { num: "02", icon: "🧠", title: "AI Processing", desc: "Run models for classification, extraction, and pattern recognition." },
                            { num: "03", icon: "⚙️", title: "Decision Engine", desc: "Apply business rules and ML-driven logic to route outcomes." },
                            { num: "04", icon: "⚡", title: "Action Triggers", desc: "Execute automated workflows, alerts, and third-party integrations." },
                            { num: "05", icon: "📊", title: "Monitoring", desc: "Track performance metrics and continuously optimize the pipeline." },
                        ].map((node, i) => (
                            <div key={node.title} className={`${styles.pipeCard} spotlight-card`}>
                                <div className={styles.pipeCardInner}>
                                    <span className={styles.pipeNum}>{node.num}</span>
                                    <span className={styles.pipeIcon}>{node.icon}</span>
                                    <h4 className={styles.pipeTitle}>{node.title}</h4>
                                    <p className={styles.pipeDesc}>{node.desc}</p>
                                </div>
                                {i < 4 && <div className={styles.pipeConnector} />}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── SYSTEM ARCHITECTURE ─── */}
            <section className={`section ${styles.architecture} gsap-reveal`}>
                <div className="container">
                    <p className="section-heading">System Architecture</p>
                    <div
                        className={`${styles.archGrid} gsap-stagger-group spotlight-group`}
                        onMouseMove={handleSpotlightMouseMove}
                    >
                        <div className={styles.archSide}>
                            {["LLM APIs", "Vector Database", "RAG Pipeline"].map((n) => (
                                <div key={n} className={`${styles.archNode} spotlight-card`}>{n}</div>
                            ))}
                        </div>
                        <div className={styles.archCenter}>
                            <div className={`${styles.archCore} spotlight-card`}>AI Core</div>
                        </div>
                        <div className={styles.archSide}>
                            {["ML Models", "Client APIs", "Dashboard"].map((n) => (
                                <div key={n} className={`${styles.archNode} spotlight-card`}>{n}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── CTA ─── */}
            <section className={`section ${styles.cta} gsap-reveal`}>
                <div className="container" style={{ textAlign: "center" }}>
                    <h2 className="page-heading gsap-heading">
                        Ready to see this process in action?
                    </h2>
                    <div style={{ marginTop: "2.5rem" }}>
                        <Link href="/contact" className="pill-btn">Start a Project →</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
