import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimationProvider from "@/components/AnimationProvider";
import CustomCursor from "@/components/CustomCursor";
import { buildPageMetadata, siteConfig } from "@/lib/seo";

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  keywords: siteConfig.keywords,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  ...buildPageMetadata({
    title: siteConfig.title,
    description: siteConfig.description,
    path: "/",
  }),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CustomCursor />
        <Navbar />
        <AnimationProvider>
          <main>{children}</main>
        </AnimationProvider>
        <Footer />
      </body>
    </html>
  );
}
