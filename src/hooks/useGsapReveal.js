"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function useGsapReveal(selector = ".gsap-reveal") {
    const pathname = usePathname();

    useEffect(() => {
        let gsap, ScrollTrigger;
        let ctx;

        const init = async () => {
            const mod = await import("gsap");
            const stMod = await import("gsap/ScrollTrigger");
            gsap = mod.gsap;
            ScrollTrigger = stMod.ScrollTrigger;
            gsap.registerPlugin(ScrollTrigger);

            // Use a GSAP context for easy cleanup
            ctx = gsap.context(() => {

                // ── Palmer-style section reveals ──
                // Slow, deliberate slide-up with long duration
                // toggleActions: "play none none reset" → replays every time element enters viewport
                const elements = document.querySelectorAll(selector);
                elements.forEach((el) => {
                    gsap.fromTo(
                        el,
                        { opacity: 0, y: 80 },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 1.4,
                            ease: "power4.out",
                            scrollTrigger: {
                                trigger: el,
                                start: "top 88%",
                                toggleActions: "play none none reset",
                            },
                        }
                    );
                });

                // ── Palmer-style heading reveals ──
                // Line-by-line clip reveal from bottom
                const headings = document.querySelectorAll(".gsap-heading");
                headings.forEach((heading) => {
                    // Split into lines using BR tags or natural wrapping
                    const words = heading.textContent.split(" ");
                    heading.innerHTML = "";
                    words.forEach((word, i) => {
                        const wrapper = document.createElement("span");
                        wrapper.style.display = "inline-block";
                        wrapper.style.overflow = "hidden";
                        wrapper.style.verticalAlign = "top";
                        const inner = document.createElement("span");
                        inner.textContent = word;
                        inner.style.display = "inline-block";
                        inner.classList.add("gsap-word");
                        wrapper.appendChild(inner);
                        heading.appendChild(wrapper);
                        if (i < words.length - 1) {
                            heading.appendChild(document.createTextNode(" "));
                        }
                    });

                    gsap.fromTo(
                        heading.querySelectorAll(".gsap-word"),
                        { y: "120%", opacity: 0, rotateX: 30 },
                        {
                            y: "0%",
                            opacity: 1,
                            rotateX: 0,
                            duration: 1.2,
                            ease: "power4.out",
                            stagger: 0.04,
                            scrollTrigger: {
                                trigger: heading,
                                start: "top 88%",
                                toggleActions: "play none none reset",
                            },
                        }
                    );
                });

                // ── Image clip-path reveals ──
                // Palmer-style: images reveal by expanding clip-path from center
                const clipEls = document.querySelectorAll(".gsap-clip-reveal");
                clipEls.forEach((el) => {
                    gsap.fromTo(
                        el,
                        { clipPath: "inset(100% 0% 0% 0%)" },
                        {
                            clipPath: "inset(0% 0% 0% 0%)",
                            duration: 1.4,
                            ease: "power4.inOut",
                            scrollTrigger: {
                                trigger: el,
                                start: "top 85%",
                                toggleActions: "play none none reset",
                            },
                        }
                    );
                });

                // ── Palmer-style parallax on images ──
                const parallaxEls = document.querySelectorAll(".gsap-parallax");
                parallaxEls.forEach((el) => {
                    gsap.fromTo(
                        el,
                        { y: 60, scale: 1.05 },
                        {
                            y: -60,
                            scale: 1,
                            ease: "none",
                            scrollTrigger: {
                                trigger: el,
                                start: "top bottom",
                                end: "bottom top",
                                scrub: 2,
                            },
                        }
                    );
                });

                // ── Stagger children (cards, grid items) ──
                const staggerGroups = document.querySelectorAll(".gsap-stagger-group");
                staggerGroups.forEach((group) => {
                    const children = group.children;
                    gsap.fromTo(
                        children,
                        { opacity: 0, y: 60 },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 1,
                            ease: "power4.out",
                            stagger: 0.12,
                            scrollTrigger: {
                                trigger: group,
                                start: "top 82%",
                                toggleActions: "play none none reset",
                            },
                        }
                    );
                });

                // ── Hero entrance ──
                // Palmer-style: staggered fade + slide with delay
                const heroContent = document.querySelector(".gsap-hero-entrance");
                if (heroContent) {
                    const children = heroContent.children;
                    gsap.fromTo(
                        children,
                        { opacity: 0, y: 50 },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 1.3,
                            ease: "power4.out",
                            stagger: 0.18,
                            delay: 0.5,
                        }
                    );
                }

                // ── Counter scale-in ──
                const counters = document.querySelectorAll(".gsap-counter");
                counters.forEach((el) => {
                    gsap.fromTo(
                        el,
                        { opacity: 0, scale: 0.85, y: 30 },
                        {
                            opacity: 1,
                            scale: 1,
                            y: 0,
                            duration: 1,
                            ease: "power4.out",
                            scrollTrigger: {
                                trigger: el,
                                start: "top 85%",
                                toggleActions: "play none none reset",
                            },
                        }
                    );
                });

                // ── Timeline line draw ──
                const timelineLine = document.querySelector(".gsap-timeline-line");
                if (timelineLine) {
                    gsap.fromTo(
                        timelineLine,
                        { scaleY: 0, transformOrigin: "top" },
                        {
                            scaleY: 1,
                            ease: "none",
                            scrollTrigger: {
                                trigger: timelineLine,
                                start: "top 70%",
                                end: "bottom 30%",
                                scrub: 1.5,
                            },
                        }
                    );
                }

                // ── Horizontal line draw ──
                const hLines = document.querySelectorAll(".gsap-line-draw");
                hLines.forEach((el) => {
                    gsap.fromTo(
                        el,
                        { scaleX: 0, transformOrigin: "left" },
                        {
                            scaleX: 1,
                            duration: 1.2,
                            ease: "power4.inOut",
                            scrollTrigger: {
                                trigger: el,
                                start: "top 90%",
                                toggleActions: "play none none reset",
                            },
                        }
                    );
                });

                // ── Smart navbar (desktop only — mobile hamburger must stay constant) ──
                const isMobile = window.matchMedia("(max-width: 768px)").matches;
                const navbar = document.querySelector("header");
                if (navbar) {
                    if (isMobile) {
                        // Force reset any stale GSAP transform on mobile
                        gsap.set(navbar, { y: 0, clearProps: "transform" });
                    } else {
                        let lastScroll = 0;
                        ScrollTrigger.create({
                            start: "top top",
                            end: 99999,
                            onUpdate: (self) => {
                                const scroll = self.scroll();
                                if (scroll > lastScroll && scroll > 300) {
                                    gsap.to(navbar, { y: -100, duration: 0.4, ease: "power3.out" });
                                } else {
                                    gsap.to(navbar, { y: 0, duration: 0.4, ease: "power3.out" });
                                }
                                lastScroll = scroll;
                            },
                        });
                    }
                }
            }); // end gsap.context
        };

        // Small delay to ensure DOM is ready after route transition
        const raf = requestAnimationFrame(() => init());

        return () => {
            cancelAnimationFrame(raf);
            if (ctx) ctx.revert();
        };
    }, [selector, pathname]);
}
