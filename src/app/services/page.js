"use client";
import Link from "next/link";
import { services } from "@/lib/data";
import styles from "./page.module.css";
import StickyTabs from "@/components/StickyTabs";

export default function ServicesPage() {
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
                    <p className={`${styles.heroLabel} gsap-reveal`}>Our Expertise</p>
                    <h1 className="page-heading gsap-heading">What We Engineer</h1>
                    <p className="subtitle gsap-reveal" style={{ marginTop: "1.5rem" }}>
                        End-to-end AI, automation, and SaaS engineering. From concept to deployment.
                    </p>
                </div>
            </section>

            {/* ─── SERVICE DEEP-DIVES (Sticky Tabs) ─── */}
            <StickyTabs mainNavHeight="3.5rem">
                {services.map((svc, i) => (
                    <StickyTabs.Item
                        key={svc.number}
                        id={svc.number}
                        title={
                            <>
                                <span style={{ opacity: 0.3, letterSpacing: "-0.04em", fontSize: "1.2em", fontWeight: 700 }}>{svc.number}</span>
                                <span>{svc.title}</span>
                            </>
                        }
                    >
                        <div className={styles.serviceInner}>
                            <div className={`${styles.serviceContent}`}>
                                <p className={styles.serviceDesc}>{svc.description}</p>
                                <ul className={styles.capList}>
                                    {svc.capabilities.map((c) => (
                                        <li key={c} className={styles.capItem}>{c}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className={`${styles.serviceVisual}`}>
                                <div className="image-placeholder" style={{ paddingBottom: "75%" }} />
                            </div>
                        </div>
                    </StickyTabs.Item>
                ))}
            </StickyTabs>

            {/* ─── ARCHITECTURE PIPELINE ─── */}
            <section className={`section ${styles.architecture} gsap-reveal`}>
                <div className="container">
                    <p className={styles.archLabel}>Our Pipeline</p>
                    <h2 className={`${styles.archHeading} gsap-heading`}>How It Connects</h2>
                    <p className={styles.archSubtitle}>From raw data to deployed systems — a seamless end-to-end flow.</p>
                    <div className={`${styles.pipeline} spotlight-group`} onMouseMove={handleSpotlightMouseMove}>
                        {[
                            { num: "01", title: "Data Sources", desc: "Ingest structured & unstructured data from any origin" },
                            { num: "02", title: "AI Processing", desc: "Apply ML models, LLMs, and intelligent transformations" },
                            { num: "03", title: "Automation Layer", desc: "Orchestrate workflows, triggers, and business logic" },
                            { num: "04", title: "SaaS Delivery", desc: "Deploy scalable, multi-tenant platforms" },
                            { num: "05", title: "Client Systems", desc: "Integrate with dashboards, APIs, and end-user tools" },
                        ].map((step, i, arr) => (
                            <div key={step.num} className={styles.pipelineStep}>
                                <div className={`${styles.pipelineNode} spotlight-card`}>
                                    <span className={styles.pipelineNum}>{step.num}</span>
                                    <h3 className={styles.pipelineTitle}>{step.title}</h3>
                                    <p className={styles.pipelineDesc}>{step.desc}</p>
                                </div>
                                {i < arr.length - 1 && <div className={styles.pipelineConnector} />}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── CTA ─── */}
            <section className={`section ${styles.cta} gsap-reveal`}>
                <div className="container" style={{ textAlign: "center" }}>
                    <h2 className="page-heading gsap-heading">Have a project in mind?</h2>
                    <div style={{ marginTop: "2.5rem" }}>
                        <Link href="/contact" className="pill-btn">Let&apos;s talk →</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
