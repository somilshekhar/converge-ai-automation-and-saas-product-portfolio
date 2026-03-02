import MetricCounter from "@/components/MetricCounter";
import styles from "./page.module.css";

export const metadata = {
    title: "About – Converge Digitals AI Lab",
    description: "Where strategy meets engineering. Learn about our philosophy, capabilities, and team.",
};

const capabilities = [
    { title: "Natural Language Processing", desc: "Text analysis, sentiment, entity recognition" },
    { title: "Computer Vision", desc: "Image classification, object detection, OCR" },
    { title: "LLM Integration", desc: "GPT, Claude, Gemini API integration & fine-tuning" },
    { title: "RAG Architecture", desc: "Retrieval-augmented generation pipelines" },
    { title: "Workflow Automation", desc: "Process orchestration & intelligent triggers" },
    { title: "ML Deployment", desc: "Model serving, monitoring, and MLOps" },
];

export default function AboutPage() {
    return (
        <>
            {/* ─── HERO ─── */}
            <section className={styles.hero}>
                <div className="container">
                    <p className={`${styles.heroLabel} gsap-reveal`}>About Us</p>
                    <h1 className="display-heading gsap-heading">
                        Where Strategy Meets Engineering
                    </h1>
                    <p className="subtitle gsap-reveal" style={{ marginTop: "2rem" }}>
                        Converge Digitals is where strategy, design, and technology come
                        together to solve real business problems.
                    </p>
                </div>
            </section>

            {/* ─── PHILOSOPHY ─── */}
            <section className={`section ${styles.philosophy} gsap-reveal`}>
                <div className="container">
                    <div className={styles.philInner}>
                        <div className={styles.philLeft}>
                            <span className="section-heading">Our Philosophy</span>
                            <blockquote className={styles.pullQuote}>
                                &ldquo;We see digital as more than visuals — it&apos;s a system of
                                experiences that drive clarity, performance, and measurable
                                impact.&rdquo;
                            </blockquote>
                        </div>
                        <div className={styles.philRight}>
                            <p className="body-text">
                                Every project we take on is an opportunity to transform ideas into
                                purposeful, scalable digital solutions. We work across branding,
                                web and application development, product design, automation, and
                                digital consulting.
                            </p>
                            <p className="body-text" style={{ marginTop: "1.25rem" }}>
                                Our approach blends creative thinking with technical precision —
                                ensuring every interface, workflow, and interaction is built to
                                perform. From early-stage startups to growing enterprises, we help
                                teams turn complexity into clean, efficient digital experiences
                                that evolve with their business.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── CAPABILITIES ─── */}
            <section className={`section ${styles.capabilities}`}>
                <div className="container">
                    <p className="section-heading gsap-reveal">AI Lab Capabilities</p>
                    <div className={`${styles.capGrid} gsap-stagger-group`}>
                        {capabilities.map((c) => (
                            <div key={c.title} className={styles.capCard}>
                                <div className={styles.capIcon} />
                                <h3 className={styles.capTitle}>{c.title}</h3>
                                <p className={styles.capDesc}>{c.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── TEAM ─── */}
            <section className={`section ${styles.team} gsap-reveal`}>
                <div className="container">
                    <p className="section-heading">The Team</p>
                    <div className={`${styles.teamGrid} gsap-stagger-group`}>
                        {[
                            { name: "Somil Shekhar", role: "Founder & Lead Engineer" },
                            { name: "Design Lead", role: "UI/UX & Brand Strategy" },
                            { name: "AI Engineer", role: "ML & LLM Systems" },
                            { name: "Full-Stack Dev", role: "SaaS & Platform Engineering" },
                        ].map((m) => (
                            <div key={m.name} className={styles.teamMember}>
                                <div className={styles.avatar} />
                                <span className={styles.memberName}>{m.name}</span>
                                <span className={styles.memberRole}>{m.role}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── TESTIMONIAL ─── */}
            <section className={`section ${styles.testimonials} gsap-reveal`}>
                <div className="container">
                    <p className="section-heading">Client Voices</p>
                    <div className={styles.testimonialBlock}>
                        <span className={styles.quoteIcon}>&ldquo;</span>
                        <blockquote className={styles.testimonialText}>
                            The Converge Digitals team delivered a seamless digital experience
                            that exceeded our expectations. Their technical depth and attention
                            to detail set them apart.
                        </blockquote>
                        <div className={styles.testimonialAuthor}>
                            <span className={styles.authorName}>Wade Warren</span>
                            <span className={styles.authorTitle}>Enterprise Client</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── METRICS ─── */}
            <section className={`section ${styles.metrics}`}>
                <div className="container">
                    <div className={`${styles.metricsRow} gsap-stagger-group`}>
                        <div className="gsap-counter"><MetricCounter value="98.6" suffix="%" label="Client Satisfaction" /></div>
                        <div className="gsap-counter"><MetricCounter value="120" suffix="+" label="Projects Delivered" /></div>
                        <div className="gsap-counter"><MetricCounter value="38" suffix="+" label="Global Brands" /></div>
                    </div>
                </div>
            </section>
        </>
    );
}
