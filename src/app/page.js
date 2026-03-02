"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import Marquee from "@/components/Marquee";
import MetricCounter from "@/components/MetricCounter";
import { projects } from "@/lib/data";
import styles from "./page.module.css";

const SplineHero = dynamic(() => import("@/components/SplineHero"), {
  ssr: false,
  loading: () => null,
});

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroGlow2} />
        {/* Spline covers full hero for whole-screen interaction */}
        <div className={styles.heroSplineFullscreen}>
          <SplineHero />
        </div>
        <div className={styles.heroInner}>
          <div className={`${styles.heroContent} gsap-hero-entrance`}>
            <div className="section-label">AI-Powered Engineering Studio</div>
            <h1 className={styles.heroHeading}>
              <span className="gradient-text">Redefining</span> the Future
              <br />of Digital Systems.
            </h1>
            <p className={styles.heroSub}>
              Creating intelligent solutions that redefine innovation. Stay ahead
              with AI-powered technology, custom SaaS, and workflow automation.
            </p>
            <div className={styles.heroCtas}>
              <Link href="/contact" className="btn-primary">
                Connect With Us <span>→</span>
              </Link>
              <Link href="/about" className="btn-secondary">
                What is Converge Digitals?
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MARQUEE ═══ */}
      <Marquee
        items={["AI Solutions", "Workflow Automation", "SaaS Architecture", "Machine Learning", "Data Pipelines", "API Integration", "Cloud Infrastructure"]}
        speed={28}
      />

      {/* ═══ ABOUT ═══ */}
      <section className={`section ${styles.about}`}>
        <div className="container">
          <div className={`${styles.aboutGrid} gsap-reveal`}>
            <div className={styles.aboutLeft}>
              <div className="section-label">About Us</div>
              <h2 className="section-heading gsap-heading">
                Built on creativity, collaboration, and engineering excellence.
              </h2>
              <p className={styles.aboutText}>
                Converge Digitals is a dynamic team of industry experts committed
                to achieving exceptional results. We build AI-powered systems,
                automate complex workflows, and deliver custom SaaS platforms
                that help businesses scale.
              </p>
              <Link href="/about" className="btn-secondary" style={{ marginTop: '1.5rem' }}>
                Learn More →
              </Link>
            </div>
            <div className={`${styles.aboutRight} gsap-stagger-group`}>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>120+</span>
                <span className={styles.statLabel}>Projects Delivered</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>98.6%</span>
                <span className={styles.statLabel}>Client Satisfaction</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>38+</span>
                <span className={styles.statLabel}>Global Brands</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>50ms</span>
                <span className={styles.statLabel}>Avg. Latency</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FEATURES ═══ */}
      <section className={`section ${styles.features}`}>
        <div className="container">
          <div className="gsap-reveal" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
            <div className="section-label" style={{ margin: '0 auto 1.5rem' }}>Features</div>
            <h2 className="section-heading gsap-heading">Packed with Innovation.</h2>
            <p className="subtitle" style={{ margin: '1rem auto 0' }}>
              Everything you need to build, automate, and scale — all in one place.
            </p>
          </div>
          <div className={`${styles.featureGrid} gsap-stagger-group`}>
            {[
              { icon: "🔗", title: "Seamless API Integrations", desc: "Connect with any third-party service. REST, GraphQL, webhooks — all handled." },
              { icon: "🛡️", title: "Enterprise Security", desc: "SOC 2 compliant architecture with role-based access and encryption at rest." },
              { icon: "🎙️", title: "AI-Speech Recognition", desc: "Voice-enabled interfaces that understand context and drive actions." },
              { icon: "📊", title: "Real-Time Analytics", desc: "Live dashboards with instant insights for faster decision-making." },
              { icon: "👁️", title: "Computer Vision", desc: "AI-powered image and video recognition for automated processing." },
              { icon: "⚡", title: "Predictive Intelligence", desc: "ML models that forecast trends and automate data-driven decisions." },
            ].map((f) => (
              <div key={f.title} className={`${styles.featureCard} card`}>
                <span className={styles.featureIcon}>{f.icon}</span>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureDesc}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className={`section ${styles.services}`}>
        <div className="container">
          <div className="gsap-reveal">
            <div className="section-label">Services</div>
            <h2 className="section-heading gsap-heading">
              Future-Driven Solutions for Modern Businesses.
            </h2>
          </div>
          <div className={styles.servicesList}>
            {[
              { n: "01", title: "AI Solutions", desc: "LLM integration, RAG pipelines, ML model deployment, and intelligent assistants.", tags: ["GPT", "RAG", "ML"] },
              { n: "02", title: "Workflow Automation", desc: "Process orchestration, smart triggers, API middleware, and n8n/Zapier alternatives.", tags: ["n8n", "APIs", "Triggers"] },
              { n: "03", title: "Custom SaaS Platforms", desc: "Multi-tenant architecture, subscription billing, admin dashboards, and cloud infrastructure.", tags: ["Next.js", "AWS", "Stripe"] },
              { n: "04", title: "Internal Tools & Dashboards", desc: "Admin panels, data pipelines, monitoring systems, and reporting dashboards.", tags: ["Analytics", "Pipelines", "Dashboards"] },
            ].map((s) => (
              <Link href="/services" key={s.n} className={`${styles.serviceRow} gsap-reveal`}>
                <span className={styles.serviceNum}>{s.n}</span>
                <div className={styles.serviceInfo}>
                  <h3 className={styles.serviceTitle}>{s.title}</h3>
                  <p className={styles.serviceDesc}>{s.desc}</p>
                </div>
                <div className={styles.serviceTags}>
                  {s.tags.map((t) => (
                    <span key={t} className={styles.serviceTag}>{t}</span>
                  ))}
                </div>
                <span className={styles.serviceArrow}>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PORTFOLIO ═══ */}
      <section className={`section ${styles.portfolio}`}>
        <div className="container">
          <div className="gsap-reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div className="section-label">Portfolio</div>
              <h2 className="section-heading gsap-heading">Work with Pure Precision.</h2>
            </div>
            <Link href="/projects" className="btn-secondary">View All Works →</Link>
          </div>
          <div className={`${styles.portfolioGrid} gsap-stagger-group`}>
            {featured.map((p) => (
              <Link key={p.slug} href={`/projects/${p.slug}`} className={`${styles.portfolioCard} card`}>
                <div className={`${styles.portfolioImage} gsap-clip-reveal`}>
                  <div className="image-placeholder" style={{ paddingBottom: '65%', borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0' }} />
                </div>
                <div className={styles.portfolioBody}>
                  <span className={styles.portfolioYear}>2024</span>
                  <h3 className={styles.portfolioTitle}>{p.title}</h3>
                  <div className={styles.portfolioTags}>
                    {p.tags.slice(0, 3).map((t) => (
                      <span key={t} className={styles.portfolioTag}>{t}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ METRICS ═══ */}
      <section className={`section ${styles.metrics}`}>
        <div className="container">
          <div className={`${styles.metricsGrid} gsap-stagger-group`}>
            <div className="gsap-counter"><MetricCounter value="98.6" suffix="%" label="Client Satisfaction" /></div>
            <div className="gsap-counter"><MetricCounter value="120" suffix="+" label="Projects Delivered" /></div>
            <div className="gsap-counter"><MetricCounter value="38" suffix="+" label="Global Brands" /></div>
            <div className="gsap-counter"><MetricCounter value="50" suffix="ms" label="Inference Latency" /></div>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className={styles.cta}>
        <div className={styles.ctaGlow} />
        <div className="container gsap-reveal" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div className="section-label" style={{ margin: '0 auto 1.5rem' }}>Ready?</div>
          <h2 className={`${styles.ctaHeading} gsap-heading`}>
            Ready to Power Up with
            <br /><span className="gradient-text">Next-Gen Innovation?</span>
          </h2>
          <p className={styles.ctaSub}>
            Tell us about your challenge. We&apos;ll show you what&apos;s possible.
          </p>
          <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/contact" className="btn-primary">
              Start a Project →
            </Link>
            <Link href="/projects" className="btn-secondary">
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
