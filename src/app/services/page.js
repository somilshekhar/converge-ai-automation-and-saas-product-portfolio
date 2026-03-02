import Link from "next/link";
import { services } from "@/lib/data";
import styles from "./page.module.css";

export const metadata = {
    title: "Services – Converge Digitals AI Lab",
    description: "AI Solutions, Workflow Automation, Custom SaaS Tools, and Internal Systems engineering.",
};

export default function ServicesPage() {
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

            {/* ─── SERVICE DEEP-DIVES ─── */}
            {services.map((svc, i) => (
                <section
                    key={svc.number}
                    className={`section ${styles.serviceBlock} ${i % 2 !== 0 ? styles.reversed : ""}`}
                >
                    <div className={styles.serviceInner}>
                        <div className={`${styles.serviceVisual} gsap-parallax`}>
                            <div className="image-placeholder" style={{ paddingBottom: "75%" }} />
                        </div>
                        <div className={`${styles.serviceContent} gsap-reveal`}>
                            <span className={styles.serviceNum}>{svc.number}</span>
                            <h2 className={`${styles.serviceTitle} gsap-heading`}>{svc.title}</h2>
                            <p className={styles.serviceDesc}>{svc.description}</p>
                            <ul className={styles.capList}>
                                {svc.capabilities.map((c) => (
                                    <li key={c} className={styles.capItem}>{c}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
            ))}

            {/* ─── ARCHITECTURE ─── */}
            <section className={`section ${styles.architecture} gsap-reveal`}>
                <div className="container">
                    <p className="section-heading">How It Connects</p>
                    <div className={`${styles.flowDiagram} gsap-stagger-group`}>
                        {["Data Sources", "AI Processing", "Automation Layer", "SaaS Delivery", "Client Systems"].map(
                            (node, i, arr) => (
                                <div key={node} className={styles.flowStep}>
                                    <div className={styles.flowNode}>{node}</div>
                                    {i < arr.length - 1 && <div className={styles.flowArrow}>→</div>}
                                </div>
                            )
                        )}
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
