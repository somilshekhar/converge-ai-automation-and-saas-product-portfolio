export const projects = [
    {
        slug: "ai-healthcare-checkup",
        label: "CASE STUDY 01",
        title: "AI Healthcare Checkup System",
        summary:
            "An end-to-end AI/ML product for automated patient health assessments and predictive diagnostics.",
        tags: ["AI/ML", "Healthcare", "Product Design", "Backend Integration"],
        challenge:
            "Healthcare providers needed a scalable, intelligent solution to automate routine patient checkups while maintaining diagnostic accuracy. Manual processes were slow, error-prone, and couldn't scale to meet growing patient demands.",
        approach: [
            "Conducted deep-dive discovery with medical professionals",
            "Designed AI/ML pipeline for health data analysis",
            "Built predictive diagnostic models with 99.2% accuracy",
            "Developed intuitive patient-facing UI/UX",
            "Integrated with existing hospital backend systems",
        ],
        metrics: [
            { value: "99.2", suffix: "%", label: "Diagnostic Accuracy" },
            { value: "3", suffix: "x", label: "Faster Processing" },
            { value: "10", suffix: "K+", label: "Patients Served" },
        ],
        technologies: ["Python", "TensorFlow", "FastAPI", "React", "PostgreSQL", "AWS"],
    },
    {
        slug: "ai-research-assistant",
        label: "CASE STUDY 02",
        title: "AI Research Assistant",
        summary:
            "Intelligent research platform powered by RAG architecture and LLM APIs for deep document analysis.",
        tags: ["RAG", "LLM", "AI Architecture", "API Implementation"],
        challenge:
            "Research teams were spending hours manually sifting through vast volumes of academic papers and documents, unable to quickly surface the insights they needed.",
        approach: [
            "Architected a Retrieval-Augmented Generation (RAG) pipeline",
            "Integrated multiple LLM APIs for contextual understanding",
            "Built vector database for semantic document search",
            "Created conversational interface for natural querying",
            "Deployed with enterprise-grade security and access controls",
        ],
        metrics: [
            { value: "85", suffix: "%", label: "Time Saved" },
            { value: "1", suffix: "M+", label: "Documents Indexed" },
            { value: "50", suffix: "ms", label: "Query Latency" },
        ],
        technologies: ["Python", "LangChain", "Pinecone", "OpenAI", "Next.js", "Docker"],
    },
    {
        slug: "ai-resume-screening",
        label: "CASE STUDY 03",
        title: "AI Resume Screening System",
        summary:
            "Automated talent screening solution using AI to analyze, rank, and shortlist candidates at scale.",
        tags: ["AI", "Web Application", "Automation"],
        challenge:
            "HR departments were overwhelmed by the volume of applications, spending days manually screening resumes with inconsistent evaluation criteria.",
        approach: [
            "Built NLP-based resume parsing and feature extraction",
            "Designed scoring algorithms aligned with job requirements",
            "Created an intuitive web dashboard for HR teams",
            "Implemented bias-detection and fairness auditing",
            "Integrated with existing ATS platforms via API",
        ],
        metrics: [
            { value: "90", suffix: "%", label: "Screening Accuracy" },
            { value: "5", suffix: "x", label: "Faster Hiring" },
            { value: "25", suffix: "K+", label: "Resumes Processed" },
        ],
        technologies: ["Python", "spaCy", "FastAPI", "React", "MongoDB", "GCP"],
    },
    {
        slug: "cyberfolio",
        label: "CASE STUDY 04",
        title: "CyberFolio",
        summary:
            "High-performance portfolio platform with optimized frontend architecture and premium UI/UX design.",
        tags: ["UI/UX", "Frontend", "Performance Optimization"],
        challenge:
            "The client needed a portfolio platform that could showcase creative work with stunning visuals while achieving top-tier web performance scores.",
        approach: [
            "Designed a bold, editorial UI with motion-rich interactions",
            "Engineered performance-first frontend architecture",
            "Achieved 95+ Lighthouse scores across all categories",
            "Implemented progressive loading and image optimization",
            "Built reusable component library for scalability",
        ],
        metrics: [
            { value: "98", suffix: "", label: "Performance Score" },
            { value: "0.8", suffix: "s", label: "Load Time" },
            { value: "100", suffix: "", label: "Accessibility" },
        ],
        technologies: ["Next.js", "GSAP", "Framer Motion", "Vercel", "Figma"],
    },
    {
        slug: "design-system",
        label: "CASE STUDY 05",
        title: "UI/UX Design System",
        summary:
            "Comprehensive Figma-based design system establishing consistent visual language and component architecture.",
        tags: ["UI/UX Strategy", "Figma", "Design System"],
        challenge:
            "Growing design teams needed a unified component library and design language to maintain consistency across multiple products and accelerate delivery.",
        approach: [
            "Audited existing designs across all products",
            "Defined atomic design principles and token system",
            "Built 200+ reusable Figma components with variants",
            "Created documentation and usage guidelines",
            "Established contribution and governance workflows",
        ],
        metrics: [
            { value: "200", suffix: "+", label: "Components Built" },
            { value: "60", suffix: "%", label: "Faster Design" },
            { value: "4", suffix: "", label: "Products Unified" },
        ],
        technologies: ["Figma", "Storybook", "CSS Variables", "Design Tokens"],
    },
];

