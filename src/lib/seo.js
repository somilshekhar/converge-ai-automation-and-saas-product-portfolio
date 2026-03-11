export const siteConfig = {
    name: "Converge Digitals AI Lab",
    title: "AI Solutions, Automation & SaaS Engineering | Converge Digitals",
    description:
        "Custom AI solutions, workflow automation, internal systems, and SaaS engineering for modern teams.",
    url: "https://ai.convergedigitals.com",
    keywords: [
        "AI solutions",
        "workflow automation",
        "custom SaaS",
        "AI engineering",
        "machine learning",
        "RAG systems",
        "Converge Digitals",
    ],
};

export function getCanonicalUrl(path = "/") {
    return new URL(path, siteConfig.url).toString();
}

export function buildPageMetadata({
    title,
    description = siteConfig.description,
    path = "/",
    type = "website",
}) {
    return {
        title,
        description,
        alternates: {
            canonical: path,
        },
        openGraph: {
            title,
            description,
            url: getCanonicalUrl(path),
            siteName: siteConfig.name,
            locale: "en_US",
            type,
        },
        twitter: {
            card: "summary",
            title,
            description,
        },
    };
}
