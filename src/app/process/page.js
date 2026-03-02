import Link from "next/link";
import { processSteps } from "@/lib/data";
import styles from "./page.module.css";

export const metadata = {
    title: "Process – Converge Digitals AI Lab",
    description: "A disciplined, iterative process from discovery to deployment.",
};

export default function ProcessPage() {
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
                    <div className={`${styles.pipelineFlow} gsap-stagger-group`}>
                        {["Data Ingestion", "AI Processing", "Decision Engine", "Action Triggers", "Monitoring"].map(
                            (node, i, arr) => (
                                <div key={node} className={styles.pipeStep}>
                                    <div className={styles.pipeNode}>{node}</div>
                                    {i < arr.length - 1 && <div className={styles.pipeArrow}>→</div>}
                                </div>
                            )
                        )}
                    </div>
                </div>
            </section>

            {/* ─── SYSTEM ARCHITECTURE ─── */}
            <section className={`section ${styles.architecture} gsap-reveal`}>
                <div className="container">
                    <p className="section-heading">System Architecture</p>
                    <div className={`${styles.archGrid} gsap-stagger-group`}>
                        <div className={styles.archSide}>
                            {["LLM APIs", "Vector Database", "RAG Pipeline"].map((n) => (
                                <div key={n} className={styles.archNode}>{n}</div>
                            ))}
                        </div>
                        <div className={styles.archCenter}>
                            <div className={styles.archCore}>AI Core</div>
                        </div>
                        <div className={styles.archSide}>
                            {["ML Models", "Client APIs", "Dashboard"].map((n) => (
                                <div key={n} className={styles.archNode}>{n}</div>
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
