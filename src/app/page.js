"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import Marquee from "@/components/Marquee";
import MetricCounter from "@/components/MetricCounter";
import { projects } from "@/lib/data";
import styles from "./page.module.css";

const HeroScene = dynamic(() => import("@/components/HeroScene"), {
  ssr: false,
  loading: () => null,
});

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <>
      {/* ─── HERO ─── */}
      <section className={styles.hero}>
        <HeroScene />
        <div className={`${styles.heroContent} gsap-hero-entrance`}>
          <p className={styles.heroLabel}>Converge Digitals® — AI Lab</p>
          <h1 className={styles.heroHeading}>
            Engineering Digital
            <br />
            Systems that Drive
            <br />
            Bold <em>Impact.</em>
          </h1>
          <div className={styles.heroMeta}>
            <span className={styles.heroPill}>AI Solutions</span>
            <span className={styles.heroPill}>Automation</span>
            <span className={styles.heroPill}>SaaS</span>
          </div>
        </div>
        <div className={styles.heroBottom}>
          <div className={styles.heroDetails}>
            <div className={styles.heroDetailItem}>
              <span className={styles.heroDetailLabel}>Based in</span>
              <span className={styles.heroDetailValue}>India</span>
            </div>
            <div className={styles.heroDetailItem}>
              <span className={styles.heroDetailLabel}>Focus</span>
              <span className={styles.heroDetailValue}>AI + Engineering</span>
            </div>
          </div>
          <Link href="/contact" className={styles.heroCtaLink}>
            Start a Project →
          </Link>
        </div>
      </section>

      {/* ─── BRAND STRIP ─── */}
      <div className={styles.brandStrip}>
        <span className={styles.brandName}>Converge Digitals</span>
        <sup className={styles.brandTm}>™</sup>
      </div>

      {/* ─── MARQUEE ─── */}
      <Marquee
        items={["Digital Designer", "AI Engineering", "Workflow Automation", "SaaS Architecture", "System Design"]}
        speed={25}
      />

      {/* ─── INTRO ─── */}
      <section className={`section ${styles.intro}`}>
        <div className="container">
          <div className={styles.introInner}>
            <span className="section-heading gsap-reveal">© About</span>
            <h2 className={`${styles.introHeading} gsap-heading`}>
              120+ projects of AI engineering, sharp interfaces, and relentless creative discipline.
            </h2>
            <div className={`${styles.introActions} gsap-reveal`}>
              <Link href="/contact" className="pill-btn">
                Contact
              </Link>
              <Link href="/about" className={styles.textLink}>
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURED WORKS MARQUEE ─── */}
      <Marquee
        items={["Featured Works", "Featured Works", "Featured Works"]}
        speed={35}
        separator="©"
      />

      {/* ─── FEATURED PROJECTS ─── */}
      <section className={`section ${styles.projects}`}>
        {featured.map((p, i) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className={`${styles.projectBlock} ${i === 1 ? styles.projectRight : ""}`}
          >
            <div className={`${styles.projectImageWrap} gsap-clip-reveal`}>
              <div className="image-placeholder" style={{ paddingBottom: "125%" }} />
            </div>
            <div className={`${styles.projectMeta} gsap-reveal`}>
              <span className={styles.projectName}>{p.title}</span>
              <span className={styles.projectIndex}>({String(i + 1).padStart(2, "0")})</span>
            </div>
          </Link>
        ))}
      </section>

      {/* ─── SERVICES ─── */}
      <section className={`section ${styles.services}`}>
        <div className="container">
          <span className="section-heading gsap-reveal">© Services (4)</span>
          <div className={styles.serviceList}>
            {[
              { n: "01", t: "AI Solutions", d: "LLM integration, RAG systems, ML pipelines" },
              { n: "02", t: "Automation", d: "Process orchestration, API middleware, triggers" },
              { n: "03", t: "SaaS Build", d: "Multi-tenant architecture, billing, infrastructure" },
              { n: "04", t: "Internal Tools", d: "Dashboards, admin panels, data pipelines" },
            ].map((s) => (
              <div key={s.n} className={`${styles.serviceRow} gsap-reveal`}>
                <div className={`${styles.serviceRowLine} gsap-line-draw`} />
                <div className={styles.serviceRowContent}>
                  <span className={styles.serviceRowNum}>({s.n})</span>
                  <h3 className={styles.serviceRowTitle}>{s.t}</h3>
                  <p className={styles.serviceRowDesc}>{s.d}</p>
                  <span className={styles.serviceRowArrow}>→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── METRICS ─── */}
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

      {/* ─── CTA ─── */}
      <section className={`section ${styles.cta} gsap-reveal`}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className={`${styles.ctaHeading} gsap-heading`}>
            Let&apos;s build something impactful together.
          </h2>
          <div style={{ marginTop: "3rem" }}>
            <Link href="/contact" className="pill-btn">
              Start a conversation →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
