import { projects } from "@/lib/data";
import { getCanonicalUrl } from "@/lib/seo";

const staticRoutes = [
    { path: "/", changeFrequency: "weekly", priority: 1 },
    { path: "/services", changeFrequency: "weekly", priority: 0.9 },
    { path: "/projects", changeFrequency: "weekly", priority: 0.9 },
    { path: "/about", changeFrequency: "monthly", priority: 0.7 },
    { path: "/process", changeFrequency: "monthly", priority: 0.7 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
];

export default function sitemap() {
    const lastModified = new Date();

    return [
        ...staticRoutes.map(({ path, changeFrequency, priority }) => ({
            url: getCanonicalUrl(path),
            lastModified,
            changeFrequency,
            priority,
        })),
        ...projects.map((project) => ({
            url: getCanonicalUrl(`/projects/${project.slug}`),
            lastModified,
            changeFrequency: "monthly",
            priority: 0.8,
        })),
    ];
}
