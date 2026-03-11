import styles from "./page.module.css";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
    title: "Contact | Converge Digitals AI Lab",
    description: "Let's build something impactful together. Tell us about your project.",
    path: "/contact",
});

export default function ContactPage() {
    return (
        <section className={styles.contact}>
            <div className="container">
                <div className={styles.grid}>
                    {/* ─── LEFT ─── */}
                    <div className={styles.left}>
                        <h1 className={styles.heading}>
                            Let&apos;s Build Something
                            <br />
                            Impactful Together
                        </h1>
                        <p className={styles.desc}>
                            Tell us about your idea, project, or challenge. Our team will review
                            your requirements and get back to you with the right approach and
                            next steps.
                        </p>

                        <div className={styles.details}>
                            <div className={styles.detailItem}>
                                <span className={styles.detailLabel}>Email</span>
                                <a href="mailto:hello@convergedigitals.com" className={styles.detailValue}>
                                    hello@convergedigitals.com
                                </a>
                            </div>

                            <div className={styles.detailItem}>
                                <span className={styles.detailLabel}>Social</span>
                                <div className={styles.socialLinks}>
                                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                        LinkedIn
                                    </a>
                                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                        Twitter / X
                                    </a>
                                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ─── RIGHT (FORM) ─── */}
                    <div className={styles.right}>
                        <form className={styles.form}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name" className={styles.label}>Your Name</label>
                                <input type="text" id="name" name="name" className={styles.input} placeholder="John Doe" />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="email" className={styles.label}>Email Address</label>
                                <input type="email" id="email" name="email" className={styles.input} placeholder="john@company.com" />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="projectType" className={styles.label}>Project Type</label>
                                <select id="projectType" name="projectType" className={styles.select}>
                                    <option value="">Select a service...</option>
                                    <option value="ai">AI Solution</option>
                                    <option value="automation">Workflow Automation</option>
                                    <option value="saas">Custom SaaS</option>
                                    <option value="internal">Internal System</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="message" className={styles.label}>Tell us about your project</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className={styles.textarea}
                                    rows={5}
                                    placeholder="Describe your project, goals, and timeline..."
                                />
                            </div>

                            <button type="submit" className={`pill-btn ${styles.submitBtn}`}>
                                Send Message →
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
