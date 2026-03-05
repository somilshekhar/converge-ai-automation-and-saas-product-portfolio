import MetricCounter from "@/components/MetricCounter";
import TextReveal from "@/components/TextReveal";
import SpotlightGrid from "@/components/SpotlightGrid";
import styles from "./page.module.css";

export const metadata = {
    title: "About – Converge Digitals AI Lab",
    description: "Where strategy meets engineering. Learn about our philosophy, capabilities, and team.",
};

const capabilities = [
    { num: "01", icon: "🧠", title: "Natural Language Processing", desc: "Text analysis, sentiment detection, entity recognition & language understanding" },
    { num: "02", icon: "👁️", title: "Computer Vision", desc: "Image classification, object detection, OCR & visual intelligence systems" },
    { num: "03", icon: "⚡", title: "LLM Integration", desc: "GPT, Claude, Gemini API integration, fine-tuning & prompt engineering" },
    { num: "04", icon: "🔗", title: "RAG Architecture", desc: "Retrieval-augmented generation pipelines for contextual AI responses" },
    { num: "05", icon: "🔄", title: "Workflow Automation", desc: "Process orchestration, intelligent triggers & end-to-end automation" },
    { num: "06", icon: "🚀", title: "ML Deployment", desc: "Model serving, monitoring, MLOps & production-grade infrastructure" },
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
                    <span className="section-heading">Our Philosophy</span>
                    <TextReveal
                        text="We see digital as more than visuals — it's a system of experiences that drive clarity, performance, and measurable impact."
                        className={styles.pullQuote}
                    />
                    <TextReveal
                        text="Every project we take on is an opportunity to transform ideas into purposeful, scalable digital solutions. We work across branding, web and application development, product design, automation, and digital consulting."
                        className={styles.philBody}
                    />
                    <TextReveal
                        text="Our approach blends creative thinking with technical precision — ensuring every interface, workflow, and interaction is built to perform. From early-stage startups to growing enterprises, we help teams turn complexity into clean, efficient digital experiences that evolve with their business."
                        className={styles.philBody}
                    />
                </div>
            </section>

            {/* ─── TEXT REVEAL ─── */}
            <section className={`section ${styles.textReveal}`}>
                <div className="container">
                    <TextReveal text="Blending design and code with functional clarity and creative precision. Delivering thoughtful digital systems with structure, flow, and expressive interaction." />
                </div>
            </section>

            {/* ─── CAPABILITIES ─── */}
            <section className={`section ${styles.capabilities}`}>
                <div className="container">
                    <p className="section-heading gsap-reveal">AI Lab Capabilities</p>
                    <p className={`${styles.capSubtitle} gsap-reveal`}>
                        Six core pillars powering intelligent systems — from language understanding to production deployment.
                    </p>
                    <SpotlightGrid className={`${styles.capGrid} gsap-stagger-group`}>
                        {capabilities.map((c) => (
                            <div key={c.title} className={`${styles.capCard} spotlight-card`}>
                                <div className={styles.capHeader}>
                                    <span className={styles.capNum}>{c.num}</span>
                                    <span className={styles.capEmoji}>{c.icon}</span>
                                </div>
                                <h3 className={styles.capTitle}>{c.title}</h3>
                                <p className={styles.capDesc}>{c.desc}</p>
                                <div className={styles.capLine} />
                            </div>
                        ))}
                    </SpotlightGrid>
                </div>
            </section>


            {/* ─── TESTIMONIAL ─── */}
            <section className={`section ${styles.testimonials} gsap-reveal`}>
                <div className="container">
                    <p className="section-heading">Client Voices</p>
                    <div className={styles.testimonialBlock}>
                        <span className={styles.quoteIcon}>&ldquo;</span>
                        <TextReveal
                            text="The Converge Digitals team delivered a seamless digital experience that exceeded our expectations. Their technical depth and attention to detail set them apart."
                            className={styles.testimonialText}
                        />
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
