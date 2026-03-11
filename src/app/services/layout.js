import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
    title: "Services | Converge Digitals AI Lab",
    description: "AI Solutions, Workflow Automation, Custom SaaS Tools, and Internal Systems engineering.",
    path: "/services",
});

export default function ServicesLayout({ children }) {
    return children;
}
