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
      {/* ═══ HERO ═══ */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroGlow2} />
        {/* Spline covers full hero for whole-screen interaction */}
        <div className={styles.heroSplineFullscreen} data-hide-cursor="true">
          <SplineHero />
        </div>
        <div className={styles.heroInner}>
          <div className={`${styles.heroContent} gsap-hero-entrance`}>
            <div className="section-label">AI-Powered Engineering Studio</div>
            <h1 className={styles.heroHeading} style={{ textTransform: 'uppercase', lineHeight: 1.1 }}>
              <span className="gradient-text">REDEFINING</span> THE FUTURE
              <br /><span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, fontSize: '1.1em', letterSpacing: '-0.02em' }}>OF DIGITAL SYSTEMS</span>
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
        speed={12}
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
            <div className={`${styles.aboutRight} gsap-stagger-group spotlight-group`} onMouseMove={handleSpotlightMouseMove}>
              <div className={`${styles.statCard} spotlight-card`}>
                <span className={styles.statNumber}>120+</span>
                <span className={styles.statLabel}>Projects Delivered</span>
              </div>
              <div className={`${styles.statCard} spotlight-card`}>
                <span className={styles.statNumber}>98.6%</span>
                <span className={styles.statLabel}>Client Satisfaction</span>
              </div>
              <div className={`${styles.statCard} spotlight-card`}>
                <span className={styles.statNumber}>38+</span>
                <span className={styles.statLabel}>Global Brands</span>
              </div>
              <div className={`${styles.statCard} spotlight-card`}>
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
          <div className={styles.featureLayout}>
            {/* Header on the left */}
            <div className={`${styles.featureHeader} gsap-reveal`}>
              <h2 className="section-heading" style={{ textTransform: 'uppercase', fontSize: 'clamp(2.5rem, 4.5vw, 4rem)', lineHeight: 1, margin: 0, paddingBottom: '3rem', fontWeight: 400 }}>
                FEATURES
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.1rem', marginTop: 'auto' }}>
                <p style={{ fontSize: '0.8rem', fontWeight: 500 }}>Launch</p>
                <p style={{ fontSize: '0.8rem', fontWeight: 500, color: 'var(--text-muted)' }}>with Ease</p>
              </div>
              <div style={{ marginTop: '2rem' }}>
                <span style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>↗</span>
              </div>
            </div>

            {/* Cards grid aligned to the right (Spotlight Mouse Effect) */}
            <div
              className={`${styles.featureCardsGrid} gsap-stagger-group spotlight-group`}
              onMouseMove={handleSpotlightMouseMove}
            >
              {[
                { icon: "🔗", title: "Unlimited Requests", desc: "Get unlimited task requests. Prioritize what is needed in your business." },
                { icon: "🚀", title: "Launch Fast", desc: "Get started requests fast. Immediately after subscribing and expect a 2 day average turnaround time." },
                { icon: "🚩", title: "Start Today", desc: "Get started requests today. Immediately after subscribing and expect a 2 day average turnaround time." },
                { icon: "⏸️", title: "Pause Or Cancel Anytime", desc: "Easily pause or cancel your subscription at any point. Giving you the flexibility your business needs." },
                { icon: "💰", title: "Affordable Pricing", desc: "Save up to 70% per year hiring our team compared to hiring a full-time designer & developer." },
              ].map((f) => (
                <div key={f.title} className={`${styles.featureCard} card spotlight-card`}>
                  <div className={styles.featureIconWrap}>
                    <span className={styles.featureIcon}>{f.icon}</span>
                  </div>
                  <h3 className={styles.featureTitle}>{f.title}</h3>
                  <p className={styles.featureDesc}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className={`section ${styles.services}`}>
        <div className="container">
          <div className="gsap-reveal">
            <h2 className="section-heading gsap-heading" style={{ textTransform: 'uppercase' }}>
              SERVICES
            </h2>
          </div>
          <div className={`${styles.servicesList} spotlight-group`} onMouseMove={handleSpotlightMouseMove}>
            {[
              { n: "01", title: "AI Solutions", desc: "LLM integration, RAG pipelines, ML model deployment, and intelligent assistants.", tags: ["GPT", "RAG", "ML"] },
              { n: "02", title: "Workflow Automation", desc: "Process orchestration, smart triggers, API middleware, and n8n/Zapier alternatives.", tags: ["n8n", "APIs", "Triggers"] },
              { n: "03", title: "Custom SaaS Platforms", desc: "Multi-tenant architecture, subscription billing, admin dashboards, and cloud infrastructure.", tags: ["Next.js", "AWS", "Stripe"] },
              { n: "04", title: "Internal Tools & Dashboards", desc: "Admin panels, data pipelines, monitoring systems, and reporting dashboards.", tags: ["Analytics", "Pipelines", "Dashboards"] },
            ].map((s) => (
              <Link href="/services" key={s.n} className={`${styles.serviceRow} gsap-reveal spotlight-card`}>
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
        <div className="container" style={{ maxWidth: "1200px" }}>
          <div className="gsap-reveal" style={{ textAlign: "left", marginBottom: "3rem" }}>
            <h2 className="section-heading gsap-heading" style={{ textTransform: 'uppercase', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 300, fontFamily: 'var(--font-serif)', letterSpacing: '-0.02em' }}>
              OUR WORKS
            </h2>
          </div>

          <div className={`${styles.portfolioGrid} gsap-stagger-group spotlight-group`} onMouseMove={handleSpotlightMouseMove}>
            {featured.map((p, i) => (
              <Link data-cursor="view" key={p.slug} href={`/projects/${p.slug}`} className={`${styles.portfolioCard} ${i === 0 ? styles.portfolioCardLarge : ""} spotlight-card`}>
                <div className={`${styles.portfolioImage} gsap-clip-reveal`}>
                  <div className="image-placeholder" style={{ paddingBottom: i === 0 ? '45%' : '80%' }} />

                  {/* Glassmorphism Title Overlay */}
                  <div className={styles.portfolioOverlay}>
                    <span className={styles.portfolioTitleText}>{p.title} / {p.label || 'Project'}</span>
                    <span className={styles.portfolioArrow}>→</span>
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
          <div className={`${styles.metricsGrid} gsap-stagger-group spotlight-group`} onMouseMove={handleSpotlightMouseMove}>
            <div className="gsap-counter spotlight-card" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)' }}><MetricCounter value="98.6" suffix="%" label="Client Satisfaction" /></div>
            <div className="gsap-counter spotlight-card" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)' }}><MetricCounter value="120" suffix="+" label="Projects Delivered" /></div>
            <div className="gsap-counter spotlight-card" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)' }}><MetricCounter value="38" suffix="+" label="Global Brands" /></div>
            <div className="gsap-counter spotlight-card" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)' }}><MetricCounter value="50" suffix="ms" label="Inference Latency" /></div>
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