export const services = [
    {
        number: "01",
        title: "AI Solutions",
        description:
            "We design and deploy intelligent systems that transform how businesses operate. From LLM integration and fine-tuning to full ML pipelines, we build AI that delivers measurable results.",
        capabilities: [
            "LLM integration & fine-tuning",
            "RAG system architecture",
            "ML model deployment & monitoring",
            "AI-assisted business intelligence",
            "Computer vision & NLP pipelines",
        ],
    },
    {
        number: "02",
        title: "Workflow Automation",
        description:
            "We eliminate manual bottlenecks with intelligent automation. Our systems orchestrate complex processes, reducing errors and accelerating operations across your entire organization.",
        capabilities: [
            "Process automation design",
            "API orchestration & middleware",
            "Trigger-based intelligent systems",
            "Business process re-engineering",
            "Integration platform development",
        ],
    },
    {
        number: "03",
        title: "Custom SaaS Tools",
        description:
            "We build production-ready SaaS platforms from the ground up. Multi-tenant architectures, subscription billing, scalable infrastructure — all engineered for growth.",
        capabilities: [
            "Full-stack product engineering",
            "Multi-tenant architecture design",
            "Subscription billing & licensing",
            "Scalable cloud infrastructure",
            "White-label platform development",
        ],
    },
    {
        number: "04",
        title: "Internal Systems",
        description:
            "We create the operational backbone your business needs. Custom dashboards, admin panels, and data pipelines that give teams clarity and control.",
        capabilities: [
            "Custom dashboard development",
            "Admin panels & control centers",
            "Data pipeline engineering",
            "Internal tooling & productivity",
            "Legacy system modernization",
        ],
    },
];

export const processSteps = [
    {
        number: "01",
        title: "Discovery",
        description:
            "Deep-dive into your business, goals, and constraints. We listen before we build.",
    },
    {
        number: "02",
        title: "Strategy",
        description:
            "Define the roadmap, architecture, and success metrics.",
    },
    {
        number: "03",
        title: "Design",
        description:
            "Craft interfaces and experiences that serve the strategy.",
    },
    {
        number: "04",
        title: "Engineering",
        description:
            "Build with precision. AI models, APIs, interfaces — all production-grade.",
    },
    {
        number: "05",
        title: "Deploy",
        description:
            "Launch to production with monitoring, testing, and CI/CD pipelines.",
    },
    {
        number: "06",
        title: "Iterate",
        description:
            "Measure, learn, improve. Continuous optimization post-launch.",
    },
];
