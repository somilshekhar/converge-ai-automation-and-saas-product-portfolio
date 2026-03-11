import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
    title: "Process | Converge Digitals AI Lab",
    description: "A disciplined, iterative process from discovery to deployment.",
    path: "/process",
});

export default function ProcessLayout({ children }) {
    return children;
}
